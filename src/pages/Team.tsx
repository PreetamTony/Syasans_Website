import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Facebook, Twitter, Mail } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";

const teamMembers = [
  {
    name: "Sankar E",
    role: "Founder Chairman",
    image: "/assets/E_Sankar.jpg"
  },
  {
    name: "Youghessh S",
    role: "Executive Director",
    image: "/assets/Youghessh_S.jpg"
  },
  {
    name: "Devibalan M",
    role: "Executive Director",
    image: "/assets/Devibalan_M.jpg"
  },
  {
    name: "Suriya Narayana Prabu",
    role: "General Manager",
    image: "/assets/Surya_narayana_Prabu.jpg"
  },
  {
    name: "Vishnu Priyan R",
    role: "Vice President",
    image: "/assets/Vishnu_Priyan_R.jpg"
  },
  {
    name: "Kanimozhi D",
    role: "Head Operations",
    image: "/assets/Kanimozhi.jpg"
  },
  {
    name: "Parthiban M",
    role: "Technology Head",
    image: "/assets/Parthiban_M.jpg"
  },
  {
    name: "Sakthi Priya G",
    role: "Head HR",
    image: "/assets/Sakthi_Priya_G.jpg"
  },
  {
    name: "Nithya Priya G",
    role: "Asst Manager",
    image: "/assets/Nithya_Priya_G.jpg"
  },
  {
    name: "Gokula Krishnan G",
    role: "Team Lead",
    image: "/assets/Gokula_Krishnan.jpg"
  },
  {
    name: "Geetha V",
    role: "Head of English (TOEFL, IELTS)",
    image: "/assets/Geetha_V.jpg"
  },
  {
    name: "Kamala P",
    role: "Subject Matter Expert",
    image: "/assets/Kamala.jpg"
  },
  {
    name: "Vanitha Purushothaman",
    role: "Subject Matter Expert",
    image: "/assets/Vanitha.jpg"
  },
  {
    name: "Suganya S",
    role: "Subject Matter Expert",
    image: "/assets/Suganya.jpg"
  },
  {
    name: "Arthi Shree",
    role: "Subject Matter Expert",
    image: "/assets/Arthi_Shree.jpg"
  }
  
];

export default function CoreTeam() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-muted/5 flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <HeroSection
          title="The Brains of"
          highlight="SYASAN'S"
          tag="OUR TEAM"
          subtitle="SYASAN'S - PROPELLED BY PROFESSIONALS, MENTORED BY MASTERS"
        />

        {/* Core Team Section */}
        <section className="py-12 bg-gradient-to-b from-background to-muted/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-medium mb-3 text-sm uppercase tracking-wider">Our Experts</span>
              <h2 className="text-3xl font-bold mb-4">
                Meet Our Core Team
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                A team of passionate professionals dedicated to excellence and innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="group relative bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-border/30 hover:border-primary/20"
                >
                  <div className="relative w-full aspect-[3/4] overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      width={250}
                      height={333}
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33.33vw, 20vw"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random`;
                      }}
                    />
                  </div>
                  <div className="p-3 text-center">
                    <h3 className="text-sm font-semibold text-foreground line-clamp-1">{member.name}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Group Photo */}
        <div className="container mx-auto px-6 py-12 max-w-5xl">
          <div className="relative w-full aspect-video max-w-5xl mx-auto rounded-xl overflow-hidden shadow-xl">
            <img 
              src="https://syasans.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-12-at-9.43.49-PM.jpeg" 
              alt="SYASAN'S Team Group Photo" 
              className="w-full h-full object-cover"
              width={1200}
              height={675}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
        </div>

        {/* Testimonial Section */}
        <section className="py-16 bg-gradient-to-b from-muted/5 to-background">
          <div className="container mx-auto px-6">
            <div className="bg-card p-8 rounded-xl shadow-lg max-w-4xl mx-auto border border-border/30">
              <blockquote className="text-xl italic text-muted-foreground text-center">
                "I appreciate SYASAN'S by Virtue of Having Quality Academicians and providing talents of highest calibre to various organizations Pan-India"
                <footer className="mt-4 font-semibold text-foreground">
                  — Min. of Higher Education 2018
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* SYASANITES Section */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-background via-background to-muted/10">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0dGVybiBpZD0icGF0dGVybi1iYXNlIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFucm9ybT0icm90YXRlKDEzNSkiPjxyZWN0IGlkPSJwYXR0ZXJuLWJnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJvaWx2ZXJjaGlkZSI+PC9yZWN0PjxyZWN0IGlkPSJwYXR0ZXJuLWZvcmVncm91bmQiIHg9IjAiIHk9IjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgZmlsbC1ydWxlPSJldmVub2RkIj48L3JlY3Q+PC9wYXR0ZXJuPjxyZWN0IGlkPSJwYXR0ZXJuLXN2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuLWJhc2UpIiBvcGFjaXR5PSIwLjEiPjwvcmVjdD48L3N2Zz4=')] opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute -left-20 -bottom-20 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                className="text-primary font-medium mb-3 text-sm uppercase tracking-wider inline-block"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Our Community
              </motion.span>
              <motion.h2 
                className="text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                SYASANITES ARE
              </motion.h2>
              <motion.div 
                className="w-20 h-1 bg-primary mx-auto mb-6"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                "Alumni of prestigious institutions like NIT, BITS, IIM(Trichy), Sathyabama University & MSSW",
                "Industry Experts carrying professional experience from Deloitte, UNICEF, BNP Paribas, Symantec, Bosch, Flextronics, HTC, Electronic Arts & many more",
                "Mentors with excellent track record - Cracked SBI, IBPS, SSC, RRB, CAT, TOEFL, GMAT, GATE & BEC Exams",
                "Expert Coders with immense knowledge in AI, Augmented Reality, UI/UX, Block Chain, Full Stack & BIG Data",
                "On Average each Mentor have oriented about 25000+ students across geographies of INDIA on various domain specific modules"
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="relative h-full bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/5">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-3 h-3 rounded-full bg-primary/80 group-hover:bg-primary transition-colors duration-300"></div>
                      </div>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{item}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
