"use client";

import { type ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Download, Github, Linkedin } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SiLeetcode } from "react-icons/si";

export function Hero() {
  return (
    <section
      id="home"
      className="grain-overlay relative isolate min-h-[92svh] flex items-center overflow-hidden pt-16"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="atmosphere-grid absolute inset-0 opacity-60" />
        <div className="absolute -top-40 right-[8%] h-[34rem] w-[34rem] rounded-full bg-teal-200/[.07] blur-[120px]" />
        <div className="absolute bottom-[-18rem] left-[20%] h-[34rem] w-[34rem] rounded-full bg-teal-900/25 blur-[100px]" />
        <div className="absolute right-[14%] top-1/2 hidden h-[min(62vw,680px)] w-[min(62vw,680px)] -translate-y-1/2 rounded-full border border-teal-100/10 lg:block" />
        <div className="absolute right-[17%] top-1/2 hidden h-[min(49vw,540px)] w-[min(49vw,540px)] -translate-y-1/2 rounded-full border border-teal-100/[.07] lg:block" />
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
              className="eyebrow mb-7 inline-flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <span className="font-mono text-[10px] tracking-[.2em] text-teal-100/60">00 / OPENING</span>
              <span className="h-px w-8 bg-teal-200/70" />
              Open to Full Stack & AI Engineering Roles
            </motion.p>

            <motion.h1
              className="max-w-4xl text-5xl font-semibold leading-[.98] tracking-[-.065em] text-[#f1f0eb] sm:text-6xl md:text-7xl lg:text-[6.5rem] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Md Sahbaz Alam<span className="text-teal-200">.</span>
            </motion.h1>

            <motion.div
              className="text-lg sm:text-xl font-medium mb-6 min-h-[2.5rem]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-teal-200">Full Stack Developer · Generative AI Engineer</span>
            </motion.div>

            <motion.p
              className="text-lg sm:text-xl leading-relaxed text-stone-300/80 mb-9 max-w-2xl lg:max-w-xl"
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
              className="flex gap-3 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <SocialLink
                href={siteConfig.github}
                label="GitHub"
                icon={<Github className="h-5 w-5" />}
              />
              <SocialLink
                href={siteConfig.linkedin}
                label="LinkedIn"
                icon={<Linkedin className="h-5 w-5" />}
              />
              <SocialLink
                href={siteConfig.leetcode}
                label="LeetCode"
                icon={<SiLeetcode className="h-5 w-5" />}
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
            <div className="relative w-52 h-64 sm:w-60 sm:h-72 md:w-72 md:h-80 lg:w-80 lg:h-[26rem]">
              <Image
                src={siteConfig.profileImage}
                alt={`${siteConfig.name} profile photo`}
                fill
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                className="object-cover rounded-[48%] border border-teal-100/15 grayscale-[.22]"
                priority
                style={{ objectPosition: "center top" }}
              />
            </div>
          </motion.div>
        </div>
      </Container>
      <a
        href="#about"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 font-mono text-[10px] uppercase tracking-[.22em] text-stone-400 transition-colors hover:text-teal-100 sm:flex"
      >
        Scroll to explore <ChevronDown size={14} aria-hidden="true" />
      </a>
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
