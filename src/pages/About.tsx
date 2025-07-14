
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Users, Target, Award, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">About Perse.io</h1>
          <p className="text-2xl font-semibold text-white/95 mb-4">
            Market leading data and solutions powering the path to net zero in energy, real estate and finance
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To democratise access to energy data and insights, enabling businesses of all sizes 
                to make informed decisions that drive efficiency, reduce costs, and support 
                environmental sustainability.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                A world where every organisation has the tools and insights needed to optimise 
                their energy usage, contributing to a more sustainable and efficient global 
                energy ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Perse.io
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for the highest standards in everything we deliver, 
                from data accuracy to customer service.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of partnership and work closely with our 
                clients to achieve shared goals.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-600">
                Environmental responsibility is at the heart of our mission and 
                drives our innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Ready for content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the passionate experts driving innovation in energy data solutions
            </p>
          </div>

          {/* Team Leadership */}
          <div className="mb-16">
            <img 
              src="/lovable-uploads/a56e74c1-d781-453a-b93f-231f2bad32af.png" 
              alt="Perse.io Leadership Team" 
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg"
            />
          </div>

          {/* Team Details */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Jane Lucy</h3>
              <p className="text-lg text-emerald-600 font-semibold mb-3">CEO & Co-Founder</p>
              <p className="text-gray-600 leading-relaxed">
                Visionary leader driving Perse's mission to democratise energy data access 
                and empower sustainable business decisions across industries.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Vikesh Sachdeva</h3>
              <p className="text-lg text-blue-600 font-semibold mb-3">Chief Strategy Officer & Co-Founder</p>
              <p className="text-gray-600 leading-relaxed">
                Strategic mastermind shaping market positioning and growth initiatives, 
                ensuring Perse remains at the forefront of energy innovation.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Jaipal Naidu</h3>
              <p className="text-lg text-purple-600 font-semibold mb-3">Product & Operations Owner & Co-Founder</p>
              <p className="text-gray-600 leading-relaxed">
                Product visionary and operations expert ensuring seamless delivery 
                of cutting-edge energy data solutions and exceptional user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
