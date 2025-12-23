import { Zap, Gift, Crown, Star } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Early Access Before Everyone Else",
    description: "Be among the first to explore your cosmic destiny",
  },
  {
    icon: Gift,
    title: "Exclusive Launch-Only Benefits",
    description: "Special perks reserved for early believers",
  },
  {
    icon: Crown,
    title: "Priority Kundli Generation",
    description: "Skip the queue with VIP treatment",
  },
  {
    icon: Star,
    title: "Special Rewards for Early Members",
    description: "Cosmic gifts for those who trust in the stars",
  },
];

const WhyJoinSection = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4 text-foreground">
            Why Join <span className="cosmic-text-gradient">Early?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            The cosmos rewards those who act with intention
          </p>
        </div>

        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="cosmic-card p-6 rounded-2xl flex items-center gap-6 group hover:border-cosmic-purple/50 transition-all duration-500 opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="w-14 h-14 flex-shrink-0 rounded-xl bg-gradient-to-br from-cosmic-gold/20 to-cosmic-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-7 h-7 text-cosmic-gold" />
              </div>
              <div>
                <h3 className="font-display text-lg mb-1 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;
