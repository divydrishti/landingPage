import { Button } from "@/components/ui/button";
import { Stars } from "lucide-react";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
      {/* Floating cosmic orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-cosmic-purple/20 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-cosmic-blue/15 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-cosmic-gold/10 blur-2xl animate-float" style={{ animationDelay: "4s" }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 backdrop-blur-sm mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <Stars className="w-4 h-4 text-cosmic-gold" />
          <span className="text-sm text-muted-foreground">Coming Soon</span>
        </div>

        {/* Logo / Brand */}
        <div className="flex items-center justify-center mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <img src={logo} alt="DivyDrishti" className="h-36 md:h-48 w-auto" />
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <span className="text-foreground">Your Future Is</span>
          <br />
          <span className="cosmic-text-gradient">About to Be Revealed</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 opacity-0 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          Personalized astrology powered by ancient wisdom and modern AI.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <Button
            variant="cosmicGold"
            size="xl"
            onClick={scrollToWaitlist}
            className="min-w-[200px]"
          >
            Get Early Access
          </Button>
          <Button
            variant="cosmicOutline"
            size="xl"
            onClick={scrollToWaitlist}
            className="min-w-[200px]"
          >
            Join the Cosmic Waitlist
          </Button>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
