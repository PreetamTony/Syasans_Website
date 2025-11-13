import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import { useRef } from "react";
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
    title: "10+ Learning Centres",
    icon: <GraduationCap className="w-8 h-8 mb-4 text-primary" />,
    description: "Achieve guaranteed success with our 100% project completion rate, offering tailored solutions and expert guidance to ensure every project meets your career and organizational goals."
  },
  {
    title: "100% Client Retention",
    icon: <Users className="w-8 h-8 mb-4 text-primary" />,
    description: "Empower your career with our extensive network of over 10 learning centers, providing personalized training and development programs to help you achieve your professional goals."
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
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/10 hover:border-primary/30"
    >
      <div className="flex flex-col items-center text-center">
        {icon}
        <h3 className="text-xl font-bold mb-3 text-primary">{title}</h3>
        <p className="text-black">{description}</p>
      </div>
      <div className="mt-4 flex items-center justify-center text-primary font-medium group">
        <span>Learn more</span>
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-16"
            >
              Our <span className="text-primary">Courses</span>
            </motion.h2>
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
                  src="https://syasans.com/wp-content/uploads/2024/07/Untitled-design-1-2048x2048.png" 
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
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-16"
            >
              Our <span className="text-primary">Services</span>
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <AnimatedCard key={`service-${index}`} index={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Bank & SSC Coaching */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Bank & SSC <span className="text-primary">Coaching</span></h2>
              <p className="text-xl text-black">
                Comprehensive coaching programs for various competitive exams to help you achieve your career goals
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-bold mb-6 text-primary">Bank Coaching</h3>
                <ul className="space-y-3 text-black text-left">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>IBPS Exams: Clerk, PO, RRB, Specialist Officer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>SBI Exams: Clerk, PO, SO</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>RBI Exams: Grade B, Assistant</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>NABARD: Assistant Manager & Assistant Exams</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Insurance Exams: LIC, UIIC, NICL, NIACL, GIC, IRDA</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-bold mb-6 text-primary">SSC Coaching</h3>
                <ul className="space-y-3 text-black text-left">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>SSC Exams: CGL, CPO, CHSL, MTS, Stenographer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Railway Exams: NTPC, Ticket Collector, RRC</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>ESIC: LDC & UDC</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>FCI: Assistant Grade – III</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Intelligence Bureau: ACIO</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>India Post: Postman, Mail Guard & MTS</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* DO - Handcrafting Aptitude */}
        <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">DO - Handcrafting Aptitude for <span className="text-primary">Institutions</span></h2>
              <p className="text-xl text-black">
                Customized learning solutions to enhance aptitude skills for campus placements and competitive exams
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto"
            >
              <ul className="space-y-4 text-black text-left">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Customized Hand-book for aspirants targeting Campus Placements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>400+ core concepts with examples, twists, tricks, choices & diluted solution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Graded problems with lateral solution focusing on the Dreams & Super Dream offers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Exam Focus: Bank PO, UPSC, GATE, CAT, TANSET, TNPSC</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Industry 5.0 specific concepts for Quantitative, Reasoning and Logical Ability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>3500+ Actual Questions with Answers</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* D'LAN QUANTUM SERVER */}
        <section className="py-20 bg-gradient-to-br from-background to-muted/20">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <div className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Advanced Assessment
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">D'LAN <span className="text-primary">QUANTUM SERVER</span></h2>
              <p className="text-xl text-black">
                Comprehensive evaluation with our advanced test engine
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12 rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto"
            >
              <div className="w-full">
                <img
                  src="https://syasans.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-27-at-8.54.40-AM-1-1536x825.jpeg"
                  alt="D'LAN QUANTUM SERVER Interface"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 max-w-5xl mx-auto"
            >
              <h3 className="text-2xl font-bold text-center mb-10 text-black">Salient Features of the Test Engine</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Row 1 */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/5 hover:border-primary/20 transition-colors h-full">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg mr-4">
                      <Server className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Infrastructure</h3>
                  </div>
                  <ul className="space-y-3 pl-14 text-black">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>LAN Based with minimal infrastructure</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>User-friendly interface for seamless navigation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>5000+ actual questions with detailed solutions</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-white/5 rounded-xl border border-white/5 hover:border-primary/20 transition-colors h-full">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg mr-4">
                      <Settings className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Features</h3>
                  </div>
                  <ul className="space-y-3 pl-14 text-black">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Fully customizable exam patterns</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Classified score reports</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>ISO audit compliant</span>
                    </li>
                  </ul>
                </div>

                {/* Row 2 */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/5 hover:border-primary/20 transition-colors h-full">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg mr-4">
                      <BarChart2 className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Performance</h3>
                  </div>
                  <ul className="space-y-3 pl-14 text-black">
                    <li className="flex items-start">
                      <Zap className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Lightning-fast report generation (0.25s)</span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Unlimited test attempts</span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>10 years of question bank (2012-2022)</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-white/5 rounded-xl border border-white/5 hover:border-primary/20 transition-colors h-full">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg mr-4">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Support</h3>
                  </div>
                  <ul className="space-y-3 pl-14 text-black">
                    <li className="flex items-start">
                      <Clock className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Lifetime validity</span>
                    </li>
                    <li className="flex items-start">
                      <RefreshCw className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Complimentary annual updates</span>
                    </li>
                    <li className="flex items-start">
                      <Wrench className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Zero maintenance required</span>
                    </li>
                  </ul>
                </div>
              </div>

            </motion.div>
            
          </div>
        </section>

        
      </main>
      <Footer />
    </div>
  );
}
