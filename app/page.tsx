import RecentWork from "@/components/sections/RecentWork";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import HomeClients from "@/components/sections/home/HomeClients";
import HomeCTA from "@/components/sections/home/HomeCTA";
import HomeFAQs from "@/components/sections/home/HomeFAQs";
import HomeHero from "@/components/sections/home/HomeHero";
import HomeHowWeWork from "@/components/sections/home/HomeHowWeWork";
import HomeStats from "@/components/sections/home/HomeStats";

export default function Index() {
  return (
    <>
      <HomeHero />
      <HomeStats />

      <RecentWork />

      <HomeClients />

      <HomeHowWeWork />

      <Testimonials />

      <Pricing />

      <HomeFAQs />

      <HomeCTA />
    </>
  );
}
