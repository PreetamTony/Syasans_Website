import React, { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Maximize2, X, Building2 } from "lucide-react";

const institutions = [
  {
    name: "Sathyabama University",
    location: "Chennai",
    image: "/assets/Sathyabama.png",
  },
  {
    name: "Dhanalakshmi Srinivasan University",
    location: "Trichy",
    image: "/assets/Dhanalakshmi.png",
  },
  {
    name: "BSA Abdur Rahman Crescent University",
    location: "Vandalur, Chennai",
    image: "/assets/Crescent_college.png",
  },
  {
    name: "Jeppiaar University",
    location: "Chennai",
    image: "/assets/jeppiarcollege.png",
  },
  {
    name: "Amity Global Business School",
    location: "Chennai",
    image: "/assets/amity.png",
  },
  {
    name: "Sairam Group of Institutions",
    location: "West Tambaram, Chennai",
    image: "/assets/Sairam.png",
  },
  {
    name: "St. Joseph's College of Engineering",
    location: "Chennai",
    image: "/assets/StJosephscollege.png",
  },
  {
    name: "Mepco Schlenk Engineering College",
    location: "Sivakasi",
    image: "/assets/mepco.png",
  },
  {
    name: "Vels University",
    location: "Pallavaram, Chennai",
    image: "/assets/vels.png",
  },
  {
    name: "SRM University",
    location: "Kattankulathur, Chennai",
    image: "/assets/srm.png",
  },
  {
    name: "Velammal Group of Engineering Colleges",
    location: "Chennai / Madurai",
    image: "/assets/vellamal.png",
  },
  {
    name: "Dr.MGR University",
    location: "Chennai",
    image: "/assets/mgr.png",
  },
  {
    name: "Kalasalingam University",
    location: "Virudhunagar",
    image: "/assets/kalasalingam.png",
  },

];

const companyLogos = [
  "/assets/presidio.png",
  "/assets/mrcooper.png",
  "/assets/mahindra.png",
  "/assets/ltimindtree.png",
  "/assets/Deloitte.png",
  "/assets/Blackstraw.png",
  "/assets/avasoft.png",
  "/assets/cisco.png",
  "/assets/ey.png",
  "/assets/valeo.png",
  "/assets/zoho.png",
  "/assets/cognizant.png",
  "/assets/hashedin.png",
  "/assets/tata.png",
  "/assets/thoughtworks.png",


];

