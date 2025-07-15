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

      {/* Data Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-text-primary mb-8">Data</h2>
            <div className="space-y-6 text-lg text-text-primary/80 leading-relaxed">
              <p>
                A one-stop shop for all data needs for utility optimisation, carbon reporting and carbon reduction.
              </p>
              <p>
                We convert disparate datasets from energy, insurance, government and Google, to ensure data makes sense for your use case "out of the box".
              </p>
              <p>
                Our proprietary algorithms offer market leading address to utility meter matching, meaning data may be accessed with address as the only required data input.
              </p>
            </div>
            
            <div className="mt-12">
              <p className="text-xl text-text-primary mb-8">
                Access data via API or our Appstore, being a user interface to search and download data.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-muted p-8 rounded-xl">
                  <h3 className="text-2xl font-semibold text-text-primary mb-4">APIs</h3>
                  <p className="text-text-primary/70">
                    Direct integration with our comprehensive data platform through robust APIs.
                  </p>
                </div>
                
                <div className="bg-muted p-8 rounded-xl">
                  <h3 className="text-2xl font-semibold text-text-primary mb-4">Appstore</h3>
                  <p className="text-text-primary/70">
                    User-friendly interface to search, explore, and download the data you need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-8">Solutions</h2>
            <div className="space-y-6 text-lg text-text-primary/80 leading-relaxed">
              <p>
                Our solutions make it easy to understand energy and carbon baselines, benchmark comparisons, as well as personalised recommendations to optimise energy cost and carbon.
              </p>
              <p>
                We are integrated with utility providers, demand response providers, as well as powering solutions for installers of low carbon technologies, including solar PV and heat pumps.
              </p>
              <p>
                Future proofed legal compliance can be built-in with our ConsentWallet permission management tool, based on the principles of Open Banking and Ofgem's Consumer Consent Solution.
              </p>
            </div>
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