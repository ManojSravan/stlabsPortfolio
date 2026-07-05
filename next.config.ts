import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { domains: ["images.unsplash.com"] },
  async redirects() {
    return [
      { source: "/work", destination: "/case-studies", permanent: true },
      { source: "/work/:slug", destination: "/case-studies/:slug", permanent: true },
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/services", destination: "/", permanent: true },
      { source: "/packages", destination: "/", permanent: true },
      { source: "/packages/:slug", destination: "/", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
    ];
  },
};

export default nextConfig;
