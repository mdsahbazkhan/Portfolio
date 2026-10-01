import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ProjectStructuredData } from "@/components/SEO/StructuredData";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: [{ url: project.image, width: 1200, height: 630 }],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="py-24 sm:py-28 lg:py-32">
      <ProjectStructuredData project={project} />
      <Container size="lg">
        <article>
          {/* Header */}
          <header className="mb-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-teal-100 transition-colors mb-6"
            >
              ← Back to Projects
            </Link>
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-[-.05em] text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </header>

          {/* Screenshot */}
          <div className="relative aspect-[16/9] overflow-hidden border editorial-rule mb-12">
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover"
            />
          </div>

          {/* Links */}
          <div className="flex gap-4 mb-12">
            {project.liveUrl && project.liveUrl !== "#" && (
              <ButtonLink href={project.liveUrl} target="_blank" rel="noopener noreferrer" variant="primary" className="gap-2">
                  <ExternalLink className="h-5 w-5" />
                  Live Demo
              </ButtonLink>
            )}
            {project.githubUrl && project.githubUrl !== "#" && (
              <ButtonLink href={project.githubUrl} target="_blank" rel="noopener noreferrer" variant="secondary" className="gap-2">
                  <Github className="h-5 w-5" />
                  GitHub
              </ButtonLink>
            )}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Key Features */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-300 leading-relaxed"
                  >
                    <span className="text-teal-200 mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Technologies</h2>
              <ul className="space-y-2">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="text-gray-300 inline-block mr-2 mb-2"
                  >
                    <span className="px-3 py-1.5 text-sm font-medium text-cyan-300 bg-cyan-900/20 rounded-full border border-cyan-800/30">
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </Container>
    </main>
  );
}
