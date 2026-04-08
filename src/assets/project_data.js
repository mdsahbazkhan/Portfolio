// project_data.js
import project1 from "../assets/Project1.png";
import project2 from "../assets/project2.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";

const project_data = [
  {
    p_no: 1,
    p_img: project1,
    p_href: "https://manageprod.teachopia.org/",
    p_github: "#",
    p_name: "Kognito Kube - Internship Project",
    p_desc:
      "Worked as a Frontend Developer Intern, contributing to the development and enhancement of responsive web applications under the guidance of a senior developer with 12 years of industry experience.",
    tech: "React.js, Next.js, NestJS, Node.js, PostgreSQL, MongoDB, Tailwind CSS",
    features: [
      "Developed and maintained dynamic user interfaces using React.js and Next.js",
      "Ensured optimal performance and user experience",
      "Collaborated with backend developers to integrate APIs",
      "Worked with databases including PostgreSQL and MongoDB",
      "Assisted in debugging, testing, and optimizing application components",
      "Adhered to best coding practices and project standards",
    ],
  },
  {
    p_no: 2,
    p_img: project5,
    p_href: "https://collab-tasky.vercel.app/",
    p_github: "https://github.com/mdsahbazkhan/CollabTasky",
    p_name: "CollabTasky",
    p_desc:
      "CollabTasky is a full-stack SaaS project management and collaboration platform inspired by tools like Notion, Slack, and Trello. It enables teams to manage projects, assign tasks, collaborate in real-time, and improve productivity using AI-powered features.",
    tech: "Next.js (App Router), TypeScript, Node.js, Express.js, MongoDB, Tailwind CSS, shadcn UI, JWT, Socket.IO, OpenAI API",
    features: [
      "User authentication with JWT and protected routes",
      "Role-Based Access Control (Owner, Admin, Member)",
      "Project creation, update, and deletion",
      "Kanban board with drag-and-drop task management",
      "Task assignment with priority and status tracking",
      "Project-based team collaboration system",
      "Real-time team chat using Socket.IO",
      "AI-powered task suggestions and description generation",
      "Optimistic UI updates for seamless user experience",
      "Responsive and modern UI design",
    ],
  },
  {
    p_no: 3,
    p_img: project2,
    p_href: "https://bazario-frontend-one.vercel.app/",
    p_github: "https://github.com/mdsahbazkhan/ecommerce-web",
    p_name: "Bazario - E-Commerce Platform",
    p_desc:
      "Bazario is a full-stack e-commerce web application designed to provide a smooth and secure online shopping experience. The platform allows users to browse products, manage their cart, make secure payments, and track orders.",
    tech: "React.js, Node.js, Express, MongoDB, Tailwind CSS, Git, GitHub",
    features: [
      "User authentication using JWT and Google OAuth",
      "Product browsing with category filters and size variants",
      "Real-time shopping cart management",
      "Secure online payments with Stripe and Razorpay",
      "Image upload and optimization using Cloudinary",
      "Order history and tracking for users",
      "Fully responsive UI with mobile-first design",
    ],
  },
  {
    p_no: 4,
    p_img: project4,
    p_href: "https://bazario-admin-seven.vercel.app/",
    p_github: "https://github.com/mdsahbazkhan/ecommerce-web/tree/main/admin",
    p_name: "Bazario Admin Portal",
    p_desc:
      "A comprehensive admin dashboard for managing the Bazario e-commerce platform. Allows administrators to manage products, orders, users, and analytics with a modern, intuitive interface.",
    tech: "React.js, Node.js, Express, MongoDB, Tailwind CSS, Chart.js, Recharts",
    features: [
      "Dashboard with sales analytics and revenue charts",
      "Product management - add, edit, delete products",
      "Order management - view and update order status",
      "User management - view and manage customer accounts",
      "Category and inventory management",
      "Revenue and sales reports",
      "Responsive design for all devices",
    ],
  },

];

export default project_data;
