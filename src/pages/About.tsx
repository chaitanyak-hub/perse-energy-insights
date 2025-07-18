
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Target, Award, Globe, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-6">
              <span className="font-extrabold text-primary">Market leading</span> data and solutions powering the path to net zero in energy, real estate and finance
            </h1>
          </div>
        </div>
      </section>
      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="w-12 h-12 bg-[hsl(var(--perse-turquoise))] rounded-lg flex items-center justify-center mb-6">
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
              <div className="w-12 h-12 bg-[hsl(var(--perse-pale-orange))] rounded-lg flex items-center justify-center mb-6">
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
              The principles that guide everything we do at Perse
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[hsl(var(--perse-light-chartreuse))] rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-[hsl(var(--perse-dark-grey))]" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">Excellence</h3>
              <p className="text-text-primary/70">
                We strive for the highest standards in everything we deliver, 
                from data accuracy to customer service.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[hsl(var(--perse-turquoise))] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">Collaboration</h3>
              <p className="text-text-primary/70">
                We believe in the power of partnership and work closely with our 
                clients to achieve shared goals.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[hsl(var(--perse-pale-orange))] rounded-full flex items-center justify-center mx-auto mb-6">
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
          <div className="text-center mb-16">
            <div className="max-w-4xl mx-auto mb-12">
              <img 
                src="/lovable-uploads/2b2d3619-6149-49a8-b7a3-7840810cbd98.png" 
                alt="Perse Leadership Team - Jane Lucy, Vikesh Sachdeva, Jaipal Naidu" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-text-primary mb-2">Jane Lucy</h3>
                <p className="text-lg text-[hsl(var(--perse-turquoise))] font-semibold mb-3">CEO & Co-Founder</p>
                <p className="text-text-primary/70 leading-relaxed">
                  Visionary leader and former lawyer, driving Perse's mission to democratise energy data and create the legal framework to empower sustainable decisions across industries
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-text-primary mb-2">Vikesh Sachdeva</h3>
                <p className="text-lg text-[hsl(var(--perse-pale-orange))] font-semibold mb-3">Chief Strategy Officer & Co-Founder</p>
                <p className="text-text-primary/70 leading-relaxed">
                  Strategic mastermind behind many of the data networks in the utility market in Britain, solving data and technology challenges to ensure Perse remains at the forefront of energy innovation.
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-text-primary mb-2">Jaipal Naidu</h3>
                <p className="text-lg text-[hsl(var(--perse-light-pink))] font-semibold mb-3">Chief Product Officer & Co-Founder</p>
                <p className="text-text-primary/70 leading-relaxed">
                  Product visionary and operations expert ensuring seamless delivery 
                  of cutting-edge energy data solutions and exceptional user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
