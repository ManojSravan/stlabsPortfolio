import type { ContentBlock } from "@/lib/work";

export type BlogPost = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  readTime: string;
  heroImage: string;
  featured?: boolean;
  body: ContentBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-i-build-independently",
    title: "Why I Chose to Build Independently",
    subtitle: "On leaving the agency model behind",
    category: "Practice",
    description:
      "After years of shipping inside teams and agencies, I chose a different path — one builder, direct collaboration, full ownership from idea to production.",
    excerpt:
      "The agency model optimizes for billable hours. Independent building optimizes for shipped outcomes. Here's why that shift matters.",
    author: "Manoj Sravan",
    publishedAt: "2026-02-15",
    readTime: "4 min read",
    heroImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop",
    featured: true,
    body: [
      {
        type: "paragraph",
        text: "Most product work gets filtered through layers — account managers, project leads, junior developers. By the time code ships, the original intent is diluted and the founder is three degrees removed from the person actually building.",
      },
      {
        type: "heading",
        text: "What independent building changes",
      },
      {
        type: "paragraph",
        text: "When you work with an independent builder, you're talking to the person writing the code, making architecture decisions, and thinking about how the product holds up six months from now. There's no translation layer. Scope conversations are honest because there's no incentive to inflate them.",
      },
      {
        type: "list",
        items: [
          "Direct access to the person doing the work",
          "Faster decisions without internal handoffs",
          "Accountability that doesn't get diffused across a team",
          "Software shaped by someone who owns the outcome",
        ],
      },
      {
        type: "heading",
        text: "Who this works best for",
      },
      {
        type: "paragraph",
        text: "Founders who want a technical partner, not a vendor. Teams that need an MVP validated in weeks, not quarters. Products where the builder needs to understand the business, not just the spec.",
      },
      {
        type: "quote",
        text: "The best collaborations I've had were the ones where I could ask 'why' before writing a single line of code.",
        cite: "Manoj Sravan",
      },
    ],
  },
  {
    slug: "how-i-scope-mvps",
    title: "How I Scope MVPs Without Overbuilding",
    subtitle: "A practical framework for founders",
    category: "Product",
    description:
      "MVPs fail when they try to do too much. Here's the scoping process I use with founders to ship something real in 4–8 weeks.",
    excerpt:
      "The goal isn't to build less — it's to build the right thing first. A repeatable scoping process that keeps MVPs focused and shippable.",
    author: "Manoj Sravan",
    publishedAt: "2026-01-28",
    readTime: "5 min read",
    heroImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop",
    featured: true,
    body: [
      {
        type: "paragraph",
        text: "Every founder I talk to has a vision for the full product. That's good — it means they care. But the MVP isn't the vision. It's the smallest version that lets real users validate the core assumption.",
      },
      {
        type: "heading",
        text: "Step one: name the one thing",
      },
      {
        type: "paragraph",
        text: "Before features, before tech stack, before timelines — what's the single assumption this product needs to prove? If you can't answer that in one sentence, you're not ready to scope.",
      },
      {
        type: "heading",
        text: "Step two: draw the line",
      },
      {
        type: "paragraph",
        text: "List everything the product could do. Then mark each item as must-have for launch, nice-to-have, or later. Be ruthless. Admin dashboards, analytics, integrations — most of it can wait.",
      },
      {
        type: "list",
        items: [
          "Must-have: without this, the product doesn't work",
          "Nice-to-have: improves experience but isn't blocking",
          "Later: valuable, but not for v1",
        ],
      },
      {
        type: "heading",
        text: "Step three: define done",
      },
      {
        type: "paragraph",
        text: "A scoped MVP has a clear definition of done — not 'when it feels ready' but specific user flows that work end to end. We write this down together before writing code.",
      },
    ],
  },
  {
    slug: "shipping-without-cutting-corners",
    title: "Shipping Fast Without Cutting Corners",
    subtitle: "Speed and quality aren't opposites",
    category: "Engineering",
    description:
      "Moving fast doesn't mean writing throwaway code. Here's how I balance velocity with maintainability on every build.",
    excerpt:
      "Founders need speed. Products need to last. The trick is knowing where to invest and where to stay lean.",
    author: "Manoj Sravan",
    publishedAt: "2026-01-10",
    readTime: "4 min read",
    heroImage:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1470&auto=format&fit=crop",
    featured: true,
    body: [
      {
        type: "paragraph",
        text: "There's a myth that you have to choose between shipping fast and building well. In practice, the projects that move fastest are the ones with clear architecture from day one — not the ones held together with duct tape.",
      },
      {
        type: "heading",
        text: "Where I invest early",
      },
      {
        type: "list",
        items: [
          "Data models that won't need a rewrite in three months",
          "Authentication and permissions done properly",
          "Deployment pipelines so shipping stays frictionless",
          "Clear folder structure and naming conventions",
        ],
      },
      {
        type: "heading",
        text: "Where I stay lean",
      },
      {
        type: "list",
        items: [
          "Custom admin panels when a simple CMS works",
          "Premature optimization before users exist",
          "Feature flags and complex abstractions for v1",
          "Perfect design polish on screens users won't see yet",
        ],
      },
      {
        type: "paragraph",
        text: "The result is software that ships in weeks but doesn't become a liability when the business grows. That's the balance independent building is designed for.",
      },
    ],
  },
];

export const featuredBlogs = blogPosts.filter((post) => post.featured);

export const recentBlogs = blogPosts.slice(0, 4);

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

export function formatBlogDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
