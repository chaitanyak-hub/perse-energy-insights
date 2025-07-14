import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Building, CreditCard, ArrowRight } from "lucide-react";

export const Sectors = () => {
  const sectors = [
    {
      title: "Energy Sector",
      description: "Transform energy operations with comprehensive data solutions and smart grid management",
      icon: Zap,
      benefits: [
        {
          product: "APIs",
          benefit: "Real-time energy trading data and market intelligence for optimised procurement strategies"
        },
        {
          product: "Demand Flexibility",
          benefit: "Grid balancing services and demand response programmes to maximise revenue generation"
        },
        {
          product: "Energy Procurement",
          benefit: "Whole market comparison and automated switching for competitive tariff management"
        },
        {
          product: "Appstore",
          benefit: "User-friendly dashboards for monitoring energy performance and market conditions"
        }
      ],
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    },
    {
      title: "Property Sector",
      description: "Enhance property value and efficiency with building performance data and carbon reduction solutions",
      icon: Building,
      benefits: [
        {
          product: "Optimise",
          benefit: "Instant personalised recommendations for solar PV and heat pumps without site visits"
        },
        {
          product: "APIs",
          benefit: "Building fabric data and EPC ratings for informed investment and development decisions"
        },
        {
          product: "Energy Procurement",
          benefit: "Multi-site portfolio management for cost optimisation across property portfolios"
        },
        {
          product: "ConsentWallet",
          benefit: "Secure utility data sharing for property valuations and tenant energy management"
        }
      ],
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50"
    },
    {
      title: "Banking Sector",
      description: "Enable ESG lending and risk assessment with comprehensive carbon and energy analytics",
      icon: CreditCard,
      benefits: [
        {
          product: "APIs",
          benefit: "Carbon footprint data and ESG metrics for sustainable finance and risk assessment"
        },
        {
          product: "Optimise",
          benefit: "Property energy efficiency analysis for green mortgage products and lending decisions"
        },
        {
          product: "ConsentWallet",
          benefit: "Secure customer energy data access for personalised financial products and services"
        },
        {
          product: "Appstore",
          benefit: "No-code solutions for ESG reporting and carbon tracking across loan portfolios"
        }
      ],
      gradient: "from-blue-500 to-purple-500",
      bgGradient: "from-blue-50 to-purple-50"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sectors We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive data solutions empower businesses across energy, property, and banking sectors 
            to achieve their net zero goals and operational excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <Card key={index} className={`bg-gradient-to-br ${sector.bgGradient} border-0 shadow-lg hover:shadow-xl transition-all duration-300 group`}>
              <CardHeader className="space-y-4">
                <div className={`w-14 h-14 bg-gradient-to-r ${sector.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <sector.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">{sector.title}</CardTitle>
                <CardDescription className="text-lg text-gray-700">
                  {sector.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                  <div className="space-y-4">
                    {sector.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                        <div className="flex items-start space-x-3">
                          <div className={`w-2 h-2 bg-gradient-to-r ${sector.gradient} rounded-full mt-2 flex-shrink-0`}></div>
                          <div>
                            <div className={`font-semibold text-sm bg-gradient-to-r ${sector.gradient} bg-clip-text text-transparent mb-1`}>
                              {benefit.product}
                            </div>
                            <div className="text-gray-700 text-sm leading-relaxed">
                              {benefit.benefit}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4">
                    <div className={`inline-flex items-center text-sm font-medium bg-gradient-to-r ${sector.gradient} bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity`}>
                      Learn more about {sector.title.toLowerCase()} solutions
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};