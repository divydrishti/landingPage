import { Shield, Brain, Lock } from "lucide-react";

const trustPoints = [
  {
    icon: Shield,
    text: "Rooted in authentic Vedic astrology",
  },
  {
    icon: Brain,
    text: "Built with AI + deep astrological knowledge",
  },
  {
    icon: Lock,
    text: "Your data is private & secure",
  },
];

const TrustSection = () => {
  return (
    <section className="relative py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="cosmic-card p-8 md:p-12 rounded-3xl opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {trustPoints.map((point) => (
              <div
                key={point.text}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <point.icon className="w-5 h-5 text-cosmic-gold flex-shrink-0" />
                <span className="text-sm md:text-base">{point.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
