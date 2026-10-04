import type { Message } from "./types";

export function ChatMessage({ message }: { message: Message }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}>
      <p
        className={`max-w-[88%] whitespace-pre-wrap break-words rounded-sm px-3 py-2 text-sm leading-relaxed ${
          isUser
            ? "border border-teal-100/20 bg-teal-100/[.08] text-teal-50"
            : "border border-white/[.07] bg-white/[.035] text-stone-200"
        }`}
      >
        {message.content}
      </p>
      {!isUser && message.sources && message.sources.length > 0 && (
        <span className="mt-1 block max-w-[88%] font-mono text-[9px] text-stone-500">
          Based on: {message.sources.map((source) => source.replace(/^projects\//, "").replace(/\.md$/, "")).join(", ")}
        </span>
      )}
    </div>
  );
}
