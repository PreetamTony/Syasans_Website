import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Handshake, 
  BarChart3, 
  Award, 
  Users, 
  Trophy, 
  Network, 
  Building2, 
  Server, 
  Heart, 
  Zap,
  Rocket,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Milestone } from '@/types';

// Workaround for framer-motion type issues in current environment
const MotionDiv = motion.div as any;

const milestones: Milestone[] = [
  {
    year: '2015',
    title: 'Establishment and Vision',
    description: 'The foundation of Syasan\'s Career Analytics was laid with a vision to revolutionize Career Guidance and Employability skills.',
    icon: Rocket,
    image: '/assets/syasans-logo.png',
    tags: ['Founding', 'Vision']
  },
  {
    year: '2016',
    title: 'Government Collaboration',
    description: 'Partnered with the Govt for the "Sathanai Selvangal" Initiative to train the students on competitive exams across the remote areas of Tamil Nadu.',
    icon: Handshake,
    image: '/assets/Sathanai_selvangal.png',
    tags: ['Govt', 'Sathanai Selvangal']
  },
  {
    year: '2017',
    title: 'Career Analytics Program',
    description: 'Launch of a Career analytics-driven program to help students targetting super-dream offers.',
    icon: BarChart3,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['Launch', 'Analytics']
  },
  {
    year: '2018',
    title: 'State-Level Endorsement',
    description: 'Received official endorsement at the state level, for providing talents Pan-India.',
    icon: Award,
    image: '/assets/state_level_endorsement.png',
    tags: ['Recognition', 'State Level']
  },
  {
    year: '2019',
    title: 'Scaling Impact',
    description: 'Reached a significant milestone of training over 50,000 students across South-India.',
    icon: Users,
    image: '/assets/Demographic.png',
    tags: ['50k Students', 'Scale']
  },
  {
    year: '2020',
    title: 'National Startup Recognition',
    description: 'Honored by Benchmark Trust & TQV as a recognized National Startup for innovation in EdTech.',
    icon: Trophy,
    image: '/assets/Recognition.png',
    tags: ['Award', 'Startup India']
  },
  {
    year: '2021',
    title: 'Strategic Growth',
    description: 'Expanded network significantly by securing partnerships with 75+ educational institutions.',
    icon: Network,
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800',
    tags: ['75+ Partners', 'Growth']
  },
  {
    year: '2022',
    title: 'Integrated Learning Centres',
    description: 'Deployment of Integrated Learning Centres across 20+ institutions.',
    icon: Building2,
    image: '/assets/Classroom_setting.png',
    tags: ['Infrastructure', 'Learning']
  },
  {
    year: '2023',
    title: 'Global Tech Launch',
    description: 'Launched the D\'LAN Quant M Server, a cutting-edge Aptitude Test Engine for global markets.',
    icon: Server,
    image: '/assets/Quantum_Server.jpg',
    tags: ['Technology', 'Global']
  },
  {
    year: '2024',
    title: 'Social Responsibility Honour',
    description: 'Honoured for profound Social Responsibility contributions in the field of Education by Ministry of Rural Industries (Government of Tamil Nadu).',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800',
    tags: ['CSR', 'Impact']
  },
  {
    year: '2025',
    title: 'Record-Breaking Conversion',
    description: 'Achieved a historic 91% Placement Conversion rate, setting a new industry benchmark.',
    icon: Zap,
    image: '/assets/Placement_rate.png',
    tags: ['91% Success', 'Milestone']
  },
];

