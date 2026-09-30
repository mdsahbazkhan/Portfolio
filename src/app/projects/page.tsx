import { projects } from "@/data/projects";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { Container } from "@/components/ui/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Full Stack & AI Portfolio",
  description:
    "A selection of projects by Md Sahbaz Alam — full-stack web applications and generative AI systems.",
};

export default function ProjectsPage() {
  return (
    <main className="py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            My Projects
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A selection of projects I&apos;ve built, spanning full-stack web applications
            and Generative AI systems. Each project reflects real problems I&apos;ve
            solved and engineering decisions I&apos;ve made.
          </p>
        </div>
        <ProjectsGrid projects={projects} />
      </Container>
    </main>
  );
}