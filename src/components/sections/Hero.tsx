"use client";

import { useState, useEffect, type ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Code } from "lucide-react";
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
              <SocialLink href={siteConfig.github} label="GitHub" icon={<Github className="h-5 w-5" />} />
              <SocialLink href={siteConfig.linkedin} label="LinkedIn" icon={<Linkedin className="h-5 w-5" />} />
              <SocialLink href={siteConfig.leetcode} label="LeetCode" icon={<Code className="h-5 w-5" />} />
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

    const timer = setTimeout(() => {
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
    }, isDeleting ? DELETING_SPEED : TYPING_SPEED);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <span className="text-cyan-400">
      {displayedText}
      <span
        className={cn(
          "inline-block w-0.5 h-6 sm:h-7 bg-cyan-400 ml-1",
          "animate-bounce"
        )}
      />
    </span>
  );
}