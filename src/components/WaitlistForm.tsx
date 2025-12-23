import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ChevronDown, ChevronUp } from "lucide-react";

const WaitlistForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [timeOfBirth, setTimeOfBirth] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [showOptional, setShowOptional] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Email required",
        description: "Please enter your email address to join the waitlist.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbzZ78Unjsah4svr8EsPRCHHGYu0yN4b3C1D0Ruh6wb2jt9G7mU1Yq0t7UqLBv41mU2M/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          email: email,
          dob: dateOfBirth,
          timeOfBirth: timeOfBirth,
          location: birthPlace,
          source: "dd-prelaunch"
        })
      });

      //await response.json();

      toast({
        title: "You're on the cosmic waitlist ✨",
        description: "We'll notify you when we launch.",
      });

      setName("");
      setEmail("");
      setDateOfBirth("");
      setTimeOfBirth("");
      setBirthPlace("");
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-24 px-6" id="waitlist">
      <div className="max-w-xl mx-auto">
        <div className="cosmic-card p-8 md:p-12 rounded-3xl opacity-0 animate-scale-in" style={{ animationDelay: "0.3s" }}>
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl md:text-3xl mb-3 text-foreground">
              Join the <span className="cosmic-text-gradient">Cosmic Waitlist</span>
            </h2>
            <p className="text-muted-foreground">
              Be the first to unlock your destiny
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full"
              />
            </div>
            
            <div>
              <Input
                type="email"
                placeholder="Email Address *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
            </div>

            <button
              type="button"
              onClick={() => setShowOptional(!showOptional)}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-full justify-center py-2"
            >
              {showOptional ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              {showOptional ? "Hide" : "Show"} birth details (optional)
            </button>

            {showOptional && (
              <div className="space-y-4 animate-fade-up">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Date of Birth
                  </label>
                  <Input
                    type="date"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Time of Birth
                  </label>
                  <Input
                    type="time"
                    value={timeOfBirth}
                    onChange={(e) => setTimeOfBirth(e.target.value)}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Birth Place
                  </label>
                  <Input
                    type="text"
                    placeholder="City, Country"
                    value={birthPlace}
                    onChange={(e) => setBirthPlace(e.target.value)}
                    className="w-full"
                  />
                </div>
              </div>
            )}

            <Button
              type="submit"
              variant="cosmicGold"
              size="xl"
              className="w-full mt-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                  Reserving Your Spot...
                </span>
              ) : (
                "Reserve My Spot"
              )}
            </Button>
          </form>

          <p className="text-center text-xs text-muted-foreground mt-6">
            Early members get exclusive access before public launch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
