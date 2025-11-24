import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import React from 'react';
import { useInView } from "react-intersection-observer";
import { Facebook, Twitter, Mail, ArrowRight, BookOpen, Cpu, Figma, Code, Cloud, Smartphone, Database, FileCode, Rocket, BarChart2, Brain, Users, Award, Briefcase, GraduationCap, FileText, Book, Server, CheckCircle, Zap, Check, Clock, RefreshCw, Wrench, Shield, Settings } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";
// Using standard img tag instead of next/image

const courses = [
  {
    title: "FullStack Development",
    icon: <Code className="w-8 h-8 mb-4 text-primary" />,
    description: "A full-stack course equips learners with the skills to develop both the front-end and back-end of web applications, preparing them for diverse roles in the tech industry."
  },
  {
    title: "Machine Learning",
    icon: <Brain className="w-8 h-8 mb-4 text-primary" />,
    description: "Machine learning is a subset of artificial intelligence that enables systems to learn from data, identify patterns, and make decisions with minimal human intervention."
  },
  {
    title: "UI/UX Design - (Figma)",
    icon: <Figma className="w-8 h-8 mb-4 text-primary" />,
    description: "Figma is a collaborative interface design tool that enables teams to design, prototype, and develop products together in a shared design file"
  },
  {
    title: "Angular 9.0",
    icon: <Cpu className="w-8 h-8 mb-4 text-primary" />,
    description: "Angular 9.0 introduces the Ivy compiler and runtime by default, offering smaller bundle sizes, faster testing, better debugging, and improved internationalization."
  },
  {
    title: "React-(JS)",
    icon: <Code className="w-8 h-8 mb-4 text-primary" />,
    description: "React is a popular JavaScript library for building user interfaces, enabling developers to create reusable UI components and efficiently manage the state of applications."
  },
  {
    title: "Cloud",
    icon: <Cloud className="w-8 h-8 mb-4 text-primary" />,
    description: "A Cloud Computing course provides an in-depth understanding of cloud technologies, architectures, and services, equipping students with the skills to design, deploy, and manage applications in cloud environments."
  },
  {
    title: "Android",
    icon: <Smartphone className="w-8 h-8 mb-4 text-primary" />,
    description: "An Android course teaches the fundamentals of Android app development, including Java programming, Android Studio, and the Android SDK, allowing students to create mobile applications for the Android platform."
  },
  {
    title: "Big Data Analytics",
    icon: <Database className="w-8 h-8 mb-4 text-primary" />,
    description: "A Big Data course covers the tools and techniques used to collect, process, and analyze large datasets, enabling students to extract valuable insights and make data-driven decisions."
  },
  {
    title: "C & Java",
    icon: <FileCode className="w-8 h-8 mb-4 text-primary" />,
    description: "The C & Java programming course using HackerRank provides hands-on coding challenges and solutions to enhance programming skills in both languages, preparing students for technical interviews and real-world problem-solving."
  },
  {
    title: "Advanced Python",
    icon: <BookOpen className="w-8 h-8 mb-4 text-primary" />,
    description: "An Advanced Python course using LeetCode provides in-depth training on solving complex coding problems using Python, covering advanced data structures, algorithms, and problem-solving techniques to excel in technical interviews and coding challenges."
  },
  {
    title: "Digital Marketing",
    icon: <BarChart2 className="w-8 h-8 mb-4 text-primary" />,
    description: "A Digital Marketing course teaches strategies and tools for online marketing, including SEO, social media, content marketing, and analytics, to effectively reach and engage target audiences in the digital landscape."
  },
  {
    title: "Blockchain Technology",
    icon: <Server className="w-8 h-8 mb-4 text-primary" />,
    description: "A Blockchain Technology course explores the principles and applications of blockchain, teaching students how to develop decentralized applications, understand smart contracts, and leverage this transformative technology for various industries."
  },
  {
    title: "Power BI",
    icon: <BarChart2 className="w-8 h-8 mb-4 text-primary" />,
    description: "A Power BI course teaches how to import, transform, and analyze data using Microsoft's business intelligence platform, enabling users to create interactive reports and dashboards for data-driven decision making."
  },
  {
    title: "General Aptitude",
    icon: <Book className="w-8 h-8 mb-4 text-primary" />,
    description: "A General Aptitude for Campus Placements/Competitive Exams course prepares students with essential skills in quantitative aptitude, logical reasoning, and verbal ability, enhancing their performance in recruitment tests and competitive examinations."
  },
  {
    title: "Industry 5.0",
    icon: <Rocket className="w-8 h-8 mb-4 text-primary" />,
    description: "Industry 5.0 envisions a future where humans and machines collaborate seamlessly to create a more sustainable, resilient, and human-centric manufacturing ecosystem that prioritizes social welfare and environmental preservation alongside economic growth."
  },
  {
    title: "Campus to Corporate Workshops",
    icon: <Briefcase className="w-8 h-8 mb-4 text-primary" />,
    description: "These equip students with essential skills for a smooth transition from academia to the professional world, focusing on attitude, behavior, communication, and personal effectiveness to enhance their job readiness and career growth."
  }
];

