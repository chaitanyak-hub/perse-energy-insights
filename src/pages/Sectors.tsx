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
              Market leading data and solutions <span className="font-semibold text-text-secondary">powering the path to net zero in energy, real estate and finance</span>
            </h1>
          </div>
        </div>
      </section>


      {/* Energy Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-text-primary mb-4 text-center">Energy</h2>
            <p className="text-xl text-text-primary/70 mb-12 text-center">
              Some of the use cases we support in the energy market
            </p>
            
            <div className="bg-muted rounded-2xl p-8">
              <ul className="space-y-4 max-w-4xl mx-auto">
                {["Energy procurement", "Commission reconciliation", "Bill validation", "Analysis and recommendations for pass through costs", "Demand flexibility"].map((useCase, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-lg text-text-primary font-medium">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Property Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-text-primary mb-4 text-center">Property</h2>
            <p className="text-xl text-text-primary/70 mb-12 text-center">
              Some of the use cases we support in the property market
            </p>
            
            <div className="bg-background rounded-2xl p-8">
              <ul className="space-y-4 max-w-4xl mx-auto">
                {["Carbon reporting: location and market based", "Landlord access to data without tenant consent", "GRESB partner", "Identification of measures to reduce carbon with personalised payback calculations without the need for a site visit", "Portfolio management", "Reconciliation and reporting of outcomes post low carbon investments"].map((useCase, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-lg text-text-primary font-medium">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Finance Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-text-primary mb-4 text-center">Finance</h2>
            <p className="text-xl text-text-primary/70 mb-12 text-center">
              Some of the use cases we support in the finance market
            </p>
            
            <div className="bg-muted rounded-2xl p-8">
              <ul className="space-y-4 max-w-4xl mx-auto">
                {["Carbon reporting: location and market based", "Portfolio and individual property assessment of green loan opportunities", "Customer engagement tools: residential, SME and commercial", "Perseus partner", "Reconciliation and reporting of outcomes post finance"].map((useCase, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-lg text-text-primary font-medium">{useCase}</span>
                  </li>
                ))}
              </ul>
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