const TimelineCard: React.FC<{ data: Milestone; index: number }> = ({ data, index }) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="flex-shrink-0 w-[290px] sm:w-[320px] snap-center flex flex-col items-center pt-[90px] relative group"
    >
      {/* Year Label above the dot */}
      <div className="absolute top-[6px] z-30 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white text-[11px] font-extrabold px-3 py-0.5 rounded-full shadow-md tracking-wider group-hover:from-orange-500 group-hover:to-red-500 group-hover:scale-110 group-hover:ring-4 group-hover:ring-orange-500/25 transition-all duration-300 select-none">
        {data.year}
      </div>

      {/* Node Dot on Timeline Line */}
      <div className="absolute top-[40px] w-8 h-8 rounded-full bg-white dark:bg-slate-950 backdrop-blur-sm shadow-md z-20 flex items-center justify-center border-2 border-slate-200 dark:border-slate-800 group-hover:border-orange-500 dark:group-hover:border-orange-400 group-hover:scale-115 transition-all duration-300">
        <div className={`w-3.5 h-3.5 rounded-full bg-gradient-to-br transition-all duration-300 group-hover:scale-110 ${
          data.year === '2025' 
            ? 'from-yellow-400 to-red-500 animate-pulse' 
            : 'from-blue-500 to-indigo-600 group-hover:from-orange-500 group-hover:to-red-500'
        }`} />
        {data.year === '2025' ? (
          <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-30" />
        ) : (
          <div className="absolute inset-0 bg-orange-500 rounded-full animate-ping opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        )}
      </div>

      {/* Stem connector */}
      <div className="absolute top-[48px] h-[42px] w-0.5 bg-gradient-to-b from-blue-500/30 to-blue-500/5 group-hover:from-orange-500 group-hover:to-red-500 transition-all duration-300 z-10" />

      {/* Card Wrapper with Glow Backlight */}
      <div className="w-full relative px-1">
        {/* Backlight Glow Overlay */}
        <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${
          data.year === '2025'
            ? 'from-yellow-500/25 to-red-500/25 opacity-60 group-hover:opacity-100 group-hover:scale-[1.03]'
            : 'from-blue-600/25 to-indigo-600/25 dark:from-blue-500/15 dark:to-purple-500/15 opacity-0 group-hover:opacity-100 group-hover:scale-[1.03]'
        } blur-xl transition-all duration-500 -z-10`} />

        {/* Card Content */}
        <div className={`w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border ${
          data.year === '2025' 
            ? 'border-orange-500/40 shadow-orange-500/10' 
            : 'border-slate-100 dark:border-slate-800/80 group-hover:border-slate-200 dark:group-hover:border-slate-700'
        } flex flex-col h-[340px] transform group-hover:-translate-y-2 relative z-10`}>
          {/* Image Header */}
          <div className="relative h-32 overflow-hidden bg-white dark:bg-slate-950 flex items-center justify-center flex-shrink-0">
            <img 
              src={data.image} 
              alt={data.title} 
              className={`${data.year === '2015' ? 'h-24 w-auto object-contain' : 'w-full h-full object-cover'} transform group-hover:scale-110 transition-transform duration-500`}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent flex items-end p-3">
              <div className="text-white w-full">
                <div className="flex justify-between items-center mb-1">
                   {data.year === '2025' && <span className="bg-green-500 text-[8px] font-bold px-1.5 py-0.5 rounded text-white animate-pulse">LATEST</span>}
                </div>
                <h3 className="text-sm md:text-base font-bold leading-tight text-white/95 truncate">{data.title}</h3>
              </div>
            </div>
            
            {/* Icon Bubble */}
            <div className="absolute top-2.5 right-2.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm p-1.5 rounded-full shadow-md">
               <data.icon 
                 size={14} 
                 className="text-blue-600 dark:text-blue-400" 
               />
            </div>
          </div>

          {/* Card Body */}
          <div className="p-4 flex-1 flex flex-col justify-between overflow-hidden bg-white/50 dark:bg-slate-900/50">
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-xs mb-3 line-clamp-4">
              {data.description}
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {data.tags?.map((tag) => (
                <span key={tag} className="text-[9px] uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 bg-slate-100/80 dark:bg-slate-800/85 px-2 py-0.5 rounded-md group-hover:bg-orange-500/10 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export const Timeline: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const checkScrollLimits = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftBtn(scrollLeft > 10);
      setShowRightBtn(scrollWidth - scrollLeft - clientWidth > 10);

      // Track scroll progress percentage
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll > 0) {
        setScrollProgress(scrollLeft / maxScroll);
      } else {
        setScrollProgress(0);
      }
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScrollLimits);
      // Run once initially to set correct state
      checkScrollLimits();
    }
    return () => {
      if (el) el.removeEventListener('scroll', checkScrollLimits);
    };
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = 350;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative w-full py-20 px-4 md:px-0 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      {/* Subtle Tech Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
         <div className="absolute top-[-10%] left-[-5%] w-[450px] h-[450px] bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-blob-slow" />
         <div className="absolute top-[30%] right-[-10%] w-[550px] h-[550px] bg-indigo-500/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-blob-medium" />
         <div className="absolute bottom-[10%] left-[10%] w-80 h-80 bg-orange-500/10 dark:bg-orange-500/5 rounded-full blur-3xl animate-blob-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto px-4">
          <MotionDiv
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
                <span className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent to-orange-500"></span>
                <span className="text-orange-500 font-bold uppercase tracking-[0.2em] text-xs">2015 – 2025</span>
                <span className="h-px w-8 md:w-16 bg-gradient-to-l from-transparent to-orange-500"></span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white font-serif mb-6 leading-tight">
              A Decade of <br className="hidden md:block" />
              <span className="text-[#2563eb] font-bold">Impact & Innovation</span>
            </h1>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto font-light">
              Witness the evolution of <span className="font-semibold text-slate-800 dark:text-slate-200">Syasan's Career Analytics</span>. 
              Scroll through our timeline of key milestones and placement breakthroughs defining future education.
            </p>
          </MotionDiv>
        </div>

        {/* Timeline Horizontal Scrollable Container Wrapper */}
        <div className="relative px-2 sm:px-8">
          
          {/* Scroll Navigation Buttons */}
          {showLeftBtn && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScroll('left')}
              className="absolute left-0 top-[226px] -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 shadow-xl text-slate-700 dark:text-slate-300 flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 dark:hover:from-blue-500 dark:hover:to-indigo-500 hover:text-white hover:border-transparent transition-all duration-300 backdrop-blur-md"
              aria-label="Scroll Left"
            >
              <ChevronLeft size={24} />
            </motion.button>
          )}

          {showRightBtn && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScroll('right')}
              className="absolute right-0 top-[226px] -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 shadow-xl text-slate-700 dark:text-slate-300 flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 dark:hover:from-blue-500 dark:hover:to-indigo-500 hover:text-white hover:border-transparent transition-all duration-300 backdrop-blur-md"
              aria-label="Scroll Right"
            >
              <ChevronRight size={24} />
            </motion.button>
          )}

          {/* Timeline Track Content */}
          {/* Shifted padding slightly to provide top clearance for year badges */}
          <div className="relative overflow-hidden w-full pt-4 pb-4">
            
            {/* Timeline continuous horizontal track line (Inactive) */}
            <div className="absolute top-[72px] left-4 right-4 h-1 bg-slate-200 dark:bg-slate-850 z-0 rounded-full" />

            {/* Glowing Active Scroll Progress Line */}
            <div 
              className="absolute top-[72px] left-4 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-500 z-0 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.6)] transition-all duration-200 ease-out"
              style={{ width: `calc(${scrollProgress * 100}% - 32px)` }}
            />
            
            {/* Scrollable Track */}
            <div 
              ref={scrollRef}
              className="scrollbar-none scroll-smooth flex gap-6 sm:gap-8 overflow-x-auto pb-8 px-4 sm:px-12 snap-x snap-mandatory z-10 relative"
            >
              {milestones.map((milestone, index) => (
                <TimelineCard key={milestone.year} data={milestone} index={index} />
              ))}
            </div>

          </div>
        </div>

        {/* CSS Styles to hide scrollbar */}
        <style jsx>{`
          .scrollbar-none::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-none {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </div>
  );
};
