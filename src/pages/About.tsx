
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

          {/* Team content will be added here */}
          <div className="text-center py-12 bg-gray-50 rounded-2xl">
            <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">
              Team content to be added from perse.io/team
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
