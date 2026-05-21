import { cn } from "@/lib/utils";

type SectionShellProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  innerClassName?: string;
  variant?: "default" | "muted" | "subtle";
  border?: boolean;
};

const variants = {
  default: "",
  muted: "bg-secondary/40",
  subtle: "bg-secondary/30",
} as const;

export default function SectionShell({
  children,
  id,
  className,
  innerClassName,
  variant = "default",
  border = true,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(border && "border-t border-border/60", variants[variant], className)}
    >
      <div
        className={cn(
          "mx-auto max-w-6xl px-6 py-12 md:py-14",
          innerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
