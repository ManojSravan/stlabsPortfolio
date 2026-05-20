import Image from "next/image";
import type { ContentBlock } from "@/lib/work";

type ArticleBodyProps = {
  blocks: ContentBlock[];
};

export default function ArticleBody({ blocks }: ArticleBodyProps) {
  return (
    <div className="article-body space-y-8">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p
                key={index}
                className="text-lg text-foreground/85 leading-[1.75] tracking-[-0.01em]"
              >
                {block.text}
              </p>
            );
          case "heading":
            return (
              <h2
                key={index}
                className="font-serif text-2xl md:text-3xl pt-4 text-balance leading-tight"
              >
                {block.text}
              </h2>
            );
          case "image":
            return (
              <figure key={index} className="my-12 -mx-4 sm:mx-0">
                <div className="overflow-hidden border border-border/60 bg-secondary/30">
                  <Image
                    src={block.src}
                    alt={block.alt}
                    width={1200}
                    height={675}
                    className="w-full h-auto"
                  />
                </div>
                {block.caption ? (
                  <figcaption className="mt-3 text-sm text-muted-foreground text-center px-4 sm:px-0">
                    {block.caption}
                  </figcaption>
                ) : null}
              </figure>
            );
          case "quote":
            return (
              <blockquote
                key={index}
                className="border-l-2 border-accent pl-6 my-10"
              >
                <p className="font-serif text-xl md:text-2xl leading-relaxed text-foreground/90">
                  &ldquo;{block.text}&rdquo;
                </p>
                {block.cite ? (
                  <footer className="mt-4 text-sm text-muted-foreground">
                    · {block.cite}
                  </footer>
                ) : null}
              </blockquote>
            );
          case "list":
            return (
              <ul key={index} className="space-y-3 text-lg text-foreground/85 leading-relaxed">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
