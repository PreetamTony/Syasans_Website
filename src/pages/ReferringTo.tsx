import { useEffect, useRef, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Twitter, Mail } from "lucide-react";
import { Award, Trophy, Medal, Star, Target, Award as AwardIcon, CheckCircle } from "lucide-react";
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
    {
      text: "SYASANITES - Quality Certified by Min. of Higher Education | 2018",
      icon: <Trophy className="w-5 h-5" />
    },
    {
      text: "Course Content approved by TN Text Book Corporation | 2017",
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      text: "SYASAN'S has great aspirations - Min. of Rural Industries | 2018",
      icon: <Star className="w-5 h-5" />
    },
    {
      text: "The training program is very specific - Min. of School Education | 2018",
      icon: <Target className="w-5 h-5" />
    },
    {
      text: "Ranked in 500 outperforming companies by Benchmark Trust and TQV | 2019",
      icon: <AwardIcon className="w-5 h-5" />
    },
    {
      text: "An ISO 9001:2008 Certified Institution",
      icon: <Medal className="w-5 h-5" />
    },
    {
      text: "Aptitude assessment Test Engine for practice tests (5000+ Actual Questions)",
      icon: <Award className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <HeroSection
          title="Why"
          highlight="SYASAN'S"
          tag=""
          subtitle="To Make India 'The Global Learning Capital'"
        />

      {/* About Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16 scroll-reveal">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">About SYASAN'S</h2>
              <p className="text-lg leading-relaxed text-black mb-6">
                Syasan's Career Analytics Technology Solutions is an educational startup committed to deliver best in class educational services. A diverse company of 100+ professionals deliver training programs focusing on practical, experiential and professional skills designed to enrich the participant's skill sets.
              </p>
              <p className="text-lg leading-relaxed text-black">
                We have been helping to transform students countrywide since the inception of the company. At the heart of our approach is the goal of making India, The Global Learning Capital.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="public/assets/Group.jpg" 
                alt="SYASAN'S About Us"
                className="rounded-2xl shadow-lg w-full max-w-md h-auto"
                loading="lazy"
              />
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="relative py-16 mb-20 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0icGF0dGVybiIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj4KICAgIDxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9InJnYmEoMCwgMCwgMCwgMC4wNSkiLz4KICA8L3BhdHRlcm4+CjwvZGVmcz4KPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPgo8L3N2Zz4=')] opacity-30"></div>
            </div>

            <div className="container mx-auto px-6 relative">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <span className="inline-block text-primary font-medium mb-3 text-sm uppercase tracking-wider">Our Journey</span>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  Milestones & Achievements
                </h2>
                <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Celebrating our journey of excellence and innovation in education
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      transition: { 
                        type: 'spring', 
                        stiffness: 100, 
                        damping: 10,
                        delay: index * 0.1
                      } 
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                    whileHover={{ 
                      y: -5,
                      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                      transition: { duration: 0.3 }
                    }}
                    className="group"
                  >
                    <Card className="bg-white/90 backdrop-blur-sm border border-gray-100/50 h-full transition-all duration-300 group-hover:border-primary/20 group-hover:bg-white hover:shadow-md">
                      <CardHeader className="relative pb-12">
                        <div className="absolute -top-6 left-6 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                          <span className="text-xl font-bold">0{index + 1}</span>
                        </div>
                        <CardTitle className="text-lg font-semibold text-foreground pt-6 pr-6">
                          {achievement.text}
                        </CardTitle>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </div>
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
