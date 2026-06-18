import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  background?: "gradient" | "light" | "white";
}

const backgroundStyles = {
  gradient: "bg-gradient-primary text-white",
  light: "bg-neutral-50",
  white: "bg-white",
};

export function SectionWrapper({
  children,
  id,
  className,
  background = "white",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn("py-16 md:py-20 lg:py-24", backgroundStyles[background], className)}
    >
      {children}
    </section>
  );
}