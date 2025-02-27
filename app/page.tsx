import HeroSection from "@/components/home/Hero";
import StatsSection from "@/components/home/StatsSection";
import FeaturedNFTs from "@/components/home/FeaturedNFTs";
import AboutSection from "@/components/home/AboutSection";
import TeamSection from "@/components/home/TeamSection";
import CommunitySection from "@/components/home/CommunitySection";
export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturedNFTs />
      <AboutSection />
      <TeamSection />
      <CommunitySection />
    </>
  );
}
