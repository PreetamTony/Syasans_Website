import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { ImageGallery } from "@/components/ImageGallery";
import { ArrowRight } from "lucide-react";

export default function Feedback() {
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
                  src="https://www.youtube.com/embed/T-MXkCum3Yk"
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

        {/* Performance Feedback Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Performance <span className="text-primary">Feedback</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Visual insights into our training excellence and student achievements
              </p>
            </div>

            <div className="mb-12 md:mb-16">
              <ImageGallery />
            </div>
            
            <div className="text-center">
              <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                Want to see more detailed feedback and reviews from our students?
              </p>
              <a 
                href="https://share.google/LTpS8XBL4ftVERNIZ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-primary text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                View Additional Feedback
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
