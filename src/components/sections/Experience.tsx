"use client";

import { motion } from "framer-motion";
import { CalendarDays, MapPin, ExternalLink } from "lucide-react";
import { experiences } from "@/data/experience";
import { Container } from "@/components/ui/Container";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative flex min-h-[78svh] items-center py-24 sm:py-32"
      aria-labelledby="experience-heading"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-teal-100/[.04] rounded-full blur-3xl" />
      </div>

      <Container className="relative">
        <motion.div
          className="mb-12 border-b editorial-rule pb-7"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            id="experience-heading"
            className="text-4xl sm:text-5xl font-semibold tracking-[-.05em] text-white mb-4"
          >
            Experience
          </h2>
          <p className="eyebrow mb-2">
            05 / The journey
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and key contributions.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.id}
              className="group border editorial-rule bg-white/[.018] p-6 sm:p-8 transition-colors duration-300 hover:bg-white/[.035]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-teal-100 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1 text-gray-300">
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-cyan-300 hover:text-cyan-400 transition-colors flex items-center gap-1"
                      >
                        {exp.company}
                        <ExternalLink className="h-3 w-3 inline-block" />
                      </a>
                    ) : (
                      <span className="font-semibold text-cyan-300">{exp.company}</span>
                    )}
                    <span className="text-gray-600">•</span>
                    <span className="flex items-center gap-1 text-sm">
                      <CalendarDays className="h-4 w-4" />
                      {exp.duration}
                    </span>
                    <span className="text-gray-600">•</span>
                    <span className="flex items-center gap-1 text-sm">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-900/20 rounded-full border border-cyan-800/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-2.5">
                {exp.description.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed"
                  >
                    <span className="text-cyan-400 mt-1.5 w-1 h-1 rounded-full flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
