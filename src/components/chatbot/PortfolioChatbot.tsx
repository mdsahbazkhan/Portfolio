"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";
import { ChatWindow } from "./ChatWindow";
import type { Message } from "./types";

const initialMessage: Message = {
  id: "welcome",
  role: "assistant",
  content: "Hi! I'm Sahbaz's AI assistant. Ask me about his projects, skills, experience, or technical background.",
};

export default function PortfolioChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [isLoading, setIsLoading] = useState(false);
  const requestPending = useRef(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  const close = useCallback(() => {
    setOpen(false);
    requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  const sendMessage = useCallback(async (content: string) => {
    const message = content.trim();
    if (!message || requestPending.current) return;
    const history = messages.slice(1).map(({ role, content: text }) => ({ role, content: text }));
    requestPending.current = true;
    setMessages((current) => [...current, { id: crypto.randomUUID(), role: "user", content: message }]);
    setIsLoading(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, history }),
      });
      const result = await response.json() as { answer?: string; sources?: string[]; error?: string };
      if (!response.ok || !result.answer) throw new Error(result.error || "Sorry, I'm unable to answer right now. Please try again.");
      setMessages((current) => [...current, { id: crypto.randomUUID(), role: "assistant", content: result.answer!, sources: result.sources }]);
    } catch (error) {
      const content = error instanceof Error ? error.message : "Sorry, I'm unable to answer right now. Please try again.";
      setMessages((current) => [...current, { id: crypto.randomUUID(), role: "assistant", content }]);
    } finally {
      requestPending.current = false;
      setIsLoading(false);
    }
  }, [messages]);

  return (
    <>
      <ChatWindow open={open} onClose={close} messages={messages} onSend={sendMessage} isLoading={isLoading} />
      <motion.button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? "Close AI portfolio assistant" : "Open AI portfolio assistant"}
        aria-expanded={open}
        aria-haspopup="dialog"
        whileHover={reduceMotion ? undefined : { y: -2 }}
        whileTap={reduceMotion ? undefined : { scale: 0.98 }}
        className="fixed bottom-[calc(env(safe-area-inset-bottom)+1rem)] right-4 z-[101] inline-flex h-12 w-12 items-center justify-center rounded-full border border-teal-100/30 bg-[#101716] text-teal-100 shadow-[0_0_24px_rgba(143,216,200,.12)] transition-colors hover:border-teal-100/60 hover:bg-[#15201d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-100 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090b0d] sm:bottom-6 sm:right-6 sm:h-12 sm:w-auto sm:gap-2 sm:rounded-sm sm:px-4"
      >
        <span className="sm:hidden" aria-hidden="true"><Sparkles size={19} /></span>
        <span className="hidden sm:inline" aria-hidden="true"><MessageCircle size={16} /></span>
        <span className="hidden text-sm font-medium text-stone-100 sm:inline">Ask Sahbaz</span>
      </motion.button>
    </>
  );
}
