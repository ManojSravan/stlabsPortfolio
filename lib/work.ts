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
    slug: "commerce-platform",
    number: "01",
    title: "Replatforming commerce for a scaling D2C brand",
    subtitle: "Ecommerce & Web",
    category: "Ecommerce",
    description:
      "End-to-end storefront and operations rebuild for a brand preparing for international expansion.",
    excerpt:
      "How we helped Northline Commerce shorten checkout, empower their marketing team, and launch a headless storefront without pausing revenue.",
    client: "Northline Commerce",
    year: "2025",
    engagement: "Product strategy · Design · Engineering",
    outcome: "34% lift in completed purchases post-launch",
    heroImage: "/work/commerce-platform.svg",
    readTime: "6 min read",
    featured: true,
    body: commerceBody,
  },
  {
    slug: "saas-analytics",
    number: "02",
    title: "Enterprise-ready analytics from pilot to scale",
    subtitle: "SaaS Development",
    category: "SaaS",
    description:
      "Embedded product team shipping multi-tenant workspaces, billing, and reporting for a B2B analytics company.",
    excerpt:
      "A seed-stage analytics company needed to look enterprise-ready for pilots, we delivered the product foundation and the hiring playbook to match.",
    client: "Confidential B2B SaaS",
    year: "2024",
    engagement: "Embedded product squad",
    outcome: "Three enterprise pilots signed within two quarters",
    heroImage: "/work/saas-analytics.svg",
    readTime: "5 min read",
    featured: true,
    body: saasBody,
  },
  {
    slug: "learning-platform",
    number: "03",
    title: "Cohort-based learning platform for global training",
    subtitle: "Learning Platforms",
    category: "EdTech",
    description:
      "Full LMS rebuild aligning live instruction, assessments, and admin tooling for programs at scale.",
    excerpt:
      "Atlas Learning replaced a rigid legacy LMS with software instructors actually want to use, across thousands of learners per cohort.",
    client: "Atlas Learning",
    year: "2024",
    engagement: "Product design · Platform engineering",
    outcome: "60% reduction in instructor support tickets",
    heroImage: "/work/learning-platform.svg",
    readTime: "7 min read",
    featured: true,
    body: learningBody,
  },
  {
    slug: "fintech-onboarding",
    number: "04",
    title: "Regulated onboarding for a fintech launch",
    subtitle: "SaaS Development",
    category: "Fintech",
    description:
      "Compliance-first onboarding and admin review tooling for a regulated financial product.",
    excerpt:
      "Balancing KYC requirements with a calm user experience, and giving operations teams visibility every step of the way.",
    client: "Meridian Pay",
    year: "2024",
    engagement: "UX research · Service design · Build",
    outcome: "Onboarding completion up 28% in first 90 days",
    heroImage: "/work/fintech-onboarding.svg",
    readTime: "4 min read",
    featured: true,
    body: fintechBody,
  },
  {
    slug: "marketing-site",
    number: "05",
    title: "Launch-ready marketing system for a product debut",
    subtitle: "Ecommerce & Web",
    category: "Marketing",
    description:
      "Modular site and content workflow shipped ahead of a time-sensitive product announcement.",
    excerpt:
      "A block-based marketing site their team could own, fast, on-brand, and instrumented for launch week decisions.",
    client: "Series B productivity startup",
    year: "2025",
    engagement: "Design systems · Web engineering",
    outcome: "Launch delivered on a fixed ten-day window",
    heroImage: "/work/marketing-site.svg",
    readTime: "3 min read",
    body: marketingBody,
  },
  {
    slug: "architecture-audit",
    number: "06",
    title: "Platform assessment for an enterprise product org",
    subtitle: "Tech Consultancy",
    category: "Consulting",
    description:
      "Independent architecture review and twelve-month roadmap for a team planning a major replatform.",
    excerpt:
      "Six weeks of structured assessment across architecture, reliability, and delivery, ending in a roadmap leadership could fund.",
    client: "Fortune 500 retail group",
    year: "2023",
    engagement: "Architecture · Strategy",
    outcome: "Roadmap adopted with executive sponsorship",
    heroImage: "/work/architecture-audit.svg",
    readTime: "4 min read",
    body: consultingBody,
  },
];

export const caseStudies = workProjects.filter((p) => p.featured);

export const recentWork = workProjects.slice(0, 4);

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "They operated as a true product partner, sharp discovery, honest scoping, and delivery our team could sustain long after the engagement ended.",
    name: "Priya Sharma",
    role: "Co-founder",
    company: "Northline Commerce",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "Our instructors finally have software that matches how we teach. The rollout was disciplined, and learner satisfaction scores moved within the first term.",
    name: "James Okonkwo",
    role: "Head of Product",
    company: "Atlas Learning",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "Senior people in every meeting, clear trade-offs, and a handoff that did not leave us dependent. Exactly what we expect from a studio at this level.",
    name: "Elena Vasquez",
    role: "CTO",
    company: "Meridian Pay",
    rating: 5,
  },
];

export function getProjectBySlug(slug: string): WorkProject | undefined {
  return workProjects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return workProjects.map((p) => p.slug);
}
