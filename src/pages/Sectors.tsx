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
      <section className="bg-muted py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-text-primary leading-tight mb-6">
              Market leading data and solutions <span className="text-primary font-extrabold">powering the path to net zero in energy, real estate and finance</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-text-primary/70 mt-4 sm:mt-6">
              Discover how we're transforming three key sectors with innovative data solutions
            </p>
          </div>
        </div>
      </section>

      {/* Three Sectors Side by Side */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            
            {/* Energy Sector */}
            <div className="group relative overflow-hidden rounded-2xl p-1 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl md:col-span-2 lg:col-span-1" style={{background: `hsl(var(--perse-dark-grey))`}}>
              <div className="bg-white rounded-xl p-6 sm:p-8 h-full">
                <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl mb-4 sm:mb-6 mx-auto group-hover:rotate-6 transition-transform duration-300" style={{background: `hsl(var(--perse-dark-grey))`}}>
                  <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-3 sm:mb-4">Energy</h3>
                <p className="text-gray-600 text-center mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                  Transform energy operations with comprehensive data solutions and smart grid management
                </p>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Key features:</h4>
                  {["Energy procurement", "Commission reconciliation", "Bill validation", "Analysis and recommendations for pass through costs", "Demand flexibility"].map((useCase, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 mt-0.5 shrink-0" style={{color: `hsl(var(--perse-dark-grey))`}} />
                      <span className="text-sm text-gray-700 font-medium">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Property Sector */}
            <div className="group relative overflow-hidden rounded-2xl p-1 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl" style={{background: `hsl(var(--perse-turquoise))`}}>
              <div className="bg-white rounded-xl p-6 sm:p-8 h-full">
                <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl mb-4 sm:mb-6 mx-auto group-hover:rotate-6 transition-transform duration-300" style={{background: `hsl(var(--perse-turquoise))`}}>
                  <Building className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-3 sm:mb-4">Property</h3>
                <p className="text-gray-600 text-center mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                  Enhance property value and efficiency with building performance data and carbon reduction solutions
                </p>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Key features:</h4>
                  {["Carbon reporting: location and market based", "Landlord access to data without tenant consent", "GRESB partner", "Identification of measures to reduce carbon", "Portfolio management", "Reconciliation and reporting of outcomes", "Pre-integration with ESG software platforms"].map((useCase, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 mt-0.5 shrink-0" style={{color: `hsl(var(--perse-turquoise))`}} />
                      <span className="text-sm text-gray-700 font-medium">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Finance Sector */}
            <div className="group relative overflow-hidden rounded-2xl p-1 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl md:col-span-2 lg:col-span-1" style={{background: `hsl(var(--perse-light-blue-grey))`}}>
              <div className="bg-white rounded-xl p-6 sm:p-8 h-full">
                <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl mb-4 sm:mb-6 mx-auto group-hover:rotate-6 transition-transform duration-300" style={{background: `hsl(var(--perse-light-blue-grey))`}}>
                  <CreditCard className="h-6 w-6 sm:h-8 sm:w-8 text-[hsl(var(--perse-dark-grey))]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-3 sm:mb-4">Finance</h3>
                <p className="text-gray-600 text-center mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                  Enable ESG lending and risk assessment with comprehensive carbon and energy analytics
                </p>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Key features:</h4>
                  {["Carbon reporting: location and market based", "Portfolio and individual property assessment", "Customer engagement tools", "Perseus partner", "Reconciliation and reporting of outcomes"].map((useCase, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 mt-0.5 shrink-0" style={{color: `hsl(var(--perse-light-blue-grey))`}} />
                      <span className="text-sm text-gray-700 font-medium">{useCase}</span>
                    </div>
                  ))}
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

export default Sectors;