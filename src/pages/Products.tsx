import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Award, Check, CheckCircle, Clock, Cpu, Database, Server, Shield, Users, Zap } from "lucide-react";
import QuantumServerImage from "@/assets/Quantum_Server.jpg";

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gray-900">Our </span>
                <span className="text-blue-600">Products</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Innovative solutions designed to transform your career and learning experience
              </p>
            </div>
          </div>
        </section>

        {/* D'LAN QUANTUM SERVER */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full mb-4">
                Advanced Assessment
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">D'LAN <span className="text-blue-600">QUANTUM SERVER</span></h2>
              <p className="text-xl text-gray-600">
                Comprehensive evaluation with our advanced test engine
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative group flex justify-center w-full"
              >
                <div className="relative overflow-hidden rounded-xl shadow-xl group-hover:shadow-2xl transition-all duration-300 w-full max-w-[400px]">
                  <img 
                    src={QuantumServerImage} 
                    alt="D'LAN Quantum Server" 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-bold mb-1">Quantum Computing Power</h3>
                      <p className="text-sm opacity-90">Next-generation server technology</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <div className="space-y-8 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <Zap className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Real-time Assessment</h3>
                      <p className="text-gray-600">
                        Experience our cutting-edge assessment platform that provides instant feedback and detailed analytics.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <Server className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Robust Infrastructure</h3>
                      <p className="text-gray-600">
                        Built on enterprise-grade technology to ensure reliability and performance at scale.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <Shield className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
                      <p className="text-gray-600">
                        Your data security is our top priority with enterprise-grade encryption and compliance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Handcrafting Aptitude Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Handcrafting Aptitude for <span className="text-blue-600">Institutions</span>
              </h2>
              <p className="text-xl text-gray-600">
                Customized learning solutions to enhance aptitude skills for campus placements and competitive exams
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative group flex justify-center w-full"
              >
                <div className="relative overflow-hidden rounded-xl shadow-xl group-hover:shadow-2xl transition-all duration-300 w-full max-w-[400px]">
                  <img 
                    src="/assets/Books.jpg" 
                    alt="Handcrafting Aptitude Materials" 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>
              <div className="space-y-6 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start p-3 hover:bg-blue-50 rounded-lg transition-colors">
                    <CheckCircle className="w-6 h-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Customized Hand-book for aspirants targeting Campus Placements</span>
                  </li>
                  <li className="flex items-start p-3 hover:bg-blue-50 rounded-lg transition-colors">
                    <CheckCircle className="w-6 h-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">400+ core concepts with examples, twists, tricks, choices & diluted solution</span>
                  </li>
                  <li className="flex items-start p-3 hover:bg-blue-50 rounded-lg transition-colors">
                    <CheckCircle className="w-6 h-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Graded problems with lateral solution focusing on the Dreams & Super Dream offers</span>
                  </li>
                  <li className="flex items-start p-3 hover:bg-blue-50 rounded-lg transition-colors">
                    <CheckCircle className="w-6 h-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Exam Focus: Bank PO, UPSC, GATE, CAT, TANSET, TNPSC</span>
                  </li>
                  <li className="flex items-start p-3 hover:bg-blue-50 rounded-lg transition-colors">
                    <CheckCircle className="w-6 h-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Industry 5.0 specific concepts for Quantitative, Reasoning and Logical Ability</span>
                  </li>
                  <li className="flex items-start p-3 hover:bg-blue-50 rounded-lg transition-colors">
                    <CheckCircle className="w-6 h-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">3500+ Actual Questions with Answers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-5xl mx-auto text-center mb-20"
            >
              <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 text-sm font-medium rounded-full mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Powerful Features for <span className="text-blue-600">Optimal Performance</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to assess, analyze, and improve your learning experience
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[
                {
                  icon: <Cpu className="w-6 h-6" />,
                  title: "Advanced Analytics",
                  description: "Gain deep insights with our comprehensive analytics dashboard that tracks progress and performance metrics.",
                  color: "from-blue-500 to-blue-400"
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Expert Guidance",
                  description: "Learn from industry professionals with years of experience in aptitude training and career counseling.",
                  color: "from-emerald-500 to-emerald-400"
                },
                {
                  icon: <Database className="w-6 h-6" />,
                  title: "Comprehensive Content",
                  description: "Access a vast library of practice questions, mock tests, and study materials.",
                  color: "from-purple-500 to-purple-400"
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: "24/7 Support",
                  description: "Get your questions answered with our round-the-clock support team.",
                  color: "from-amber-500 to-amber-400"
                },
                {
                  icon: <Check className="w-6 h-6" />,
                  title: "Proven Results",
                  description: "Join thousands of successful candidates who aced their exams with our guidance.",
                  color: "from-rose-500 to-rose-400"
                },
                {
                  icon: <Award className="w-6 h-6" />,
                  title: "Certification Ready",
                  description: "Prepare effectively for industry-recognized certifications and competitive exams.",
                  color: "from-indigo-500 to-indigo-400"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ y: -5 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.4,
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="group relative overflow-hidden bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color}`}></div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-16 text-center"
            >
              
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
