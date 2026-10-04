"use client";

import { useState, type FormEvent, type KeyboardEvent } from "react";
import { ArrowUp } from "lucide-react";

export function ChatInput({
  onSend,
  disabled = false,
}: {
  onSend: (message: string) => void;
  disabled?: boolean;
}) {
  const [value, setValue] = useState("");

  function submit(event?: FormEvent) {
    event?.preventDefault();
    const message = value.trim();
    if (!message) return;
    onSend(message);
    setValue("");
  }

  function onKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      submit();
    }
  }

  return (
    <form
      onSubmit={submit}
      className="flex items-end gap-2 border-t border-white/10 p-3"
    >
      <label className="sr-only" htmlFor="portfolio-chat-input">
        Ask something
      </label>
      <textarea
        id="portfolio-chat-input"
        aria-label="Ask something"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={onKeyDown}
        placeholder="Ask something..."
        rows={1}
        className="max-h-24 min-h-10 flex-1 resize-y rounded-sm border border-white/10 bg-black/20 px-3 py-2.5 text-sm leading-5 text-stone-100 placeholder:text-stone-500 focus:border-teal-100/50 focus:outline-none focus:ring-2 focus:ring-teal-100/20"
      />
      <button
        type="submit"
        disabled={!value.trim() || disabled}
        aria-label="Send message"
        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-teal-100/25 text-teal-100 transition-colors hover:bg-teal-100/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-100 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ArrowUp aria-hidden="true" size={17} />
      </button>
    </form>
  );
}
