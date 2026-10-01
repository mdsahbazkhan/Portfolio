"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "@/types";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const scrollPos = window.scrollY + window.innerHeight / 3;
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const top = section.getBoundingClientRect().top + window.scrollY;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection((current) => current === item.id ? current : item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: PointerEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("pointerdown", handleClickOutside);
    return () => document.removeEventListener("pointerdown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    document.body.style.overflow = "";
    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      element.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    } else {
      window.location.assign(`/${href}`);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#090b0d]/90 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      )}
    >
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex h-16 items-center justify-between">
          <Link
            href="#home"
            className="text-lg font-semibold tracking-tight text-stone-100 hover:text-teal-100 transition-colors"
            aria-label={`${siteConfig.shortName} - Home`}
          >
            {siteConfig.shortName}
          </Link>

          <div className="hidden lg:flex lg:items-center lg:gap-3 xl:gap-5">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "relative inline-flex items-center gap-1.5 text-xs font-medium transition-colors duration-200 xl:text-sm",
                  activeSection === item.id
                    ? "text-teal-200"
                    : "text-stone-300 hover:text-teal-100"
                )}
                aria-current={activeSection === item.id ? "location" : undefined}
              >
                <span className="font-mono text-[9px] text-teal-100/50">{String(index).padStart(2, "0")}</span>
                {item.label}
                <span
                  className={cn(
                    "absolute bottom-[-4px] left-1/2 -translate-x-1/2 h-px bg-teal-200 transition-all duration-300",
                    activeSection === item.id ? "w-full" : "w-0"
                  )}
                />
              </button>
            ))}
            <Link
              href={siteConfig.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium text-[#090b0d] rounded-sm bg-teal-100 hover:bg-white transition-colors"
            >
              Resume
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <Link
              href={siteConfig.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-sm font-medium text-[#090b0d] rounded-sm bg-teal-100 hover:bg-white transition-colors"
            >
              Resume
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="fixed inset-x-0 top-full z-40 lg:hidden overflow-hidden bg-[#090b0d]/95 backdrop-blur-xl border-t border-white/10"
            >
              <div className="py-6 px-4 space-y-4">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors",
                      activeSection === item.id
                        ? "text-teal-100 bg-teal-100/10"
                        : "text-stone-300 hover:text-white hover:bg-white/5"
                    )}
                    aria-current={activeSection === item.id ? "location" : undefined}
                  >
                    <span className="mr-3 font-mono text-xs text-teal-100/50">{String(index).padStart(2, "0")}</span>
                    {item.label}
                  </button>
                ))}
                <Link
                  href={siteConfig.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-3 text-base font-medium text-[#090b0d] rounded-sm bg-teal-100 hover:bg-white transition-colors"
                >
                  Resume
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
