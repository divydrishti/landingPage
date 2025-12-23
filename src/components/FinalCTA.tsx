import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const FinalCTA = () => {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Decorative orb */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-cosmic-purple/10 to-cosmic-blue/10 blur-3xl pointer-events-none" />
        
        <div className="relative z-10 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <Sparkles className="w-12 h-12 text-cosmic-gold mx-auto mb-6 animate-float" />
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground leading-tight">
            Don't Just Read Your Horoscope.
            <br />
            <span className="cosmic-text-gradient">Experience Your Destiny.</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            A clearer, more thoughtful way to understand your life through astrology.
          </p>
          
          <Button
            variant="cosmic"
            size="xl"
            onClick={scrollToWaitlist}
            className="text-lg px-12"
          >
            Join Before Launch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
