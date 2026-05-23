import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { ImageGallery } from "@/components/ImageGallery";
import { ArrowRight, Quote } from "lucide-react";
import { motion } from "framer-motion";

const studentFeedbacks = [
  {
    quote: "Excellent placement-oriented training with practical learning methods and highly supportive mentors.",
    author: "Aadhitya",
    rating: 5,
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    quote: "Highly specialized curriculum with regular assessments and outstanding trainer support.",
    author: "Sangar Vishal",
    rating: 5,
    gradient: "from-indigo-500 to-purple-600"
  },
  {
    quote: "Expert trainers with excellent subject knowledge and student-friendly mentoring.",
    author: "Hilary Royson",
    rating: 5,
    gradient: "from-purple-500 to-pink-600"
  },
  {
    quote: "The sessions were highly engaging, interactive, and professionally delivered.",
    author: "Asma Farzana",
    rating: 5,
    gradient: "from-pink-500 to-rose-600"
  },
  {
    quote: "Very clear explanations with excellent support throughout the training program.",
    author: "Pooja R",
    rating: 5,
    gradient: "from-rose-500 to-red-600"
  },
  {
    quote: "Unique teaching methodology with strong practical exposure and motivation.",
    author: "Parveen",
    rating: 5,
    gradient: "from-red-500 to-orange-600"
  },
  {
    quote: "Well-structured aptitude training with highly knowledgeable instructors.",
    author: "Captain Cool",
    rating: 5,
    gradient: "from-orange-500 to-amber-600"
  },
  {
    quote: "Professional mentoring and valuable career guidance helped improve my confidence.",
    author: "Pushparaj Jack",
    rating: 5,
    gradient: "from-amber-500 to-yellow-600"
  },
  {
    quote: "Excellent trainer performance with highly professional delivery methods.",
    author: "Ragav Kumar",
    rating: 5,
    gradient: "from-yellow-500 to-lime-600"
  },
  {
    quote: "Valuable placement guidance and excellent learning support throughout the sessions.",
    author: "Nandhini Arul",
    rating: 5,
    gradient: "from-lime-500 to-green-600"
  },
  {
    quote: "The training improved my interview confidence and communication skills significantly.",
    author: "Dineshwari Venkatasubramani",
    rating: 5,
    gradient: "from-green-500 to-emerald-600"
  },
  {
    quote: "Quality training sessions with excellent personal mentoring support.",
    author: "Snekan",
    rating: 5,
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    quote: "Highly specialized coaching with strong placement-focused training methods.",
    author: "Aysha Zain",
    rating: 5,
    gradient: "from-teal-500 to-cyan-600"
  },
  {
    quote: "Very useful sessions for improving technical and communication skills.",
    author: "Muthu Selvi K",
    rating: 5,
    gradient: "from-cyan-500 to-sky-600"
  },
  {
    quote: "Excellent mentoring environment focused on career growth and industry readiness.",
    author: "Joel Jashwa L.A",
    rating: 5,
    gradient: "from-sky-500 to-blue-600"
  },
  {
    quote: "Interactive learning methodology with strong practical implementation.",
    author: "Harish Kumar",
    rating: 5,
    gradient: "from-blue-600 to-violet-600"
  },
  {
    quote: "Regular mock tests and assessments improved our placement confidence.",
    author: "Keerthana S",
    rating: 5,
    gradient: "from-violet-600 to-purple-600"
  },
  {
    quote: "Excellent integration of aptitude, coding, and communication training.",
    author: "Mohammed Rizwan",
    rating: 5,
    gradient: "from-purple-600 to-fuchsia-600"
  },
  {
    quote: "Motivating trainers with highly engaging classroom sessions and activities.",
    author: "Deepika R",
    rating: 5,
    gradient: "from-fuchsia-600 to-pink-600"
  },
  {
    quote: "Professional training ecosystem with structured learning and evaluation.",
    author: "Santhosh Kumar",
    rating: 5,
    gradient: "from-pink-600 to-rose-600"
  },
  {
    quote: "Real-time examples made difficult concepts easy to understand.",
    author: "Pavithra M",
    rating: 5,
    gradient: "from-rose-600 to-orange-500"
  },
  {
    quote: "The program enhanced my aptitude and interview preparation skills greatly.",
    author: "Aravind Raj",
    rating: 5,
    gradient: "from-orange-500 to-amber-500"
  },
  {
    quote: "Interactive classroom sessions with excellent trainer-student engagement.",
    author: "Dharshini K",
    rating: 5,
    gradient: "from-amber-500 to-yellow-500"
  },
  {
    quote: "One of the best placement training experiences with strong career guidance.",
    author: "Naveen",
    rating: 5,
    gradient: "from-blue-500 to-teal-500"
  },
  {
    quote: "Excellent training environment with strong focus on placements, discipline, and technical development.",
    author: "Vishnu Priyan",
    rating: 5,
    gradient: "from-indigo-500 to-emerald-500"
  },
  {
    quote: "The trainers explained concepts in a simple and practical manner which made learning easy.",
    author: "Gayathri Devi",
    rating: 5,
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    quote: "Highly effective aptitude and coding sessions with continuous motivation from the mentors.",
    author: "Rohith Krishna",
    rating: 5,
    gradient: "from-emerald-500 to-cyan-500"
  },
  {
    quote: "The program helped me improve my communication, confidence, and interview performance.",
    author: "Monisha R",
    rating: 5,
    gradient: "from-rose-500 to-pink-500"
  },
  {
    quote: "Very professional training approach with real-time examples and industry-oriented teaching.",
    author: "Siva Balaji",
    rating: 5,
    gradient: "from-amber-500 to-rose-500"
  },
  {
    quote: "Supportive trainers and well-structured sessions helped us prepare confidently for placements.",
    author: "Harini Prakash",
    rating: 5,
    gradient: "from-sky-500 to-indigo-500"
  },
  {
    quote: "One of the most useful placement training programs with excellent mentoring and guidance.",
    author: "Karthik Raman",
    rating: 5,
    gradient: "from-blue-600 to-indigo-500"
  }
];

