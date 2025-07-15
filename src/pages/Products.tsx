import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Lightbulb, Zap, Building, RefreshCw, Satellite } from "lucide-react";

const Products = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-6">
              Market leading data and solutions powering the path to net zero in energy, real estate and finance
            </h1>
          </div>
        </div>
      </section>


      {/* Main Products Section */}
      <ProductShowcase />

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discover how our comprehensive data solutions can transform 
            your energy operations and drive your net zero goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3 bg-white text-gray-900 hover:bg-gray-100">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white/10">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;