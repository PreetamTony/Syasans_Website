import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { useState, useRef, useEffect } from "react";

export default function Endorsement() {
  const certificates = [
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
        {/* Hero Header */}
        <section className="bg-gradient-to-r from-primary/5 to-primary/10 py-16">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                OUR CREDENTIALS
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                SYASAN'S <span className="text-primary">Certifications</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Validating our commitment to excellence in education and professional training
              </p>
            </motion.div>
          </div>
        </section>

       

        {/* Certificates Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Accreditations</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Trusted by educational institutions and industry leaders worldwide for our commitment to quality and excellence.
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

        {/* Government Endorsement Section */}
        <section className="py-20 bg-gradient-to-br from-background to-muted/10">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Government <span className="text-primary">Recognition</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Official endorsement from the Government of Tamil Nadu
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* PDF Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-3">
                  <h3 className="text-white text-center font-medium">Government Endorsement</h3>
                </div>
                
                {/* PDF Container */}
                <div 
                  className="relative w-full bg-gray-100"
                  style={{ height: '70vh' }}
                  ref={pdfContainerRef}
                >
                  <iframe 
                    src="/assets/Rec_Letters_-_Govt_of_TN[1].pdf#page=1&view=FitH&zoom=100"
                    className="w-full h-full"
                    frameBorder="0"
                    title="Government of Tamil Nadu Recommendation Letter"
                  >
                    <p className="p-8 text-center">
                      Your browser does not support PDFs. 
                      <a 
                        href="/assets/Rec_Letters_-_Govt_of_TN[1].pdf" 
                        className="text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View the PDF
                      </a>.
                    </p>
                  </iframe>
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
