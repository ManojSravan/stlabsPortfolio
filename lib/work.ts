export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "list"; items: string[] };

export type WorkProject = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  excerpt: string;
  client: string;
  year: string;
  engagement: string;
  outcome: string;
  heroImage: string;
  readTime: string;
  featured?: boolean;
  body: ContentBlock[];
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
};

const commerceBody: ContentBlock[] = [
  {
    type: "paragraph",
    text: "Northline Commerce had outgrown a monolithic storefront. Marketing needed to move faster than engineering could ship, and conversion had plateaued despite rising traffic. They engaged us to rethink the buying experience end-to-end, not a replatform for its own sake, but a calmer path from discovery to purchase.",
  },
  {
    type: "heading",
    text: "Where we started",
  },
  {
    type: "paragraph",
    text: "We began with a two-week discovery sprint: stakeholder interviews, funnel analysis, and a technical assessment of their existing stack. The constraint was clear, the business could not afford a six-month freeze. We scoped a phased rollout that kept revenue flowing while we rebuilt the highest-friction surfaces first.",
  },
  {
    type: "image",
    src: "/work/commerce-platform-detail.svg",
    alt: "Wireframes comparing legacy checkout flow with redesigned steps",
    caption: "Checkout reduced from seven steps to four without removing compliance requirements.",
  },
  {
    type: "heading",
    text: "What we delivered",
  },
  {
    type: "list",
    items: [
      "Unified product catalog and merchandising workflows for the growth team",
      "Headless storefront with performance budgets enforced in CI",
      "Operations dashboard for orders, returns, and inventory exceptions",
      "Documentation and enablement so their team could own releases post-handoff",
    ],
  },
  {
    type: "quote",
    text: "The studio operated like an extension of our product org, clear communication, no heroics, and a launch we could actually sustain.",
    cite: "Priya Sharma, Co-founder · Northline Commerce",
  },
  {
    type: "paragraph",
    text: "Within twelve weeks of launch, Northline saw a measurable lift in completed purchases and a sharp drop in support tickets tied to checkout confusion. We stayed on retainer for one quarter to tune analytics and train their internal squad, then stepped back once the team was confident running solo.",
  },
];

const saasBody: ContentBlock[] = [
  {
    type: "paragraph",
    text: "A B2B analytics company approached us between seed and Series A with a working prototype and mounting pressure from enterprise pilots. They needed a product that felt trustworthy to procurement, flexible for admins, and fast for analysts, without hiring a full internal product org overnight.",
  },
  {
    type: "heading",
    text: "Defining the engagement",
  },
  {
    type: "paragraph",
    text: "We embedded a small senior team (product design, engineering, and delivery) reporting directly to their CEO and head of product. Weekly demos kept investors and design partners aligned. Scope was ruthlessly prioritized around revenue-critical workflows: onboarding, workspace administration, and the core reporting experience.",
  },
  {
    type: "image",
    src: "/work/saas-analytics-detail.svg",
    alt: "Dashboard interface showing workspace hierarchy and report builder",
    caption: "Role-based workspaces shipped in the first release milestone.",
  },
  {
    type: "heading",
    text: "Outcomes",
  },
  {
    type: "list",
    items: [
      "Multi-tenant architecture with audit-friendly permission models",
      "Self-serve billing and plan management for growth teams",
      "Realtime dashboards adopted by three enterprise pilot customers",
      "Playbooks for hiring and onboarding their first in-house engineers",
    ],
  },
  {
    type: "quote",
    text: "They helped us look enterprise-ready months before we would have managed it alone, and left us with systems we still run today.",
    cite: "Elena Vasquez, CTO · Meridian Pay",
  },
];

