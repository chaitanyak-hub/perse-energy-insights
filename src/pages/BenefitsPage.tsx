import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Benefits } from "@/components/Benefits";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, TrendingUp, Shield, Clock } from "lucide-react";

const BenefitsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-6">
              <span className="font-semibold text-text-secondary">Market leading</span> data and solutions powering the path to net zero in energy, real estate and finance
            </h1>
          </div>
        </div>
      </section>

      {/* Proven Results Section - Moved to top */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-text-primary mb-6">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-text-primary/70 mb-8">
              Join hundreds of organisations already benefiting from our comprehensive energy data solutions.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-muted p-6 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-emerald-600 mb-2">10M+</div>
                <div className="text-text-primary font-semibold mb-1">Tonnes Carbon Processed</div>
                <div className="text-text-primary/70 text-sm">Helping organisations track and reduce their carbon footprint</div>
              </div>
              <div className="bg-muted p-6 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">£65M+</div>
                <div className="text-text-primary font-semibold mb-1">Savings Identified</div>
                <div className="text-text-primary/70 text-sm">Cost reductions achieved through our optimisation solutions</div>
              </div>
              <div className="bg-muted p-6 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-purple-600 mb-2">1000+</div>
                <div className="text-text-primary font-semibold mb-1">Data Sources</div>
                <div className="text-text-primary/70 text-sm">Comprehensive data coverage for informed decision making</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Why Choose Perse Section */}
      <Benefits />

      {/* Trusted by Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">Trusted by</h2>
            <p className="text-xl text-text-primary/70 max-w-3xl mx-auto">
              Leading organizations across energy, property, and finance trust Perse.io to power their transformation
            </p>
          </div>
          {/* Placeholder for trust logos - will be added when provided */}
          <div className="flex justify-center">
            <p className="text-text-primary/70 italic">Trust logos will be displayed here</p>
          </div>
        </div>
      </section>

      {/* Recognised and supported by Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">Recognised and supported by</h2>
            <p className="text-xl text-text-primary/70 max-w-3xl mx-auto">
              Backed by industry leaders and innovation programs
            </p>
          </div>
          {/* Placeholder for recognition logos - will be added when provided */}
          <div className="flex justify-center">
            <p className="text-text-primary/70 italic">Recognition logos will be displayed here</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience These Benefits?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start your transformation today and join leading organisations 
            already achieving their sustainability and efficiency goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3 bg-white text-gray-900 hover:bg-gray-100">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white/10">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BenefitsPage;