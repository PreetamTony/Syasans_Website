import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Award, TrendingUp, Target, Briefcase } from "lucide-react";
import { StatsCounter } from "@/components/StatsCounter";
import { ServiceCard } from "@/components/ServiceCard";
import { ImageGallery } from "@/components/ImageGallery";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

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

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.5}px)`,
  };

  const fadeInStyle = {
    opacity: Math.max(0, 1 - scrollY / 500),
    transform: `scale(${Math.max(0.8, 1 - scrollY / 2000)})`,
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold">
                CAREER ANALYTICS SOLUTIONS
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              SYASAN'S
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
              Transform Your Career with Expert Training
            </p>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Professional career development programs designed by industry experts to help you achieve your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                Get Started Today
              </button>
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors">
                View Programs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Track Record
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Numbers that speak to our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                <StatsCounter end={9} label="" suffix="+" />
              </div>
              <p className="text-gray-600 font-medium">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">
                <StatsCounter end={250} label="" suffix="K+" />
              </div>
              <p className="text-gray-600 font-medium">Students Trained</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                <StatsCounter end={100} label="" suffix="+" />
              </div>
              <p className="text-gray-600 font-medium">Expert Mentors</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">
                <StatsCounter end={88} label="" suffix="%" />
              </div>
              <p className="text-gray-600 font-medium">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive career development solutions tailored to your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Career Training</h3>
              <p className="text-gray-600">
                Industry-leading training programs designed to enhance your professional skills and market value
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mentorship Program</h3>
              <p className="text-gray-600">
                One-on-one guidance from industry experts to accelerate your career growth
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Certification</h3>
              <p className="text-gray-600">
                Recognized certifications that validate your expertise and boost your credentials
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Career Analytics</h3>
              <p className="text-gray-600">
                Data-driven insights to track your progress and optimize your career path
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Placement Support</h3>
              <p className="text-gray-600">
                Dedicated placement assistance with our network of 500+ partner companies
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Interview Prep</h3>
              <p className="text-gray-600">
                Comprehensive interview preparation and mock sessions with real feedback
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Student Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visual insights into our training excellence and student achievements
            </p>
          </div>

          <div className="mb-16">
            <ImageGallery />
          </div>
          
          
        </div>
      </section>

      
      <Footer />
    </div>
  );
};

export default Index;
