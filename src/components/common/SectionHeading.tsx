import { cn } from "../../utils/cn";

interface SectionHeadingProps {
  label?: string;
  title: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  label,
  title,
  as: Tag = "h2",
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={cn("text-center", className)}>
      {label && (
        <span
          className={cn(
            "inline-block font-accent text-2xl md:text-3xl mb-2",
            light ? "text-white/80" : "text-brand-orange"
          )}
        >
          {label}
        </span>
      )}
      <Tag
        className={cn(
          "leading-tight",
          light ? "text-white" : "text-neutral-900",
          Tag === "h1" ? "text-4xl md:text-5xl lg:text-6xl" : "text-3xl md:text-4xl"
        )}
      >
        {title}
      </Tag>
    </div>
  );
}