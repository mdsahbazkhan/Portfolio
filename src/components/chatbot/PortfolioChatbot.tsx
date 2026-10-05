"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MessageCircle, Sparkles, Volume2, VolumeX, X } from "lucide-react";
import { ChatWindow } from "./ChatWindow";
import type { Message } from "./types";

const initialMessage: Message = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi! I'm Sahbaz's AI assistant. Ask me about his projects, skills, experience, or technical background.",
};

const teaserSessionKey = "portfolio-assistant-teaser-seen-v3";
const soundPreferenceKey = "portfolio-assistant-sound-muted";
const teaserQuestions = ["Who is Sahbaz?", "What has Sahbaz built?"];

export default function PortfolioChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [isLoading, setIsLoading] = useState(false);
  const [teaserVisible, setTeaserVisible] = useState(false);
  const [soundMuted, setSoundMuted] = useState(false);
  const requestPending = useRef(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const soundPlayedRef = useRef(false);
  const reduceMotion = useReducedMotion();

  const playTeaserSound = useCallback(() => {
    if (soundMuted || soundPlayedRef.current) return;
    const audio = audioRef.current;
    if (!audio) return;
    try {
      audio.currentTime = 0;
      const playback = audio.play();
      if (playback) {
        void playback
          .then(() => {
            soundPlayedRef.current = true;
          })
          .catch(() => undefined);
      } else {
        soundPlayedRef.current = true;
      }
    } catch {
      // A blocked or unavailable sound must not interrupt opening the assistant.
    }
  }, [soundMuted]);

  useEffect(() => {
    const audio = new Audio("/sound/chatbot-notification.wav");
    audio.preload = "auto";
    audioRef.current = audio;
    try {
      setSoundMuted(window.localStorage.getItem(soundPreferenceKey) === "true");
    } catch {
      // Use the default unmuted state if browser storage is unavailable.
    }
    let timer: number | undefined;
    try {
      if (!window.sessionStorage.getItem(teaserSessionKey)) {
        timer = window.setTimeout(() => {
          try {
            window.sessionStorage.setItem(teaserSessionKey, "1");
          } catch {
            // Keep the teaser usable when storage is unavailable.
          }
          setTeaserVisible(true);
          playTeaserSound();
        }, 2500);
      }
    } catch {
      // Storage may be disabled; still show the invitation once for this mount.
      timer = window.setTimeout(() => {
        setTeaserVisible(true);
        playTeaserSound();
      }, 2500);
    }
    return () => {
      if (timer !== undefined) window.clearTimeout(timer);
      audio.pause();
      audioRef.current = null;
    };
  }, [playTeaserSound]);

  const dismissTeaser = useCallback(() => setTeaserVisible(false), []);
  const toggleSoundMuted = useCallback(() => {
    setSoundMuted((muted) => {
      const nextMuted = !muted;
      try {
        window.localStorage.setItem(soundPreferenceKey, String(nextMuted));
      } catch {
        // Keep the current-page preference if browser storage is unavailable.
      }
      return nextMuted;
    });
  }, []);

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

  const sendMessage = useCallback(
    async (content: string, isRetry = false) => {
      const message = content.trim();
      if (!message || requestPending.current) return;
      const history = messages
        .slice(1)
        .filter((entry) => !entry.isError)
        .map(({ role, content: text }) => ({ role, content: text }));
      if (
        isRetry &&
        history.at(-1)?.role === "user" &&
        history.at(-1)?.content === message
      )
        history.pop();
      requestPending.current = true;
      setMessages((current) => {
        const withoutError = current.filter(
          (entry) => !(entry.isError && entry.retryContent === message),
        );
        return isRetry
          ? withoutError
          : [
              ...withoutError,
              { id: crypto.randomUUID(), role: "user", content: message },
            ];
      });
      setIsLoading(true);
      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message, history }),
        });
        const contentType = response.headers.get("content-type") ?? "";
        if (!contentType.includes("application/json")) {
          throw new Error(
            "The assistant is temporarily unavailable. Please try again.",
          );
        }
        let result: { answer?: string; sources?: string[]; error?: string };
        try {
          result = (await response.json()) as typeof result;
        } catch {
          throw new Error(
            "The assistant returned an unreadable response. Please try again.",
          );
        }
        if (!response.ok || !result.answer)
          throw new Error(
            result.error ||
              "Sorry, I'm unable to answer right now. Please try again.",
          );
        setMessages((current) => [
          ...current,
          {
            id: crypto.randomUUID(),
            role: "assistant",
            content: result.answer!,
            sources: result.sources,
          },
        ]);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "";
        const isNetworkError = /failed to fetch|networkerror|load failed/i.test(
          errorMessage,
        );
        const content =
          !errorMessage || isNetworkError
            ? "I couldn't connect to the assistant. Check your connection and try again."
            : errorMessage;
        setMessages((current) => [
          ...current,
          {
            id: crypto.randomUUID(),
            role: "assistant",
            content,
            isError: true,
            retryContent: message,
          },
        ]);
      } finally {
        requestPending.current = false;
        setIsLoading(false);
      }
    },
    [messages],
  );
  const retryMessage = useCallback(
    (message: string) => {
      void sendMessage(message, true);
    },
    [sendMessage],
  );
  const askSuggestedQuestion = useCallback(
    (question: string) => {
      playTeaserSound();
      setTeaserVisible(false);
      setOpen(true);
      void sendMessage(question);
    },
    [playTeaserSound, sendMessage],
  );

  return (
    <>
      <ChatWindow
        open={open}
        onClose={close}
        messages={messages}
        onSend={sendMessage}
        onRetry={retryMessage}
        isLoading={isLoading}
      />
      <AnimatePresence>
        {teaserVisible && !open && (
          <motion.aside
            aria-label="AI assistant suggestions"
            aria-live="polite"
            initial={reduceMotion ? false : { opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={
              reduceMotion ? { opacity: 0 } : { opacity: 0, y: 5, scale: 0.98 }
            }
            transition={{
              duration: reduceMotion ? 0.01 : 0.22,
              ease: "easeOut",
            }}
            className="fixed bottom-[calc(env(safe-area-inset-bottom)+4.65rem)] right-4 z-[101] w-[min(19rem,calc(100vw-2rem))] rounded-sm border border-teal-100/20 bg-[#101716] p-3 shadow-[0_12px_40px_rgba(0,0,0,.45)] sm:bottom-[5.25rem] sm:right-6"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex min-w-0 items-center gap-2">
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center border border-teal-100/20 bg-teal-100/[.06] text-teal-100"
                  aria-hidden="true"
                >
                  <Sparkles size={14} />
                </span>
                <p className="text-sm font-medium text-stone-100">
                  ✨ Curious about Sahbaz?
                </p>
              </div>
              <div className="-mr-1 -mt-1 flex shrink-0 items-center">
                <button
                  type="button"
                  onClick={toggleSoundMuted}
                  aria-label={soundMuted ? "Unmute assistant sound" : "Mute assistant sound"}
                  aria-pressed={soundMuted}
                  className="rounded-sm p-1.5 text-stone-500 transition-colors hover:bg-white/5 hover:text-stone-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-100"
                >
                  {soundMuted ? <VolumeX size={14} aria-hidden="true" /> : <Volume2 size={14} aria-hidden="true" />}
                </button>
                <button
                  type="button"
                  onClick={dismissTeaser}
                  aria-label="Dismiss AI assistant suggestions"
                  className="rounded-sm p-1.5 text-stone-500 transition-colors hover:bg-white/5 hover:text-stone-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-100"
                >
                  <X size={14} aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="mt-2.5 flex flex-col items-start gap-1.5 pl-9">
              {teaserQuestions.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => askSuggestedQuestion(question)}
                  className="text-left text-xs text-teal-100/90 underline decoration-teal-100/25 underline-offset-4 transition-colors hover:text-teal-50 hover:decoration-teal-100/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-100"
                >
                  {question}
                </button>
              ))}
            </div>
            <span
              className="absolute -bottom-1.5 right-5 h-3 w-3 rotate-45 border-b border-r border-teal-100/20 bg-[#101716] sm:right-6"
              aria-hidden="true"
            />
          </motion.aside>
        )}
      </AnimatePresence>
      <motion.button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-label={
          open ? "Close AI portfolio assistant" : "Open AI portfolio assistant"
        }
        aria-expanded={open}
        aria-haspopup="dialog"
        whileHover={reduceMotion ? undefined : { y: -2 }}
        whileTap={reduceMotion ? undefined : { scale: 0.98 }}
        className="fixed bottom-[calc(env(safe-area-inset-bottom)+1rem)] right-4 z-[101] inline-flex h-12 w-12 items-center justify-center rounded-full border border-teal-100/30 bg-[#101716] text-teal-100 shadow-[0_0_24px_rgba(143,216,200,.12)] transition-colors hover:border-teal-100/60 hover:bg-[#15201d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-100 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090b0d] sm:bottom-6 sm:right-6 sm:h-12 sm:w-auto sm:gap-2 sm:rounded-sm sm:px-4"
      >
        <span className="sm:hidden" aria-hidden="true">
          <Sparkles size={19} />
        </span>
        <span className="hidden sm:inline" aria-hidden="true">
          <MessageCircle size={16} />
        </span>
        <span className="hidden text-sm font-medium text-stone-100 sm:inline">
          Ask Sahbaz
        </span>
      </motion.button>
    </>
  );
}