const learningBody: ContentBlock[] = [
  {
    type: "paragraph",
    text: "Atlas Learning runs cohort-based programs for corporate clients worldwide. Their legacy LMS handled content delivery but struggled with live instruction, assessments at scale, and the operational load on instructors. We partnered for a full product rebuild aligned to how their programs actually run in the field.",
  },
  {
    type: "heading",
    text: "Human-centered at scale",
  },
  {
    type: "paragraph",
    text: "Learners and instructors had different needs, and different tolerance for complexity. We ran contextual inquiry with both groups, then designed separate experiences that share a single data model. The admin team received tooling to configure cohorts, policies, and reporting without engineering tickets for every change.",
  },
  {
    type: "image",
    src: "/work/learning-platform-detail.svg",
    alt: "Instructor dashboard with cohort schedule and learner progress overview",
    caption: "Instructor workflows designed for programs with hundreds of active learners.",
  },
  {
    type: "list",
    items: [
      "Cohort scheduling, live sessions, and async content in one timeline",
      "Assessment builder with rubrics and moderation queues",
      "Executive reporting for client HR teams",
      "Migration plan from legacy data with zero downtime cutover",
    ],
  },
  {
    type: "quote",
    text: "Our instructors finally have software that matches how we teach, not the other way around.",
    cite: "James Okonkwo, Head of Product · Atlas Learning",
  },
];

const fintechBody: ContentBlock[] = [
  {
    type: "paragraph",
    text: "A regulated fintech startup needed onboarding that satisfied compliance reviewers and still felt approachable to first-time users. We led UX research, service design, and implementation of the end-to-end flow, from identity verification through account activation.",
  },
  {
    type: "heading",
    text: "Clarity under constraint",
  },
  {
    type: "paragraph",
    text: "Every screen was mapped to audit requirements before visual design began. We prototyped with legal and risk stakeholders in the loop, reducing late-stage surprises. Event logging and admin review tools were first-class, not bolted on after launch.",
  },
  {
    type: "image",
    src: "/work/fintech-onboarding-detail.svg",
    alt: "Mobile-friendly onboarding screens with document capture step",
    caption: "Progressive disclosure keeps users oriented through a twelve-step compliance path.",
  },
];

const marketingBody: ContentBlock[] = [
  {
    type: "paragraph",
    text: "A product company preparing for launch needed a flexible marketing site their team could update without developer bottlenecks. We delivered a modular page system, brand-aligned templates, and analytics instrumentation, on an aggressive timeline tied to their announcement date.",
  },
  {
    type: "heading",
    text: "Built for the marketing team",
  },
  {
    type: "paragraph",
    text: "Editors compose pages from vetted blocks: hero, social proof, feature grids, and FAQs, with guardrails so performance and accessibility stay intact. The engineering footprint stays small: static generation, edge delivery, and clear content APIs for future integrations.",
  },
];

const consultingBody: ContentBlock[] = [
  {
    type: "paragraph",
    text: "An enterprise product organization asked for an independent view of their platform ahead of a major replatforming decision. We ran a six-week assessment covering architecture, delivery practices, reliability, and team structure, then delivered a prioritized roadmap their leadership could fund with confidence.",
  },
  {
    type: "heading",
    text: "What the engagement produced",
  },
  {
    type: "list",
    items: [
      "Current-state architecture maps and risk register",
      "Reliability review with SLO recommendations",
      "Hiring plan aligned to the twelve-month roadmap",
      "Executive readout and workshop with engineering leads",
    ],
  },
  {
    type: "quote",
    text: "The assessment was blunt where it needed to be and practical throughout, exactly the outside perspective we were missing.",
    cite: "Director of Engineering · Fortune 500 retail group",
  },
];

