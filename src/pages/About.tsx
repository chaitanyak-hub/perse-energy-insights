
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Target, Award, Globe, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">Our Mission</h2>
              <p className="text-lg text-text-primary/70 leading-relaxed">
                To democratise access to energy data and insights, enabling businesses of all sizes 
                to make informed decisions that drive efficiency, reduce costs, and support 
                environmental sustainability.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">Our Vision</h2>
              <p className="text-lg text-text-primary/70 leading-relaxed">
                A world where every organisation has the tools and insights needed to optimise 
                their energy usage, contributing to a more sustainable and efficient global 
                energy ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">Our Values</h2>
            <p className="text-xl text-text-primary/70 max-w-3xl mx-auto">
              The principles that guide everything we do at Perse.io
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">Excellence</h3>
              <p className="text-text-primary/70">
                We strive for the highest standards in everything we deliver, 
                from data accuracy to customer service.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">Collaboration</h3>
              <p className="text-text-primary/70">
                We believe in the power of partnership and work closely with our 
                clients to achieve shared goals.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">Sustainability</h3>
              <p className="text-text-primary/70">
                Environmental responsibility is at the heart of our mission and 
                drives our innovation.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-text-primary mb-6">Our Team</h1>
            <p className="text-xl text-text-primary/70 max-w-3xl mx-auto">
              Meet the passionate experts driving innovation in energy data solutions
            </p>
          </div>

          {/* Team Leadership */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                <img 
                  src="/lovable-uploads/4d99d5cc-c279-428f-bf47-257999d90917.png" 
                  alt="Jane Lucy - CEO & Co-Founder" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-2">Jane Lucy</h3>
              <p className="text-lg text-emerald-600 font-semibold mb-3">CEO & Co-Founder</p>
              <p className="text-text-primary/70 leading-relaxed">
                Visionary leader driving Perse's mission to democratise energy data access 
                and empower sustainable business decisions across industries.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                <img 
                  src="/lovable-uploads/1776843b-8b0e-47cc-89cf-abf5b696f0e3.png" 
                  alt="Vikesh Sachdeva - Chief Strategy Officer & Co-Founder" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-2">Vikesh Sachdeva</h3>
              <p className="text-lg text-blue-600 font-semibold mb-3">Chief Strategy Officer & Co-Founder</p>
              <p className="text-text-primary/70 leading-relaxed">
                Strategic mastermind shaping market positioning and growth initiatives, 
                ensuring Perse remains at the forefront of energy innovation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                <img 
                  src="/lovable-uploads/2b19cf67-77fe-4a31-b6fe-b2bf1c6484a3.png" 
                  alt="Jaipal Naidu - Chief Product Officer & Co-Founder" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-2">Jaipal Naidu</h3>
              <p className="text-lg text-purple-600 font-semibold mb-3">Chief Product Officer & Co-Founder</p>
              <p className="text-text-primary/70 leading-relaxed">
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
