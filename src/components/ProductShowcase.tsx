
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Lightbulb, RefreshCw, Zap } from "lucide-react";

export const ProductShowcase = () => {
  const products = [
    {
      title: "App Store",
      description: "Comprehensive energy consumption, meter data, and carbon emissions data for informed decision-making.",
      icon: Database,
      features: [
        "Address matching & lookup",
        "Real-time meter data",
        "Building fabric & EPC insights",
        "Portfolio management",
        "Custom reporting dashboard"
      ],
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "LCR (Low Carbon Recommendation)",
      description: "AI-powered insights and recommendations to reduce energy, carbon footprint, and operational costs.",
      icon: Lightbulb,
      features: [
        "Data-driven insights",
        "Solar potential analysis",
        "ROI calculations",
        "EPC target alignment",
        "Automated monitoring"
      ],
      gradient: "from-emerald-500 to-emerald-600"
    },
    {
      title: "Switching",
      description: "Personalised energy price comparison and seamless switching for both domestic and business customers.",
      icon: RefreshCw,
      features: [
        "Whole market comparison",
        "Real-time price updates",
        "Switch status tracking",
        "Time-of-use tariffs",
        "End-to-end service"
      ],
      gradient: "from-purple-500 to-purple-600"
    },
    {
      title: "Flexibility",
      description: "Earn financial rewards by voluntarily reducing electricity usage during peak demand periods.",
      icon: Zap,
      features: [
        "Peak demand management",
        "Financial incentives",
        "Single portal access",
        "Earnings tracking",
        "Easy opt-in/out"
      ],
      gradient: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Energy Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our integrated platform provides everything you need to optimise energy consumption, 
            reduce costs, and achieve your sustainability goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
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
