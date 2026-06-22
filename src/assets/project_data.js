// project_data.js
import project1 from "../assets/Project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/image.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";

const project_data = [
  {
    p_no: 1,
    p_img: project5,
    p_href: "https://collab-tasky.vercel.app/",
    p_github: "https://github.com/mdsahbazkhan/CollabTasky",
    p_name: "CollabTasky — Real-Time SaaS Platform",
    p_desc:
      "Full-stack SaaS project management platform with real-time collaboration, role-based access control, Kanban boards, and an AI-powered assistant that analyzes project data to generate contextual task suggestions and workflow insights.",
    tech: "Next.js (App Router), TypeScript, Node.js, Express.js, MongoDB, Socket.IO, Tailwind CSS, shadcn UI, JWT, OpenAI API",
    features: [
      "Built 20+ REST APIs with JWT auth and 3-tier RBAC (Owner, Admin, Member)",
      "Real-time Kanban board with drag-and-drop via Socket.IO",
      "AI assistant generating contextual task suggestions from project data",
      "Optimistic UI updates for seamless collaborative experience",
      "Real-time team chat with instant message delivery",
      "Project creation, assignment, priority tracking, and status management",
    ],
  },
  {
    p_no: 2,
    p_img: project3,
    p_href: "#",
    p_github: "https://github.com/mdsahbazkhan/AI_ChatBot",
    p_name: "Velquix — Full Stack GenAI PDF Chatbot",
    p_desc:
      "Full-stack Generative AI PDF chatbot enabling natural language interaction with uploaded documents. Implements RAG (Retrieval-Augmented Generation) with LangChain and ChromaDB for context-aware, hallucination-reduced AI responses with real-time streaming.",
    tech: "React.js, FastAPI, LangChain, Groq Llama 3.3, ChromaDB, HuggingFace Embeddings, Tailwind CSS, LangSmith",
    features: [
      "RAG pipeline with LangChain, ChromaDB, and HuggingFace sentence embeddings",
      "Real-time streaming AI responses using Groq Llama 3.3 70B",
      "Persistent chat history with automatic session restoration",
      "LangSmith integration for LLM observability and RAG debugging",
      "FastAPI backend with semantic search over vectorized document chunks",
      "Upload, parse, and query any PDF via natural language",
    ],
  },
  {
    p_no: 3,
    p_img: project1,
    p_href: "https://manageprod.teachopia.org/",
    p_github: "#",
    p_name: "TeachoPia — Learning Management System",
    p_desc:
      "LMS platform built during internship at Kognito Kube. Developed 5+ core modules including course management, student tracking, and academic dashboards with real-time data via REST API integration and efficient state management using Redux.",
    tech: "Next.js, Redux Toolkit, Tailwind CSS, REST API Integration, PostgreSQL, MongoDB",
    features: [
      "5+ LMS modules: course management, student tracking, academic dashboards",
      "Redux Toolkit for scalable state management across all modules",
      "Real-time academic data via 10+ integrated REST API endpoints",
      "Performance-optimized with Next.js SSR and dynamic routing",
      "10+ reusable, responsive UI components using React.js and Next.js",
      "Cross-functional collaboration with backend team using Git workflows",
    ],
  },
  {
    p_no: 4,
    p_img: project2,
    p_href: "https://bazario-frontend-one.vercel.app/",
    p_github: "https://github.com/mdsahbazkhan/ecommerce-web",
    p_name: "Bazario — Full Stack E-Commerce Platform",
    p_desc:
      "Full-stack e-commerce platform with secure payments, product catalog, order tracking, and a separate admin portal. Features JWT + Google OAuth authentication, Stripe/Razorpay payment integration, and Cloudinary image optimization.",
    tech: "React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Stripe, Razorpay, Cloudinary, JWT, Google OAuth",
    features: [
      "Secure authentication with JWT and Google OAuth",
      "Stripe and Razorpay payment gateway integration",
      "Product catalog with category filters and size variants",
      "Cloudinary image upload and optimization pipeline",
      "Order history and real-time order tracking",
      "Fully responsive mobile-first UI",
    ],
  },
  {
    p_no: 5,
    p_img: project4,
    p_href: "https://bazario-admin-seven.vercel.app/",
    p_github: "https://github.com/mdsahbazkhan/ecommerce-web/tree/main/admin",
    p_name: "Bazario Admin Portal",
    p_desc:
      "Comprehensive admin dashboard for the Bazario platform. Provides full product, order, and user management with sales analytics, revenue charts, and inventory controls — all in a responsive, modern interface.",
    tech: "React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Chart.js, Recharts",
    features: [
      "Sales analytics dashboard with revenue and order charts",
      "Full product CRUD: add, edit, delete with image management",
      "Order management with real-time status updates",
      "Customer account management and user analytics",
      "Category and inventory management",
      "Responsive design optimized for all screen sizes",
    ],
  },
];

export default project_data;
