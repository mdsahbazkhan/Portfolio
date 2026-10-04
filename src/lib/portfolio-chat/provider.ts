/** Server-only Groq chat provider. Keep credentials out of client bundles. */
const GROQ_API_URL = "https://api.groq.com/openai/v1";

function groqApiKey() {
  const key = process.env.GROQ_API_KEY;
  if (!key) throw new Error("GROQ_API_KEY is not configured");
  return key;
}

export async function generateAnswer(system: string, history: { role: "user" | "assistant"; content: string }[], userMessage: string) {
  const response = await fetch(`${GROQ_API_URL}/chat/completions`, {
    method: "POST",
    headers: { Authorization: `Bearer ${groqApiKey()}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: process.env.GROQ_CHAT_MODEL || "qwen/qwen3.8-27b",
      temperature: 0.1,
      max_tokens: 450,
      messages: [
        { role: "system", content: system },
        ...history,
        { role: "user", content: userMessage },
      ],
    }),
    signal: AbortSignal.timeout(30_000),
  });
  if (!response.ok) throw new Error(`Chat provider returned ${response.status}`);
  const payload = (await response.json()) as { choices?: { message?: { content?: string } }[] };
  const answer = payload.choices?.[0]?.message?.content?.trim();
  if (!answer) throw new Error("Empty chat completion");
  return answer;
}
