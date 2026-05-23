import ChatBot from "@/components/ChatBot";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { StatsCounter } from "@/components/StatsCounter";
import { Timeline } from '@/components/Timeline';
import { Award, BookOpen, Briefcase, Target, TrendingUp, Users, ArrowRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
const getColorClasses = (color: string) => {
  const mapping: Record<string, { text: string; bg: string; border: string; hoverBorder: string; hoverBg: string; textHover: string }> = {
    blue: { text: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50/50 dark:bg-blue-950/20", border: "border-blue-100 dark:border-blue-900/30", hoverBorder: "group-hover:border-blue-300 dark:group-hover:border-blue-800", hoverBg: "group-hover:bg-blue-500", textHover: "group-hover:text-blue-500" },
    green: { text: "text-green-600 dark:text-green-400", bg: "bg-green-50/50 dark:bg-green-950/20", border: "border-green-100 dark:border-green-900/30", hoverBorder: "group-hover:border-green-300 dark:group-hover:border-green-800", hoverBg: "group-hover:bg-green-500", textHover: "group-hover:text-green-500" },
    purple: { text: "text-purple-600 dark:text-purple-400", bg: "bg-purple-50/50 dark:bg-purple-950/20", border: "border-purple-100 dark:border-purple-900/30", hoverBorder: "group-hover:border-purple-300 dark:group-hover:border-purple-800", hoverBg: "group-hover:bg-purple-500", textHover: "group-hover:text-purple-500" },
    orange: { text: "text-orange-600 dark:text-orange-400", bg: "bg-orange-50/50 dark:bg-orange-950/20", border: "border-orange-100 dark:border-orange-900/30", hoverBorder: "group-hover:border-orange-300 dark:group-hover:border-orange-800", hoverBg: "group-hover:bg-orange-500", textHover: "group-hover:text-orange-500" },
    yellow: { text: "text-yellow-600 dark:text-yellow-400", bg: "bg-yellow-50/50 dark:bg-yellow-950/20", border: "border-yellow-100 dark:border-yellow-900/30", hoverBorder: "group-hover:border-yellow-300 dark:group-hover:border-yellow-800", hoverBg: "group-hover:bg-yellow-500", textHover: "group-hover:text-yellow-500" },
    teal: { text: "text-teal-600 dark:text-teal-400", bg: "bg-teal-50/50 dark:bg-teal-950/20", border: "border-teal-100 dark:border-teal-900/30", hoverBorder: "group-hover:border-teal-300 dark:group-hover:border-teal-800", hoverBg: "group-hover:bg-teal-500", textHover: "group-hover:text-teal-500" },
    indigo: { text: "text-indigo-600 dark:text-indigo-400", bg: "bg-indigo-50/50 dark:bg-indigo-950/20", border: "border-indigo-100 dark:border-indigo-900/30", hoverBorder: "group-hover:border-indigo-300 dark:group-hover:border-indigo-800", hoverBg: "group-hover:bg-indigo-500", textHover: "group-hover:text-indigo-500" },
    pink: { text: "text-pink-600 dark:text-pink-400", bg: "bg-pink-50/50 dark:bg-pink-950/20", border: "border-pink-100 dark:border-pink-900/30", hoverBorder: "group-hover:border-pink-300 dark:group-hover:border-pink-800", hoverBg: "group-hover:bg-pink-500", textHover: "group-hover:text-pink-500" },
    cyan: { text: "text-cyan-600 dark:text-cyan-400", bg: "bg-cyan-50/50 dark:bg-cyan-950/20", border: "border-cyan-100 dark:border-cyan-900/30", hoverBorder: "group-hover:border-cyan-300 dark:group-hover:border-cyan-800", hoverBg: "group-hover:bg-cyan-500", textHover: "group-hover:text-cyan-500" },
    emerald: { text: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50/50 dark:bg-emerald-950/20", border: "border-emerald-100 dark:border-emerald-900/30", hoverBorder: "group-hover:border-emerald-300 dark:group-hover:border-emerald-800", hoverBg: "group-hover:bg-emerald-500", textHover: "group-hover:text-emerald-500" },
    violet: { text: "text-violet-600 dark:text-violet-400", bg: "bg-violet-50/50 dark:bg-violet-950/20", border: "border-violet-100 dark:border-violet-900/30", hoverBorder: "group-hover:border-violet-300 dark:group-hover:border-violet-800", hoverBg: "group-hover:bg-violet-500", textHover: "group-hover:text-violet-500" },
    amber: { text: "text-amber-600 dark:text-amber-400", bg: "bg-amber-50/50 dark:bg-amber-950/20", border: "border-amber-100 dark:border-amber-900/30", hoverBorder: "group-hover:border-amber-300 dark:group-hover:border-amber-800", hoverBg: "group-hover:bg-amber-500", textHover: "group-hover:text-amber-500" },
    rose: { text: "text-rose-600 dark:text-rose-400", bg: "bg-rose-50/50 dark:bg-rose-950/20", border: "border-rose-100 dark:border-rose-900/30", hoverBorder: "group-hover:border-rose-300 dark:group-hover:border-rose-800", hoverBg: "group-hover:bg-rose-500", textHover: "group-hover:text-rose-500" },
    red: { text: "text-red-600 dark:text-red-400", bg: "bg-red-50/50 dark:bg-red-950/20", border: "border-red-100 dark:border-red-900/30", hoverBorder: "group-hover:border-red-300 dark:group-hover:border-red-800", hoverBg: "group-hover:bg-red-500", textHover: "group-hover:text-red-500" },
  };
  return mapping[color] || { text: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50/50 dark:bg-blue-950/20", border: "border-blue-100 dark:border-blue-900/30", hoverBorder: "group-hover:border-blue-300 dark:group-hover:border-blue-800", hoverBg: "group-hover:bg-blue-500", textHover: "group-hover:text-blue-500" };
};

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
    { value: 10, label: 'Years Experience', color: 'blue', suffix: '+' },
    { value: 100, label: 'Expert Mentors', color: 'green', suffix: '+' },
    { value: 50, label: 'Corporate Clients', color: 'purple', suffix: '+' },
    { value: 6, label: 'Training Batches', color: 'orange', suffix: 'K+' },
    { value: '88K', label: 'Rated 4.5/5.0', color: 'yellow' },
    { value: 99, label: 'Project Success', color: 'teal', suffix: '%' },
    { value: 94, label: 'Client Retention', color: 'indigo', suffix: '%' },
    { value: 30, label: 'Training Hours', color: 'pink', suffix: 'K+' },
    { value: 300, label: 'Students Trained', color: 'cyan', suffix: 'K+' },
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
      description: "Dedicated placement assistance with our network of 100+ partner companies",
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
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Pool Campus Drives",
      description: "Large-scale recruitment events connecting multiple colleges with top-tier corporate recruiters",
      color: 'indigo',
      image: "/assets/Discussion.jpg"
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-20 md:min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 overflow-hidden px-4 sm:px-6 bg-grid-pattern">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div
            animate={{
              x: [0, 40, -20, 0],
              y: [0, -50, 30, 0],
              scale: [1, 1.15, 0.9, 1]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -30, 40, 0],
              y: [0, 40, -50, 0],
              scale: [1, 0.9, 1.1, 1]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-purple-400/15 dark:bg-purple-600/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading and Text */}
            <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">

              {/* Premium Pill Tag */}
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50/85 to-indigo-50/85 dark:from-blue-950/30 dark:to-indigo-950/30 border border-blue-100/60 dark:border-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-[0_2px_12px_rgba(37,99,235,0.03)] select-none">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  Career Analytics Solutions
                </span>
              </motion.div>

              {/* Main Slogan Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 90 }}
                className="text-xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white leading-[1.2] mb-6 font-sans min-h-[80px]"
              >
                <style>
                  {`
                    .custom-typewriter-cursor::after {
                      content: '';
                      display: inline-block;
                      width: 0.6em;
                      height: 0.12em;
                      background-color: #3b82f6;
                      margin-left: 0.15em;
                      vertical-align: -0.1em;
                      animation: underscoreBlink 1s step-end infinite;
                      border-radius: 4px;
                      box-shadow: 0 0 12px rgba(59,130,246,0.7);
                    }
                    @keyframes underscoreBlink {
                      0%, 100% { opacity: 1; }
                      50% { opacity: 0; }
                    }
                  `}
                </style>
                <TypeAnimation
                  sequence={[
                    "Tamil Nadu’s Largest AI Integrated Industry 5.0 Learning Ecosystem",
                  ]}
                  wrapper="span"
                  speed={50}
                  cursor={false}
                  className="custom-typewriter-cursor"
                />
              </motion.h1>

              {/* Pedagogy Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl leading-relaxed font-medium"
              >
                Providing experiential learning through research-based pedagogy and mentoring energetic minds to propel a better tomorrow.
              </motion.p>

              {/* CTA Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >

              </motion.div>
            </div>

            {/* Right Column: Visual Showcase Frame */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 60, delay: 0.2 }}
                className="relative z-10 w-full max-w-md md:max-w-lg aspect-square lg:aspect-auto"
              >
                {/* Double frame highlight layers */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-600 to-purple-600 opacity-20 blur-2xl z-0 animate-pulse" />
                <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-blue-500 to-purple-600 opacity-30 z-0" />

                {/* Image Container with shadow and rounded-3xl */}
                <div className="relative z-10 overflow-hidden rounded-3xl border-4 border-white dark:border-slate-900 shadow-2xl bg-white dark:bg-slate-950">
                  <video
                    src="/assets/ai_office_indiamp_.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-80 md:h-[420px] object-cover transition-transform duration-700 hover:scale-105"
                  />
                  {/* Subtle color grading layer overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-normal opacity-70" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-100/50 dark:bg-indigo-900/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-normal opacity-70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-xs mb-3 inline-block">Institutional Excellence</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
              Proven Track Record
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6 rounded-full" />
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Numbers that speak to our commitment to high-impact career analytics, training pedagogy and student achievements.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const colors = getColorClasses(stat.color);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className={`bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-4 sm:p-5 rounded-2xl border ${colors.border} ${colors.hoverBorder} shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col justify-center items-center h-full relative overflow-hidden group`}
                >
                  {/* Micro-glow indicator dot */}
                  <div className={`absolute top-2 right-2 w-2 h-2 rounded-full ${colors.text} bg-current opacity-30 group-hover:scale-125 transition-transform duration-300`} />

                  <div className={`text-2xl sm:text-3xl md:text-4xl font-extrabold mb-1.5 ${colors.text} tracking-tight font-sans`}>
                    <StatsCounter end={stat.value} label="" suffix={stat.suffix || ''} />
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-semibold tracking-wide mt-1 leading-snug">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Timeline Section - Moved to appear before Stats */}
      <Timeline />



      {/* Services Section */}


      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
