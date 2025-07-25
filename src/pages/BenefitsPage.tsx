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
      <section className="bg-muted py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-text-primary leading-tight mb-6">
              <span className="text-primary font-extrabold">Market leading</span> data and solutions powering the path to net zero in energy, real estate and finance
            </h1>
          </div>
        </div>
      </section>


      {/* Why Choose Perse Section */}
      <Benefits />

      {/* Trusted by */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[hsl(var(--perse-light-blue-grey))]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[hsl(var(--perse-dark-grey))] mb-4 sm:mb-6 lg:mb-8">Trusted by</h2>
          </div>
        </div>
        <div className="w-full">
          <img 
            src="/lovable-uploads/f3ab880a-8f51-4da9-857c-efbc69413389.png" 
            alt="Some of our customers and partners" 
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Recognised and supported by */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[hsl(var(--perse-turquoise))]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 lg:mb-8">Recognised and supported by</h2>
          </div>
        </div>
        <div className="w-full">
          <img 
            src="/lovable-uploads/13eaddb8-0a1b-4c49-8bb2-ee9a9131196f.png" 
            alt="We support" 
            className="w-full h-auto object-cover"
          />
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default BenefitsPage;