export default function Feedback() {
  const row1 = studentFeedbacks.slice(0, 10);
  const row2 = studentFeedbacks.slice(10, 20);
  const row3 = studentFeedbacks.slice(20, 31);
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-muted/5 flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <HeroSection
          title="Hear What People"
          highlight="Say About Us"
          tag="TESTIMONIALS"
          subtitle="Real feedback from our students and partners"
        />

        {/* YouTube Video Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Watch Our <span className="text-primary">YouTube Channel</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Subscribe to our channel for more updates, success stories, and career guidance.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-[500px]"
                  src="https://www.youtube.com/embed/AGfOa90l1CA?si=VWG5WiVFftkwaxN1"
                  title="Syasan's Career Analytics - Success Stories"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="bg-card p-4 text-center">
                <a 
                  href="http://www.youtube.com/@SyasansCareerAnalytics" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:underline"
                >
                  <span>Visit our YouTube Channel</span>
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Testimonials
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Success <span className="text-primary">Stories</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
              <p className="text-lg text-gray-600">
                Hear directly from our students about their journey and achievements with our guidance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
              {/* Video 1 */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative pt-[120%] overflow-hidden">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/f7OxoEDQmiQ"
                    title="Success Story: Student Experience"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Inspiring Journey</h3>
                  <p className="text-gray-600">Hear about their transformation and success</p>
                </div>
              </div>

              {/* Video 2 */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative pt-[120%] overflow-hidden">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/hszXCLp_yeg"
                    title="Student Testimonial"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Career Transformation</h3>
                  <p className="text-gray-600">How guidance shaped their professional path</p>
                </div>
              </div>

              {/* Video 3 */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative pt-[120%] overflow-hidden">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/jsUQ5bexqAg"
                    title="Success Journey"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Achieving Dreams</h3>
                  <p className="text-gray-600">From aspiration to achievement</p>
                </div>
              </div>

              {/* Video 4 */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative pt-[120%] overflow-hidden">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/qBvyJ9dHdnU"
                    title="Student Experience"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Personal Growth</h3>
                  <p className="text-gray-600">Beyond academics - personal development</p>
                </div>
              </div>

              {/* Video 5 */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative pt-[120%] overflow-hidden">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/J8-ECI3AG4Q"
                    title="Success Story"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Breaking Barriers</h3>
                  <p className="text-gray-600">Overcoming challenges to succeed</p>
                </div>
              </div>

              {/* Video 6 */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative pt-[120%] overflow-hidden">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/gK9xjNtbvew"
                    title="Success Compilation"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Success Compilation</h3>
                  <p className="text-gray-600">Highlights from our students' journeys</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learners' Feedback Text Section */}
        <section className="py-20 bg-slate-50 dark:bg-slate-950 overflow-hidden relative">
          {/* Decorative floating blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-1/4 left-[-10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-[-10%] w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12 text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600/10 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200/40 dark:border-blue-900/30">
              Learners' Voice
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight">
              What Our Learners <span className="text-[#2563eb] font-extrabold">Say About Us</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
          </div>

          {/* Marquee Viewport Container */}
          <div className="relative w-full overflow-hidden py-4 z-10 marquee-container flex flex-col gap-6">
            
            {/* Fade overlays on left/right edges */}
            <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-20 pointer-events-none" />

            {/* Row 1: Scrolling Left */}
            <div className="flex overflow-hidden w-full">
              <div className="animate-marquee-left flex">
                {[...row1, ...row1].map((feedback, idx) => (
                  <div 
                    key={`r1-${idx}`} 
                    className="w-[340px] flex-shrink-0 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-[0_4px_25px_rgba(0,0,0,0.015)] hover:shadow-lg hover:border-blue-500/20 hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between h-[160px] mx-3"
                  >
                    <p className="text-slate-700 dark:text-slate-350 text-xs sm:text-sm font-medium leading-relaxed italic line-clamp-3">
                      “{feedback.quote}”
                    </p>
                    <div className="flex items-center gap-2.5 border-t border-slate-50 dark:border-slate-800/60 pt-2.5 mt-2">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-tr ${feedback.gradient} flex items-center justify-center text-white text-[11px] font-extrabold shadow-sm`}>
                        {feedback.author.charAt(0)}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white">{feedback.author}</div>
                        <div className="text-[8px] text-slate-500 font-semibold tracking-wider uppercase">Verified Student</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2: Scrolling Right */}
            <div className="flex overflow-hidden w-full">
              <div className="animate-marquee-right flex">
                {[...row2, ...row2].map((feedback, idx) => (
                  <div 
                    key={`r2-${idx}`} 
                    className="w-[340px] flex-shrink-0 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-[0_4px_25px_rgba(0,0,0,0.015)] hover:shadow-lg hover:border-blue-500/20 hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between h-[160px] mx-3"
                  >
                    <p className="text-slate-700 dark:text-slate-350 text-xs sm:text-sm font-medium leading-relaxed italic line-clamp-3">
                      “{feedback.quote}”
                    </p>
                    <div className="flex items-center gap-2.5 border-t border-slate-50 dark:border-slate-800/60 pt-2.5 mt-2">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-tr ${feedback.gradient} flex items-center justify-center text-white text-[11px] font-extrabold shadow-sm`}>
                        {feedback.author.charAt(0)}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white">{feedback.author}</div>
                        <div className="text-[8px] text-slate-500 font-semibold tracking-wider uppercase">Verified Student</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 3: Scrolling Left */}
            <div className="flex overflow-hidden w-full">
              <div className="animate-marquee-left flex">
                {[...row3, ...row3].map((feedback, idx) => (
                  <div 
                    key={`r3-${idx}`} 
                    className="w-[340px] flex-shrink-0 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-[0_4px_25px_rgba(0,0,0,0.015)] hover:shadow-lg hover:border-blue-500/20 hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between h-[160px] mx-3"
                  >
                    <p className="text-slate-700 dark:text-slate-350 text-xs sm:text-sm font-medium leading-relaxed italic line-clamp-3">
                      “{feedback.quote}”
                    </p>
                    <div className="flex items-center gap-2.5 border-t border-slate-50 dark:border-slate-800/60 pt-2.5 mt-2">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-tr ${feedback.gradient} flex items-center justify-center text-white text-[11px] font-extrabold shadow-sm`}>
                        {feedback.author.charAt(0)}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white">{feedback.author}</div>
                        <div className="text-[8px] text-slate-500 font-semibold tracking-wider uppercase">Verified Student</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Local CSS styles for high-fidelity marquee movement */}
          <style jsx>{`
            @keyframes marquee-left {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes marquee-right {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
            .animate-marquee-left {
              display: flex;
              width: max-content;
              animation: marquee-left 50s linear infinite;
            }
            .animate-marquee-right {
              display: flex;
              width: max-content;
              animation: marquee-right 50s linear infinite;
            }
            .marquee-container:hover .animate-marquee-left,
            .marquee-container:hover .animate-marquee-right {
              animation-play-state: paused;
            }
          `}</style>
        </section>

        {/* Google Reviews Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Google <span className="text-primary">Reviews</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Here's what our community is saying about us on Google
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="relative pt-[56.25%] overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15549.82375379221!2d80.225!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA0JzU3LjgiTiA4MMKwMTMnNDIuMiJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="SYASAN'S Chennai Location - #6, Middle W Jones Rd, West Saidapet, Chennai - 600015"
                    referrerPolicy="no-referrer"
                  ></iframe>
                </div>
                <div className="p-6 text-center">
                  <a 
                    href="https://www.google.com/search?q=Syasan%27s+Career+Analytics&rlz=1C1CHBF_enIN987IN987&oq=Syasan%27s+Career+Analytics&aqs=chrome..69i57j69i60.1234j0j7&sourceid=chrome&ie=UTF-8#lrd=0x3a526f76b8f8c8a5:0x3a5a5a5a5a5a5a5a,1,,," 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    <span>Leave us a review on Google</span>
                    <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        
      </main>
      <Footer />
    </div>
  );
}
