import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { 
  Search, 
  Target, 
  Sliders, 
  Briefcase, 
  Calendar, 
  FileText, 
  CheckSquare, 
  BookOpen, 
  CheckCircle, 
  MessageSquare, 
  BarChart, 
  Trophy, 
  Award, 
  Activity, 
  ChevronRight, 
  Play, 
  BookOpenCheck,
  Compass,
  Lightbulb,
  Workflow
} from "lucide-react";

// Workaround for framer-motion type issues in this environment
const MotionDiv = motion.div as any;
const MotionButton = motion.button as any;
const MotionSpan = motion.span as any;
const MotionPath = motion.path as any;

// Step Interface
interface TrainingStep {
  id: string;
  number: string;
  title: string;
  description: string;
  longDescription: string;
  icon: React.ComponentType<any>;
  color: string; // Tailwind color name for styling
  gradient: string; // CSS gradient class
  themeColor: string; // HSL color
}

// 14 Steps Data
const trainingSteps: TrainingStep[] = [
  {
    id: "step-1",
    number: "01",
    title: "Conducting Training Need Analysis",
    description: "Assessing skill gaps and alignment with organizational goals.",
    longDescription: "We perform a thorough evaluation of the participants' current skill levels, strengths, and weaknesses. This is aligned with the organization's overarching business goals to ensure the training delivers direct, measurable value.",
    icon: Search,
    color: "rose",
    gradient: "from-rose-500 to-orange-500",
    themeColor: "0 84% 60%"
  },
  {
    id: "step-2",
    number: "02",
    title: "Identifying Major Areas of Improvement",
    description: "Determining technical and soft skill focus areas.",
    longDescription: "Based on the needs analysis, we isolate key areas requiring development. This includes specific technical domains, core analytical capabilities, and critical interpersonal or leadership skills necessary for peak performance.",
    icon: Target,
    color: "orange",
    gradient: "from-orange-500 to-amber-500",
    themeColor: "24 95% 53%"
  },
  {
    id: "step-3",
    number: "03",
    title: "Customizing the course",
    description: "Tailoring curriculum modules to client requirements.",
    longDescription: "We craft a bespoke syllabus. Rather than using off-the-shelf courses, our curriculum designers build custom learning paths, real-world projects, and hands-on modules tailored precisely to your team's current projects.",
    icon: Sliders,
    color: "amber",
    gradient: "from-amber-500 to-yellow-500",
    themeColor: "38 92% 50%"
  },
  {
    id: "step-4",
    number: "04",
    title: "Briefing the Clients on Customized Course",
    description: "Sharing the curated curriculum roadmap for feedback.",
    longDescription: "We present the tailored curriculum to stakeholders and clients. We walk through each learning objective, project milestone, and evaluation method, incorporating final adjustments to align perfectly with expectations.",
    icon: Briefcase,
    color: "lime",
    gradient: "from-yellow-500 to-lime-500",
    themeColor: "76 75% 45%"
  },
  {
    id: "step-5",
    number: "05",
    title: "Finalizing the Training Dates",
    description: "Scheduling training sessions and milestones.",
    longDescription: "We coordinate with your operations and HR teams to lock in training schedules. We offer flexible options, including intensive bootcamps, weekend batches, or distributed weekly sessions, to minimize operational downtime.",
    icon: Calendar,
    color: "emerald",
    gradient: "from-lime-500 to-emerald-500",
    themeColor: "142 70% 45%"
  },
  {
    id: "step-6",
    number: "06",
    title: "Sharing Training Delivery Plan",
    description: "Distributing the detailed daily agenda and schedule.",
    longDescription: "A comprehensive roadmap is distributed to all stakeholders. This outlines the exact day-by-day sequence of topics, hands-on labs, projects, mentor check-ins, and assessment checkpoints.",
    icon: FileText,
    color: "teal",
    gradient: "from-emerald-500 to-teal-500",
    themeColor: "160 84% 39%"
  },
  {
    id: "step-7",
    number: "07",
    title: "Addressing the Pre-Requisites of Training",
    description: "Ensuring setups, installations, and system ready.",
    longDescription: "We configure the learning environment before day one. This includes distributing prep materials, setting up sandbox servers, configuring software licenses, and verifying hardware compatibility for all participants.",
    icon: CheckSquare,
    color: "cyan",
    gradient: "from-teal-500 to-cyan-500",
    themeColor: "189 94% 43%"
  },
  {
    id: "step-8",
    number: "08",
    title: "SYASAN'S Experiential Learning Process",
    description: "Implementing our research-backed core pedagogy.",
    longDescription: "The heart of our training. This is where we deploy Syasan's 4-Step experiential pedagogy, designed to maximize knowledge retention, engagement, and direct translate concepts into daily productivity.",
    icon: BookOpen,
    color: "sky",
    gradient: "from-cyan-500 to-sky-500",
    themeColor: "199 89% 48%"
  },
  {
    id: "step-9",
    number: "09",
    title: "Conducting Post Training Assessment",
    description: "Evaluating knowledge retention and technical growth.",
    longDescription: "After the training modules, we conduct extensive examinations, project reviews, and live coding challenges to measure the participants' skill progression and conceptual understanding.",
    icon: CheckCircle,
    color: "blue",
    gradient: "from-sky-500 to-blue-500",
    themeColor: "221 83% 53%"
  },
  {
    id: "step-10",
    number: "10",
    title: "Feedback of the Training Program",
    description: "Gathering evaluations from participants and clients.",
    longDescription: "We collect anonymous and detailed feedback regarding course speed, mentor performance, laboratory setups, and curriculum utility to continually refine our standards.",
    icon: MessageSquare,
    color: "indigo",
    gradient: "from-blue-500 to-indigo-500",
    themeColor: "239 84% 60%"
  },
  {
    id: "step-11",
    number: "11",
    title: "Submitting Performance Analysis Report",
    description: "Sharing diagnostic growth graphs with managers.",
    longDescription: "We provide managers and HR directors with a detailed performance dossier. This includes diagnostic graphs, individual progress charts, domain competency scores, and action plans for continuous learning.",
    icon: BarChart,
    color: "violet",
    gradient: "from-indigo-500 to-violet-500",
    themeColor: "263 70% 50%"
  },
  {
    id: "step-12",
    number: "12",
    title: "Distributing Trophies to Overall Performers",
    description: "Recognizing high achievers to incentivize excellence.",
    longDescription: "We celebrate accomplishments! High achievers, top contributors, and outstanding project teams are awarded physical trophies and accolades to build momentum and encourage team excellence.",
    icon: Trophy,
    color: "purple",
    gradient: "from-violet-500 to-purple-500",
    themeColor: "271 81% 56%"
  },
  {
    id: "step-13",
    number: "13",
    title: "Providing e-Certificate",
    description: "Issuing digital credentials and achievement badges.",
    longDescription: "Participants who clear the final assessments are awarded a verified digital e-Certificate. This serves as a formal verification of their newly acquired skills and can be integrated into HR profiles.",
    icon: Award,
    color: "fuchsia",
    gradient: "from-purple-500 to-fuchsia-500",
    themeColor: "292 84% 57%"
  },
  {
    id: "step-14",
    number: "14",
    title: "Post Training Follow up",
    description: "Ongoing mentoring support and placement assist.",
    longDescription: "Learning doesn't end when the class does. We offer scheduled mentoring catch-ups, advanced learning assets, and continuous career path support to ensure long-term career growth.",
    icon: Activity,
    color: "rose",
    gradient: "from-fuchsia-500 to-rose-500",
    themeColor: "330 81% 60%"
  }
];

