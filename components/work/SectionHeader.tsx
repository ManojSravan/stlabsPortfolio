import Link from "next/link";

type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
  action?: { href: string; label: string };
  centered?: boolean;
};

export default function SectionHeader({
  label,
  title,
  description,
  action,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div
      className={`flex flex-col gap-6 md:flex-row md:items-end md:justify-between ${
        centered ? "text-center md:text-center md:flex-col md:items-center" : ""
      }`}
    >
      <div className={centered ? "max-w-3xl" : "max-w-2xl"}>
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{label}</p>
        <h2 className="font-serif text-3xl md:text-4xl mt-4 text-balance leading-tight">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">{description}</p>
        ) : null}
      </div>
      {action ? (
        <Link
          href={action.href}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] border border-border px-5 py-3 hover:border-accent hover:text-accent transition-colors shrink-0 w-fit mx-auto md:mx-0"
        >
          {action.label} <span aria-hidden>→</span>
        </Link>
      ) : null}
    </div>
  );
}
