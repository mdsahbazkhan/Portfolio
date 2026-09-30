"use client";

import { useState, useEffect, type ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const TYPING_TEXTS = [
  "Full Stack Developer",
  "Generative AI Engineer",
  "Building AI-Powered Applications",
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-1/2 left-1/4 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <Container className="pb-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="text-sm font-medium text-cyan-300 mb-4 inline-flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              Open to Full Stack & AI Engineering Roles
            </motion.p>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Md Sahbaz Alam
            </motion.h1>

            <motion.div
              className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 min-h-[2.5rem]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <TypingAnimation texts={TYPING_TEXTS} />
            </motion.div>

            <motion.p
              className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl lg:max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              I build scalable web applications and AI-powered systems using
              React, Next.js, Node.js, FastAPI, LangChain, and RAG — turning
              ideas into production-ready software.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  const el = document.getElementById("projects");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <ButtonLink
                variant="outline"
                size="lg"
                href={siteConfig.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
                <Download className="ml-2 h-5 w-5" />
              </ButtonLink>
            </motion.div>

            <motion.div
              className="flex gap-6 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <SocialLink
                href={siteConfig.github}
                label="GitHub"
                icon={
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 0C5.373 0 0 5.373 0 12.021c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.286-.01-1.186-.016-2.146-3.338.726-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.469-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.807c1.018.005 2.035.134 3.006.402 2.289-1.551 3.295-1.23 3.295-1.23.653 1.653.242 2.873.12 3.176.768.84 1.233 1.91 1.233 3.22 0 4.61-2.81 5.624-5.485 5.92.429.371.81 1.101.81 2.221 0 1.606-.014 2.896-.014 3.288 0 .321.217.696.826.577C20.565 22.092 24 17.592 24 12.021 24 5.373 18.627 0 12 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
              />
              <SocialLink
                href={siteConfig.linkedin}
                label="LinkedIn"
                icon={
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.552v-5.569c0-1.328-.025-3.037-1.824-3.037-1.827 0-2.103 1.442-2.103 2.93v5.676h-3.552V9h3.413v1.561h.046c.475-.9 1.637-1.85 3.368-1.85 3.602 0 4.263 2.37 4.263 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zm1.782 13.018h-3.552V9h3.552v11.451zM22.225 0H1.771C.792 0 0 .774 0 1.726v20.548C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.274V1.726C24 .774 23.2 0 22.225 0z" />
                  </svg>
                }
              />
              <SocialLink
                href={siteConfig.leetcode}
                label="LeetCode"
                icon={
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                  </svg>
                }
              />
            </motion.div>
          </motion.div>

          {/* Right: Profile Image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <Image
                src={siteConfig.profileImage}
                alt={`${siteConfig.name} profile photo`}
                fill
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                className="object-cover rounded-full"
                priority
                style={{ objectPosition: "center top" }}
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-xl bg-gray-800/50 text-gray-300 hover:text-white hover:bg-cyan-500/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-950"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

function TypingAnimation({ texts }: { texts: string[] }) {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const TYPING_SPEED = 80;
    const DELETING_SPEED = 40;
    const PAUSE_DURATION = 2000;

    const timer = setTimeout(
      () => {
        const currentText = texts[textIndex];

        if (!isDeleting && charIndex < currentText.length) {
          setDisplayedText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else if (!isDeleting && charIndex === currentText.length) {
          setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
        } else if (isDeleting && charIndex > 0) {
          setDisplayedText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else if (isDeleting && charIndex === 0) {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      },
      isDeleting ? DELETING_SPEED : TYPING_SPEED,
    );

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <span className="text-cyan-400">
      {displayedText}
      <span
        className={cn(
          "inline-block w-0.5 h-6 sm:h-7 bg-cyan-400 ml-1",
          "animate-bounce",
        )}
      />
    </span>
  );
}
