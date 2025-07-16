import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Benefits } from "@/components/Benefits";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, TrendingUp, Shield, Clock } from "lucide-react";

const BenefitsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-6">
              <span className="text-primary font-extrabold">Market leading</span> data and solutions powering the path to net zero in energy, real estate and finance
            </h1>
          </div>
        </div>
      </section>


      {/* Why Choose Perse Section */}
      <Benefits />

      {/* Trusted by */}
      <section className="py-20 bg-foreground">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-background mb-8">Trusted by</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            <img 
              src="/lovable-uploads/1d834f0d-88f0-47b7-ad2a-2d3c78757943.png" 
              alt="NESO - National Energy System Operator" 
              className="h-16 w-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
            <img 
              src="/lovable-uploads/1ce5391e-8c5c-46aa-a878-f59e0041b454.png" 
              alt="Harworth" 
              className="h-16 w-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
            <img 
              src="/lovable-uploads/0f2e95ea-3011-4f87-bc16-f4d1de20d6a5.png" 
              alt="Compare the Market" 
              className="h-16 w-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
            <img 
              src="/lovable-uploads/44ddc33b-8d97-44e3-a9f8-431769981bcd.png" 
              alt="GRESB" 
              className="h-16 w-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
            <img 
              src="/lovable-uploads/ca1af8cc-eb1a-482d-b286-726c51415bcd.png" 
              alt="EDF" 
              className="h-16 w-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
            <img 
              src="/lovable-uploads/5fd066ca-643f-4a08-b869-975b4150587f.png" 
              alt="IB1 Icebreaker One" 
              className="h-16 w-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </section>

      {/* Recognised and supported by */}
      <section className="py-20 bg-foreground">
        <div className="w-full px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-background mb-8">Recognised and supported by</h2>
          </div>
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/13eaddb8-0a1b-4c49-8bb2-ee9a9131196f.png" 
              alt="We support" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default BenefitsPage;