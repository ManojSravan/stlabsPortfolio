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
    slug: "creator-commerce-platform",
    number: "01",
    title: "Building a creator commerce platform for brands and influencers",
    subtitle: "Ecommerce & Platform Engineering",
    category: "Ecommerce",
    description:
      "Multi-role commerce infrastructure connecting brands, influencers, affiliate campaigns, and payouts in a unified platform.",
    excerpt:
      "Built scalable campaign, affiliate, and payout systems enabling brands and creators to collaborate through tracked commerce workflows.",
    client: "Creator Commerce Platform",
    year: "2025 – 2026",
    engagement: "Platform Engineering · Product Architecture · Backend Systems",
    outcome: "Built end-to-end influencer infrastructure with campaign tracking and automated payouts",
    heroImage: "/work/Communn_banner.png",
    readTime: "6 min read",
    featured: true,
    body: [
      {
        type: "paragraph",
        text: "Associated with Sravan Tech Labs.",
      },
      {
        type: "paragraph",
        text: "A multi-role platform connecting brands and influencers across campaign creation, affiliate tracking, and payout management. Built the influencer side from scratch and key operational modules on the brand side.",
      },
      {
        type: "paragraph",
        text: "Built the complete influencer experience including onboarding, storefront creation, campaign marketplace access, affiliate link generation, and earnings dashboards. On the brand side, developed a hierarchical CMS supporting nested product categories with bulk CSV imports alongside a campaign management system tracking clicks, conversions, and commission events per influencer.",
      },
      {
        type: "paragraph",
        text: "Designed the payout system using Razorpay integration with a 30-day settlement hold and automated payout triggers after campaign completion. Implemented JWT-based authentication with four distinct roles: brand, influencer, admin, and super admin, each with scoped API permissions and isolated access patterns.",
      },
      {
        type: "paragraph",
        text: "One of the core engineering challenges was modeling campaign participation, affiliate conversions, and payout states across multiple user types without tightly coupling data ownership. Solved this by separating campaign entities from participation and earnings records, allowing scalable access control and cleaner reporting boundaries.",
      },
    ],
  },
  {
    slug: "illumora-platform",
    number: "02",
    title: "Digital platform implementation for a wellness and creator brand",
    subtitle: "Platform Implementation & Technical Partnership",
    category: "Digital Infrastructure",
    description:
      "Technical development partnership for a psychological wellness institute and its creator-focused media sub-brand.",
    excerpt:
      "Worked as a long-term technical partner handling architecture, implementation, and digital infrastructure decisions across multiple business initiatives.",
    client: "Illumora & BoomBooth Studios",
    year: "2024 – 2025",
    engagement: "Technical Partnership · Product Support · Web Engineering",
    outcome: "Established scalable digital infrastructure supporting brand growth and client acquisition",
    heroImage: "/work/illumora_banner.png",
    readTime: "5 min read",
    featured: true,
    body: [
      {
        type: "paragraph",
        text: "Served as the technical development partner for Illumora, a psychological wellness institute based in Bengaluru, alongside their creator-focused sub-brand BoomBooth Studios.",
      },
      {
        type: "paragraph",
        text: "Took ownership of the organization’s digital infrastructure over a 9-month engagement. Built the Illumora website from scratch to serve as the brand’s primary digital presence and client acquisition surface. Also developed BoomBooth Studios’ web platform to support podcast publishing, creator visibility, and personal branding initiatives.",
      },
      {
        type: "paragraph",
        text: "Responsibilities extended beyond implementation. Scoped requirements directly with the founder, independently handled architecture and tooling decisions, and provided ongoing technical guidance as the business evolved. Functioned as a long-term technical partner focused on execution, scalability, and operational clarity rather than operating as a delivery-only vendor.",
      },
      {
        type: "paragraph",
        text: "The engagement involved balancing evolving business requirements with maintainable implementation choices while ensuring both brands could scale their digital presence without depending on fragmented tooling or external technical coordination.",
      },
    ],
  },
];

export const caseStudies = workProjects.filter((p) => p.featured);

export const recentWork = workProjects.slice(0, 4);

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Manoj brought strong technical ownership to the team and consistently contributed with clarity, reliability, and solid execution across development initiatives.",
    name: "Team Communn",
    role: "Product & Engineering",
    company: "Communn.io",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "The collaboration felt structured and dependable throughout the engagement. From implementation quality to technical support, the work helped strengthen our digital presence across both brands.",
    name: "Team Illumora",
    role: "Operations & Brand",
    company: "Illumora & BoomBooth Studios",
    rating: 5,
  },
];

export function getProjectBySlug(slug: string): WorkProject | undefined {
  return workProjects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return workProjects.map((p) => p.slug);
}
