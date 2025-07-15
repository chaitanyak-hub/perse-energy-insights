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
              Market leading <span className="text-primary font-extrabold">data and solutions</span> powering the path to net zero in energy, real estate and finance
            </h1>
          </div>
        </div>
      </section>

      {/* Data Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-text-primary mb-8">Data</h2>
            </div>
            
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="max-w-4xl mx-auto space-y-8 text-lg text-text-primary/80 leading-relaxed">
                <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl p-6">
                  <p className="font-medium text-text-primary">
                    A one-stop shop for all data needs for utility optimisation, carbon reporting and carbon reduction.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                  <p className="font-medium text-text-primary">
                    We convert disparate datasets from energy, insurance, government and Google, to ensure data makes sense for your use case "out of the box".
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-emerald-50 rounded-xl p-6">
                  <p className="font-medium text-text-primary">
                    Our proprietary algorithms offer market leading address to utility meter matching, meaning data may be accessed with address as the only required data input.
                  </p>
                </div>
              </div>
              
              <div className="mt-12 text-center mb-8">
                <p className="text-xl text-text-primary font-medium">
                  Access data via API or our Appstore, being a user interface to search and download data.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center">
                  <div className="flex items-center justify-center mb-6">
                    <img 
                      src="/lovable-uploads/e9715b5a-9146-45c9-a960-839fc6cbbb48.png" 
                      alt="APIs" 
                      className="w-16 h-16"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-text-primary mb-4">APIs</h4>
                  <p className="text-text-primary/70 mb-4 leading-relaxed">
                    Direct integration with our comprehensive data platform through robust APIs for seamless data access and automation.
                  </p>
                  <div className="text-left">
                    <ul className="space-y-2 text-sm text-text-primary/60">
                      <li>• Real-time data feeds</li>
                      <li>• Custom integrations</li>
                      <li>• Scalable endpoints</li>
                      <li>• Developer-friendly documentation</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 text-center">
                  <div className="flex items-center justify-center mb-6">
                    <img 
                      src="/lovable-uploads/d20bc536-9840-4a7b-aef6-326b20807ea7.png" 
                      alt="Appstore" 
                      className="w-16 h-16"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-text-primary mb-4">Appstore</h4>
                  <p className="text-text-primary/70 mb-4 leading-relaxed">
                    User-friendly interface to search, explore, and download the data you need with intuitive navigation and filtering.
                  </p>
                  <div className="text-left">
                    <ul className="space-y-2 text-sm text-text-primary/60">
                      <li>• Interactive data exploration</li>
                      <li>• Advanced search & filters</li>
                      <li>• One-click downloads</li>
                      <li>• Visual data previews</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-text-primary mb-8">Solutions</h2>
            </div>
            
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="max-w-4xl mx-auto space-y-8 text-lg text-text-primary/80 leading-relaxed">
                <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl p-6">
                  <p className="font-medium text-text-primary">
                    Our solutions make it easy to understand energy and carbon baselines, benchmark comparisons, as well as personalised recommendations to optimise energy cost and carbon.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                  <p className="font-medium text-text-primary">
                    We are integrated with utility providers, demand response providers, as well as powering solutions for installers of low carbon technologies, including solar PV and heat pumps.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-emerald-50 rounded-xl p-6">
                  <p className="font-medium text-text-primary">
                    Future proofed legal compliance can be built-in with our ConsentWallet permission management tool, based on the principles of Open Banking and Ofgem's Consumer Consent Solution.
                  </p>
                </div>
              </div>
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