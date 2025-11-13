import { useEffect, useRef, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/HeroSection";
import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";

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
      
      <main className="pt-20">
        {/* Hero Section */}
        <HeroSection
          title="Why"
          highlight="SYASAN'S"
          tag="OUR MISSION"
          subtitle="To Make India 'The Global Learning Capital'"
        />

      {/* About Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16 scroll-reveal">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">About SYASAN'S</h2>
              <p className="text-lg leading-relaxed text-black mb-6">
                Syasan's Career Analytics Technology Solutions is an educational startup committed to deliver best in class educational services. A diverse company of 20 young professionals deliver training programs focusing on practical, experiential and professional skills designed to enrich the participant's skill sets.
              </p>
              <p className="text-lg leading-relaxed text-black">
                We have been helping to transform students countrywide since the inception of the company. At the heart of our approach is the goal of making India, The Global Learning Capital.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://syasans.com/wp-content/uploads/2024/07/Untitled-design-1-1536x1536.png" 
                alt="SYASAN'S About Us"
                className="rounded-2xl shadow-lg w-full max-w-md h-auto"
                loading="lazy"
              />
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-black text-center mb-12">Our Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-white/80 hover:bg-white transition-all duration-300 h-full">
                    <CardHeader>
                      <CardTitle className="text-lg font-medium text-black">
                        {achievement}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="space-y-12 mb-20 max-w-3xl mx-auto">
            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 scroll-reveal">
              <h3 className="text-2xl font-bold mb-4 text-primary text-center">SYASAN'S MISSION</h3>
              <p className="text-lg text-muted-foreground">
                "To provide experiential learning through research-based pedagogy and mentor energetic minds to propel a better tomorrow".
              </p>
            </div>
            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 scroll-reveal">
              <h3 className="text-2xl font-bold mb-4 text-primary text-center">SYASAN'S VISION</h3>
              <p className="text-lg text-muted-foreground text-center">
                To Make India "The Global Learning Capital"
              </p>
            </div>
          </div>

         
       
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
      </main>
      <Footer />
    </div>
  );
}
