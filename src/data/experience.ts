import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "kognito-kube",
    role: "Frontend Developer Intern",
    company: "Kognito Kube Private Limited",
    companyUrl: "https://kognitokube.com/",
    duration: "April 2025 – June 2025",
    location: "Hyderabad, India",
    technologies: [
      "React.js",
      "Next.js",
      "NestJS",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "Tailwind CSS",
    ],
    description: [
      "Built 10+ reusable, responsive UI components with React.js and Next.js that shipped to production for the TeachoPia LMS platform.",
      "Integrated 10+ REST API endpoints enabling dynamic, real-time data rendering across course management and student tracking modules.",
      "Resolved UI performance bottlenecks and accessibility issues, improving page load experience and overall user satisfaction.",
      "Collaborated with backend engineers using NestJS and Node.js to align on API contracts, reducing integration friction across feature releases.",
      "Contributed to multiple feature releases using Git workflows (branching, PRs, code reviews) in a cross-functional agile team.",
    ],
  },
];