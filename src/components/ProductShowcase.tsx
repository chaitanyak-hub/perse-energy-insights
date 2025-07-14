
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
      title: "Energy Procurement",
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
      title: "Carbon Analytics",
      description: "Location and market based carbon tracking with comprehensive emissions data",
      icon: Lightbulb,
      features: [
        "Carbon footprinting",
        "Emissions tracking", 
        "Scope 1,2,3 analysis",
        "Net zero planning",
        "Compliance reporting"
      ],
      gradient: "from-emerald-500 to-emerald-600"
    },
    {
      title: "Building Fabric Data",
      description: "EPC ratings, building fabric analysis and energy efficiency insights",
      icon: Building,
      features: [
        "EPC database access",
        "Building analytics",
        "Efficiency ratings",
        "Retrofit planning",
        "Performance benchmarking"
      ],
      gradient: "from-cyan-500 to-cyan-600"
    },
    {
      title: "Weather & Satellite",
      description: "Comprehensive weather data and satellite imagery for energy forecasting",
      icon: Satellite,
      features: [
        "Weather forecasting",
        "Solar irradiance data",
        "Wind pattern analysis", 
        "Satellite imagery",
        "Climate risk assessment"
      ],
      gradient: "from-purple-500 to-purple-600"
    },
    {
      title: "Grid Intelligence",
      description: "Grid data, pricing signals and market intelligence for energy optimisation",
      icon: RefreshCw,
      features: [
        "Grid balancing services",
        "Price forecasting",
        "Market signal analysis",
        "Demand response",
        "Flexibility markets"
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
