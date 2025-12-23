import { Rocket } from "lucide-react";

const CountdownSection = () => {
  return (
    <section className="relative py-16 px-6">
      <div className="max-w-2xl mx-auto text-center opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-cosmic-purple/10 border border-cosmic-purple/30 mb-6">
          <div className="w-3 h-3 rounded-full bg-cosmic-gold animate-pulse" />
          <span className="text-sm font-medium text-foreground">
            Limited Early Access Opening Shortly
          </span>
        </div>
        
        <div className="flex items-center justify-center gap-4">
          <Rocket className="w-8 h-8 text-cosmic-purple animate-float" />
          <h3 className="font-display text-2xl md:text-3xl cosmic-text-gradient">
            Launching Soon
          </h3>
          <Rocket className="w-8 h-8 text-cosmic-purple animate-float" style={{ animationDelay: "0.5s" }} />
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
