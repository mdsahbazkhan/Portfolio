"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative border-t border-gray-800 bg-gray-950/50"
      role="contentinfo"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/10 to-transparent" />
      <Container className="relative py-12 lg:py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <p className="text-center md:text-left text-sm text-gray-400">
            <span className="font-semibold text-cyan-400">&copy; {currentYear} </span>
            {siteConfig.name}. All rights reserved.
          </p>

          <div className="flex justify-center md:justify-end gap-4">
            <Link
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "p-3 rounded-full bg-gray-800/50 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300",
                "focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-950"
              )}
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "p-3 rounded-full bg-gray-800/50 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300",
                "focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-950"
              )}
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href={`mailto:${siteConfig.email}`}
              className={cn(
                "p-3 rounded-full bg-gray-800/50 text-gray-400 hover:text-sky-400 hover:bg-sky-500/10 transition-all duration-300",
                "focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-gray-950"
              )}
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-gray-500">
          <span className="text-cyan-500">✦</span> Designed & Built by {siteConfig.shortName}{" "}
          <span className="text-cyan-500">✦</span>
        </div>
      </Container>
    </footer>
  );
}