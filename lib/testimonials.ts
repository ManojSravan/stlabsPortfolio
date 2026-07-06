export type SocialPlatform = "google" | "linkedin";

export type SocialTestimonial = {
  id: string;
  platform: SocialPlatform;
  quote: string;
  name: string;
  role: string;
  rating: number;
};

export const socialTestimonials: SocialTestimonial[] = [
  {
    id: "google-1",
    platform: "google",
    quote:
      "We partnered with Sravan Tech Labs to build our e-commerce store and are very happy with the results. Excellent post-launch support and a truly reliable team.",
    name: "Vikram",
    role: "Founder, Ojas3D Creatives",
    rating: 5,
  },
  {
    id: "linkedin-1",
    platform: "linkedin",
    quote:
      "Brought strong technical ownership to the team: clarity, reliability, and solid execution across every development initiative.",
    name: "Ranjith",
    role: "Sr Engineer, Communn",
    rating: 5,
  },
  {
    id: "google-2",
    platform: "google",
    quote:
      "Delivered a clean, elegant website that perfectly matched my vision. Highly recommended for anyone looking for reliable web development support.",
    name: "Vamsi Kalle",
    role: "Author",
    rating: 5,
  },
  {
    id: "linkedin-2",
    platform: "linkedin",
    quote:
      "Structured and dependable throughout. From implementation quality to technical support, the work strengthened our digital presence across both brands.",
    name: "Sameeksha PN",
    role: "Founder, Illumora",
    rating: 5,
  },
];
