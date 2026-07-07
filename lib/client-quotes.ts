export type ClientQuote = {
  quote: string;
  cite: string;
  name: string;
  role: string;
  company: string;
};

export const clientQuotes = {
  communn: {
    quote:
      "Manoj was an integral part of our engineering team. He took active ownership of production deployments and was a consistent and constructive presence in our code review process, offering precise feedback that improved the quality and maintainability of our Product.",
    cite: "Manjula R, Chief Business Officer, Communn.io",
    name: "Manjula R",
    role: "Chief Business Officer",
    company: "Communn.io",
  },
  illumora: {
    quote:
      "They worked closely with us not just as a service provider, but as a partner who understood our vision and translated it into effective digital solutions.",
    cite: "Sameeksha, Founder, Illumora.co",
    name: "Sameeksha PN",
    role: "Founder",
    company: "Illumora",
  },
  ojas3d: {
    quote:
      "We partnered with Sravan Tech Labs to build and launch the e-commerce store for Ojas3D Creatives, and we are very happy and satisfied with the results. Their attention to detail, technical expertise, and excellent post-launch support made the entire transition effortless. A truly reliable company that delivers on its promises!",
    cite: "Founder, Ojas3D Creatives",
    name: "Vikram",
    role: "Founder",
    company: "Ojas3D Creatives",
  },
  vamsi: {
    quote:
      "Working with Sravan Tech Labs on my book launch landing page was a great experience. They delivered a clean, elegant website that perfectly matched my vision and helped present my work professionally. Highly recommended for anyone looking for reliable web development support.",
    cite: "Vamsi Kalle, Author",
    name: "Vamsi Kalle",
    role: "Author",
    company: "Independent Author",
  },
} as const satisfies Record<string, ClientQuote>;
