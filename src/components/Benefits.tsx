
import { CheckCircle, TrendingUp, Shield, Zap, Users, BarChart3 } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Enhanced Data Accuracy",
      description: "Automated meter readings and industry-standard estimation methods ensure precise consumption data, eliminating human error."
    },
    {
      icon: BarChart3,
      title: "Comprehensive Data Access",
      description: "Access smart meter data, historical reports, and detailed insights all in one centralized platform."
    },
    {
      icon: Users,
      title: "Simplified Portfolio Management",
      description: "Manage multiple meters and consolidate energy data into a single portfolio for better tracking and analysis."
    },
    {
      icon: TrendingUp,
      title: "Improved Decision-Making",
      description: "Granular consumption data helps identify inefficiencies and optimize energy use for better business outcomes."
    },
    {
      icon: Shield,
      title: "Sustainability & Compliance",
      description: "Track carbon emissions and identify energy efficiency improvements to meet regulatory requirements."
    },
    {
      icon: Zap,
      title: "Cost Efficiency",
      description: "Reduce operational costs through automation and optimize energy usage for long-term savings."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Perse?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform delivers measurable benefits that drive real business value and environmental impact.
          </p>
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

        <div className="mt-16 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Energy Management?</h3>
          <p className="text-xl mb-6 opacity-90">
            Join over 1 million customers who have optimized their energy consumption with Perse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
