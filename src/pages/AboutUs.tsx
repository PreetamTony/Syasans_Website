import { useEffect, useRef, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/HeroSection";

export default function AboutUs() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Scroll-triggered animations
      const reveals = document.querySelectorAll('.scroll-reveal');
      reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          element.classList.add('revealed');
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxStyle = (factor: number = 0.5) => ({
    transform: `translateY(${scrollY * factor}px)`,
  });

  const achievements = [
    "SYASANITES - Quality Certified by Min. of Higher Education | 2018",
    "Course Content approved by TN Text Book Corporation | 2017",
    "SYASAN'S has great aspirations - Min. of Rural Industries | 2018",
    "The training program is very specific - Min. of School Education | 2018",
    "Ranked in 500 outperforming companies by Benchmark Trust and TQV | 2019",
    "An ISO 9001:2008 Certified Institution",
    "Aptitude assessment Test Engine for practice tests (5000+ Actual Questions)"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection
        title="ABOUT"
        highlight="US"
        tag="OUR STORY"
        subtitle="Empowering careers through innovative education and training solutions"
      />

      {/* About Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16 scroll-reveal">
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              Syasan's Career Analytics Technology Solutions is an educational startup committed to deliver best in class educational services. A diverse company of 20 young professionals deliver training programs focusing on practical, experiential and professional skills designed to enrich the participant's skill sets.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mt-6">
              We have been helping to transform students countrywide since the inception of the company. At the heart of our approach is the goal of making India, The Global Learning Capital.
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] scroll-reveal"
                style={{
                  transitionDelay: `${index * 100}ms`,
                  transform: 'translateY(20px)',
                  opacity: 0,
                }}
              >
                <CardHeader>
                  <CardTitle className="text-lg font-medium">
                    {achievement}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 scroll-reveal">
              <h3 className="text-2xl font-bold mb-4 text-primary">SYASAN'S MISSION</h3>
              <p className="text-lg text-muted-foreground">
                "To provide experiential learning through research-based pedagogy and mentor energetic minds to propel a better tomorrow".
              </p>
            </div>
            <div className="bg-secondary/5 p-8 rounded-2xl border border-secondary/10 scroll-reveal">
              <h3 className="text-2xl font-bold mb-4 text-secondary-foreground">SYASAN'S VISION</h3>
              <p className="text-lg text-muted-foreground">
                To Make India "The Global Learning Capital"
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center py-8 scroll-reveal">
            <h3 className="text-xl font-semibold mb-6">Our Associations</h3>
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="icon" className="rounded-full h-12 w-12">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full h-12 w-12">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full h-12 w-12">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax CTA */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
        }}
      >
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-900 opacity-10" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Us in Our Mission
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Be part of the movement to make India the Global Learning Capital
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            Get Started
          </Button>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .scroll-reveal {
          opacity: 0;
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .scroll-reveal.revealed {
          opacity: 1;
          transform: translateY(0) !important;
        }
        
        .glass {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
      `}</style>
    </div>
  );
}