// 4 Pedagogy Steps
const pedagogySteps = [
  {
    step: "Step 01",
    title: "Providing a Learning Through Research Based Pedagogy",
    description: "Rigorous frameworks built on active academic and professional research guidelines.",
    icon: Compass,
    color: "from-amber-400 to-orange-500"
  },
  {
    step: "Step 02",
    title: "Facilitate the Learning through Interactive Classroom Discussions",
    description: "Active engagement, peer-to-peer discourse, and collaborative problem-solving sessions.",
    icon: MessageSquare,
    color: "from-orange-500 to-red-500"
  },
  {
    step: "Step 03",
    title: "Enable the Participant to link Core Concepts with Real Time Case-Studies",
    description: "Hands-on implementation of theories onto complex, memorable real-world business cases.",
    icon: Lightbulb,
    color: "from-red-500 to-pink-500"
  },
  {
    step: "Step 04",
    title: "Implement the Learning on Daily Basis for Better Productivity",
    description: "Action plans and automated tracking workflows to apply knowledge directly to work tasks.",
    icon: Workflow,
    color: "from-pink-500 to-rose-500"
  }
];

export default function TrainingJourney() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [isPedagogyActive, setIsPedagogyActive] = useState<boolean>(false);
  const [activePedagogyStep, setActivePedagogyStep] = useState<number>(0);

  // SVG coordinate tracking for branch animation
  const containerRef = useRef<HTMLDivElement>(null);
  const [step8Coord, setStep8Coord] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Update pedagogy active state whenever activeStep updates
  useEffect(() => {
    if (activeStep === 7) {
      setIsPedagogyActive(true);
    } else {
      setIsPedagogyActive(false);
    }
  }, [activeStep]);

  // Recalculate coordinates for Step 08 on size changes to draw branch SVG perfectly
  const updateCoordinates = () => {
    if (!containerRef.current) return;
    const step8El = containerRef.current.querySelector('[data-step="step-08"]');
    if (step8El) {
      const rect = step8El.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      setStep8Coord({
        x: rect.left - containerRect.left + rect.width / 2,
        y: rect.top - containerRect.top + rect.height / 2
      });
    }
  };

  useEffect(() => {
    updateCoordinates();
    window.addEventListener("resize", updateCoordinates);
    return () => window.removeEventListener("resize", updateCoordinates);
  }, [isPedagogyActive]);

  // Handle coordinates after mount or active step changes
  useEffect(() => {
    setTimeout(updateCoordinates, 150);
  }, []);

  const currentStepData = trainingSteps[activeStep];

  // Radial path geometry calculations
  const totalSteps = trainingSteps.length;
  const startAngle = -65 * Math.PI / 180; // Top point
  const endAngle = 65 * Math.PI / 180;   // Bottom point
  const angleRange = endAngle - startAngle;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col justify-between">
      <Navigation />

      {/* Main Content */}
      <main className="flex-grow pt-28 pb-16 bg-grid-pattern relative">
        {/* Glow Blobs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 animate-blob-slow" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10 animate-blob-medium" />

        <div className="container mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <MotionDiv
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4 border border-primary/20"
            >
              <Award className="w-3.5 h-3.5" />
              Syasan's Blueprint
            </MotionDiv>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
              The <span className="gradient-text">14X Learning Framework</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              An end-to-end methodology designed to transform learning through research-driven training, practical application, continuous assessment, and measurable outcomes.
            </p>
          </div>

          {/* Core Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Video Demonstration & Selected Step Details */}
            <div className="lg:col-span-5 flex flex-col gap-8 order-2 lg:order-1">
              
              {/* Step Detail Card */}
              <AnimatePresence mode="wait">
                <MotionDiv
                  key={activeStep}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  className="glass rounded-3xl p-6 md:p-8 border border-white/60 shadow-xl shadow-slate-100/50 relative overflow-hidden"
                >
                  {/* Backdrop Giant Number */}
                  <div className="absolute -top-12 -right-8 text-[120px] font-black text-slate-100 select-none -z-10 font-mono">
                    {currentStepData.number}
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${currentStepData.gradient} text-white shadow-lg`}>
                      {React.createElement(currentStepData.icon, { className: "w-6 h-6" })}
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                        Step {currentStepData.number} of 14
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold leading-tight">
                        {currentStepData.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-base text-muted-foreground leading-relaxed mb-6">
                    {currentStepData.longDescription}
                  </p>

                  {/* Special detail view for step 8 pedagogy */}
                  {activeStep === 7 && (
                    <div className="mt-6 border-t border-slate-100 pt-6">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 flex items-center gap-2">
                        <BookOpenCheck className="w-4 h-4" />
                        Pedagogy Framework Steps
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        {pedagogySteps.map((ped, idx) => (
                          <div 
                            key={idx} 
                            onClick={() => setActivePedagogyStep(idx)}
                            className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
                              activePedagogyStep === idx 
                                ? "bg-primary/5 border-primary/20 shadow-sm" 
                                : "bg-white/40 border-transparent hover:bg-slate-50"
                            }`}
                          >
                            <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${ped.color} text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5`}>
                              {idx + 1}
                            </div>
                            <div>
                              <h5 className={`text-xs font-bold leading-tight ${activePedagogyStep === idx ? "text-primary" : "text-foreground"}`}>
                                {ped.title}
                              </h5>
                              <p className="text-[11px] text-muted-foreground mt-1 leading-normal">
                                {ped.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Info card footer with quick actions */}
                  <div className="mt-6 border-t border-slate-100 pt-4 flex items-center justify-between">
                    <button 
                      onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : totalSteps - 1))}
                      className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors py-2 px-3 rounded-lg hover:bg-slate-50"
                    >
                      &larr; Previous Step
                    </button>
                    <button 
                      onClick={() => setActiveStep((prev) => (prev < totalSteps - 1 ? prev + 1 : 0))}
                      className="text-xs font-semibold text-primary hover:text-primary-dark transition-colors py-2 px-4 rounded-lg bg-primary/5 hover:bg-primary/10 flex items-center gap-1"
                    >
                      Next Step <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </MotionDiv>
              </AnimatePresence>

              {/* Video container with custom aesthetic frame */}
              <MotionDiv
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative glass rounded-2xl overflow-hidden border border-white/60 shadow-xl shadow-slate-100/50 p-2"
              >
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white font-medium uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Live Motion Graphic
                </div>
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 flex items-center justify-center relative">
                  <video 
                    src="/assets/f_d_c_b_a_d_a_c_fmp_.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover"
                  />
                </div>
              </MotionDiv>
            </div>

            {/* Right Column: Interactive Crescent Wheel (Desktop) & Step Stepper (Mobile) */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              
              {/* Desktop Crescent Selector */}
              <div 
                ref={containerRef}
                className="hidden lg:flex w-full h-[820px] relative overflow-hidden items-center justify-end rounded-3xl bg-white/45 border border-white/60 shadow-xl shadow-slate-100/50 p-6"
              >
                {/* SVG Pedagogy Branch lines */}
                <AnimatePresence>
                  {isPedagogyActive && step8Coord.x !== 0 && (
                    <svg className="absolute inset-0 pointer-events-none w-full h-full -z-10">
                      {/* Stem from step 8 node to left */}
                      <MotionPath
                        d={`M ${step8Coord.x} ${step8Coord.y} L ${step8Coord.x - 35} ${step8Coord.y}`}
                        stroke="#e2e8f0"
                        strokeWidth="3"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        exit={{ pathLength: 0 }}
                        transition={{ duration: 0.4 }}
                      />
                      {/* Vertical line splitting branches */}
                      <MotionPath
                        d={`M ${step8Coord.x - 35} ${step8Coord.y - 138} L ${step8Coord.x - 35} ${step8Coord.y + 138}`}
                        stroke="#e2e8f0"
                        strokeWidth="3"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        exit={{ pathLength: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      />
                      {/* Sub branch 1 */}
                      <MotionPath
                        d={`M ${step8Coord.x - 35} ${step8Coord.y - 138} L ${step8Coord.x - 70} ${step8Coord.y - 138}`}
                        stroke="#e2e8f0"
                        strokeWidth="3"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        exit={{ pathLength: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                      />
                      {/* Sub branch 2 */}
                      <MotionPath
                        d={`M ${step8Coord.x - 35} ${step8Coord.y - 46} L ${step8Coord.x - 70} ${step8Coord.y - 46}`}
                        stroke="#e2e8f0"
                        strokeWidth="3"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        exit={{ pathLength: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                      />
                      {/* Sub branch 3 */}
                      <MotionPath
                        d={`M ${step8Coord.x - 35} ${step8Coord.y + 46} L ${step8Coord.x - 70} ${step8Coord.y + 46}`}
                        stroke="#e2e8f0"
                        strokeWidth="3"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        exit={{ pathLength: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                      />
                      {/* Sub branch 4 */}
                      <MotionPath
                        d={`M ${step8Coord.x - 35} ${step8Coord.y + 138} L ${step8Coord.x - 70} ${step8Coord.y + 138}`}
                        stroke="#e2e8f0"
                        strokeWidth="3"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        exit={{ pathLength: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                      />
                    </svg>
                  )}
                </AnimatePresence>

                {/* Pedagogy Sub-Step Leaves overlay on the left */}
                <AnimatePresence>
                  {isPedagogyActive && step8Coord.x !== 0 && (
                    <div className="absolute inset-y-0 left-4 w-60 flex flex-col justify-center gap-6 z-10">
                      {pedagogySteps.map((ped, idx) => {
                        // Vertical positions align with branch SVG coordinates
                        return (
                          <MotionDiv
                            key={idx}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                            onClick={() => setActivePedagogyStep(idx)}
                            className={`flex flex-col p-3 rounded-2xl border transition-all cursor-pointer bg-white shadow-sm ${
                              activePedagogyStep === idx 
                                ? "border-sky-400 ring-2 ring-sky-100" 
                                : "border-slate-100 hover:border-slate-300"
                            }`}
                          >
                            <div className="flex items-center gap-2 mb-1.5">
                              <span className="text-[10px] font-bold text-sky-600 uppercase tracking-widest">{ped.step}</span>
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${ped.color}`} />
                            </div>
                            <h5 className="text-[11px] font-bold leading-snug text-slate-800 line-clamp-2">
                              {ped.title}
                            </h5>
                          </MotionDiv>
                        );
                      })}

                      {/* Pedagogy Progress bar matching original layout */}
                      <MotionDiv
                        initial={{ opacity: 0, scaleY: 0 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        exit={{ opacity: 0, scaleY: 0 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                        className="mt-2 w-full bg-slate-100 h-2.5 rounded-full overflow-hidden border border-slate-200"
                      >
                        <div 
                          className="h-full bg-gradient-to-r from-sky-400 to-indigo-500 transition-all duration-300"
                          style={{ width: `${(activePedagogyStep + 1) * 25}%` }}
                        />
                      </MotionDiv>
                    </div>
                  )}
                </AnimatePresence>

                {/* Outer Circular Track Indicator */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-slate-100/60 pointer-events-none -mr-[450px]" />

                {/* 14 Crescent Steps */}
                {trainingSteps.map((step, idx) => {
                  const angle = startAngle + (idx * angleRange / (totalSteps - 1));
                  
                  // Central radius of the crescent path (pixels)
                  const R_px = 420; 
                  // Math center position relative to the container right boundary
                  const cx = 745; // offset from left side of container
                  const cy = 410; // center vertical line of container
                  
                  const x = cx - R_px * Math.cos(angle);
                  const y = cy + R_px * Math.sin(angle);
                  
                  const isActive = activeStep === idx;
                  const isHovered = hoveredStep === idx;
                  const angleDeg = angle * 180 / Math.PI;

                  return (
                    <div
                      key={step.id}
                      data-step={`step-${step.number}`}
                      className="absolute z-20 group"
                      style={{ 
                        left: `${x}px`, 
                        top: `${y}px`,
                        transform: "translate(-50%, -50%)"
                      }}
                    >
                      {/* The Leaf Pointer: Rotated to point inward, but keeps contents horizontal */}
                      <div className="relative flex items-center justify-end">
                        
                        {/* Title text container. Extends horizontally to the left */}
                        <AnimatePresence>
                          {(isActive || isHovered) && (
                            <MotionDiv
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 20 }}
                              transition={{ duration: 0.25 }}
                              className={`absolute right-16 pr-2 whitespace-nowrap z-30 pointer-events-none`}
                            >
                              <div className="bg-slate-900 text-white text-[11px] font-semibold py-1.5 px-3 rounded-lg shadow-lg flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                                {step.title}
                              </div>
                            </MotionDiv>
                          )}
                        </AnimatePresence>

                        {/* Interactive Node Point */}
                        <MotionButton
                          onClick={() => setActiveStep(idx)}
                          onMouseEnter={() => setHoveredStep(idx)}
                          onMouseLeave={() => setHoveredStep(null)}
                          whileHover={{ scale: 1.12 }}
                          whileTap={{ scale: 0.95 }}
                          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-md relative border cursor-pointer ${
                            isActive 
                              ? `bg-gradient-to-br ${step.gradient} text-white border-transparent ring-4 ring-offset-2 ring-primary/30 z-30` 
                              : "bg-white hover:bg-slate-50 text-slate-700 border-slate-100"
                          }`}
                        >
                          <span className="font-mono text-sm font-bold">{step.number}</span>
                          
                          {/* Inner glowing pulse indicator */}
                          {isActive && (
                            <span className="absolute inset-0 rounded-full border border-white animate-ping opacity-35" />
                          )}
                        </MotionButton>
                      </div>
                    </div>
                  );
                })}

                {/* Central Circle "DELIVERY PLAN" Hub */}
                <div 
                  className="absolute right-0 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 -mr-[225px] flex items-center justify-start p-12 text-white shadow-2xl overflow-hidden shadow-orange-500/20"
                >
                  {/* Subtle inner rotating rings for luxury look */}
                  <div className="absolute inset-10 rounded-full border border-white/10 animate-spin" style={{ animationDuration: '40s' }} />
                  <div className="absolute inset-20 rounded-full border border-dashed border-white/5 animate-spin" style={{ animationDuration: '60s', animationDirection: 'reverse' }} />

                  <div className="max-w-[200px] flex flex-col items-start gap-1 z-10">
                    <span className="text-[10px] font-extrabold tracking-widest text-orange-100/80 uppercase">SYASAN'S</span>
                    <h2 className="text-3xl font-black font-serif tracking-tight leading-none">
                      DELIVERY<br/>PLAN
                    </h2>
                    <div className="w-10 h-1 bg-white rounded-full mt-2" />
                  </div>
                </div>
              </div>

              {/* Mobile Adaptive Stepper Layout */}
              <div className="lg:hidden flex flex-col gap-4">
                <div className="flex items-center justify-between bg-gradient-to-r from-amber-400 to-orange-500 p-6 rounded-2xl text-white shadow-lg">
                  <div>
                    <span className="text-[9px] font-extrabold tracking-widest uppercase opacity-80">SYASAN'S</span>
                    <h3 className="text-xl font-black font-serif">DELIVERY PLAN</h3>
                  </div>
                  <div className="text-xs font-semibold py-1 px-3 bg-white/20 rounded-full">
                    {activeStep + 1} / 14 Completed
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {trainingSteps.map((step, idx) => {
                    const isActive = activeStep === idx;
                    
                    return (
                      <div 
                        key={step.id}
                        className={`glass rounded-2xl border p-4 transition-all duration-300 ${
                          isActive 
                            ? `border-transparent ring-2 ring-primary/40 shadow-lg shadow-slate-100 bg-white` 
                            : "border-slate-100 hover:border-slate-200 bg-white/80"
                        }`}
                      >
                        <div 
                          onClick={() => setActiveStep(idx)}
                          className="flex items-center justify-between cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold ${
                              isActive 
                                ? `bg-gradient-to-br ${step.gradient} text-white shadow-md` 
                                : "bg-slate-100 text-slate-600"
                            }`}>
                              {step.number}
                            </div>
                            <h4 className={`text-sm font-bold leading-tight ${isActive ? "text-slate-800" : "text-slate-700"}`}>
                              {step.title}
                            </h4>
                          </div>
                          <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform ${isActive ? "rotate-90 text-primary" : ""}`} />
                        </div>

                        {/* Collapsible Mobile Content Details */}
                        {isActive && (
                          <MotionDiv
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 pt-4 border-t border-slate-100"
                          >
                            <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                              {step.longDescription}
                            </p>

                            {/* Nest pedagogy inside mobile Step 8 */}
                            {idx === 7 && (
                              <div className="mt-4 bg-slate-50/50 rounded-xl p-3 border border-slate-100">
                                <h5 className="text-[10px] font-bold text-sky-600 uppercase tracking-wider mb-2.5">
                                  Pedagogy Steps:
                                </h5>
                                <div className="flex flex-col gap-2">
                                  {pedagogySteps.map((ped, pIdx) => (
                                    <div key={pIdx} className="bg-white p-2.5 rounded-lg border border-slate-100">
                                      <div className="flex items-center gap-2 mb-1">
                                        <span className="text-[9px] font-bold text-sky-500 uppercase">{ped.step}</span>
                                        <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${ped.color}`} />
                                      </div>
                                      <h6 className="text-[10px] font-bold text-slate-700">{ped.title}</h6>
                                      <p className="text-[9px] text-muted-foreground mt-0.5">{ped.description}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </MotionDiv>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>
        </div>
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
}
