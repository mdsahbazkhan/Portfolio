export type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  sources?: string[];
  isError?: boolean;
  retryContent?: string;
};
