import path from "node:path";

export const EMBEDDING_MODEL = "Xenova/all-MiniLM-L6-v2";

let extractorPromise;

async function getExtractor() {
  if (!extractorPromise) {
    extractorPromise = (async () => {
      const { env, pipeline } = await import("@huggingface/transformers");
      // The index command and the Next.js API share the same on-disk model cache.
      env.cacheDir = path.resolve(process.cwd(), ".cache/transformers");
      env.allowRemoteModels = true;
      return pipeline("feature-extraction", EMBEDDING_MODEL, { dtype: "q8" });
    })().catch((error) => {
      extractorPromise = undefined;
      throw error;
    });
  }
  return extractorPromise;
}

export async function embedTexts(texts) {
  if (!texts.length) return [];
  const extractor = await getExtractor();
  const output = await extractor(texts, { pooling: "mean", normalize: true });
  return output.tolist();
}
