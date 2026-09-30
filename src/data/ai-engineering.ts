import type { AIEngineeringArea } from "@/types";

export const aiEngineeringAreas: AIEngineeringArea[] = [
  {
    title: "RAG",
    subtitle: "Retrieval-Augmented Generation",
    body: "Document-grounded answers in Velquix: retrieve relevant chunks, then generate from that context instead of relying on the model alone.",
  },
  {
    title: "LLM Applications",
    subtitle: "APIs and product surfaces",
    body: "Applications around LLM APIs — Groq Llama 3.3 streaming in Velquix, and an OpenAI-powered task assistant in CollabTasky.",
  },
  {
    title: "Semantic Search",
    subtitle: "Embeddings and vector retrieval",
    body: "HuggingFace sentence embeddings stored in ChromaDB, queried from a FastAPI backend over vectorized PDF chunks.",
  },
  {
    title: "LangChain",
    subtitle: "AI application development",
    body: "LangChain for the Velquix RAG pipeline, with LangSmith used to inspect retrieval and generation during debugging.",
  },
];

export const engineeringCaseStudies = [
  {
    title: "High-Level Design (HLD)",
    category: "System Design",
    tags: ["Scalability", "Architecture", "Distributed Systems"],
    body: "Studied the fundamentals of designing scalable backend systems, including load balancing, caching, databases, message queues, API design, replication, partitioning, and trade-offs in distributed systems.",
  },

  {
    title: "URL Shortener",
    category: "System Design",
    tags: ["HLD", "Caching", "Database", "Scalability"],
    body: "Designed a scalable URL shortening system covering unique short-link generation, URL storage, redirection flow, caching, database design, read-heavy workloads, and strategies for handling high traffic.",
  },

  {
    title: "Notification System",
    category: "System Design",
    tags: ["HLD", "Message Queue", "Async Processing", "Retries"],
    body: "Designed an asynchronous notification architecture for email, SMS, and push notifications using message queues, workers, retry mechanisms, notification preferences, and scalable delivery pipelines.",
  },

  {
    title: "Dropbox Design",
    category: "System Design",
    tags: ["HLD", "Object Storage", "File Sync", "Distributed Systems"],
    body: "Studied the architecture of a cloud file storage and synchronization system, covering metadata management, object storage, file uploads, chunking, synchronization, conflict handling, and scalable file access.",
  },

  {
    title: "NewsFeed Design",
    category: "System Design",
    tags: ["HLD", "Fan-out", "Caching", "Feed Generation"],
    body: "Designed a scalable personalized news feed using Push and Pull models, fan-out strategies, post storage, post caching, feed caching, and hybrid approaches for balancing latency, storage, and computation.",
  },

  {
    title: "CAP Theorem",
    category: "Distributed Systems",
    tags: ["CAP", "Consistency", "Availability", "Partition Tolerance"],
    body: "Studied the CAP theorem and how consistency, availability, and network partition tolerance influence distributed system architecture and database design decisions.",
  },
];
