import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Award, TrendingUp, Target, Briefcase } from "lucide-react";
import { StatsCounter } from "@/components/StatsCounter";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.5}px)`,
  };

  const fadeInStyle = {
    opacity: Math.max(0, 1 - scrollY / 500),
    transform: `scale(${Math.max(0.8, 1 - scrollY / 2000)})`,
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section with Parallax */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background Gradient */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background: "var(--gradient-hero)",
            ...parallaxStyle,
          }}
        />
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center" style={fadeInStyle}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text">SYASAN'S</span>
          </h1>
          <p className="text-2xl md:text-4xl font-semibold mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Crafting Your Career to Excellence
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Transform your career journey with expert guidance, comprehensive training, and proven success strategies
          </p>
          <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="glass glass-hover border-primary/50">
              Learn More
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full p-1">
            <div className="w-1.5 h-3 bg-primary rounded-full mx-auto animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card/50" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatsCounter end={15} label="Years Experience" suffix="+" />
            <StatsCounter end={50} label="Expert Mentors" suffix="+" />
            <StatsCounter end={10000} label="Students Trained" suffix="+" />
            <StatsCounter end={95} label="Success Rate" suffix="%" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive career development solutions tailored to your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<BookOpen className="w-8 h-8" />}
              title="Career Training"
              description="Industry-leading training programs designed to enhance your professional skills and market value"
            />
            <ServiceCard
              icon={<Users className="w-8 h-8" />}
              title="Mentorship Program"
              description="One-on-one guidance from industry experts to accelerate your career growth"
            />
            <ServiceCard
              icon={<Award className="w-8 h-8" />}
              title="Certification"
              description="Recognized certifications that validate your expertise and boost your credentials"
            />
            <ServiceCard
              icon={<TrendingUp className="w-8 h-8" />}
              title="Career Analytics"
              description="Data-driven insights to track your progress and optimize your career path"
            />
            <ServiceCard
              icon={<Target className="w-8 h-8" />}
              title="Placement Support"
              description="Dedicated placement assistance with our network of 500+ partner companies"
            />
            <ServiceCard
              icon={<Briefcase className="w-8 h-8" />}
              title="Interview Prep"
              description="Comprehensive interview preparation and mock sessions with real feedback"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-background" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Success <span className="gradient-text">Stories</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Hear from professionals who transformed their careers with us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Priya Sharma"
              role="Software Engineer at Google"
              content="The mentorship program was a game-changer. Within 6 months, I landed my dream job with a 150% salary increase."
              rating={5}
            />
            <TestimonialCard
              name="Rahul Verma"
              role="Data Scientist at Amazon"
              content="The career analytics helped me identify my strengths and focus areas. Best investment in my career!"
              rating={5}
            />
            <TestimonialCard
              name="Anjali Reddy"
              role="Product Manager at Microsoft"
              content="From training to placement, the entire journey was seamless. Highly recommend Syasan's to everyone!"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-glow" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to <span className="gradient-text">Transform</span> Your Career?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have achieved their career goals with Syasan's
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 group">
            Start Your Journey Today
            <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50 relative">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Syasan's. Crafting careers to excellence.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
