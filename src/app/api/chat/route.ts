import { NextResponse } from "next/server";
import { buildSystemPrompt } from "@/lib/portfolio-chat/prompt";
import { retrieveKnowledge } from "@/lib/portfolio-chat/knowledge";
import { generateAnswer } from "@/lib/portfolio-chat/provider";
import { OUT_OF_SCOPE_ANSWER, UNKNOWN_ANSWER, type ChatTurn } from "@/lib/portfolio-chat/types";

export const runtime = "nodejs";
export const maxDuration = 45;

export async function GET() {
  return NextResponse.json({ status: "ok" });
}

const OUT_OF_SCOPE_PATTERN = /\b(weather|forecast|tell (?:me )?a joke|make me laugh|write (?:me )?(?:a|an) (?:python|javascript|typescript|program)|prime minister|president of|world politics|political news|solve (?:this )?(?:math|equation)|recipe for|stock price|bitcoin price)\b/i;
const PORTFOLIO_TERMS = /\b(sahbaz|portfolio|velquix|collabtasky|bazario|teachopia|kognito(?: kube)?|internship|intern|experience|education|degree|career|skills?|tech stack|technolog(?:y|ies)|project|github|linkedin|contact|email|phone|rag|retrieval augmented generation|aws|docker|react|next\.js|node(?:\.js)?|python|fastapi|langchain|langgraph|mongodb|postgres(?:ql)?|redis|frontend|backend|generative ai|full[- ]stack|what does he|what did he|what is his|where did he|who is he|his work|his role)\b/i;

function normalizeHistory(value: unknown): ChatTurn[] {
  if (!Array.isArray(value)) return [];
  return value.slice(-6).flatMap((turn): ChatTurn[] => {
    if (!turn || typeof turn !== "object") return [];
    const item = turn as { role?: unknown; content?: unknown };
    if ((item.role !== "user" && item.role !== "assistant") || typeof item.content !== "string") return [];
    const content = item.content.trim().slice(0, 2000);
    return content ? [{ role: item.role, content }] : [];
  });
}

export async function POST(request: Request) {
  let body: unknown;
  try { body = await request.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }
  if (!body || typeof body !== "object") return NextResponse.json({ error: "Invalid request." }, { status: 400 });

  const data = body as { message?: unknown; history?: unknown };
  if (typeof data.message !== "string" || !data.message.trim() || data.message.length > 1000) {
    return NextResponse.json({ error: "Please enter a message under 1,000 characters." }, { status: 400 });
  }
  const message = data.message.trim();
  const history = normalizeHistory(data.history);
  if (OUT_OF_SCOPE_PATTERN.test(message) || (!PORTFOLIO_TERMS.test(message) && history.length === 0)) {
    return NextResponse.json({ answer: OUT_OF_SCOPE_ANSWER, sources: [] });
  }

  try {
    const recentUserQuestion = [...history].reverse().find((turn) => turn.role === "user")?.content;
    const retrievalQuestion = recentUserQuestion ? `${recentUserQuestion}\n${message}` : message;
    let chunks;
    try {
      chunks = await retrieveKnowledge(retrievalQuestion);
    } catch (error) {
      console.error("Portfolio knowledge retrieval failed:", error);
      return NextResponse.json({ error: "Sorry, I couldn't retrieve the portfolio information right now. Please try again." }, { status: 503 });
    }
    if (!chunks.length) return NextResponse.json({ answer: UNKNOWN_ANSWER, sources: [] });
    try {
      const answer = await generateAnswer(buildSystemPrompt(chunks), history, message);
      return NextResponse.json({ answer, sources: [...new Set(chunks.map((chunk) => chunk.source))] });
    } catch (error) {
      console.error("Portfolio answer generation failed:", error);
      return NextResponse.json({ error: "Sorry, I'm unable to answer right now. Please try again." }, { status: 503 });
    }
  } catch (error) {
    console.error("Portfolio chat request failed:", error);
    return NextResponse.json({ error: "Sorry, I'm unable to answer right now. Please try again." }, { status: 503 });
  }
}
