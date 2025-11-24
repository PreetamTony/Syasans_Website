import { useEffect, useRef, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Trophy, Medal, Star, Target, Award as AwardIcon, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/HeroSection";
import { motion, Variants } from "framer-motion";
import { Footer } from "@/components/Footer";
import assessment from "/assets/Assesment.png";
import groupImage from "/assets/Group.jpg";
import syasansLogo from "/assets/syasans-logo.png";
// Component for individual association card with parallax effect
const AssociationCard = ({ index, src, alt, title }) => {
  const ref = useRef(null);
  const isEven = index % 2 === 0;
  
  // Animation variants for a clean spread effect from center
  const cardVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
      y: 20
    },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        delay: i * 0.08, // Staggered delay based on index
        duration: 0.5
      }
    }),
    hover: {
      y: -5,
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover="hover"
      custom={index}
      variants={cardVariants}
      className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 h-full"
    >
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 md:w-40 md:h-40 relative mb-4">
          <img 
            src={src} 
            alt={alt}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
        <p className="text-center text-sm md:text-base font-medium text-gray-700 mt-2">
          {title}
        </p>
      </div>
    </motion.div>
  );
};

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
        
        {/* Main Content Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24 scroll-reveal">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full -z-10"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/5 rounded-full -z-10"></div>
                
                <span className="inline-block text-primary font-medium mb-3 text-sm uppercase tracking-wider">Who We Are</span>
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  About SYASAN'S
                </h2>
                <div className="w-20 h-1 bg-primary mb-6"></div>
                
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-gray-700">
                    Syasan's Career Analytics has emerged as a frontrunner in the employability training landscape, offering a comprehensive, data-driven framework that equips students with essential skills required to thrive in today's job market. Employers expect behavioural maturity, digital proficiency, and workplace readiness — and Syasan delivers all of these with precision.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    The foundation lies in its scientifically designed assessment methodology using psychometrics, competency mapping and behavioural analysis. Institutions gain deep insights into every learner's abilities, strengths and development needs.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative z-10">
                  <img 
                    src={groupImage}
                    alt="Syasan's Team"
                    className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto border-4 border-white"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-6 -right-6 w-full h-full bg-primary/10 rounded-2xl -z-10"></div>
                </div>
                <div className="absolute -top-6 -left-6 w-32 h-32">
                  
                </div>
              </motion.div>
            </div>

            {/* Training Modules Section with Assessment Image */}
            <div className="py-20 relative">
              <div className="container mx-auto px-6">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                    Holistic Training Ecosystem
                  </h2>
                  <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Our comprehensive training modules are designed to develop well-rounded professionals
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Behavioural Assessment",
                        description: "Communication, cognitive ability, digital skills, professional behaviour.",
                        icon: (
                          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                          </svg>
                        )
                      },
                      {
                        title: "Software Training",
                        description: "Digital skills, logic building, industry-relevant computing fundamentals.",
                        icon: (
                          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                          </svg>
                        )
                      },
                      {
                        title: "Aptitude Skills",
                        description: "Quantitative reasoning, analytics, logical problem solving.",
                        icon: (
                          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                          </svg>
                        )
                      },
                      {
                        title: "Soft Skills",
                        description: "Teamwork, adaptability, emotional intelligence, communication.",
                        icon: (
                          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                          </svg>
                        )
                      }
                    ].map((item, index) => (
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
                            damping: 15,
                            delay: index * 0.1
                          }
                        }}
                        whileHover={{
                          y: -8,
                          transition: { duration: 0.3, ease: 'easeOut' }
                        }}
                        viewport={{ once: true, margin: '-50px' }}
                        className="group relative overflow-hidden p-6 rounded-2xl backdrop-blur-lg bg-white/70 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] transition-all duration-500"
                      >
                        {/* Animated background highlight on hover */}
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 -z-10"
                          transition={{ duration: 0.6, ease: 'easeOut' }}
                        />
                        
                        {/* Icon with floating animation */}
                        <motion.div 
                          className="w-12 h-12 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm flex items-center justify-center mb-5 text-primary"
                          whileHover={{
                            rotate: [0, 5, -5, 0],
                            transition: { duration: 0.6 }
                          }}
                        >
                          {item.icon}
                        </motion.div>
                        
                        <motion.h3 
                          className="text-lg font-semibold mb-3 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
                          whileHover={{
                            scale: 1.02,
                            x: 2,
                            transition: { duration: 0.3 }
                          }}
                        >
                          {item.title}
                        </motion.h3>
                        
                        <motion.p 
                          className="text-gray-600 text-sm leading-relaxed"
                          initial={{ opacity: 0.8 }}
                          whileHover={{
                            opacity: 1,
                            x: 2,
                            transition: { duration: 0.3 }
                          }}
                        >
                          {item.description}
                        </motion.p>
                        
                        {/* Subtle border highlight on hover */}
                        <motion.div 
                          className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 -z-20"
                          transition={{ duration: 0.4 }}
                        />
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div 
                    className="relative"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative z-10">
                      <img 
                        src={assessment}
                        alt="Training Ecosystem"
                        className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto border-4 border-white"
                        loading="lazy"
                      />
                      <div className="absolute -bottom-6 -right-6 w-full h-full bg-primary/10 rounded-2xl -z-10"></div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Leadership Section */}
            <div className="py-16 bg-primary/5 rounded-2xl p-8 my-12">
              <h2 className="text-3xl font-bold mb-6 text-center">Industry Leadership & Excellence</h2>
              <p className="text-lg max-w-4xl mx-auto leading-relaxed text-center">
                Syasan has established itself as one of the most trusted players in the employability training 
                sector, known for high-quality curriculum, measurable outcomes, and industry-aligned methodologies.
                Backed by real-time labour market insights and global best practices, our solutions empower institutions
                to elevate their student success and placement performance.
              </p>
            </div>

            {/* Dashboard Section */}
            <div className="relative py-20 overflow-hidden">
              <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <motion.div 
                    className="order-2 md:order-1"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
                      Analytics & Insights
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                      Smart Institutional Dashboards
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Track student performance, cohort readiness, training progress and placement metrics
                      through intuitive dashboards — enabling data-driven decisions and academic excellence.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {[
                        { text: 'Real-time Analytics', icon: '📊' },
                        { text: 'Performance Metrics', icon: '📈' },
                        { text: 'Progress Tracking', icon: '✅' },
                        { text: 'Custom Reports', icon: '📋' }
                      ].map((item, i) => (
                        <span key={i} className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-white/50 backdrop-blur-sm border border-gray-100 shadow-sm">
                          <span className="mr-1.5">{item.icon}</span>
                          {item.text}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="relative order-1 md:order-2 group"
                    initial={{ opacity: 0, y: 30, scale: 0.98 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      transition: { 
                        type: 'spring', 
                        stiffness: 100, 
                        damping: 15,
                        delay: 0.3
                      }
                    }}
                    viewport={{ once: true, margin: '0px 0px -50px 0px' }}
                  >
                    {/* Simple container matching assessment image style */}
                    <div className="relative z-10">
                      <img 
                        src="/assets/Dashboard.png"
                        alt="Syasan's Analytics Dashboard"
                        className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto border-4 border-white"
                        loading="lazy"
                      />
                      <div className="absolute -bottom-6 -right-6 w-full h-full bg-primary/10 rounded-2xl -z-10"></div>
                    </div>
                    
                    {/* Floating decorative elements */}
                    <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/10 rounded-full -z-10 group-hover:scale-110 transition-all duration-700 group-hover:rotate-12"></div>
                    <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary/10 rounded-full -z-10 group-hover:scale-110 transition-all duration-700 group-hover:-rotate-12"></div>
                    
                    {/* Subtle border highlight */}
                    <motion.div 
                      className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 -z-20"
                      transition={{ duration: 0.4 }}
                    />
                  </motion.div>
                </div>
              </div>
              {/* Background elements */}
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full -z-10"></div>
              <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-secondary/5 rounded-full -z-10"></div>
            </div>

            {/* Student Transformation */}
            <div className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl text-center my-12">
              <h2 className="text-3xl font-bold mb-4">Student Transformation</h2>
              <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
                Syasan enables students to understand their strengths, behavioural patterns and
                career pathways — making them confident, industry-ready professionals.
              </p>
            </div>

            {/* Summary Section */}
            <div className="py-12 text-center px-6 bg-white rounded-2xl shadow-sm">
              <p className="max-w-4xl mx-auto text-xl text-foreground font-medium leading-relaxed">
                In summary, Syasan offers behavioural assessment, software training, aptitude enhancement 
                and soft skill development — creating well-rounded, future-ready professionals.
              </p>
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
                  Accomplishments
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