export const workProjects: WorkProject[] = [
  {
    slug: "communn-creator-commerce-platform",
    number: "02",
    title: "Architecting a Multi-Role Creator Commerce Platform",
    subtitle: "Embedded product engineer for a multi-role influencer and brand commerce platform.",
    category: "Platform Engineering",
    description:
      "Served as a full stack product engineer at Communn.io from May 2025 to February 2026, contributing across frontend and backend development. Took ownership of production deployments, code quality, and platform stability while building core commerce infrastructure connecting brands, influencers, affiliate campaigns, and payouts.",
    excerpt:
      "Ten months embedded inside a product team, building the influencer commerce infrastructure that powers Communn from campaign creation to automated payouts.",
    client: "Communn.io",
    year: "2025 to 2026",
    engagement: "10-month embedded product engineering",
    outcome:
      "Delivered end-to-end influencer infrastructure with campaign tracking, affiliate attribution, and automated Razorpay payouts across four distinct user roles.",
    heroImage: "/work/Communn_banner.png",
    readTime: "6 min read",
    featured: true,
    body: [
      {
        type: "heading",
        text: "The Brief",
      },
      {
        type: "paragraph",
        text: "Communn.io needed a multi-role commerce platform that could connect brands and influencers across the full campaign lifecycle: from creation and affiliate tracking through to commission settlement and payout. The platform had to support four distinct user roles with isolated access patterns, a scalable product catalog on the brand side, and a complete creator experience on the influencer side.",
      },
      {
        type: "heading",
        text: "The Engagement",
      },
      {
        type: "paragraph",
        text: "This was an embedded product engineering role, not a project handoff. From May 2025 to February 2026, the work spanned the full stack: frontend interfaces, backend systems, production deployments, CI/CD pipelines, code reviews, and testing. The role required consistent cross-functional collaboration and ownership of production quality, not just feature delivery.",
      },
      {
        type: "heading",
        text: "What We Built",
      },
      {
        type: "paragraph",
        text: "On the influencer side, built the complete creator experience from scratch: onboarding flows, storefront creation, campaign marketplace access, affiliate link generation, and earnings dashboards that gave creators real visibility into their performance.",
      },
      {
        type: "paragraph",
        text: "On the brand side, developed a hierarchical CMS supporting nested product categories with bulk CSV imports, alongside a campaign management system that tracked clicks, conversions, and commission events per influencer across active campaigns.",
      },
      {
        type: "paragraph",
        text: "Designed and built the payout infrastructure using Razorpay with a 30-day settlement hold and automated payout triggers on campaign completion. Authentication was implemented with JWT across four scoped roles: brand, influencer, admin, and super admin, each with isolated API permissions.",
      },
      {
        type: "heading",
        text: "The Core Engineering Challenge",
      },
      {
        type: "paragraph",
        text: "The hardest part was modeling campaign participation, affiliate conversions, and payout states across multiple user types without tightly coupling data ownership. Solved by separating campaign entities from participation and earnings records entirely, which allowed scalable access control, cleaner reporting boundaries, and a payout system that could run independently without touching campaign state.",
      },
      {
        type: "heading",
        text: "Technologies Used",
      },
      {
        type: "paragraph",
        text: "React.js, MongoDB, TypeScript, Tailwind CSS, Material UI, Cloudinary, CI/CD",
      },
      {
        type: "heading",
        text: "How We Worked",
      },
      {
        type: "paragraph",
        text: "Worked within the existing engineering team contributing to production deployments via CI/CD pipelines, participating in code reviews with precise feedback, and collaborating on testing to reduce regressions and strengthen overall product stability. Communicated clearly across functions and delivered consistently throughout the nine-month engagement.",
      },
      {
        type: "heading",
        text: "The Outcome",
      },
      {
        type: "paragraph",
        text: "Delivered a production-grade creator commerce platform with end-to-end influencer infrastructure, automated payout flows, and a scalable multi-role architecture. The platform launched with campaign tracking, affiliate attribution, and payout automation working reliably across all four user roles.",
      },
      {
        type: "quote",
        text: "Manoj was an integral part of our engineering team. He took active ownership of production deployments and was a consistent and constructive presence in our code review process, offering precise feedback that improved the quality and maintainability of our codebase - Manjula R, Chief Business Officer, Communn.io"
      },
    ],
  },
  {
    slug: "illumora-boombooth-studios",
    number: "01",
    title: "From Zero to Two Production Platforms in Nine Months",
    subtitle: "Technical development partner for a Bengaluru wellness institute and its creator sub-brand.",
    category: "Web Platform",
    description:
      "Served as the embedded technical development partner for Illumora, a psychological wellness institute in Bengaluru, and their creator-focused sub-brand BoomBooth Studios. Over a 9-month engagement, built both digital platforms from scratch, owned architecture decisions, and provided ongoing technical guidance as both brands evolved.",
    excerpt:
      "Two brands, one engagement, nine months. Built Illumora's client acquisition surface and BoomBooth Studios' creator platform from the ground up.",
    client: "Illumora / BoomBooth Studios",
    year: "2025",
    engagement: "9-month embedded partnership",
    outcome:
      "Both brands launched with scalable digital foundations. Illumora strengthened its online credibility and client acquisition pipeline. BoomBooth Studios went live with a platform built for long-term creator growth.",
    heroImage: "/work/image.png",
    readTime: "4 min read",
    featured: true,
    body: [
      {
        type: "heading",
        text: "The Brief",
      },
      {
        type: "paragraph",
        text:
          "Illumora came in with no digital presence and a clear problem: a credible wellness brand with no surface to acquire clients online. The brief extended to BoomBooth Studios, their creator-focused sub-brand built around podcast publishing and personal branding for founders and creators. Both needed to launch, and both needed to be built right the first time.",
      },
      {
        type: "heading",
        text: "The Engagement",
      },
      {
        type: "paragraph",
        text:
          "This was not a delivery-only project. From day one, the role was to function as an embedded technical partner: scoping requirements directly with the founder, making independent architecture and tooling decisions, and staying accountable to the business outcome rather than just the deliverable. Over nine months, the engagement evolved as both brands grew, requiring ongoing technical guidance beyond the initial build.",
      },
      {
        type: "heading",
        text: "What We Built",
      },
      {
        type: "paragraph",
        text:
          "For Illumora, we built the primary website from scratch to serve as the brand's main client acquisition surface. The focus was on clear service communication, brand credibility, and a clean experience that matched the tone of a premium wellness practice.",
      },
      {
        type: "paragraph",
        text:
          "For BoomBooth Studios, we built a separate platform purpose-built for creator visibility: podcast publishing infrastructure, a personal branding layer, and a scalable content architecture that could grow with the studio's roster.",
      },
      {
        type: "heading",
        text: "How We Worked",
      },
      {
        type: "paragraph",
        text:
          "Architecture and tooling decisions were handled independently. Requirements were scoped directly with the founder without external project management overhead. Both platforms were built with maintainability as a core constraint so neither brand would be dependent on us to make routine updates or scale their content.",
      },
      {
        type: "heading",
        text: "The Outcome",
      },
      {
        type: "paragraph",
        text:
          "Both brands launched with a scalable digital foundation. Illumora strengthened its online credibility and client acquisition pipeline. BoomBooth Studios went live with a platform built for long-term creator growth rather than a short-term MVP. The engagement ran for nine months with consistent delivery and no handoff friction.",
      },
      {
        type: "quote",
        text:
          "They worked closely with us not just as a service provider, but as a partner who understood our vision and translated it into effective digital solutions. Sameeksha, Founder, Illumora.co",

      },
    ],
  },
  {
    slug: "3d-printing-headless-shopify-nextjs-platform",
    number: "03",
    title: "From Offline Pipeline to a High-Performance Digital Presence in Under 3 Weeks",
    subtitle: "Product engineering engagement for a 3D printing brand transitioning into a modern online experience.",
    category: "Web Platform",
    description:
      "Worked with a fast-growing 3D printing brand to design and ship a modern online presence within a tight 2–3 week timeline. The engagement focused on clarity of requirements, rapid validation cycles, and a headless architecture using Shopify and Next.js to balance performance, flexibility, and ease of management.",
    excerpt:
      "Helped a 3D printing brand move from offline-driven growth to a modern, scalable online presence using a headless Shopify + Next.js architecture.",
    client: "Ojas3D Creatives",
    year: "2025",
    engagement: "2–3 week rapid product build",
    outcome:
      "Delivered a validated, production-ready web experience that strengthened brand credibility and enabled the client to expand beyond their existing offline pipeline into higher-value digital opportunities.",
    heroImage:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    readTime: "3 min read",
    featured: true,

    body: [
      {
        type: "heading",
        text: "The Context",
      },
      {
        type: "paragraph",
        text:
          "A 3D printing brand approached us with a straightforward but critical problem: they already had a consistent customer pipeline, but lacked a professional digital presence that could support larger opportunities, partnerships, and credibility at scale. The challenge was not demand, but perception and positioning.",
      },
      {
        type: "heading",
        text: "The Real Problem",
      },
      {
        type: "paragraph",
        text:
          "While the business was operationally healthy, their online presence did not reflect the maturity of their work. This limited their ability to convert higher-value clients and present themselves as a modern, scalable manufacturing brand in a competitive space.",
      },
      {
        type: "heading",
        text: "The Approach",
      },
      {
        type: "paragraph",
        text:
          "Instead of jumping directly into development, the first step was structured requirement mapping. I worked closely with the client to define goals, constraints, and realistic expectations within a 2–3 week delivery window. This ensured that engineering effort was aligned with business priorities from day one.",
      },
      {
        type: "heading",
        text: "Technology Decisions",
      },
      {
        type: "paragraph",
        text:
          "To balance speed, scalability, and ease of content management, I chose a headless architecture built on Shopify and Next.js. This combination allowed us to separate commerce logic from the frontend experience while maintaining performance and flexibility.",
      },
      {
        type: "paragraph",
        text:
          "Shopify was used as the commerce and content source, while Next.js handled the frontend experience with a focus on speed, SEO, and modern UI structure.",
      },
      {
        type: "heading",
        text: "How We Structured Delivery",
      },
      {
        type: "paragraph",
        text:
          "The project was split into two clear phases to reduce uncertainty and improve alignment with the client, especially since they were new to structured product development.",
      },
      {
        type: "paragraph",
        text:
          "Phase 1 focused on building a working sample version of the website to help the client visualize the product early and provide feedback before final implementation decisions were locked.",
      },
      {
        type: "paragraph",
        text:
          "Phase 2 involved refining scope based on feedback, clearly communicating technical constraints, and proceeding with the final build after validating direction and expectations.",
      },
      {
        type: "heading",
        text: "Execution Philosophy",
      },
      {
        type: "paragraph",
        text:
          "The core principle throughout the engagement was to avoid premature implementation. Instead of writing code immediately, the focus stayed on clarity, validation, and ensuring that what was being built actually matched the business need.",
      },
      {
        type: "paragraph",
        text:
          "This reduced rework, improved decision-making speed, and ensured that the final output was both practical and aligned with the client’s operational reality.",
      },
      {
        type: "heading",
        text: "Outcome",
      },
      {
        type: "paragraph",
        text:
          "The final product gave the brand a credible, modern digital presence that better reflected their capabilities. More importantly, it positioned them to move beyond an offline-driven pipeline and start engaging with higher-value digital opportunities.",
      },
      {
        type: "paragraph",
        text:
          "The engagement demonstrated that even under tight timelines, structured thinking and early validation can produce production-ready outcomes without compromising quality.",
      },
      {
        type: "quote",
        text:
          "The collaboration felt structured and dependable throughout the engagement. From implementation quality to technical support, the work helped strengthen our digital presence across both brands - Founder, Ojas3D Creatives.",
      },
    ],
  }
];

