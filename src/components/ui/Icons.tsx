import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaJava,
  FaAws,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiTypescript,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiExpress,
  SiRedux,
  SiVite,
  SiPostman,
  SiFramer,
  SiFastapi,
  SiJsonwebtokens,
  SiVercel,
  SiNetlify,
  SiRender,
  SiDocker,
  SiLangchain,
  SiHuggingface,
  SiNestjs,
} from "react-icons/si";

import { MdCode } from "react-icons/md";
import { Database, Bot, BrainCircuit, Layers } from "lucide-react";
import { type Skill } from "@/types";

const iconMap: Record<string, React.ReactNode> = {
  html: <FaHtml5 className="text-orange-500" />,
  css: <FaCss3Alt className="text-blue-500" />,
  javascript: <FaJs className="text-yellow-500" />,
  typescript: <SiTypescript className="text-blue-600" />,
  react: <FaReact className="text-cyan-400" />,
  nextjs: <SiNextdotjs className="text-white" />,
  tailwind: <SiTailwindcss className="text-sky-400" />,
  bootstrap: <FaBootstrap className="text-purple-600" />,
  mui: <MdCode className="text-blue-500" />,
  redux: <SiRedux className="text-purple-500" />,
  framer: <SiFramer className="text-cyan-400" />,
  shadcn: <Layers className="text-sky-400" />,
  nodejs: <FaNodeJs className="text-green-500" />,
  express: <SiExpress className="text-gray-300" />,
  fastapi: <SiFastapi className="text-green-400" />,
  api: <MdCode className="text-blue-400" />,
  jwt: <SiJsonwebtokens className="text-pink-400" />,
  mongodb: <SiMongodb className="text-green-500" />,
  postgresql: <SiPostgresql className="text-blue-400" />,
  mysql: <SiMysql className="text-blue-500" />,
  redis: <SiRedis className="text-red-500" />,
  python: <FaPython className="text-blue-400" />,
  java: <FaJava className="text-orange-500" />,
  langchain: <SiLangchain className="text-green-400" />,
  rag: <BrainCircuit className="text-cyan-400" />,
  vectordb: <Database className="text-blue-400" />,
  chromadb: <MdCode className="text-cyan-300" />,
  huggingface: <SiHuggingface className="text-yellow-400" />,
  llm: <Bot className="text-green-400" />,
  langsmith: <Bot className="text-orange-400" />,
  embeddings: <BrainCircuit className="text-pink-400" />,
  streamlit: <MdCode className="text-red-400" />,
  git: <FaGitAlt className="text-orange-600" />,
  github: <FaGithub className="text-white" />,
  docker: <SiDocker className="text-blue-400" />,
  postman: <SiPostman className="text-orange-500" />,
  vscode: <MdCode className="text-blue-500" />,
  vite: <SiVite className="text-yellow-400" />,
  vercel: <SiVercel className="text-white" />,
  netlify: <SiNetlify className="text-teal-400" />,
  render: <SiRender className="text-cyan-400" />,
  nestjs: <SiNestjs className="text-gray-400" />,
  aws: <FaAws className="text-orange-500" />,
  sql: <MdCode className="text-blue-400" />,
};

export function SkillIcon({ skill }: { skill: Skill }) {
  return (
    <span className="text-3xl sm:text-4xl">
      {iconMap[skill.icon] || <MdCode className="text-gray-400" />}
    </span>
  );
}

export function TechIcon({ name }: { name: string }) {
  const normalized = name.toLowerCase().replace(/[.\s+#]/g, "");
  const iconKey = normalized
    .replace("nextjs", "nextjs")
    .replace("nodejs", "nodejs")
    .replace("expressjs", "express")
    .replace("mongodb", "mongodb")
    .replace("postgresql", "postgresql")
    .replace("tailwindcss", "tailwind")
    .replace("reduxtoolkit", "redux")
    .replace("framermotion", "framer")
    .replace("shadcnui", "shadcn")
    .replace("restapi", "api")
    .replace("jwtauthentication", "jwt")
    .replace("googleoauth", "api")
    .replace("cloudinary", "api")
    .replace("stripe", "api")
    .replace("razorpay", "api")
    .replace("socketio", "api")
    .replace("openaiaapi", "llm")
    .replace("groqllama33", "llm")
    .replace("huggingfaceembeddings", "embeddings")
    .replace("langsmith", "langsmith")
    .replace("vectordbs", "vectordb")
    .replace("llmapis", "llm");

  return iconMap[iconKey] || <MdCode className="text-gray-400" />;
}
