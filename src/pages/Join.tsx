import { Navigation } from "@/components/Navigation";
import { Mail, Phone, MapPin, Clock, Check, Users, Award, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { motion } from "framer-motion";
import { useState } from "react";

const RECIPIENT_EMAIL = 'askus@syasans.com';

const features = [
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Career Growth",
    description: "Unlock opportunities for professional development and career advancement."
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Industry Experts",
    description: "Learn from experienced professionals with real-world expertise."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Supportive Community",
    description: "Join a network of like-minded professionals and mentors."
  }
];

const testimonials = [
  {
    quote: "Joining SYASAN'S was the best career decision I've made. The support and guidance are exceptional.",
    author: "Priya S.",
    role: "Software Developer"
  },
  {
    quote: "The training programs are comprehensive and the mentors are incredibly knowledgeable.",
    author: "Rahul K.",
    role: "Data Scientist"
  }
];

export default function JoinUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<{success: boolean; message: string} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = 'New Job Application from Website';
    const body = `Name: ${formData.name}%0D%0A` +
                 `Email: ${formData.email}%0D%0A` +
                 `Phone: ${formData.phone}%0D%0A` +
                 `Message: ${formData.message}`;
    
    window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    // Show success message
    setSubmitStatus({
      success: true,
      message: 'Your email client is opening with a pre-filled message. Please send it to submit your application.'
    });
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <HeroSection
          title="Join Our Growing"
          highlight="Community"
          tag="CAREER OPPORTUNITIES"
          subtitle="Be part of something extraordinary. Join SYASAN'S and unlock your potential with industry-leading training and mentorship."
        />

        {/* Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Join SYASAN'S?</h2>
              <p className="text-muted-foreground text-lg">
                We're committed to nurturing talent and providing the best learning experience.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-card p-8 rounded-xl shadow-lg border border-border/50"
              >
                <div className="mb-8">
                  <span className="text-sm font-medium text-primary mb-2 inline-block">GET IN TOUCH</span>
                  <h2 className="text-3xl font-bold">Ready to Start Your Journey?</h2>
                  <p className="text-muted-foreground mt-2">Fill out the form and our team will get back to you within 24 hours.</p>
                </div>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      className="w-full"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Your Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your interests and goals..."
                      rows={4}
                      className="w-full"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <Button type="submit" className="w-full group">
                      Open Email Application
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    {submitStatus && (
                      <div className={`p-4 rounded-lg text-sm ${submitStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                        {submitStatus.message}
                      </div>
                    )}
                    <p className="text-sm text-muted-foreground text-center">
                      Your default email client will open with a pre-filled message.
                    </p>
                  </div>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-sm p-8 rounded-xl border border-border/30 shadow-sm">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Get In Touch</h2>
                    <p className="text-muted-foreground">
                      We're here to help and answer any questions you might have.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Phone Section */}
                    <div className="group relative p-4 bg-white/50 dark:bg-gray-900/50 rounded-lg transition-all duration-300 hover:shadow-md hover:border-primary/20 border border-transparent">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <Phone className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                          <div className="space-y-1">
                            <a 
                              href="tel:+919176458486" 
                              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group-hover:translate-x-1 transition-transform"
                            >
                              <span className="inline-block w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary"></span>
                              (+91) 9176458486
                            </a>
                            <a 
                              href="tel:+919597222661" 
                              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group-hover:translate-x-1 transition-transform"
                            >
                              <span className="inline-block w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary"></span>
                              (+91) 9597222661
                            </a>
                            <a 
                              href="tel:04442822290" 
                              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group-hover:translate-x-1 transition-transform"
                            >
                              <span className="inline-block w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary"></span>
                              044-42822290
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="absolute -bottom-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white">
                          <Phone className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Email Section */}
                    <div className="group relative p-4 bg-white/50 dark:bg-gray-900/50 rounded-lg transition-all duration-300 hover:shadow-md hover:border-primary/20 border border-transparent">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <Mail className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                          <a 
                            href="mailto:askus@syasans.com" 
                            className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group-hover:translate-x-1 transition-transform"
                          >
                            <span className="inline-block w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary"></span>
                            askus@syasans.com
                          </a>
                          <p className="text-sm text-muted-foreground/80 mt-2">
                            We typically respond within 24 hours
                          </p>
                        </div>
                      </div>
                      <div className="absolute -bottom-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white">
                          <Mail className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Address Section */}
                    <div className="group relative p-4 bg-white/50 dark:bg-gray-900/50 rounded-lg transition-all duration-300 hover:shadow-md hover:border-primary/20 border border-transparent">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">Our Location</h3>
                          <address className="not-italic">
                            <p className="text-muted-foreground flex items-start gap-2">
                              <span className="inline-block w-2 h-2 rounded-full bg-primary/50 mt-2 flex-shrink-0"></span>
                              <span>
                                #6, Middle W Jones Rd,<br />
                                West Saidapet,<br />
                                Chennai - 600015<br />
                                Tamil Nadu, India
                              </span>
                            </p>
                          </address>
                          <a 
                            href="https://maps.google.com?q=SYASAN'S+Chennai" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm text-primary mt-3 hover:underline"
                          >
                            View on map
                            <ArrowRight className="ml-1 w-4 h-4" />
                          </a>
                        </div>
                      </div>
                      <div className="absolute -bottom-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white">
                          <MapPin className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  
                </div>

                
              </motion.div>
            </div>
          </div>
        </section>

        
      </main>
      <Footer />
    </div>
  );
}
