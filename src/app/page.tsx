import HeroSection from "@/components/home/HeroSection";
import ImpactSection from "@/components/home/ImpactSection";
import AwarenessSection from "@/components/home/AwarenessSection";
import AboutSection from "@/components/home/AboutSection";
import CampaignsPreview from "@/components/home/CampaignsPreview";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <HeroSection />
      <ImpactSection />
      <AwarenessSection />
      <AboutSection />
      <CampaignsPreview />
      <Testimonials />
    </main>
  );
}
