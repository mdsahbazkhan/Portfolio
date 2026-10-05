import type { Message } from "./types";
import { Bot } from "lucide-react";

function formatAnswer(content: string) {
  return content.split(/\n\s*\n/).map((paragraph, index) => {
    const lines = paragraph.split("\n").filter(Boolean);
    const isList =
      lines.length > 1 &&
      lines.every((line) => /^\s*(?:[-*•]|\d+\.)\s+/.test(line));
    if (isList) {
      return (
        <ul
          key={index}
          className="my-2 list-disc space-y-1 pl-5 marker:text-teal-200/70 first:mt-0 last:mb-0"
        >
          {lines.map((line, itemIndex) => (
            <li key={itemIndex}>
              {line.replace(/^\s*(?:[-*•]|\d+\.)\s+/, "")}
            </li>
          ))}
        </ul>
      );
    }
    return (
      <p key={index} className="my-2 first:mt-0 last:mb-0">
        {lines.map((line, lineIndex) => (
          <span key={lineIndex}>
            {lineIndex > 0 && <br />}
            {line}
          </span>
        ))}
      </p>
    );
  });
}

export function ChatMessage({
  message,
  onRetry,
}: {
  message: Message;
  onRetry?: () => void;
}) {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex items-start gap-2 ${isUser ? "justify-end" : "justify-start"}`}
      role={message.isError ? "alert" : undefined}
    >
      {!isUser && (
        <span
          className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-teal-100/15 bg-teal-100/[.06] text-teal-100/80"
          aria-hidden="true"
        >
          <Bot size={13} />
        </span>
      )}
      <div
        className={`flex min-w-0 max-w-[88%] flex-col ${isUser ? "items-end" : "items-start"}`}
      >
        <div
          className={`break-words rounded-sm px-3 py-2.5 text-[13px] leading-[1.7] ${
            isUser
              ? "border border-teal-100/20 bg-teal-100/[.08] text-teal-50"
              : message.isError
                ? "border border-amber-200/20 bg-amber-100/[.04] text-stone-200"
                : "border border-white/[.07] bg-white/[.035] text-stone-200"
          }`}
        >
          {isUser ? message.content : formatAnswer(message.content)}
        </div>
        {message.isError && message.retryContent && onRetry && (
          <button
            type="button"
            onClick={onRetry}
            className="mt-1 rounded-sm px-2 py-1 text-xs text-teal-100 underline decoration-teal-100/30 underline-offset-2 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-100"
          >
            Try again
          </button>
        )}
      </div>
      {isUser && <span className="mt-1 h-6 w-6 shrink-0" aria-hidden="true" />}
    </div>
  );
}
