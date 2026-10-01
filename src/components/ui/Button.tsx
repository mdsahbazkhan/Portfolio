"use client";

import React, { forwardRef } from "react";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  fullWidth?: boolean;
};

export type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  fullWidth?: boolean;
};

type SharedVariant = "primary" | "secondary" | "outline" | "ghost";
type SharedSize = "sm" | "md" | "lg";

const baseStyles =
  "inline-flex items-center justify-center font-medium rounded-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#090b0d] disabled:opacity-50 disabled:cursor-not-allowed";

const variantClasses: Record<SharedVariant, string> = {
  primary:
    "bg-teal-100 text-[#090b0d] hover:bg-white focus:ring-teal-100",
  secondary:
    "bg-gray-800 text-white border border-gray-700 hover:bg-gray-700 focus:ring-gray-500",
  outline:
    "border border-white/20 text-gray-200 hover:border-teal-100 hover:text-teal-100 hover:bg-teal-100/5 focus:ring-teal-100",
  ghost:
    "text-gray-300 hover:text-white hover:bg-gray-800/50 focus:ring-gray-500",
};

const sizeClasses: Record<SharedSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const sharedClassName = (
  variant: SharedVariant,
  size: SharedSize,
  fullWidth?: boolean,
  className?: string
) => cn(baseStyles, variantClasses[variant], sizeClasses[size], fullWidth && "w-full", className);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, fullWidth, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={sharedClassName(variant, size, fullWidth, className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg className="mr-2 h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant = "primary", size = "md", isLoading, fullWidth, children, ...props }, ref) => {
    const { href, ...rest } = props;

    return (
      <Link
        ref={ref}
        href={href || ""}
        className={sharedClassName(variant, size, fullWidth, className)}
        {...rest}
      >
        {isLoading && (
          <svg className="mr-2 h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )}
        {children}
      </Link>
    );
  }
);
ButtonLink.displayName = "ButtonLink";
