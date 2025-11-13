import { Navigation } from "@/components/Navigation";
import { Facebook, Twitter, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";

export default function JoinUs() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <HeroSection
          title="We Love to"
          highlight="Support You"
          tag="JOIN OUR COMMUNITY"
          subtitle="Join us on the journey to success and unlock your potential. Together, we'll help you achieve your future goals!"
        />

        {/* Contact Form & Info */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <div className="bg-card p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      rows={5}
                      className="w-full"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <p className="text-muted-foreground mb-8">
                    Good draw knew bred ham busy his hour. Ask agreed answer rather joy nature admire wisdom.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Phone className="w-5 h-5 mt-1 text-primary" />
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p className="text-muted-foreground">
                          <a href="tel:+919176458486">(+91) 9176458486</a> / <a href="tel:+919597222661">9597222661</a>
                        </p>
                        <p className="text-muted-foreground">044-42822290</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Mail className="w-5 h-5 mt-1 text-primary" />
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <a href="mailto:askus@syasans.com" className="text-muted-foreground hover:underline">
                          askus@syasans.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 mt-1 text-primary" />
                      <div>
                        <h3 className="font-semibold">Address</h3>
                        <p className="text-muted-foreground">
                          #6, Middle W Jones Rd, West Saidapet, Chennai
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-primary/5 p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock className="w-6 h-6 text-primary" />
                      <h3 className="font-semibold">24/7 Support</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Our 24-hour client service is available around the clock to assist you with any inquiries or issues, ensuring prompt and reliable support whenever you need it.
                    </p>
                  </div>
                  
                  <div className="bg-secondary/5 p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-secondary-foreground">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                      <h3 className="font-semibold">100% Placement</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Guaranteed 100% placement for all qualified candidates, ensuring your career success with us.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">WELCOME</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              SYASAN'S - Crafting your career to Excellence
            </p>
            <div className="flex justify-center gap-6">
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="mailto:askus@syasans.com" className="text-primary hover:text-primary/80 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
