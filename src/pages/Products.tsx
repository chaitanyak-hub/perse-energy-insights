import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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

      {/* Data and Solutions Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Data Section */}
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-text-primary mb-4">Data</h2>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm h-full">
                  <p className="text-base text-text-primary/80 mb-6 leading-relaxed">
                    A one-stop shop for all data needs for utility optimisation, carbon reporting and carbon reduction.
                  </p>
                  
                  <ul className="space-y-3 text-sm text-text-primary/70">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Convert disparate datasets from energy, insurance, government and Google</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Market leading address to utility meter matching algorithms</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Access data via API or our user-friendly Appstore interface</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Solutions Section */}
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-text-primary mb-4">Solutions</h2>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm h-full">
                  <p className="text-base text-text-primary/80 mb-6 leading-relaxed">
                    Easy to understand energy and carbon baselines, benchmarks, and personalised recommendations.
                  </p>
                  
                  <ul className="space-y-3 text-sm text-text-primary/70">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Integrated with utility and demand response providers</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Powers solutions for solar PV and heat pump installers</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Future-proofed legal compliance with ConsentWallet</span>
                    </li>
                  </ul>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-text-primary mb-6">Our Products</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* APIs Product Card */}
              <div 
                className="bg-white rounded-2xl p-8 cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-blue-200"
                onClick={() => window.open("https://apidocs.perse.io/", '_blank')}
              >
                <div className="flex items-center justify-center mb-6">
                  <img 
                    src="/lovable-uploads/e9715b5a-9146-45c9-a960-839fc6cbbb48.png" 
                    alt="APIs" 
                    className="w-16 h-16"
                  />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4 text-center">APIs</h3>
                <p className="text-text-primary/70 mb-6 text-center text-lg">
                  Raw data or analysis to plugin to your system or third party software provider
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-text-primary/70">Real-time data feeds</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-text-primary/70">Custom integrations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-text-primary/70">Scalable endpoints</span>
                  </div>
                </div>
                <div className="text-center">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Visit <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Appstore Product Card */}
              <div 
                className="bg-white rounded-2xl p-8 cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-emerald-200"
                onClick={() => window.open("https://apps.perse.io/perse/home", '_blank')}
              >
                <div className="flex items-center justify-center mb-6">
                  <img 
                    src="/lovable-uploads/d20bc536-9840-4a7b-aef6-326b20807ea7.png" 
                    alt="Appstore" 
                    className="w-16 h-16"
                  />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4 text-center">Appstore</h3>
                <p className="text-text-primary/70 mb-6 text-center text-lg">
                  A user interface to access data otherwise only available via API
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <span className="text-text-primary/70">User-friendly interface</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <span className="text-text-primary/70">Data visualisation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <span className="text-text-primary/70">No-code solutions</span>
                  </div>
                </div>
                <div className="text-center">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                    Visit <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Optimise Product Card */}
              <div 
                className="bg-white rounded-2xl p-8 cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-cyan-200"
                onClick={() => window.open("https://energyhelp.perse.io/home", '_blank')}
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">O</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4 text-center">Optimise</h3>
                <p className="text-text-primary/70 mb-6 text-center text-lg">
                  Instantly personalised low carbon recommendations, including solar PV and heat pumps
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                    <span className="text-text-primary/70">Address as only data input</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                    <span className="text-text-primary/70">ROI calculations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                    <span className="text-text-primary/70">No site visit needed</span>
                  </div>
                </div>
                <div className="text-center">
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                    Visit <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Energy procurement Product Card */}
              <div 
                className="bg-white rounded-2xl p-8 cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-orange-200"
                onClick={() => window.open("https://www.thelabrador.co.uk/", '_blank')}
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">E</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4 text-center">Energy Procurement</h3>
                <p className="text-text-primary/70 mb-6 text-center text-lg">
                  Tariff comparison and switching for homes and businesses of all sizes
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-text-primary/70">Whole market comparison</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-text-primary/70">Automated switching</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-text-primary/70">Business & residential</span>
                  </div>
                </div>
                <div className="text-center">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                    Visit <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* DSR Product Card */}
              <div 
                className="bg-white rounded-2xl p-8 cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-purple-200"
                onClick={() => window.open("https://flexibility.perse.io", '_blank')}
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">D</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4 text-center">Flex</h3>
                <p className="text-text-primary/70 mb-6 text-center text-lg">
                  Smart energy management and demand response services for grid balancing
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-text-primary/70">Free revenue generation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-text-primary/70">Automated bids</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-text-primary/70">Grid flexibility services</span>
                  </div>
                </div>
                <div className="text-center">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    Visit <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* ConsentWallet Product Card */}
              <div 
                className="bg-white rounded-2xl p-8 cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-teal-200"
                onClick={() => window.open("https://opendata.energy/landing", '_blank')}
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">C</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4 text-center">ConsentWallet</h3>
                <p className="text-text-primary/70 mb-6 text-center text-lg">
                  Choose how you receive and share your utility data securely
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                    <span className="text-text-primary/70">Open banking level security</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                    <span className="text-text-primary/70">Consent management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                    <span className="text-text-primary/70">Secure data sharing</span>
                  </div>
                </div>
                <div className="text-center">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                    Visit <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Products;