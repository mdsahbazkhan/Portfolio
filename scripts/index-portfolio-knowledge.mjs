import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import nextEnv from "@next/env";
import { EMBEDDING_MODEL, embedTexts } from "../src/lib/portfolio-chat/local-embeddings.mjs";

nextEnv.loadEnvConfig(process.cwd());

const root = path.resolve("src/data/ai");
const output = path.join(root, "knowledge-index.json");
const targetChars = 1400;
const overlapChars = 180;

async function markdownFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return markdownFiles(fullPath);
    return entry.isFile() && entry.name.endsWith(".md") ? [fullPath] : [];
  }));
  return nested.flat().sort();
}

function splitDocument(markdown, source, type) {
  const sections = [];
  let heading = "Overview";
  let body = [];
  for (const line of markdown.split(/\r?\n/)) {
    const match = line.match(/^#{1,6}\s+(.+)$/);
    if (match) {
      if (body.join("\n").trim()) sections.push({ heading, text: body.join("\n").trim() });
      heading = match[1].trim();
      body = [];
    } else body.push(line);
  }
  if (body.join("\n").trim()) sections.push({ heading, text: body.join("\n").trim() });

  const chunks = [];
  for (const section of sections) {
    const paragraphs = section.text.split(/\n\s*\n/).map((part) => part.trim()).filter(Boolean);
    let current = `## ${section.heading}\n\n`;
    for (const paragraph of paragraphs) {
      const next = `${current}\n${paragraph}`.trim();
      if (next.length > targetChars && current.length > section.heading.length + 12) {
        chunks.push({ content: current.trim(), source, section: section.heading, type });
        current = `## ${section.heading}\n\n${current.slice(-overlapChars).trim()}\n\n${paragraph}`;
      } else current = `${next}\n\n`;
      while (current.length > targetChars * 1.35) {
        const cut = current.lastIndexOf(" ", targetChars);
        const splitAt = cut > 0 ? cut : targetChars;
        chunks.push({ content: current.slice(0, splitAt).trim(), source, section: section.heading, type });
        current = `## ${section.heading}\n\n${current.slice(Math.max(0, splitAt - overlapChars)).trim()}`;
      }
    }
    if (current.trim().length > section.heading.length + 12) chunks.push({ content: current.trim(), source, section: section.heading, type });
  }
  return chunks;
}

async function main() {
  const files = await markdownFiles(root);
  const chunks = [];
  for (const file of files) {
    const relative = path.relative(root, file).split(path.sep).join("/");
    const type = relative.startsWith("projects/") ? "project" : path.basename(relative, ".md");
    chunks.push(...splitDocument(await readFile(file, "utf8"), relative, type));
  }
  if (!chunks.length) throw new Error("No Markdown knowledge files found in src/data/ai");

  const batchSize = 8;
  for (let start = 0; start < chunks.length; start += batchSize) {
    const batch = chunks.slice(start, start + batchSize);
    const vectors = await embedTexts(batch.map((chunk) => chunk.content));
    batch.forEach((chunk, index) => { chunk.embedding = vectors[index]; });
    console.log(`Embedded ${Math.min(start + batch.length, chunks.length)}/${chunks.length} chunks`);
  }
  await writeFile(output, `${JSON.stringify(chunks)}\n`, "utf8");
  console.log(`Wrote ${chunks.length} chunks from ${files.length} Markdown files using ${EMBEDDING_MODEL} to ${path.relative(process.cwd(), output)}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
