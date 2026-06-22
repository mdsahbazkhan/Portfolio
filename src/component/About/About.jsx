"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="About"
      className="py-20 px-6 md:px-16 lg:px-24 text-white transition-colors duration-500 relative"
    >
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto text-center md:text-left relative z-10">
        {/* Heading with accent */}
        <motion.div className="inline-block mb-8">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-cyan-400"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
        </motion.div>

        {/* Cards container */}
        <motion.div
          className="grid gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-md sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-cyan-500/20 shadow-lg hover:shadow-cyan-500/10 transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A{" "}
            <span className="text-cyan-300">B.Tech Computer Science graduate</span>{" "}
            who specializes in building full-stack web applications and
            Generative AI systems. My core stack spans{" "}
            <span className="text-cyan-300">
              React.js, Next.js, Node.js, FastAPI, and TypeScript
            </span>{" "}
            on the web side, and{" "}
            <span className="text-cyan-300">
              LangChain, RAG, ChromaDB, HuggingFace, and LLM APIs
            </span>{" "}
            on the AI side — I work across both.
          </motion.p>

          <motion.p
            className="text-md sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-cyan-500/20 shadow-lg hover:shadow-cyan-500/10 transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I completed a{" "}
            <span className="text-cyan-300">
              Frontend Developer Internship at Kognito Kube
            </span>
            , shipping 10+ production components and integrating 10+ REST APIs
            on a live LMS platform. Outside of work, I built{" "}
            <span className="text-cyan-300">Velquix</span> — a full-stack GenAI
            PDF chatbot using RAG, real-time streaming, LangSmith observability,
            and semantic search — and{" "}
            <span className="text-cyan-300">CollabTasky</span>, a real-time SaaS
            collaboration platform with an AI-powered task assistant.
          </motion.p>

          <motion.p
            className="text-md sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-cyan-500/20 shadow-lg hover:shadow-cyan-500/10 transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            I&apos;m actively looking for{" "}
            <span className="text-cyan-300">
              Full Stack or AI Engineering roles
            </span>{" "}
            where I can ship real features, work with strong engineers, and keep
            building at the intersection of web and intelligent systems. I have
            20+ shipped projects, HackerRank certifications in React, JavaScript,
            SQL, and Problem Solving, and a strong bias toward writing clean,
            production-ready code.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
