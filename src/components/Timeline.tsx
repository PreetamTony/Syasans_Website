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
      className="flex-shrink-0 w-[290px] sm:w-[320px] snap-center flex flex-col items-center pt-[70px] relative group"
    >
      {/* Node Dot on Timeline Line */}
      <div className="absolute top-[20px] w-8 h-8 rounded-full bg-white backdrop-blur-sm shadow-md z-20 flex items-center justify-center border-2 border-slate-200 group-hover:border-blue-600 group-hover:scale-110 transition-all duration-300">
        <div className={`w-3.5 h-3.5 rounded-full bg-gradient-to-br ${
          data.year === '2025' 
            ? 'from-yellow-400 to-red-500 animate-pulse' 
            : 'from-blue-500 to-indigo-600'
        }`} />
        {data.year === '2025' && (
          <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-30" />
        )}
      </div>

      {/* Stem connector */}
      <div className="absolute top-[28px] h-[42px] w-0.5 bg-gradient-to-b from-blue-500/40 to-blue-500/10 group-hover:from-blue-600 group-hover:to-blue-500 transition-all duration-300 z-10" />

      {/* Card Content */}
      <div className={`w-full bg-white dark:bg-slate-900 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border ${data.year === '2025' ? 'border-orange-500 shadow-orange-500/10' : 'border-slate-100 dark:border-slate-800'} flex flex-col h-[340px]`}>
        {/* Image Header */}
        <div className="relative h-32 overflow-hidden bg-white flex items-center justify-center flex-shrink-0">
          <img 
            src={data.image} 
            alt={data.title} 
            className={`${data.year === '2015' ? 'h-24 w-auto object-contain' : 'w-full h-full object-cover'} transform group-hover:scale-105 transition-transform duration-500`}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent flex items-end p-3">
            <div className="text-white w-full">
              <div className="flex justify-between items-center mb-0.5">
                 <span className="bg-gradient-to-r from-blue-600 to-orange-500 text-[10px] font-extrabold px-2 py-0.5 rounded text-white shadow-sm tracking-wide">
                   {data.year}
                 </span>
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
        <div className="p-4 flex-1 flex flex-col justify-between overflow-hidden">
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-xs mb-3 line-clamp-4">
            {data.description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {data.tags?.map((tag) => (
              <span key={tag} className="text-[9px] uppercase tracking-wider font-bold text-slate-500 bg-slate-50 dark:bg-slate-800 dark:text-slate-400 px-2 py-0.5 rounded-md group-hover:bg-blue-500/5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                #{tag}
              </span>
            ))}
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

  const checkScrollLimits = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftBtn(scrollLeft > 10);
      setShowRightBtn(scrollWidth - scrollLeft - clientWidth > 10);
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
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
         <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl" />
         <div className="absolute bottom-[10%] left-[10%] w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
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
              className="absolute left-0 top-[206px] -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-lg text-slate-700 dark:text-slate-300 flex items-center justify-center hover:bg-white dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 backdrop-blur-md"
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
              className="absolute right-0 top-[206px] -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-lg text-slate-700 dark:text-slate-300 flex items-center justify-center hover:bg-white dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 backdrop-blur-md"
              aria-label="Scroll Right"
            >
              <ChevronRight size={24} />
            </motion.button>
          )}

          {/* Timeline Track Content */}
          <div className="relative overflow-hidden w-full py-4">
            
            {/* Timeline continuous horizontal track line */}
            <div className="absolute top-[40px] left-0 right-0 h-1 bg-gradient-to-r from-blue-500/20 via-blue-500/50 to-indigo-500/20 z-0" />
            
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
