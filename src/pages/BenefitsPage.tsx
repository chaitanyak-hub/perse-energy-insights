import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Benefits } from "@/components/Benefits";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, TrendingUp, Shield, Clock } from "lucide-react";

// Import logos
import ib1Logo from "@/assets/logos/ib1-logo.png";
import edfLogo from "@/assets/logos/edf-logo.png";
import gresbLogo from "@/assets/logos/gresb-logo.png";
import compareTheMarketLogo from "@/assets/logos/compare-the-market-logo.png";
import harworthLogo from "@/assets/logos/harworth-logo.png";
import nesoLogo from "@/assets/logos/neso-logo.png";
import googleLogo from "@/assets/logos/google-logo.png";
import unGlobalCompactLogo from "@/assets/logos/un-global-compact-logo.png";
import reaLogo from "@/assets/logos/rea-logo.jpg";
import be100Logo from "@/assets/logos/be100-logo.png";

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
      <section className="py-20 bg-background">
        <div className="w-full px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-8">Trusted by</h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            <img 
              src={ib1Logo} 
              alt="IB1 Icebreaker One" 
              className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
            <img 
              src={edfLogo} 
              alt="EDF Energy" 
              className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
            <img 
              src={gresbLogo} 
              alt="GRESB" 
              className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
            <img 
              src={compareTheMarketLogo} 
              alt="Compare the Market" 
              className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
            <img 
              src={harworthLogo} 
              alt="Harworth Group" 
              className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
            <img 
              src={nesoLogo} 
              alt="NESO" 
              className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* Recognised and supported by */}
      <section className="py-20 bg-background">
        <div className="w-full px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-8">Recognised and supported by</h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            <img 
              src={googleLogo} 
              alt="Google" 
              className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
            <div className="text-center">
              <div className="text-sm font-medium text-text-primary mb-1">Start Up</div>
              <div className="text-xs text-text-secondary">Energy Transition</div>
              <div className="text-xs text-text-secondary">SET100 Start-up 2025</div>
            </div>
            <img 
              src={unGlobalCompactLogo} 
              alt="UN Global Compact" 
              className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
            <div className="h-16 w-16 bg-emerald-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">Zero-tech</span>
            </div>
            <img 
              src={reaLogo} 
              alt="REA" 
              className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
            <img 
              src={be100Logo} 
              alt="BE100" 
              className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default BenefitsPage;