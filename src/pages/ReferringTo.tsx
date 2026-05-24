import { useEffect, useRef, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Trophy, Medal, Star, Target, Award as AwardIcon, CheckCircle, Lightbulb, Code, Users, Compass, GraduationCap, School, Brain, BarChart3, TrendingUp, CheckCircle2, FileSpreadsheet } from "lucide-react";
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
      text: "SYASAN'S - Quality Certified by Min. of Higher Education | 2018",
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
        <HeroSection
          tag="Journey of Excellence"
          title="Referring"
          highlight="To"
          subtitle="Discover our credentials, certifications, and partnerships that endorse our standards of career training and analytics."
        />

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
            <div className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-slate-50/30 to-transparent dark:via-slate-900/10">
              {/* Floating decorative gradient background blobs */}
              <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl animate-blob-slow pointer-events-none -z-10"></div>
              <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl animate-blob-medium pointer-events-none -z-10"></div>

              <div className="container mx-auto px-6">

                {/* Intro Layout: Two columns (Intro Text & Assessment Image) */}
                <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="lg:col-span-7 space-y-6"
                  >
                    <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full">
                      Empowerment & Preparation
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-gray-900 via-primary to-accent bg-clip-text text-transparent dark:from-white">
                      Holistic Training Ecosystem
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                    <p className="text-lg text-muted-foreground leading-relaxed font-sans">
                      Our signature training ecosystem is engineered to build modern technical capabilities,
                      professional behavioral maturity, and advanced cognitive readiness. From intensive
                      hackathon preparation to outdoor leadership simulation and AI-driven teacher workshops,
                      we deliver industry-relevant empowerment programs.
                    </p>
                  </motion.div>

                  <motion.div
                    className="lg:col-span-5 relative"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative z-10 group">
                      <img
                        src={assessment}
                        alt="Holistic Evaluation and Training Ecosystem"
                        className="rounded-3xl shadow-2xl w-full max-w-md mx-auto border-4 border-white dark:border-slate-800 transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                      <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-tr from-primary/10 to-accent/10 rounded-3xl -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                    </div>
                  </motion.div>
                </div>

                {/* 7 Modules Cards Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Thinkathon",
                      subtitle: "Hackathon Readiness & Innovation Training Ecosystem",
                      description: "A specialized training program designed to prepare students for national and international hackathons through problem-solving frameworks, innovation methodologies, real-world case discussions, previous hackathon problem analysis, frequently asked challenge patterns, rapid ideation techniques, prototype development strategies, and team-based solution building.",
                      icon: <Lightbulb className="w-6 h-6" />,
                      color: "from-amber-500 to-orange-600",
                      glow: "rgba(245, 158, 11, 0.15)"
                    },
                    {
                      title: "AlgoX",
                      subtitle: "Advanced Coding Excellence using Global Learning Platforms",
                      description: "An intensive coding and problem-solving program delivered through globally recognized platforms including HackerRank and LeetCode, focused on strengthening programming logic, DSA mastery, analytical thinking, coding interview preparation, competitive programming exposure, and placement-oriented technical excellence.",
                      icon: <Code className="w-6 h-6" />,
                      color: "from-blue-500 to-indigo-600",
                      glow: "rgba(59, 130, 246, 0.15)"
                    },
                    {
                      title: "Humaneering Skills",
                      subtitle: "Campus-to-Corporate Behavioral Transformation Program",
                      description: "A human-centric professional development program designed to bridge the gap between academic learning and corporate expectations through communication mastery, leadership development, workplace etiquette, emotional intelligence, critical thinking, presentation skills, team collaboration, and corporate readiness training.",
                      icon: <Users className="w-6 h-6" />,
                      color: "from-emerald-500 to-teal-600",
                      glow: "rgba(16, 185, 129, 0.15)"
                    },
                    {
                      title: "Impact Camps",
                      subtitle: "Experiential Outdoor Leadership & High-Performance Team Workshops",
                      description: "An immersive outbound learning experience focused on building high-performance teams through experiential activities, leadership simulations, problem-solving missions, strategic collaboration exercises, trust-building frameworks, adaptability training, and real-time decision-making challenges.",
                      icon: <Compass className="w-6 h-6" />,
                      color: "from-red-500 to-rose-600",
                      glow: "rgba(239, 68, 68, 0.15)"
                    },
                    {
                      title: "FacultyEdge",
                      subtitle: "AI-Integrated Faculty Development & Certification Programs",
                      description: "An exclusive faculty empowerment initiative focused on enabling educators to integrate modern AI tools, digital teaching methodologies, outcome-based learning practices, student engagement strategies, and technology-enabled pedagogy into today’s classrooms, along with industry-relevant certification programs for academic excellence.",
                      icon: <GraduationCap className="w-6 h-6" />,
                      color: "from-purple-500 to-violet-600",
                      glow: "rgba(139, 92, 246, 0.15)"
                    },
                    {
                      title: "Classroom Innovation Labs",
                      subtitle: "Next-Generation Teacher Training & Certification Workshops",
                      description: "A future-focused teacher training ecosystem designed to transform traditional teaching practices through innovative classroom strategies, AI-assisted teaching tools, experiential learning methods, interactive pedagogy, student psychology understanding, and exclusive professional certification programs for educators.",
                      icon: <School className="w-6 h-6" />,
                      color: "from-cyan-500 to-sky-600",
                      glow: "rgba(6, 182, 212, 0.15)"
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
                          delay: index * 0.08
                        }
                      }}
                      whileHover={{
                        y: -8,
                        boxShadow: `0 20px 40px ${item.glow}`,
                        transition: { duration: 0.3, ease: 'easeOut' }
                      }}
                      viewport={{ once: true, margin: '-50px' }}
                      className="group relative overflow-hidden p-8 rounded-2xl backdrop-blur-lg bg-white/80 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800/80 shadow-md hover:border-transparent transition-all duration-500 flex flex-col h-full"
                    >
                      {/* Top border colored highlight */}
                      <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.color}`} />

                      {/* Glowing circle background inside the card */}
                      <div className={`absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br ${item.color} opacity-5 group-hover:opacity-10 rounded-full transition-opacity duration-500`} />

                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center mb-6 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                        {item.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <span className={`text-[15px] font-extrabold uppercase tracking-widest bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-1 block`}>
                            {item.title}
                          </span>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
                            {item.subtitle}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed font-normal">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Interactive slide up background highlight */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-[0.01] -z-10 transition-opacity duration-500`} />
                    </motion.div>
                  ))}

                  {/* 7th Module: Think With No Ink (Featured Full-width Card) */}
                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        type: 'spring',
                        stiffness: 100,
                        damping: 15,
                        delay: 0.2
                      }
                    }}
                    whileHover={{
                      y: -8,
                      boxShadow: '0 25px 50px rgba(244, 63, 94, 0.15)',
                      transition: { duration: 0.3, ease: 'easeOut' }
                    }}
                    viewport={{ once: true, margin: '-50px' }}
                    className="group relative overflow-hidden p-8 md:p-10 rounded-2xl backdrop-blur-lg bg-white/80 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800/80 shadow-md hover:border-transparent transition-all duration-500 md:col-span-2 lg:col-span-3 flex flex-col md:flex-row gap-8 items-start md:items-center"
                  >
                    {/* Top border colored highlight */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rose-500 via-pink-500 to-red-600" />

                    {/* Background blob inside card */}
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-gradient-to-br from-rose-500 to-red-600 opacity-5 group-hover:opacity-10 rounded-full transition-opacity duration-500" />

                    {/* Left/Top Part: Icon */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500 to-red-600 text-white flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <Brain className="w-8 h-8" />
                    </div>

                    {/* Right/Bottom Part: Details */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <span className="text-xs font-extrabold uppercase tracking-widest bg-gradient-to-r from-rose-500 to-red-600 bg-clip-text text-transparent mb-1 block">
                          Think With No Ink
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white tracking-tight group-hover:text-primary transition-colors duration-300">
                          Aptitude & Competitive Exam Mastery Program
                        </h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed font-normal">
                        A unique aptitude and competitive exam training ecosystem powered by SYASAN’S exclusive
                        <strong className="text-rose-500 dark:text-rose-400 font-semibold"> "Think With No Ink" </strong>
                        methodology, enabling students to solve aptitude and logical reasoning problems mentally
                        without depending on pen-and-paper calculations. The program focuses on improving analytical
                        thinking speed, shortcut techniques, problem-solving accuracy, quantitative aptitude, verbal
                        ability, interview readiness, campus placement preparation, and competitive examination performance
                        through high-speed cognitive training frameworks and real-time assessment methodologies.
                      </p>
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
            <div className="relative py-24 overflow-hidden bg-grid-pattern">
              {/* Floating gradient blobs behind the section */}
              <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-500/5 rounded-full filter blur-3xl animate-blob-slow pointer-events-none -z-10"></div>
              <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-amber-500/10 dark:bg-amber-500/5 rounded-full filter blur-3xl animate-blob-medium pointer-events-none -z-10"></div>
              <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-rose-500/10 dark:bg-rose-500/5 rounded-full filter blur-3xl animate-blob-slow pointer-events-none -z-10" style={{ animationDelay: '3s' }}></div>

              <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                  {/* Bento Card 1: Intro (Spans 2 columns on lg) */}
                  <motion.div
                    className="col-span-1 md:col-span-2 p-8 md:p-10 rounded-3xl border border-slate-100/80 bg-white/70 dark:bg-slate-900/70 dark:border-slate-800/80 backdrop-blur-sm shadow-sm flex flex-col justify-center space-y-4 relative group hover:shadow-md"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                  >
                    {/* Background glows */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10" />
                    <div className="absolute -inset-1.5 bg-gradient-to-r from-primary/15 to-accent/15 rounded-[32px] opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-20" />
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary/10 border border-primary/20 text-primary w-fit micro-pulse">
                      <BarChart3 className="w-3.5 h-3.5" />
                      <span>Analytics & Insights</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-gray-900 via-primary to-accent bg-clip-text text-transparent dark:from-white">
                      Smart Institutional Dashboards
                    </h2>

                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      Track student performance, cohort readiness, training progress, and placement metrics
                      through our intuitive and comprehensive dashboards — enabling data-driven decisions
                      and academic excellence at every level.
                    </p>
                  </motion.div>

                  {/* Bento Card 2: macOS Browser Mockup (Spans 1 col, 3 rows on lg) */}
                  <motion.div
                    className="col-span-1 row-span-1 md:col-span-2 lg:col-span-1 lg:row-span-3 group cursor-pointer h-full relative"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -6,
                      rotateX: 1.5,
                      rotateY: -1.5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Background glow behind card */}
                    <div className="absolute -inset-2 bg-gradient-to-tr from-primary/20 via-blue-500/10 to-accent/20 rounded-[32px] opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 -z-10" />
                    <div className="relative z-10 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 bg-slate-900 shadow-2xl shadow-primary/10 h-full flex flex-col justify-between">
                      {/* Browser Header Bar */}

                      {/* Image Frame - fill remaining height */}
                      <div className="relative overflow-hidden bg-slate-950 flex-1 flex items-center justify-center min-h-[300px]">
                        <img
                          src="/assets/Dashboard.png"
                          alt="Syasan's Analytics Dashboard"
                          className="w-full h-full object-cover lg:object-left-top opacity-90 transition-transform duration-700 group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                        {/* Overlay visual gradient tint */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Bento Cards 3-6: Features (4 individual cards) */}
                  {[
                    {
                      text: 'Real-time Analytics',
                      desc: 'Live tracking of student participation and evaluation outcomes.',
                      icon: <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
                      styles: "bg-blue-50/50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 border-blue-100/30 dark:border-blue-900/30 hover:border-blue-500/30",
                      glow: "from-blue-500/10 to-indigo-500/10"
                    },
                    {
                      text: 'Performance Metrics',
                      desc: 'Deep analytical insights into individual and cohort benchmarks.',
                      icon: <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
                      styles: "bg-emerald-50/50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 border-emerald-100/30 dark:border-emerald-900/30 hover:border-emerald-500/30",
                      glow: "from-emerald-500/10 to-teal-500/10"
                    },
                    {
                      text: 'Progress Tracking',
                      desc: 'Continuous monitoring of student progress across learning phases.',
                      icon: <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
                      styles: "bg-purple-50/50 dark:bg-purple-950/20 text-purple-600 dark:text-purple-400 border-purple-100/30 dark:border-purple-900/30 hover:border-purple-500/30",
                      glow: "from-purple-500/10 to-violet-500/10"
                    },
                    {
                      text: 'Custom Reports',
                      desc: 'Seamless data exports for administrative reviews and decision making.',
                      icon: <FileSpreadsheet className="w-5 h-5 text-rose-600 dark:text-rose-400" />,
                      styles: "bg-rose-50/50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-400 border-rose-100/30 dark:border-rose-900/30 hover:border-rose-500/30",
                      glow: "from-rose-500/10 to-pink-500/10"
                    }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className={`p-6 rounded-3xl border border-slate-100 bg-white/70 dark:bg-slate-900/70 dark:border-slate-800/80 shadow-sm flex flex-col justify-between hover:shadow-md hover:bg-white dark:hover:bg-slate-900 hover:border-slate-200 dark:hover:border-slate-700 transition-all duration-300 group/item h-full min-h-[160px] relative`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                    >
                      {/* Background glowing frame on hover */}
                      <div className={`absolute -inset-1 bg-gradient-to-r ${item.glow} rounded-[32px] opacity-0 group-hover/item:opacity-100 blur-lg transition-opacity duration-500 -z-10`} />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 rounded-3xl -z-10" />

                      <div className="space-y-4 relative z-10">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm border transition-transform duration-300 group-hover/item:scale-110 group-hover/item:rotate-3 ${item.styles.split(' ').slice(0, 4).join(' ')}`}>
                          {item.icon}
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-base font-bold text-gray-900 dark:text-white tracking-tight">
                            {item.text}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-normal">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Student Transformation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative py-16 px-8 rounded-3xl text-center my-16 bg-white/70 dark:bg-slate-900/70 border border-slate-100 dark:border-slate-800/80 backdrop-blur-md shadow-[0_20px_50px_rgba(59,130,246,0.08)] overflow-hidden group cursor-pointer"
            >
              {/* Backlight Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 rounded-[32px] opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-10" />
              
              {/* Decorative side blobs inside card */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/5 rounded-full filter blur-xl transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-accent/5 rounded-full filter blur-xl transition-transform duration-700 group-hover:scale-110" />

              <div className="max-w-3xl mx-auto space-y-4 relative z-10">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-gray-900 via-primary to-accent bg-clip-text text-transparent dark:from-white">
                  Student Transformation
                </h2>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-sans font-normal max-w-2xl mx-auto">
                  Syasan enables students to understand their strengths, behavioural patterns and career pathways — making them confident, industry-ready professionals.
                </p>
              </div>
            </motion.div>

            {/* Summary Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative py-16 px-8 rounded-3xl text-center my-16 bg-white/70 dark:bg-slate-900/70 border border-slate-100 dark:border-slate-800/80 backdrop-blur-md shadow-[0_20px_50px_rgba(139,92,246,0.08)] overflow-hidden group cursor-pointer"
            >
              {/* Backlight Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-500/10 via-pink-500/5 to-purple-500/10 rounded-[32px] opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-10" />

              {/* Decorative blobs inside card */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/5 rounded-full filter blur-xl transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-pink-500/5 rounded-full filter blur-xl transition-transform duration-700 group-hover:scale-110" />

              <div className="max-w-4xl mx-auto relative z-10">
                <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-100 font-medium leading-relaxed font-sans">
                  In summary, Syasan offers behavioural assessment, software training, aptitude enhancement and soft skill development — <strong className="text-purple-600 dark:text-purple-400 font-semibold">creating well-rounded, future-ready professionals</strong>.
                </p>
              </div>
            </motion.div>

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
                  {achievements.map((achievement, index) => {
                    const parts = achievement.text.split('|');
                    const mainText = parts[0].trim();
                    const yearTag = parts[1] ? parts[1].trim() : null;

                    const isISO = mainText.includes("ISO 9001:2008");
                    const isAptitude = mainText.includes("Aptitude assessment");

                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          transition: {
                            type: 'spring',
                            stiffness: 80,
                            damping: 12,
                            delay: index * 0.08
                          }
                        }}
                        viewport={{ once: true, margin: "-50px" }}
                        whileHover={{
                          y: -10,
                          transition: { duration: 0.3, ease: "easeOut" }
                        }}
                        className="group relative h-full"
                      >
                        {/* Background glow on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />

                        <Card className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 h-full rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] overflow-hidden flex flex-col justify-between">
                          <div className="p-8 relative flex-1 flex flex-col justify-between h-full">
                            {/* Top row: Icon and tags */}
                            <div className="flex justify-between items-start mb-6">
                              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white transition-all duration-350 shadow-md shadow-primary/25 group-hover:shadow-lg group-hover:shadow-primary/40 group-hover:scale-110 group-hover:rotate-6">
                                {achievement.icon}
                              </div>

                              <div className="flex items-center gap-2">
                                {yearTag && (
                                  <span className="bg-primary text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm transition-all duration-300 group-hover:bg-accent group-hover:scale-105">
                                    {yearTag}
                                  </span>
                                )}
                                {isISO && (
                                  <span className="bg-amber-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm transition-all duration-300 group-hover:bg-amber-600 group-hover:scale-105">
                                    ISO Certified
                                  </span>
                                )}
                                {isAptitude && (
                                  <span className="bg-emerald-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm transition-all duration-300 group-hover:bg-emerald-600 group-hover:scale-105">
                                    Practice Tests
                                  </span>
                                )}
                                <span className="text-4xl font-extrabold text-slate-200 dark:text-slate-800 select-none group-hover:text-primary dark:group-hover:text-accent group-hover:scale-115 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.3)] transition-all duration-350 font-serif leading-none ml-2 origin-right inline-block">
                                  0{index + 1}
                                </span>
                              </div>
                            </div>

                            {/* Content text */}
                            <div className="flex-1 mt-2">
                              <p className="text-gray-700 dark:text-gray-300 font-medium text-base md:text-lg leading-relaxed group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                                {mainText}
                              </p>
                            </div>
                          </div>

                          {/* Bottom colored accent strip */}
                          <div className="h-1.5 w-full bg-gradient-to-r from-primary to-accent transition-all duration-500" />
                        </Card>
                      </motion.div>
                    );
                  })}
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
