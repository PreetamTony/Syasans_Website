import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import { ArrowUpRight, Award, BarChart2, Book, BookOpen, Brain, Briefcase, Cloud, Code, Cpu, Database, Figma, FileCode, GraduationCap, Rocket, Server, Settings, Shield, Smartphone, Users, Zap } from "lucide-react";
import React from 'react';
import { useInView } from "react-intersection-observer";
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
    title: "Agentic AI",
    icon: <Cpu className="w-8 h-8 mb-4 text-primary" />,
    description: "Agentic AI refers to autonomous AI systems capable of perceiving their environment, reasoning about goals, and taking independent actions to achieve them."
  },
  {
    title: "Cybersecurity",
    icon: <Shield className="w-8 h-8 mb-4 text-primary" />,
    description: "Cybersecurity involves protecting computer systems, networks, and data from digital attacks, unauthorized access, and damage through various security measures."
  },
  {
    title: "DevOps",
    icon: <Settings className="w-8 h-8 mb-4 text-primary" />,
    description: "DevOps is a set of practices that combines software development and IT operations to shorten the systems development life cycle and provide high-quality continuous delivery."
  },
  {
    title: "UI/UX Design - (Figma)",
    icon: <Figma className="w-8 h-8 mb-4 text-primary" />,
    description: "Figma is a collaborative interface design tool that enables teams to design, prototype, and develop products together in a shared design file"
  },
  {
    title: "Angular 9.0",
    icon: <Zap className="w-8 h-8 mb-4 text-primary" />,
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

const getColorTheme = (index: number) => {
  const themes = [
    {
      primary: "text-blue-600 dark:text-blue-400",
      bgLight: "bg-blue-500/10 dark:bg-blue-500/5",
      hoverAccent: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
      glow: "from-blue-600/20 to-indigo-600/20 dark:from-blue-500/10 dark:to-purple-500/10",
      borderHover: "group-hover:border-blue-500/30 dark:group-hover:border-blue-500/20",
    },
    {
      primary: "text-purple-600 dark:text-purple-400",
      bgLight: "bg-purple-500/10 dark:bg-purple-500/5",
      hoverAccent: "group-hover:text-purple-600 dark:group-hover:text-purple-400",
      glow: "from-purple-600/20 to-pink-600/20 dark:from-purple-500/10 dark:to-pink-500/10",
      borderHover: "group-hover:border-purple-500/30 dark:group-hover:border-purple-500/20",
    },
    {
      primary: "text-emerald-600 dark:text-emerald-400",
      bgLight: "bg-emerald-500/10 dark:bg-emerald-500/5",
      hoverAccent: "group-hover:text-emerald-600 dark:group-hover:text-emerald-400",
      glow: "from-emerald-600/20 to-teal-600/20 dark:from-emerald-500/10 dark:to-teal-500/10",
      borderHover: "group-hover:border-emerald-500/30 dark:group-hover:border-emerald-500/20",
    },
    {
      primary: "text-rose-600 dark:text-rose-400",
      bgLight: "bg-rose-500/10 dark:bg-rose-500/5",
      hoverAccent: "group-hover:text-rose-600 dark:group-hover:text-rose-400",
      glow: "from-rose-600/20 to-orange-600/20 dark:from-rose-500/10 dark:to-orange-500/10",
      borderHover: "group-hover:border-rose-500/30 dark:group-hover:border-rose-500/20",
    },
    {
      primary: "text-amber-600 dark:text-amber-400",
      bgLight: "bg-amber-500/10 dark:bg-amber-500/5",
      hoverAccent: "group-hover:text-amber-600 dark:group-hover:text-amber-400",
      glow: "from-amber-600/20 to-yellow-600/20 dark:from-amber-500/10 dark:to-yellow-500/10",
      borderHover: "group-hover:border-amber-500/30 dark:group-hover:border-amber-500/20",
    }
  ];
  return themes[index % themes.length];
};

const AnimatedCard = ({ title, description, icon, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const theme = getColorTheme(index);

  return (
    <div ref={ref} className="relative group h-full">
      {/* Dynamic Backlight Glow Overlay */}
      <div className={`absolute -inset-1 rounded-[24px] bg-gradient-to-r ${theme.glow} opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-10 group-hover:scale-105`} />

      <motion.div
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
          transition: { duration: 0.3, ease: 'easeOut' }
        }}
        className={`relative h-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-800/80 ${theme.borderHover} flex flex-col justify-between`}
      >
        {/* Top Highlight Accent Strip */}
        <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${theme.glow} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

        {/* Corner Hover Arrow Indicator */}
        <div className={`absolute top-5 right-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 ${theme.primary}`}>
          <ArrowUpRight className="w-5 h-5" />
        </div>

        {/* Ambient Corner Blob */}
        <div className={`absolute -right-10 -bottom-10 w-28 h-28 rounded-full bg-gradient-to-br ${theme.glow} opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500 pointer-events-none -z-10`} />

        <div className="p-8 flex-1 flex flex-col justify-between">
          <div>
            <motion.div
              className={`w-14 h-14 rounded-xl ${theme.bgLight} flex items-center justify-center mb-6 ${theme.primary} transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm`}
            >
              {React.cloneElement(icon, { className: 'w-7 h-7 mb-0 text-current' })}
            </motion.div>
            <h3 className={`text-xl font-bold text-gray-800 dark:text-slate-100 mb-3 ${theme.hoverAccent} transition-colors duration-300`}>
              {title}
            </h3>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed text-sm">{description}</p>
          </div>
        </div>
      </motion.div>
    </div>
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
        <section className="py-20 relative overflow-hidden">
          {/* Subtle Tech Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none -z-10" />

          {/* Ambient Background Blobs */}
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10 animate-blob-slow" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10 animate-blob-medium" />
          <div className="container mx-auto px-6">

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {courses.map((course, index) => (
                <AnimatedCard key={index} index={index} {...course} />
              ))}
            </div>
          </div>
        </section>

        {/* Software Development Section */}
        <section className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950/40 border-y border-slate-100 dark:border-slate-800/60">
          {/* Fading Tech Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808003_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none -z-10" />

          {/* Ambient Glowing Blobs */}
          <div className="absolute top-1/2 left-[-10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl -z-10 animate-blob-slow" />
          <div className="absolute top-1/3 right-[-10%] w-[450px] h-[450px] bg-indigo-500/5 rounded-full blur-3xl -z-10 animate-blob-medium" />

          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

              {/* Text Column with Scroll Reveal */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="h-px w-6 bg-primary"></span>
                    <span className="text-primary font-bold uppercase tracking-wider text-xs">SERVICES & INNOVATION</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-6 text-slate-900 dark:text-white leading-tight">
                    Delivering Excellence in <br className="hidden sm:block" />
                    <span className="text-[#2563eb] font-bold">Software Development</span>
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-2xl font-light">
                    At Syasans Career Analytics, we specialize in delivering top-notch software development services. Our expert team is dedicated to providing innovative solutions, ensuring quality and efficiency in every project. Trust us to drive your software development needs with professionalism and excellence.
                  </p>

                  {/* Highlights Grid */}



                </motion.div>
              </div>

              {/* Image Mockup Column with 3D Float Frame */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-[450px]"
                >
                  <div className="relative group w-full">
                    {/* Ambient Glow behind image */}
                    <div className="absolute -inset-2.5 rounded-[24px] bg-gradient-to-tr from-primary/30 to-indigo-500/30 opacity-60 group-hover:opacity-90 blur-2xl group-hover:scale-105 transition-all duration-500 -z-10" />

                    {/* Floating Frame */}
                    <div className="relative p-2.5 rounded-[20px] bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-white/60 dark:border-slate-800/80 shadow-2xl overflow-hidden group-hover:scale-[1.01] transition-all duration-500">
                      <img
                        src="/assets/Discussion.jpg"
                        alt="Software Development Discussion"
                        className="rounded-[12px] w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 relative overflow-hidden">
          {/* Subtle Tech Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none -z-10" />

          {/* Ambient Background Blobs */}
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -z-10 animate-blob-slow" />
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl -z-10 animate-blob-medium" />
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
