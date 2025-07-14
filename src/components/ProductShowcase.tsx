
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Lightbulb, RefreshCw, Zap, Building, Satellite } from "lucide-react";

export const ProductShowcase = () => {
  const products = [
    {
      title: "APIs",
      description: "Raw data or analysis to plugin to your system or third party software provider",
      icon: Database,
      features: [
        "Real-time data feeds",
        "Custom integrations", 
        "Scalable endpoints",
        "Developer documentation",
        "Rate limiting & authentication"
      ],
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Appstore",
      description: "A user interface to access data otherwise only available via API",
      icon: Building,
      features: [
        "User-friendly interface",
        "Data visualisation",
        "Dashboard access",
        "No-code solutions",
        "Pre-built applications"
      ],
      gradient: "from-emerald-500 to-emerald-600"
    },
    {
      title: "Optimise",
      description: "Instantly personalised low carbon recommendations, including solar PV and heat pumps, without the need for a site visit",
      icon: Lightbulb,
      features: [
        "Personalised recommendations",
        "Solar PV analysis",
        "Heat pump suitability",
        "Carbon reduction planning",
        "Remote assessment"
      ],
      gradient: "from-cyan-500 to-cyan-600"
    },
    {
      title: "Energy procurement",
      description: "Tariff comparison and switching for homes and businesses of all sizes",
      icon: Zap,
      features: [
        "Whole market comparison",
        "Automated switching",
        "Cost optimisation",
        "Contract management",
        "Multi-site portfolios"
      ],
      gradient: "from-orange-500 to-orange-600"
    },
    {
      title: "Demand flexibility",
      description: "Smart energy management and demand response services for grid balancing",
      icon: RefreshCw,
      features: [
        "Demand response programmes",
        "Grid balancing services",
        "Flexible energy usage",
        "Revenue generation",
        "Automated participation"
      ],
      gradient: "from-purple-500 to-purple-600"
    },
    {
      title: "ConsentWallet",
      description: "Receive and share your utility data securely with trusted partners",
      icon: Satellite,
      features: [
        "Secure data sharing",
        "Consent management",
        "Utility data access",
        "Privacy controls",
        "Trusted partnerships"
      ],
      gradient: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Data & Solutions Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive energy data solutions covering gas, electricity, carbon emissions, 
            building fabric, weather intelligence and grid optimisation for net zero transformation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
              <CardHeader className="space-y-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${product.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <product.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">{product.title}</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${product.gradient} rounded-full`}></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
