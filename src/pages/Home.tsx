import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Stats, StatItem } from "@/components/Stats";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-muted rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left side - Text */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight">
                  Market leading data and solutions powering the path to net zero in energy, real estate and finance
                </h1>
              </div>
              
              {/* Right side - Stats */}
              <div className="bg-gray-900 rounded-xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <StatItem number="10000000" label="Tonnes of carbon processed" isAnimated={true} isDark={true} />
                  <StatItem number="£65000000" label="Savings identified" isAnimated={true} isDark={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Solutions Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left side - Text */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-6">
                  Market leading <span className="text-primary">data</span> and solutions powering the path to net zero in energy, real estate and finance
                </h2>
                <p className="text-lg text-primary font-medium">
                  gas, electricity, location and market based carbon, pricing, building fabric, EPC, weather, satellite, grid
                </p>
              </div>
              
              {/* Right side - Cube Icon */}
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/504393bb-9691-457f-ad92-2469dcae1acb.png" 
                  alt="Data solutions cube icon" 
                  className="w-64 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;