"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { type Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group h-full bg-gray-800/30 rounded-2xl border border-gray-700/50 overflow-hidden transition-all duration-300 hover:border-cyan-500/30 hover:bg-gray-800/50 flex flex-col">
      <Link href={`/projects/${project.slug}`} className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400">
        <div className="relative aspect-[2/1] overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {project.liveUrl && project.liveUrl !== "#" && (
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="p-1.5 bg-gray-900/80 rounded-lg">
                <ExternalLink className="h-4 w-4 text-cyan-400" />
              </div>
            </div>
          )}
        </div>
      </Link>

        <div className="p-4 flex-1 flex flex-col sm:p-5">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-base font-bold text-gray-200 group-hover:text-cyan-400 transition-colors line-clamp-1">
              <Link href={`/projects/${project.slug}`} className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400">{project.title}</Link>
            </h3>
            <span className="text-xs px-2.5 py-1 bg-gray-900/50 text-gray-400 rounded-full whitespace-nowrap">
              {project.category}
            </span>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-3 line-clamp-2 flex-1">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[11px] font-medium text-cyan-300 bg-cyan-900/20 rounded-full border border-cyan-800/30"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2.5 py-1 text-xs font-medium text-gray-500 rounded-full">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>

          <div className="flex gap-3 pt-4 mt-auto border-t border-gray-700/50">
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center justify-center gap-1.5 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Demo
              </a>
            )}
            {project.githubUrl && project.githubUrl !== "#" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center justify-center gap-1.5 text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Github className="h-4 w-4" />
                Code
              </a>
            )}
          </div>
        </div>
      </article>
  );
}
