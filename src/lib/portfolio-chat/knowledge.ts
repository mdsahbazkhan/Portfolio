import "server-only";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { embedTexts } from "./local-embeddings.mjs";
import type { KnowledgeChunk, RetrievedChunk } from "./types";

let cachedIndex: Promise<KnowledgeChunk[]> | undefined;

function loadIndex() {
  if (!cachedIndex) {
    const indexPath = path.join(process.cwd(), "src/data/ai/knowledge-index.json");
    cachedIndex = readFile(indexPath, "utf8").then((raw) => {
      const index = JSON.parse(raw) as KnowledgeChunk[];
      if (!Array.isArray(index) || index.length === 0 || index.some((item) => !item.content || !Array.isArray(item.embedding))) {
        throw new Error("Portfolio knowledge index is invalid");
      }
      return index;
    }).catch((error) => {
      cachedIndex = undefined;
      throw error;
    });
  }
  return cachedIndex;
}

function cosineSimilarity(left: number[], right: number[]) {
  if (left.length !== right.length) return 0;
  let dot = 0, leftNorm = 0, rightNorm = 0;
  for (let i = 0; i < left.length; i += 1) {
    dot += left[i] * right[i];
    leftNorm += left[i] * left[i];
    rightNorm += right[i] * right[i];
  }
  return leftNorm && rightNorm ? dot / (Math.sqrt(leftNorm) * Math.sqrt(rightNorm)) : 0;
}

const stopWords = new Set([
  "a", "an", "and", "are", "about", "does", "for", "from", "his", "how", "in", "is", "it",
  "me", "of", "on", "or", "sahbaz", "tell", "the", "to", "was", "what", "when", "where", "which", "who", "why",
]);

function queryTerms(value: string) {
  return [...new Set(value.toLowerCase().match(/[a-z0-9+#]+/g) ?? [])]
    .map((term) => term.length > 4 && term.endsWith("s") ? term.slice(0, -1) : term)
    .filter((term) => term.length > 1 && !stopWords.has(term));
}

function lexicalCoverage(questionTerms: string[], content: string) {
  if (!questionTerms.length) return 0;
  const documentTerms = new Set(queryTerms(content));
  return questionTerms.filter((term) => documentTerms.has(term)).length / questionTerms.length;
}

export async function retrieveKnowledge(question: string): Promise<RetrievedChunk[]> {
  const index = await loadIndex();
  const [queryVector] = await embedTexts([question]);
  const terms = queryTerms(question);
  return index
    .map(({ embedding, ...chunk }) => {
      const semantic = cosineSimilarity(queryVector, embedding);
      const lexical = lexicalCoverage(terms, `${chunk.source}\n${chunk.section}\n${chunk.content}`);
      const sourceTerms = queryTerms(chunk.source);
      const sourceMatch = terms.some((term) => sourceTerms.includes(term)) ? 1 : 0;
      // Semantic similarity handles paraphrases; term overlap favors exact details such as links and technologies.
      return { ...chunk, score: semantic * 0.5 + lexical * 0.3 + sourceMatch * 0.2 };
    })
    .sort((a, b) => b.score - a.score)
    .filter((chunk) => chunk.score >= 0.28)
    .slice(0, 5);
}
