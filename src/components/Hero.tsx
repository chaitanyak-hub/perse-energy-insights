
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, TrendingDown, Shield } from "lucide-react";
import perseDashboard from "@/assets/perse-dashboard.png";

export const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Market leading data and solutions
                <span className="bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent"> powering the path to net zero</span>
                <span className="text-gray-700 block text-3xl lg:text-4xl mt-2">
                  in energy, real estate and finance
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                gas, electricity, location and market based carbon, pricing, building fabric, EPC, weather, satellite, grid
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white text-lg px-8 py-3">
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-2 border-gray-300 hover:border-gray-400">
                Book Demo
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Real-time Data</div>
                  <div className="text-sm text-gray-600">Live energy insights</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <TrendingDown className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Cost Reduction</div>
                  <div className="text-sm text-gray-600">Optimise spending</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Shield className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Compliance</div>
                  <div className="text-sm text-gray-600">Meet regulations</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative">
              <img 
                src="/lovable-uploads/aafcbf81-9312-43d5-89b3-e398030022d1.png" 
                alt="Perse Data Statistics" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
