import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "Material UI", icon: "mui" },
      { name: "Redux Toolkit", icon: "redux" },
      { name: "Framer Motion", icon: "framer" },
      { name: "shadcn/ui", icon: "shadcn" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "REST API", icon: "api" },
      { name: "JWT Authentication", icon: "jwt" },
    ],
  },
  {
    id: "database",
    title: "Database",
    skills: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
      { name: "Redis", icon: "redis" },
    ],
  },
  {
    id: "languages",
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Python", icon: "python" },
      { name: "Java", icon: "java" },
    ],
  },
  {
    id: "ai",
    title: "Generative AI",
    skills: [
      { name: "LangChain", icon: "langchain" },
      { name: "RAG", icon: "rag" },
      { name: "Vector Databases", icon: "vectordb" },
      { name: "ChromaDB", icon: "chromadb" },
      { name: "HuggingFace", icon: "huggingface" },
      { name: "LLM APIs", icon: "llm" },
      { name: "LangSmith", icon: "langsmith" },
      { name: "Embeddings", icon: "embeddings" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Streamlit", icon: "streamlit" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Docker", icon: "docker" },
      { name: "Postman", icon: "postman" },
      { name: "VS Code", icon: "vscode" },
      { name: "Vite", icon: "vite" },
    ],
  },
  {
    id: "deployment",
    title: "Deployment",
    skills: [
      { name: "Vercel", icon: "vercel" },
      { name: "Netlify", icon: "netlify" },
      { name: "Render", icon: "render" },
      { name: "AWS", icon: "aws" },
    ],
  },
];