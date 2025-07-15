import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Building, CreditCard, ArrowRight, CheckCircle, TrendingUp, Shield, Database } from "lucide-react";

const Sectors = () => {
  const sectors = [
    {
      title: "Energy Sector",
      description: "Transform energy operations with comprehensive data solutions and smart grid management",
      icon: Zap,
      heroTitle: "Revolutionise Energy Operations",
      heroDescription: "Power the future of energy with real-time data, smart grid solutions, and comprehensive market intelligence.",
      benefits: [
        {
          product: "APIs",
          benefit: "Real-time energy trading data and market intelligence for optimised procurement strategies",
          features: ["Live market pricing", "Trading signals", "Demand forecasting", "Grid status monitoring"]
        },
        {
          product: "Demand Flexibility",
          benefit: "Grid balancing services and demand response programmes to maximise revenue generation",
          features: ["Automated demand response", "Peak shaving", "Grid stabilisation", "Revenue optimisation"]
        },
        {
          product: "Energy Procurement",
          benefit: "Whole market comparison and automated switching for competitive tariff management",
          features: ["Tariff comparison", "Automated switching", "Contract management", "Cost analysis"]
        },
        {
          product: "Appstore",
          benefit: "User-friendly dashboards for monitoring energy performance and market conditions",
          features: ["Performance dashboards", "Market analytics", "Custom reports", "Mobile access"]
        }
      ],
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    },
    {
      title: "Property Sector",
      description: "Enhance property value and efficiency with building performance data and carbon reduction solutions",
      icon: Building,
      heroTitle: "Maximise Property Performance",
      heroDescription: "Unlock property value through data-driven insights, energy efficiency analysis, and carbon reduction strategies.",
      benefits: [
        {
          product: "Optimise",
          benefit: "Instant personalised recommendations for solar PV and heat pumps without site visits",
          features: ["Remote assessments", "Solar PV analysis", "Heat pump suitability", "ROI calculations"]
        },
        {
          product: "APIs",
          benefit: "Building fabric data and EPC ratings for informed investment and development decisions",
          features: ["EPC database access", "Building analytics", "Energy ratings", "Performance benchmarks"]
        },
        {
          product: "Energy Procurement",
          benefit: "Multi-site portfolio management for cost optimisation across property portfolios",
          features: ["Portfolio management", "Bulk purchasing", "Contract consolidation", "Cost tracking"]
        },
        {
          product: "ConsentWallet",
          benefit: "Secure utility data sharing for property valuations and tenant energy management",
          features: ["Secure data sharing", "Tenant permissions", "Valuation insights", "Energy profiles"]
        }
      ],
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50"
    },
    {
      title: "Banking Sector",
      description: "Enable ESG lending and risk assessment with comprehensive carbon and energy analytics",
      icon: CreditCard,
      heroTitle: "Enable Sustainable Finance",
      heroDescription: "Drive ESG-compliant lending with comprehensive carbon analytics, risk assessment, and sustainable finance solutions.",
      benefits: [
        {
          product: "APIs",
          benefit: "Carbon footprint data and ESG metrics for sustainable finance and risk assessment",
          features: ["Carbon calculations", "ESG scoring", "Risk analytics", "Compliance reporting"]
        },
        {
          product: "Optimise",
          benefit: "Property energy efficiency analysis for green mortgage products and lending decisions",
          features: ["Efficiency ratings", "Green valuations", "Retrofit potential", "Energy scores"]
        },
        {
          product: "ConsentWallet",
          benefit: "Secure customer energy data access for personalised financial products and services",
          features: ["Customer consent", "Data privacy", "Personalised offers", "Energy profiles"]
        },
        {
          product: "Appstore",
          benefit: "No-code solutions for ESG reporting and carbon tracking across loan portfolios",
          features: ["ESG dashboards", "Portfolio tracking", "Automated reporting", "Compliance tools"]
        }
      ],
      gradient: "from-blue-500 to-purple-500",
      bgGradient: "from-blue-50 to-purple-50"
    }
  ];


  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-6">
              Market leading <span className="text-primary font-extrabold">data and solutions</span> powering the path to net zero in energy, real estate and finance
            </h1>
            <p className="text-xl text-text-primary/70 mt-6">
              Discover how we're transforming three key sectors with innovative data solutions
            </p>
          </div>
        </div>
      </section>

      {/* Three Sectors Side by Side */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {/* Energy Sector */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 p-1 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
              <div className="bg-white rounded-xl p-8 h-full">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl mb-6 mx-auto group-hover:rotate-6 transition-transform duration-300">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">Energy</h3>
                <p className="text-gray-600 text-center mb-8 leading-relaxed">
                  Transform energy operations with comprehensive data solutions and smart grid management
                </p>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Use Cases:</h4>
                  {["Energy procurement", "Commission reconciliation", "Bill validation", "Analysis and recommendations for pass through costs", "Demand flexibility"].map((useCase, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-gray-700 font-medium">{useCase}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                    Explore Energy Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Property Sector */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 p-1 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
              <div className="bg-white rounded-xl p-8 h-full">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl mb-6 mx-auto group-hover:rotate-6 transition-transform duration-300">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">Property</h3>
                <p className="text-gray-600 text-center mb-8 leading-relaxed">
                  Enhance property value and efficiency with building performance data and carbon reduction solutions
                </p>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Use Cases:</h4>
                  {["Carbon reporting: location and market based", "Landlord access to data without tenant consent", "GRESB partner", "Identification of measures to reduce carbon", "Portfolio management", "Reconciliation and reporting of outcomes"].map((useCase, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-gray-700 font-medium">{useCase}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white">
                    Explore Property Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Finance Sector */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 p-1 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
              <div className="bg-white rounded-xl p-8 h-full">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mb-6 mx-auto group-hover:rotate-6 transition-transform duration-300">
                  <CreditCard className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">Finance</h3>
                <p className="text-gray-600 text-center mb-8 leading-relaxed">
                  Enable ESG lending and risk assessment with comprehensive carbon and energy analytics
                </p>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Use Cases:</h4>
                  {["Carbon reporting: location and market based", "Portfolio and individual property assessment", "Customer engagement tools", "Perseus partner", "Reconciliation and reporting of outcomes"].map((useCase, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-gray-700 font-medium">{useCase}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
                    Explore Finance Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">Proven Impact Across Sectors</h2>
            <p className="text-xl text-text-primary/70 max-w-3xl mx-auto">
              See how our data solutions are driving transformation across all three sectors
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white rounded-xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Energy Companies</div>
              <div className="text-sm text-gray-500 mt-2">Using our procurement solutions</div>
            </div>
            
            <div className="text-center bg-white rounded-xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-emerald-600 mb-2">10M+</div>
              <div className="text-gray-600 font-medium">Properties Analysed</div>
              <div className="text-sm text-gray-500 mt-2">For carbon reduction opportunities</div>
            </div>
            
            <div className="text-center bg-white rounded-xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">£2B+</div>
              <div className="text-gray-600 font-medium">Green Finance Enabled</div>
              <div className="text-sm text-gray-500 mt-2">Through ESG data insights</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Sector?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join leading organisations across energy, property, and banking who trust Perse.io 
            to drive their sustainability and operational goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3 bg-white text-gray-900 hover:bg-gray-100">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white/10">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sectors;