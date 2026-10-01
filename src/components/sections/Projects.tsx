"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32" aria-labelledby="projects-heading">
      <Container className="relative">
        <div className="mb-14 flex flex-col justify-between gap-6 border-b editorial-rule pb-8 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow mb-4">02 / Built systems</p>
            <h2 id="projects-heading" className="text-4xl font-semibold tracking-[-.05em] text-white sm:text-6xl">Built to be useful.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-stone-400">A selection of projects spanning full-stack products and generative AI systems.</p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article key={project.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.55 }} className="group grid overflow-hidden border editorial-rule bg-white/[.018] lg:min-h-[70svh] lg:grid-cols-[1.15fr_.85fr]">
              <Link href={`/projects/${project.slug}`} className="relative block min-h-64 overflow-hidden bg-[#111719] focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-200 lg:min-h-[70svh]">
                <Image src={project.image} alt={`${project.title} screenshot`} fill sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
                <span className="absolute left-5 top-5 font-mono text-xs tracking-widest text-white/75">{String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
              </Link>
              <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-11">
                <p className="eyebrow">{project.category}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-stone-100 sm:text-3xl">{project.title}</h3>
                <p className="mt-4 text-sm leading-6 text-stone-400">{project.shortDescription}</p>
                <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2 border-t editorial-rule pt-5">
                  {project.technologies.slice(0, 5).map((tech) => <span key={tech} className="font-mono text-[11px] text-stone-400">{tech}</span>)}
                </div>
                <Link href={`/projects/${project.slug}`} className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-medium text-teal-100 transition-colors hover:text-white">
                  Explore project <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mt-10 text-right"><Link href="/projects" className="eyebrow hover:text-white">All projects <span aria-hidden="true">↗</span></Link></div>
      </Container>
    </section>
  );
}
