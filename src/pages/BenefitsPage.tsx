import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Benefits } from "@/components/Benefits";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, TrendingUp, Shield, Clock } from "lucide-react";

const BenefitsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Transform Your
              <span className="bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent"> Energy Operations</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Unlock the full potential of your energy data with our comprehensive solutions 
              that drive efficiency, reduce costs, and accelerate your journey to net zero.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white text-lg px-8 py-3">
                See Benefits in Action
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-2 border-gray-300 hover:border-gray-400">
                Calculate Your Savings
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Detailed Benefits Section */}
      <Benefits />

      {/* Success Stories Teaser */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join hundreds of organisations already benefiting from our comprehensive energy data solutions.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-emerald-600 mb-2">10M+</div>
                <div className="text-gray-900 font-semibold mb-1">Tonnes Carbon Processed</div>
                <div className="text-gray-600 text-sm">Helping organisations track and reduce their carbon footprint</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">£65M+</div>
                <div className="text-gray-900 font-semibold mb-1">Savings Identified</div>
                <div className="text-gray-600 text-sm">Cost reductions achieved through our optimisation solutions</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-purple-600 mb-2">1000+</div>
                <div className="text-gray-900 font-semibold mb-1">Data Sources</div>
                <div className="text-gray-600 text-sm">Comprehensive data coverage for informed decision making</div>
              </div>
            </div>

            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-2 border-gray-300 hover:border-gray-400">
              View Case Studies
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
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