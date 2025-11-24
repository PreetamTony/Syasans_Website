import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Award, TrendingUp, Target, Briefcase } from "lucide-react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Timeline } from '@/components/Timeline';
import { StatsCounter } from "@/components/StatsCounter";
import { ServiceCard } from "@/components/ServiceCard";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on component mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

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

  const stats = [
    { value: 9, label: 'Years Experience', color: 'blue', suffix: '+' },
    { value: 100, label: 'Expert Mentors', color: 'green', suffix: '+' },
    { value: 50, label: 'Corporate Clients', color: 'purple', suffix: '+' },
    { value: 5, label: 'Training Batches', color: 'orange', suffix: 'K+' },
    { value: '88K', label: 'Rated 4.5/5.0', color: 'yellow' },
    { value: 99, label: 'Project Success', color: 'teal', suffix: '%' },
    { value: 94, label: 'Client Retention', color: 'indigo', suffix: '%' },
    { value: 30, label: 'Training Hours', color: 'pink', suffix: 'K+' },
    { value: 250, label: 'Students Trained', color: 'cyan', suffix: 'K+' },
    { value: 20, label: 'Learning Centers', color: 'emerald', suffix: '+' },
    { value: 50, label: 'Pool Drives', color: 'violet', suffix: '+' },
    { value: 30, label: "MoU's", color: 'amber', suffix: '+' },
    { value: 89, label: 'Career Success', color: 'rose', suffix: '%' },
  ];

  const services = [
    { 
      icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />, 
      title: "Career Training", 
      description: "Industry-leading training programs designed to enhance your professional skills and market value",
      color: 'blue',
      image: "/assets/Classroom_setting.png"
    },
    { 
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />, 
      title: "Mentorship Program", 
      description: "One-on-one guidance from industry experts to accelerate your career growth",
      color: 'green',
      image: "/assets/mentorship.png"
    },
    { 
      icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />, 
      title: "Certification Support", 
      description: "Recognized certifications that validate your expertise and boost your credentials",
      color: 'purple',
      image: "/assets/certifications_support.png"
    },
    { 
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />, 
      title: "Career Analytics", 
      description: "Data-driven insights to track your progress and optimize your career path",
      color: 'orange',
      image: "/assets/career_analytics.png"
    },
    { 
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />, 
      title: "Placement Support", 
      description: "Dedicated placement assistance with our network of 500+ partner companies",
      color: 'red',
      image: "/assets/Job_offer.png"
    },
    { 
      icon: <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />, 
      title: "Interview Prep", 
      description: "Comprehensive interview preparation and mock sessions with real feedback",
      color: 'teal',
      image: "/assets/Interview_setting.png"
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-0 md:min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="mb-4 md:mb-6">
                <span className="inline-block px-3 py-1.5 text-xs sm:text-sm md:px-4 md:py-2 bg-blue-600 text-white rounded-full font-semibold">
                  CAREER ANALYTICS SOLUTIONS
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
                SYASAN'S
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4 md:mb-8">
                Transform Your Career with Expert Training
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6 md:mb-8 max-w-lg mx-auto md:mx-0">
                To provide experiential learning through research-based pedagogy and mentor energetic minds to propel a better tomorrow
              </p>
             
            </div>
            <div className="relative order-first md:order-last mb-10 md:mb-0 w-full max-w-lg mx-auto">
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="/assets/Coaching_place.jpg"
                  alt="Professional Career Training"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  style={{
                    maxHeight: '400px',
                    width: '100%',
                    objectPosition: 'center'
                  }}
                />
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-blue-600 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-purple-600 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Moved to appear before Stats */}
      <Timeline />

      {/* Stats Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          {/* Background gradient */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute top-40 -right-20 w-96 h-96 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-pink-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
          <div className="text-center mb-16 relative">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Proven Track Record
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Numbers that speak to our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white p-3 sm:p-4 md:p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-1 md:mb-2 text-${stat.color}-600`}>
                  <StatsCounter end={stat.value} label="" suffix={stat.suffix || ''} />
                </div>
                <p className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto mb-8 px-4">
            <h2 className="text-4xl sm:text-4xl font-bold mb-4">
              <span className="text-gray-900">Our </span>
              <span className="text-blue-600">Services</span>
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive career development solutions tailored to your success and growth in the professional world.
            </p>
          </div>

          <style jsx global>{`
            @keyframes blob {
              0% { transform: translate(0px, 0px) scale(1); }
              33% { transform: translate(30px, -50px) scale(1.1); }
              66% { transform: translate(-20px, 20px) scale(0.9); }
              100% { transform: translate(0px, 0px) scale(1); }
            }
            .animate-blob {
              animation: blob 7s infinite;
            }
            .animation-delay-2000 {
              animation-delay: 2s;
            }
            .animation-delay-4000 {
              animation-delay: 4s;
            }
          `}</style>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12 relative z-10 px-4">
            {services.map((service, index) => (
              <div key={index} className="relative group">
                {/* Main Card */}
                <div className="relative z-10 bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    {/* Icon */}
                    <div className={`absolute bottom-4 right-4 w-12 h-12 rounded-full flex items-center justify-center ${
                      service.color === 'blue' ? 'bg-blue-600 text-white' :
                      service.color === 'green' ? 'bg-green-600 text-white' :
                      service.color === 'purple' ? 'bg-purple-600 text-white' :
                      service.color === 'orange' ? 'bg-orange-600 text-white' :
                      service.color === 'red' ? 'bg-red-600 text-white' :
                      'bg-blue-600 text-white'
                    } shadow-lg`}>
                      {React.cloneElement(service.icon, { className: 'w-6 h-6' })}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-2 -right-2 w-full h-full bg-gray-100 rounded-xl -z-10 group-hover:bg-gray-200 transition-colors duration-300"></div>
                <div className="absolute -bottom-1 -right-1 w-16 h-16 bg-primary/5 rounded-full -z-20"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
