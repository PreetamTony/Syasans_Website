import { Navigation } from "@/components/Navigation";
import { Facebook, Twitter, Mail } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";

const teamMembers = [
  {
    name: "Sankar E",
    role: "Founder Chairman",
    image: "/assets/WhatsApp-Image-2025-11-14-at-14.40.31_cf2a39ae.jpg"
  },
  {
    name: "Devibalan M",
    role: "Executive Director",
    image: "/assets/WhatsApp-Image-2025-11-14-at-14.40.27_bfa4dacf.jpg"
  },
  {
    name: "Youghessh S",
    role: "Executive Director",
    image: "/assets/WhatsApp-Image-2025-11-14-at-14.40.30_89cddc78.jpg"
  },
  {
    name: "Suriya Narayana Prabu",
    role: "General Manager",
    image: "/assets/WhatsApp-Image-2025-11-14-at-14.40.30_1073edbb.jpg"
  },
  {
    name: "Vishnu Priyan R",
    role: "Vice President",
    image: "/assets/WhatsApp-Image-2025-11-14-at-14.40.29_71e069d3.jpg"
  },
  {
    name: "Kanimozhi D",
    role: "Head Operations",
    image: "/assets/WhatsApp-Image-2025-11-14-at-14.40.28_da91a518.jpg"
  },
  {
    name: "Parthiban M",
    role: "Technology Head",
    image: "/assets/Designer.png"
  },
  {
    name: "Sakthi Priya G",
    role: "Head HR",
    image: "/assets/WhatsApp-Image-2025-11-14-at-14.40.30_43ad6145.jpg"
  },
  {
    name: "Nithya Priya G",
    role: "Asst Manager",
    image: "/assets/WhatsApp-Image-2025-11-14-at-14.40.29_6af2987e.jpg"
  },
  {
    name: "Gokula Krishnan G",
    role: "Team Lead",
    image: "/assets/WhatsApp-Image-2025-11-14-at-14.40.29_ffecee31.jpg"
  },
  {
    name: "Kamala P",
    role: "Subject Matter Expert",
    image: "/assets/WhatsApp-Image-2025-11-14-at-14.40.28_1841a85a.jpg"
  },
  {
    name: "Vanitha Purushothaman",
    role: "Subject Matter Expert",
    image: "/assets/WhatsApp-Image-2025-11-14-at-14.40.28_04790d2f.jpg"
  },
  {
    name: "Suganya S",
    role: "Subject Matter Expert",
    image: "/assets/WhatsApp-Image-2025-11-14-at-14.40.28_df0b7d87.jpg"
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

        {/* Team Image */}
        <div className="container mx-auto px-6 py-6 max-w-5xl">
          <div className="relative w-full aspect-video max-w-5xl mx-auto">
            <img 
              src="https://syasans.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-12-at-9.43.49-PM.jpeg" 
              alt="SYASAN'S Team" 
              className="w-full h-full object-contain rounded-lg shadow-md"
              width={1200}
              height={675}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 80vw"
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
        <section className="py-20 bg-gradient-to-b from-muted/10 to-transparent">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSIxMDAiPgo8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgo8cGF0aCBkPSJNMjggMzR2NDZoMjhWODRIMzRjLTMuMzE0IDAtNi0yLjY4Ni02LTZ2LTQ0aDB6IiBmaWxsPSJub25lIiBzdHJva2U9IiNlZWVlZWUiIHN0cm9rZS13aWR0aD0iMSIvPgo8cGF0aCBkPSJNMjggMTB2NDZoMjhWNTZIMzRjLTMuMzE0IDAtNi0yLjY4Ni02LTZWMTAiIGZpbGw9Im5vbmUiIHNyb2tlPSIjZWVlZWVlIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9nPgo8L3N2Zz4=')] opacity-10"></div>
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-block text-primary font-medium mb-3 text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                SYASANITES ARE
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                "Alumni of prestigious institutions like NIT, BITS, IIM(Trichy), Sathyabama University & MSSW",
                "Industry Experts carrying professional experience from Deloitte, UNICEF, BNP Paribas, Symantec, Bosch, Flextronics, HTC, Electronic Arts & many more",
                "Mentors with excellent track record – Cracked SBI, IBPS, SSC, RRB, CAT, TOEFL, GMAT, GATE & BEC Exams",
                "Expert Coders with immense knowledge in AI, Augmented Reality, UI/UX, Block Chain, Full Stack & BIG Data",
                "On Average each Mentor have oriented about 25000+ students across geographies of INDIA on various domain specific modules"
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="bg-card p-6 rounded-xl shadow-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-md group"
                >
                  <div className="w-10 h-1 bg-primary mb-4 group-hover:w-16 transition-all duration-500"></div>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12">
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

      </main>
      <Footer />
    </div>
  );
}
