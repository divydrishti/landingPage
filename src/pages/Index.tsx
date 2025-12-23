import StarField from "@/components/StarField";
import HeroSection from "@/components/HeroSection";
import WaitlistForm from "@/components/WaitlistForm";
import TeaserSection from "@/components/TeaserSection";
import WhyJoinSection from "@/components/WhyJoinSection";
import TrustSection from "@/components/TrustSection";
import CountdownSection from "@/components/CountdownSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <StarField />
      
      <main className="relative z-10">
        <HeroSection />
        <WaitlistForm />
        <TeaserSection />
        <WhyJoinSection />
        <TrustSection />
        <CountdownSection />
        <FinalCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