export const caseStudies = workProjects.filter((p) => p.featured);

export const recentWork = workProjects.slice(0, 4);

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Sravan Tech Labs brought strong technical ownership to the team and consistently contributed with clarity, reliability, and solid execution across development initiatives.",
    name: "Team Communn",
    role: "Product & Engineering",
    company: "Communn.io",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "We partnered with Sravan Tech Labs to build and launch the e-commerce store for Ojas3D Creatives, and we are very happy and satisfied with the results. Their attention to detail, technical expertise, and excellent post-launch support made the entire transition effortless. A truly reliable company that delivers on its promises!",
    name: "Team Ojas3D Creatives",
    role: "Ecommerce Launch",
    company: "Ojas3D Creatives",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "The collaboration felt structured and dependable throughout the engagement. From implementation quality to technical support, the work helped strengthen our digital presence across both brands.",
    name: "Team Illumora",
    role: "Operations & Brand",
    company: "Illumora & BoomBooth Studios",
    rating: 5,
  },
  {
    id: "4",
    quote:
      "Working with Sravan Tech Labs on my book launch landing page was a great experience. They delivered a clean, elegant website that perfectly matched my vision and helped present my work professionally. Highly recommended for anyone looking for reliable web development support.",
    name: "Vamsi Kalle",
    role: "Author",
    company: "Independent Author",
    rating: 5,
  },
];

export function getProjectBySlug(slug: string): WorkProject | undefined {
  return workProjects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return workProjects.map((p) => p.slug);
}
