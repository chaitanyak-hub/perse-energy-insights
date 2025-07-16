
import { CheckCircle, TrendingUp, Shield, Zap, Users, BarChart3 } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Enhanced Data Accuracy",
      description: "Automated metre readings and industry-standard estimation methods ensure precise consumption data, eliminating human error."
    },
    {
      icon: BarChart3,
      title: "Comprehensive Data Access",
      description: "Access smart metre data, historical reports, and detailed insights all in one centralised platform."
    },
    {
      icon: Users,
      title: "Simplified Portfolio Management",
      description: "Manage multiple metres and consolidate energy data into a single portfolio for better tracking and analysis."
    },
    {
      icon: TrendingUp,
      title: "Improved Decision-Making",
      description: "Granular consumption data helps identify inefficiencies and optimise energy use for better business outcomes."
    },
    {
      icon: Shield,
      title: "Sustainability & Compliance",
      description: "Track carbon emissions and identify energy efficiency improvements to meet regulatory requirements."
    },
    {
      icon: Zap,
      title: "Cost Efficiency",
      description: "Reduce operational costs through automation and optimise energy usage for long-term savings."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Perse?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group hover:bg-gray-50 p-6 rounded-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
