import RecentWork from "@/components/sections/RecentWork";
import Testimonials from "@/components/sections/Testimonials";
import HomeCTA from "@/components/sections/home/HomeCTA";
import HomeHero from "@/components/sections/home/HomeHero";
 import HomeStats from "@/components/sections/home/HomeStats";
import HomeWhatWeDo from "@/components/sections/home/HomeWhatWeDo";

export default function Index() {
  return (
    <>
      <HomeHero />
      <HomeStats />
      <HomeWhatWeDo />
      <RecentWork />
     
 
      <Testimonials />
      <HomeCTA />
    </>
  );
}