const services = [
  {
    title: "20+ Learning Centres",
    icon: <GraduationCap className="w-8 h-8 mb-4 text-primary" />,
    description: "Empower your career with our extensive network of over 20+ learning centers, providing personalized training and development programs to help you achieve your professional goals."
  },
  {
    title: "100% Client Retention",
    icon: <Users className="w-8 h-8 mb-4 text-primary" />,
    description: "Achieve guaranteed success with our 100% project completion rate, offering tailored solutions and expert guidance to ensure every project meets your career and organizational goals."
  },
  {
    title: "100% Projects Success",
    icon: <Award className="w-8 h-8 mb-4 text-primary" />,
    description: "Our personalized solutions, expert guidance, and innovative tools ensure that our clients achieve their career goals with unparalleled support and satisfaction."
  }
];

const AnimatedCard = ({ title, description, icon, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={inView ? { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { 
          duration: 0.6, 
          ease: [0.16, 1, 0.3, 1],
          delay: index * 0.05
        } 
      } : { opacity: 0, y: 30, scale: 0.98 }}
      whileHover={{
        y: -8,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        transition: { duration: 0.3, ease: 'easeOut' }
      }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative p-8">
        <motion.div 
          className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6 text-primary"
          whileHover={{ rotate: 5, scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {React.cloneElement(icon, { className: 'w-7 h-7' })}
        </motion.div>
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const ParallaxSection = ({ children, className = "" }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        {children}
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 z-0" />
    </div>
  );
};

export default function InquiriesInto() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/10">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <HeroSection
          title="Explore Our"
          highlight="Programs"
          tag="LEARNING PATHS"
          subtitle="Unlock your potential with our comprehensive courses and services"
        />

        {/* Courses Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(180deg,transparent,rgba(0,0,0,0.8))] -z-10" />
          <div className="container mx-auto px-6">
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {courses.map((course, index) => (
                <AnimatedCard key={index} index={index} {...course} />
              ))}
            </div>
          </div>
        </section>

        {/* Software Development Section */}
        <section className="py-20 bg-gradient-to-r from-white to-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Delivering Excellence in <span className="text-primary">Software Development</span></h2>
                <p className="text-lg text-gray-700 mb-8">
                  At Syasans Career Analytics, we specialize in delivering top-notch software development services. Our expert team is dedicated to providing innovative solutions, ensuring quality and efficiency in every project. Trust us to drive your software development needs with professionalism and excellence.
                </p>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/assets/Discussion.jpg" 
                  alt="Software Development"
                  className="rounded-2xl shadow-xl max-w-[80%] h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(180deg,transparent,rgba(0,0,0,0.8))] -z-10" />
          <div className="container mx-auto px-6">
           
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <AnimatedCard key={`service-${index}`} index={index} {...service} />
              ))}
            </div>
          </div>
        </section>


        

        

        
      </main>
      <Footer />
    </div>
  );
}
