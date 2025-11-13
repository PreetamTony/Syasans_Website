import { Navigation } from "@/components/Navigation";
import { Facebook, Twitter, Mail } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";

const teamMembers = [
  {
    name: "Youghessh S",
    role: "Director & Founder",
    image: "https://syasans.com/wp-content/uploads/2024/09/1.png"
  },
  {
    name: "Devibalan M",
    role: "Director & Co-Founder",
    image: "https://syasans.com/wp-content/uploads/2024/09/7.png"
  },
  {
    name: "Suriya Narayanan TC",
    role: "General Manager",
    image: "https://syasans.com/wp-content/uploads/2024/09/9.png"
  },
  {
    name: "Vishnu Priyan R",
    role: "Delivery Head",
    image: "https://syasans.com/wp-content/uploads/2024/09/8.png"
  },
  {
    name: "Sakthi Priya G",
    role: "Head HR",
    image: "https://syasans.com/wp-content/uploads/2024/09/10.png"
  },
  {
    name: "Kanimozhi D",
    role: "Head-Operations",
    image: "https://syasans.com/wp-content/uploads/2024/09/3.png"
  },
  {
    name: "Parthiban M",
    role: "Technology Head",
    image: "https://syasans.com/wp-content/uploads/2024/09/6.png"
  },
  {
    name: "Kamala P",
    role: "SME-CodeKrack",
    image: "https://syasans.com/wp-content/uploads/2024/09/2.png"
  },
  {
    name: "Nithya Priya G",
    role: "SME-Soft Skills",
    image: "https://syasans.com/wp-content/uploads/2024/09/4.png"
  },
  {
    name: "Gokula Krishnan G",
    role: "Business Craftsman",
    image: "https://syasans.com/wp-content/uploads/2024/09/5.png"
  }
];

export default function CoreTeam() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <HeroSection
          title="The Brains of"
          highlight="SYASAN'S"
          tag="OUR TEAM"
          subtitle="SYASAN'S - PROPELLED BY PROFESSIONALS, MENTORED BY MASTERS"
        />

        {/* Team Image */}
        <div className="container mx-auto px-6 py-6 max-w-5xl">
          
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* 16:9 aspect ratio container */}
              <img 
                src="https://syasans.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-12-at-9.43.49-PM.jpeg" 
                alt="SYASAN'S Team" 
                className="absolute inset-0 w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          
        </div>

        {/* Testimonial Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="bg-card p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
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
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">SYASANITES ARE</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                "Alumni of prestigious institutions like NIT, BITS, IIM(Trichy), Sathyabama University & MSSW",
                "Industry Experts carrying professional experience from Deloitte, UNICEF, BNP Paribas, Symantec, Bosch, Flextronics, HTC, Electronic Arts & many more",
                "Mentors with excellent track record – Cracked SBI, IBPS, SSC, RRB, CAT, TOEFL, GMAT, GATE & BEC Exams",
                "Expert Coders with immense knowledge in AI, Augmented Reality, UI/UX, Block Chain, Full Stack & BIG Data",
                "On Average each Mentor have oriented about 25000+ students across geographies of INDIA on various domain specific modules"
              ].map((item, index) => (
                <div key={index} className="bg-card p-6 rounded-lg shadow-md">
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">CORE TEAM</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                "Meet our incredible team, where creativity meets professionalism. Each member plays a vital role in shaping our vision and achieving our goals!"
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="group bg-card p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center hover:-translate-y-1"
                >
                  <div className="relative w-48 h-48 mx-auto mb-5 overflow-hidden rounded-full border-4 border-primary/10 group-hover:border-primary/30 transition-all duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 p-1"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random`;
                      }}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
