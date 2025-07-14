
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Team</h1>
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
