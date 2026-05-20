import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary:
        "bg-(--color-primary) text-(--color-on-primary) border border-(--color-primary) hover:scale-[1.02] hover:bg-(--color-primary-container)",
      secondary:
        "bg-white text-(--color-on-surface) border border-[color:rgba(64,73,68,0.2)] hover:scale-[1.02] hover:bg-(--color-surface-container-low)",
      ghost:
        "bg-transparent text-(--color-primary) border border-transparent hover:scale-[1.02] hover:bg-[color:rgba(43,105,84,0.08)]",
    } as const;

    const sizes = {
      sm: "h-10 px-4 text-sm",
      md: "h-11 px-5 text-sm",
      lg: "h-12 px-6 text-base",
    } as const;

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-(--radius) font-semibold tracking-[0.05em] transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:rgba(43,105,84,0.25)] disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
