import React from 'react';
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
  Calendar,
  Rocket
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
    description: 'Partnered with the Govt for the "Sathanai Selvangal" Initiative to train the students on competitiive exams across the remote areas of Tamil Nadu.',
    icon: Handshake,
    image: '/assets/Sathanai_selvangal.png',
    tags: ['Govt', 'Sathanai Selvangal']
  },
  {
    year: '2017',
    title: 'Career Analytics Program',
    description: 'Launch of a Career analytics-driven program to help students target super-dream offers.',
    icon: BarChart3,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['Launch', 'Analytics']
  },
  {
    year: '2018',
    title: 'State-Level Endorsement',
    description: 'Received official endorsement at the state level, for providining talents Pan-India.',
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
    description: 'Deployment of Integrated Learning Centres across 20 institutions.',
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
    description: 'Honoured for profound Social Responsibility contributions in the field of Education by Ministry of Rural Industries by Government of Tamil Nadu.',
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
  const isEven = index % 2 === 0;

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`relative flex items-center justify-between md:justify-normal w-full mb-12 right-timeline ${
        isEven ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Center Line Dot */}
      <div className="order-1 absolute left-[22px] md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-xl z-20 flex items-center justify-center group-hover:scale-110 transition-all duration-500 border-2 border-white/40">
        {/* Main Gradient Background */}
        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${
          data.year === '2025' 
            ? 'from-yellow-400 via-orange-500 to-red-500' 
            : 'from-blue-500 via-blue-600 to-blue-700'
        } opacity-100 transition-all duration-500 group-hover:opacity-100`}></div>
        
        {/* Inner Glow */}
        <div className={`absolute inset-0 rounded-full ${
          data.year === '2025' 
            ? 'bg-gradient-to-br from-yellow-200/30 to-transparent' 
            : 'bg-gradient-to-br from-blue-200/30 to-transparent'
        } opacity-70`}></div>
        
        {/* Center Dot */}
        <div className="relative w-4 h-4 bg-white/95 rounded-full shadow-lg flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          {data.year === '2025' && (
            <>
              <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-70"></div>
              <div className="absolute -inset-1 rounded-full bg-yellow-400/40 animate-pulse"></div>
            </>
          )}
        </div>
        
        {/* Hover Glow Effect */}
        <div className={`absolute -inset-1 rounded-full ${
          data.year === '2025' 
            ? 'bg-gradient-to-br from-yellow-400/30 to-red-500/30' 
            : 'bg-gradient-to-br from-blue-400/30 to-blue-600/30'
        } opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-md`}></div>
        
        {/* Subtle Border Glow */}
        <div className={`absolute -inset-0.5 rounded-full ${
          data.year === '2025' 
            ? 'border-2 border-yellow-300/50' 
            : 'border-2 border-blue-300/50'
        } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      </div>

      {/* Content Card */}
      <div className={`order-1 w-full md:w-[45%] pl-16 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
        <div className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border ${data.year === '2025' ? 'border-brand-orange shadow-brand-orange/20' : 'border-gray-100'} group`}>
          
          {/* Image Header */}
          <div className="relative h-48 overflow-hidden bg-white flex items-center justify-center">
            <img 
              src={data.image} 
              alt={data.title} 
              className={`${data.year === '2015' ? 'h-40 w-auto object-contain' : 'w-full h-full object-cover'} transform group-hover:scale-110 transition-transform duration-500`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex items-end p-4">
              <div className="text-white w-full">
                <div className="flex justify-between items-center mb-1">
                   <span className="bg-gradient-to-r from-brand-blue to-brand-orange text-xs font-bold px-2 py-0.5 rounded text-white shadow-sm tracking-wide">
                     {data.year}
                   </span>
                   {data.year === '2025' && <span className="bg-green-500 text-[10px] font-bold px-2 py-0.5 rounded text-white animate-pulse">LATEST</span>}
                </div>
                <h3 className="text-lg md:text-xl font-bold font-serif leading-tight text-white/95">{data.title}</h3>
              </div>
            </div>
            
            {/* Icon Bubble */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg transition-all duration-300">
               <data.icon 
                 size={20} 
                 className={`text-brand-blue group-hover:text-brand-blue group-hover:scale-110 transition-all duration-300`} 
               />
            </div>
          </div>

          {/* Body */}
          <div className="p-6">
            <p className="text-gray-600 leading-relaxed text-sm mb-4">
              {data.description}
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {data.tags?.map((tag) => (
                <span key={tag} className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded-md group-hover:bg-brand-blue/5 group-hover:text-brand-blue transition-colors">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Date Label for Desktop (Opposite Side) */}
      <div className={`hidden md:flex order-1 w-[45%] items-center ${isEven ? 'justify-start pl-12' : 'justify-end pr-12'}`}>
         <div className="text-center group-hover:scale-105 transition-transform duration-300">
            <span className="text-6xl font-black bg-gradient-to-r from-brand-blue to-brand-orange bg-clip-text text-transparent select-none font-serif tracking-tighter">
                {data.year}
            </span>
         </div>
      </div>
    </MotionDiv>
  );
};

export const Timeline: React.FC = () => {
  return (
    <div className="relative w-full py-20 px-4 md:px-0 bg-slate-50 overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl" />
         <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-3xl" />
         <div className="absolute bottom-[10%] left-[10%] w-72 h-72 bg-brand-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            >
            <div className="flex items-center justify-center gap-3 mb-4">
                <span className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent to-brand-orange"></span>
                <span className="text-brand-orange font-bold uppercase tracking-[0.2em] text-xs">2015 – 2025</span>
                <span className="h-px w-8 md:w-16 bg-gradient-to-l from-transparent to-brand-orange"></span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 font-serif mb-6 leading-tight">
              A Decade of <br className="hidden md:block" />
              <span className="text-[#2563eb] font-bold">Impact & Innovation</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-light">
              Witness the evolution of <span className="font-semibold text-slate-800">Syasan's Career Analytics</span>. 
              From a humble beginning to a record-breaking placement conversion, defining the future of education.
            </p>
          </MotionDiv>
        </div>

        {/* Timeline Container */}
        <div className="relative wrap overflow-hidden p-0 sm:p-10 h-full">
          
          {/* Vertical Center Line */}
          <div className="absolute h-full w-1 left-[39px] md:left-1/2 transform -translate-x-1/2 z-10">
            {/* Main Gradient Line */}
            <div className="absolute inset-0 w-full mx-auto bg-gradient-to-b from-blue-500/0 via-blue-500/80 to-blue-500/0 rounded-full"></div>
            
            {/* Inner Glow */}
            <div className="absolute inset-0 w-0.5 mx-auto bg-gradient-to-b from-white/80 via-white/40 to-white/80 rounded-full left-1/2 transform -translate-x-1/2"></div>
            
            {/* Subtle Pulse Animation */}
            <div className="absolute inset-0 w-full mx-auto bg-gradient-to-b from-blue-400/30 via-blue-500/30 to-blue-400/30 rounded-full animate-pulse-slow"></div>
            
            {/* Dotted Pattern Overlay */}
            <div className="absolute inset-0 w-full mx-auto opacity-10" style={{
              backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)',
              backgroundSize: '4px 6px',
              backgroundRepeat: 'repeat-y',
              backgroundPosition: 'center'
            }}></div>
            
            {/* Subtle Shadow */}
            <div className="absolute inset-0 w-1.5 mx-auto bg-gradient-to-b from-blue-900/20 to-transparent rounded-full left-1/2 transform -translate-x-1/2 blur-[2px]"></div>
          </div>

          {/* Render Timeline Items */}
          {milestones.map((milestone, index) => (
            <TimelineCard key={milestone.year} data={milestone} index={index} />
          ))}

        </div>

  
      </div>
    </div>
  );
};
