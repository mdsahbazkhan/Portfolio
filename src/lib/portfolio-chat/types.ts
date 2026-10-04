export type KnowledgeChunk = {
  content: string;
  source: string;
  section: string;
  type: string;
  embedding: number[];
};

export type ChatTurn = { role: "user" | "assistant"; content: string };
export type RetrievedChunk = Omit<KnowledgeChunk, "embedding"> & { score: number };

export const UNKNOWN_ANSWER = "I don't have that information documented in Sahbaz's portfolio.";
export const OUT_OF_SCOPE_ANSWER = "I'm Sahbaz's portfolio assistant, so I can help with questions about Sahbaz, his projects, skills, experience, education, and technical work.";