export default function Partners() {
  const [isMapZoomed, setIsMapZoomed] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col justify-between">
      <Navigation />

      <main className="flex-grow pt-20">

        {/* ── Partners Showcase ── */}
        <section className="relative py-28 overflow-hidden bg-white dark:bg-slate-950">

          {/* Layered ambient background */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Main radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_0%,rgba(99,102,241,0.07),transparent)] dark:bg-[radial-gradient(ellipse_90%_55%_at_50%_0%,rgba(99,102,241,0.13),transparent)]" />
            {/* Secondary glow bottom */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_100%,rgba(59,130,246,0.05),transparent)] dark:bg-[radial-gradient(ellipse_60%_40%_at_80%_100%,rgba(59,130,246,0.10),transparent)]" />
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />
            {/* Floating blobs */}
            <motion.div
              animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-400/6 dark:bg-blue-600/8 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ x: [0, -20, 0], y: [0, 30, 0], scale: [1, 0.9, 1] }}
              transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
              className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-indigo-400/6 dark:bg-indigo-600/8 rounded-full blur-3xl"
            />
          </div>

          <div className="container mx-auto px-6 relative z-10">

            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >

              <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-5">
                Growth Alliances
              </h2>
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600" />
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-indigo-400" />
              </div>
              <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto text-base leading-relaxed">
                Trusted by leading universities, engineering colleges, and business schools across South India.
              </p>
            </motion.div>

            {/* ── Bento-style grid ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {institutions.map((inst, i) => (
                <motion.div
                  key={inst.name}
                  initial={{ opacity: 0, y: 32, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: i * 0.05, type: "spring", stiffness: 85, damping: 17 }}
                  whileHover={{ y: -8, transition: { duration: 0.25, ease: "easeOut" } }}
                  className="group relative"
                >
                  {/* Outer glow backlight on hover */}
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-10 group-hover:scale-105" />

                  <div className="relative bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800/80 shadow-[0_2px_16px_rgba(0,0,0,0.03)] group-hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] group-hover:border-blue-500/30 dark:group-hover:border-blue-500/20 transition-all duration-400 h-full flex flex-col z-10">

                    {/* Image area */}
                    <div className="relative h-44 overflow-hidden bg-slate-100 dark:bg-slate-950 flex-shrink-0">
                      <img
                        src={inst.image}
                        alt={inst.name}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        loading="lazy"
                      />
                      {/* Cinematic scrim */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      {/* Top shimmer line */}
                      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                      {/* Active dot — bottom right */}

                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col gap-2 flex-1 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
                      {/* College name */}
                      <h3 className="font-serif font-semibold text-base sm:text-lg text-slate-900 dark:text-slate-100 tracking-tight leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {inst.name}
                      </h3>

                      {/* Divider */}
                      <div className="h-px bg-slate-100 dark:bg-slate-800 my-1 group-hover:bg-gradient-to-r group-hover:from-blue-500/30 group-hover:to-transparent transition-all duration-300" />

                      {/* Location */}
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-auto">
                        <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-blue-500 dark:text-blue-400/80" />
                        <span className="font-medium">{inst.location}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>


          </div>
        </section>

        {/* ── Integrated Learning Centers Map ── */}
        <section className="py-20 relative overflow-hidden bg-slate-50 dark:bg-slate-900/30">
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">

              {/* Left pane */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="lg:col-span-6 flex flex-col items-start"
              >
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600/10 dark:bg-indigo-600/20 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-bold uppercase tracking-wider mb-5 border border-indigo-200/40 dark:border-indigo-900/30">
                  Presence in Tamil Nadu
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4">
                  Our Integrated <br />
                  <span className="text-blue-600 dark:text-blue-400">Learning Centers</span>
                </h2>
                <div className="w-14 h-1 bg-gradient-to-r from-blue-600 to-indigo-500 mb-6 rounded-full" />
                <p className="text-slate-600 dark:text-slate-400 font-medium text-sm sm:text-base leading-relaxed mb-8">
                  Syasan's operates high-tech Integrated Learning Centers built inside partnered college campuses — hosting aptitude servers, computer classrooms, evaluation analytics dashboards, and dedicated mentoring clinics.
                </p>
              </motion.div>

              {/* Right pane: Map */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:col-span-6 flex flex-col justify-center items-center"
              >
                <div className="relative group w-full max-w-md">
                  {/* Outer glow ring */}
                  <div className="absolute -inset-3 rounded-[36px] bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 blur-xl group-hover:from-blue-500/30 group-hover:to-indigo-500/30 transition-all duration-500" />

                  <div className="relative bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4 rounded-3xl shadow-xl overflow-hidden">
                    {/* Zoom button */}
                    <div className="absolute top-6 right-6 z-20">
                      <button
                        onClick={() => setIsMapZoomed(true)}
                        className="p-2.5 bg-white/90 dark:bg-slate-900/90 text-slate-600 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-700 hover:text-blue-600 dark:hover:text-blue-400 shadow-md backdrop-blur-md transition-all duration-300 hover:scale-110 hover:shadow-lg"
                        title="Zoom Map"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Map image */}
                    <div
                      onClick={() => setIsMapZoomed(true)}
                      className="w-full aspect-square overflow-hidden rounded-2xl relative cursor-zoom-in bg-slate-50 dark:bg-slate-800 flex items-center justify-center"
                    >
                      <img
                        src="/assets/image.png"
                        alt="Syasan's Learning Centers Map of Tamil Nadu"
                        className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent group-hover:from-black/10 transition-all duration-500" />
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-widest mt-5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  Click map to view full detail
                </p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Map Zoom Modal */}
        <AnimatePresence>
          {isMapZoomed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMapZoomed(false)}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md cursor-zoom-out"
            >
              <motion.div
                initial={{ scale: 0.88, y: 24, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.88, y: 24, opacity: 0 }}
                transition={{ type: "spring", damping: 22, stiffness: 200 }}
                onClick={(e) => e.stopPropagation()}
                className="relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-2 shadow-2xl max-w-4xl max-h-[90vh] overflow-hidden flex items-center justify-center z-10 cursor-default"
              >
                <button
                  onClick={() => setIsMapZoomed(false)}
                  className="absolute top-4 right-4 z-20 p-2 bg-slate-900/80 hover:bg-slate-950 text-white rounded-full transition-all duration-300 hover:scale-110 shadow-md"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
                <img
                  src="/assets/image.png"
                  alt="Syasan's Learning Centers — Tamil Nadu"
                  className="max-w-full max-h-[85vh] object-contain rounded-2xl"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Alumni Placement Marquee ── */}
        <section className="py-24 relative bg-white dark:bg-slate-950 overflow-hidden border-t border-slate-100 dark:border-slate-800">
          <div className="container mx-auto px-6 mb-12 relative z-20">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-medium text-slate-900 dark:text-white tracking-tight">
                Building Careers at Global Organizations
              </h2>
            </div>
          </div>

          <div className="relative w-full overflow-hidden flex flex-col items-center">
            {/* Fade Edges */}
            <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />

            {/* Scrolling Track */}
            <motion.div
              className="flex items-center gap-16 md:gap-24 whitespace-nowrap py-4 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            >
              {/* Duplicate array for seamless loop */}
              {[...companyLogos, ...companyLogos, ...companyLogos, ...companyLogos].map((logo, index) => (
                <div key={index} className="flex-shrink-0 w-32 h-16 md:w-48 md:h-24 relative flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <img src={logo} alt="Company Logo" className="max-w-full max-h-full object-contain mix-blend-multiply dark:mix-blend-screen drop-shadow-sm" loading="lazy" />
                </div>
              ))}
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
