import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Award, TrendingUp, Target, Briefcase } from "lucide-react";
import { StatsCounter } from "@/components/StatsCounter";
import { ServiceCard } from "@/components/ServiceCard";
import { ImageGallery } from "@/components/ImageGallery";
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
      color: 'blue'
    },
    { 
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />, 
      title: "Mentorship Program", 
      description: "One-on-one guidance from industry experts to accelerate your career growth",
      color: 'green'
    },
    { 
      icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />, 
      title: "Certification", 
      description: "Recognized certifications that validate your expertise and boost your credentials",
      color: 'purple'
    },
    { 
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />, 
      title: "Career Analytics", 
      description: "Data-driven insights to track your progress and optimize your career path",
      color: 'orange'
    },
    { 
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />, 
      title: "Placement Support", 
      description: "Dedicated placement assistance with our network of 500+ partner companies",
      color: 'red'
    },
    { 
      icon: <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />, 
      title: "Interview Prep", 
      description: "Comprehensive interview preparation and mock sessions with real feedback",
      color: 'teal'
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
                Professional career development programs designed by industry experts to help you achieve your goals and excel in your chosen field
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-0">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">250K+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Students Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">9+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">99%</div>
                  <div className="text-xs sm:text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
            <div className="relative order-first md:order-last mb-10 md:mb-0">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center&auto=format"
                  alt="Professional Career Training"
                  className="rounded-2xl shadow-2xl w-full h-auto max-w-2xl mx-auto"
                  loading="lazy"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-blue-600 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-purple-600 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
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
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Our Services
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive career development solutions tailored to your success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-lg p-4 sm:p-5 md:p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-${service.color}-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Performance Feedback
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Visual insights into our training excellence and student achievements
            </p>
          </div>

          <div className="mb-12 md:mb-16">
            <ImageGallery />
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              Want to see more detailed feedback and reviews from our students?
            </p>
            <a 
              href="https://share.google/LTpS8XBL4ftVERNIZ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Additional Feedback
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
