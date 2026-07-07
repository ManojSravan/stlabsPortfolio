import { clientQuotes } from "@/lib/client-quotes";

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
    quote: clientQuotes.ojas3d.quote,
    name: clientQuotes.ojas3d.name,
    role: `${clientQuotes.ojas3d.role}, ${clientQuotes.ojas3d.company}`,
    rating: 5,
  },
  {
    id: "linkedin-1",
    platform: "linkedin",
    quote: clientQuotes.communn.quote,
    name: clientQuotes.communn.name,
    role: `${clientQuotes.communn.role}, ${clientQuotes.communn.company}`,
    rating: 5,
  },
  {
    id: "google-2",
    platform: "google",
    quote: clientQuotes.vamsi.quote,
    name: clientQuotes.vamsi.name,
    role: clientQuotes.vamsi.role,
    rating: 5,
  },
  {
    id: "linkedin-2",
    platform: "linkedin",
    quote: clientQuotes.illumora.quote,
    name: clientQuotes.illumora.name,
    role: `${clientQuotes.illumora.role}, ${clientQuotes.illumora.company}`,
    rating: 5,
  },
];
