"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { MessageCircle, X } from "lucide-react";
import { ChatInput } from "./ChatInput";
import { ChatMessage } from "./ChatMessage";
import type { Message } from "./types";

const suggestions = [
  "What is Velquix?",
  "What is Sahbaz's tech stack?",
  "Tell me about CollabTasky.",
  "What did Sahbaz work on during his internship?",
];

export function ChatWindow({
  open,
  onClose,
  messages,
  onSend,
  isLoading,
}: {
  open: boolean;
  onClose: () => void;
  messages: Message[];
  onSend: (message: string) => void;
  isLoading: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  }, [messages, isLoading, reduceMotion]);
  return (
    <AnimatePresence>
      {open && (
        <motion.section
          role="dialog"
          aria-modal="false"
          aria-labelledby="portfolio-chat-title"
          initial={reduceMotion ? false : { opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: 8, scale: 0.985 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="fixed inset-x-3 bottom-[calc(env(safe-area-inset-bottom)+5.25rem)] z-[100] flex max-h-[min(70dvh,38rem)] flex-col overflow-hidden rounded-sm border border-white/15 bg-[#0c1011] shadow-[0_18px_60px_rgba(0,0,0,.55)] sm:inset-x-auto sm:bottom-24 sm:right-6 sm:w-[min(26rem,calc(100vw-3rem))]"
        >
          <header className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center border border-teal-100/20 bg-teal-100/[.06] text-teal-100" aria-hidden="true">
                <MessageCircle size={17} />
              </span>
              <div>
                <h2 id="portfolio-chat-title" className="text-sm font-medium tracking-tight text-stone-100">Ask Sahbaz</h2>
                <p className="mt-0.5 font-mono text-[10px] tracking-wide text-stone-500">AI Portfolio Assistant</p>
              </div>
            </div>
            <button type="button" onClick={onClose} aria-label="Close AI portfolio assistant" className="rounded-sm p-2 text-stone-400 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-100">
              <X size={17} aria-hidden="true" />
            </button>
          </header>

          <div className="min-h-0 flex-1 space-y-3 overflow-y-auto overscroll-contain p-4" aria-live="polite">
            <ChatMessage message={messages[0]} />
            {messages.slice(1).map((message) => <ChatMessage key={message.id} message={message} />)}
            {messages.length === 1 && (
              <div className="pt-2">
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[.16em] text-stone-500">Suggested questions</p>
                <div className="flex flex-col items-start gap-2">
                  {suggestions.map((question) => (
                    <button key={question} type="button" disabled={isLoading} onClick={() => onSend(question)} className="max-w-full rounded-sm border border-white/10 px-2.5 py-1.5 text-left text-xs text-stone-300 transition-colors hover:border-teal-100/30 hover:text-teal-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-100 disabled:opacity-50">
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {isLoading && (
              <div role="status" className="flex items-center gap-2 text-xs text-stone-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal-100" />
                Searching Sahbaz&apos;s portfolio...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <ChatInput onSend={onSend} disabled={isLoading} />
        </motion.section>
      )}
    </AnimatePresence>
  );
}
