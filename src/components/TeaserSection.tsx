import { Sparkles, MessageCircle, Moon, Star } from "lucide-react";

const teaserItems = [
  {
    icon: Sparkles,
    title: "AI-Generated Kundli Insights",
    description: "Ancient wisdom meets modern AI",
  },
  {
    icon: MessageCircle,
    title: "Chat-based Astrology Guidance",
    description: "Ask anything, get cosmic answers",
  },
  {
    icon: Moon,
    title: "Personalized Daily Cosmic Alerts",
    description: "Your stars, your schedule",
  },
  {
    icon: Star,
    title: "Remedies, Predictions & Life Guidance",
    description: "Complete astrological experience",
  },
];

const TeaserSection = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4 cosmic-text-gradient">
            What's Coming
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're building something powerful. Details will be revealed soon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teaserItems.map((item, index) => (
            <div
              key={item.title}
              className="cosmic-card p-6 rounded-2xl text-center group hover:scale-105 transition-all duration-500 opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cosmic-purple/20 to-cosmic-blue/20 flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-500">
                <item.icon className="w-8 h-8 text-cosmic-gold" />
              </div>
              <h3 className="font-display text-lg mb-2 text-foreground">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeaserSection;
