import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { useState, useRef, useEffect } from "react";

// Component for individual association card with parallax effect
const AssociationCard = ({ index, src, alt, title }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: -5,
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
        transition: { duration: 0.2 }
      }}
      variants={{
        hidden: { scale: 0.8, opacity: 0, y: 20 },
        visible: {
          scale: 1,
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            damping: 15,
            stiffness: 100,
            delay: index * 0.08,
            duration: 0.5
          }
        }
      }}
      className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 h-full"
    >
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 md:w-28 md:h-28 relative mb-3 bg-white p-3 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-primary/20">
          <img 
            src={src} 
            alt={alt}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
        <p className="text-center text-sm font-medium text-gray-800 mt-2 whitespace-nowrap transition-colors duration-300 hover:text-primary">
          {title}
        </p>
      </div>
    </motion.div>
  );
};

export default function Endorsement() {
  const certificates = [
    "/assets/Certificate.jpg",
    "https://syasans.com/wp-content/uploads/2024/08/4-1086x1536.png",
    "https://syasans.com/wp-content/uploads/2024/08/5-1086x1536.png",
    "https://syasans.com/wp-content/uploads/2024/08/1-1086x1536.png",
    "https://syasans.com/wp-content/uploads/2024/08/2-1086x1536.png"
  ];

  // Simple ref for the container
  const pdfContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20">
        
        {/* Associations Section */}
        <section className="relative py-20 bg-white overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-1/2 h-1/2 bg-primary/5 rounded-full filter blur-3xl opacity-70 -translate-y-1/2 -translate-x-1/2"></div>
          </div>
          
          <div className="container mx-auto px-6 relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 relative z-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-black">Our</span>{' '}
                <span className="text-primary">Associations</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              
            </motion.div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
              </div>
              
              <div className="flex flex-wrap justify-center items-center gap-6 max-w-7xl mx-auto relative z-10">
                {[
                  {
                    src: "/assets/iso_cert.png",
                    alt: "ISO 9001:2015 Certified",
                    title: "ISO 9001:2015"
                  },
                  {
                    src: "/assets/msme.png",
                    alt: "MSME Registered",
                    title: "MSME Registered"
                  },
                  {
                    src: "/assets/tamilnadu-logo.png",
                    alt: "Approved by TN Text Book Corporation",
                    title: "Approved by TN Text Book Corporation"
                  },
                  {
                    src: "/assets/Government-Of-Tamil-Nadu-Logo-Vector.svg--1397x1536.png",
                    alt: "Government of Tamil Nadu",
                    title: "Govt. of Tamil Nadu Recognised"
                  },
                  {
                    src: "/assets/Nsdc.png",
                    alt: "National Skill Development Corporation",
                    title: "NSDC Certified"
                  },
                  {
                    src: "/assets/IOE.png",
                    alt: "Institution of Engineers India",
                    title: "Institution of Engineers (India)"
                  },
                  {
                    src: "/assets/tnskills.jpg",
                    alt: "TN Skills Development Corporation",
                    title: "TN Skills Certified"
                  }
                ].map((item, index) => (
                  <AssociationCard 
                    key={index} 
                    index={index} 
                    src={item.src} 
                    alt={item.alt} 
                    title={item.title}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-black">Our</span>{' '}
                <span className="text-primary">Recognitions</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Trusted by Govt. Bodies for our commitment to quality and excellence in education and training.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {certificates.map((cert, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <img 
                    src={cert} 
                    alt={`Certificate ${index + 1}`}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <a 
                      href={cert} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white text-primary px-4 py-2 rounded-full font-medium hover:bg-primary hover:text-white transition-colors"
                    >
                      View Full Size
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
