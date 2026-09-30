import { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
  children: ReactNode;
}

export function Section({ id, className, children, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-16 sm:py-20 lg:py-24", className)}
      {...props}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeader({
  title,
  subtitle,
  className = "",
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("text-center max-w-3xl mx-auto mb-12 lg:mb-16", className)}>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg sm:text-xl text-gray-400 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}