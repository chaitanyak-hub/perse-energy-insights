import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Stats, StatItem } from "@/components/Stats";
import databaseAnimation from "@/assets/database-table.gif";
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

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto bg-muted rounded-2xl p-6 sm:p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-center">
              {/* Left side - Text */}
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
                  Market leading data and solutions powering the path to net zero in energy, real estate and finance
                </h1>
              </div>
              
              {/* Right side - Stats */}
              <div className="bg-[hsl(var(--perse-dark-grey))] rounded-xl p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <StatItem number="10000000" label="Tonnes of carbon processed" isAnimated={true} isDark={true} />
                  <StatItem number="£65000000" label="Savings identified" isAnimated={true} isDark={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Solutions Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left side - Text */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--perse-dark-grey))] leading-tight mb-4 sm:mb-6">
                  Market leading <span className="text-[hsl(var(--perse-pale-orange))]">data</span> and solutions powering the path to net zero in energy, real estate and finance
                </h2>
                <p className="text-base sm:text-lg text-[hsl(var(--perse-pale-orange))] font-medium">
                  gas, electricity, location and market based carbon, pricing, building fabric, EPC, weather, satellite, grid
                </p>
              </div>
              
              {/* Right side - Database Animation */}
              <div className="flex justify-center">
                <img 
                  src={databaseAnimation} 
                  alt="Database processing animation" 
                  className="w-full max-w-md lg:max-w-lg h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--perse-dark-grey))] leading-tight mb-4 sm:mb-6 text-center">
              Market leading data and <span className="text-[hsl(var(--perse-pale-orange))]">solutions</span> powering the path to net zero in energy, real estate and finance
            </h2>
            
            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mt-12">
              {/* APIs */}
              <div className="text-center">
                <div className="mb-6">
                  <div className="bg-black rounded-lg p-4 mx-auto max-w-sm">
                    <img 
                      src="/lovable-uploads/ea784e2e-142b-4070-b992-c461f6227059.png" 
                      alt="API Interface" 
                      className="w-full rounded aspect-video object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[hsl(var(--perse-dark-grey))] mb-3">APIs</h3>
                <p className="text-base text-gray-600">
                  Raw data or analysis to plugin to your system or third party software provider
                </p>
              </div>

              {/* Appstore */}
              <div className="text-center">
                <div className="mb-6">
                  <div className="bg-black rounded-lg p-4 mx-auto max-w-sm">
                    <img 
                      src="/lovable-uploads/9d1cc8ee-78e9-4cc8-a9c4-1679b352907e.png" 
                      alt="Appstore Interface" 
                      className="w-full rounded aspect-video object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[hsl(var(--perse-dark-grey))] mb-3">Appstore</h3>
                <p className="text-base text-gray-600">
                  A user interface to access data otherwise only available via API
                </p>
              </div>

              {/* Optimise */}
              <div className="text-center">
                <div className="mb-6">
                  <div className="bg-black rounded-lg p-4 mx-auto max-w-sm">
                    <img 
                      src="/lovable-uploads/0db69f2d-f164-434e-be09-2c833351b28b.png" 
                      alt="Optimise Interface" 
                      className="w-full rounded aspect-video object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[hsl(var(--perse-dark-grey))] mb-3">Optimise</h3>
                <p className="text-base text-gray-600">
                  Instantly personalised low carbon recommendations, including solar PV and heat pumps, without the need for a site visit
                </p>
              </div>

              {/* Energy procurement */}
              <div className="text-center">
                <div className="mb-6">
                  <div className="bg-black rounded-lg p-4 mx-auto max-w-sm">
                    <img 
                      src="/lovable-uploads/4ce5669a-1bb6-472e-bc43-b23ab2249e88.png" 
                      alt="Energy Procurement Interface" 
                      className="w-full rounded aspect-video object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[hsl(var(--perse-dark-grey))] mb-3">Energy procurement</h3>
                <p className="text-base text-gray-600">
                  Tariff comparison and switching for homes and businesses of all sizes
                </p>
              </div>

              {/* Demand flexibility */}
              <div className="text-center">
                <div className="mb-6">
                  <div className="bg-black rounded-lg p-4 mx-auto max-w-sm">
                    <img 
                      src="/lovable-uploads/ff93fc1d-d304-4345-b5af-b4d46a8e408d.png" 
                      alt="Demand Flexibility Interface" 
                      className="w-full rounded aspect-video object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[hsl(var(--perse-dark-grey))] mb-3">Demand flexibility</h3>
                <p className="text-base text-gray-600">
                  Homes and businesses can be paid to consume energy at different times of the day
                </p>
              </div>

              {/* ConsentWallet */}
              <div className="text-center">
                <div className="mb-6">
                  <div className="bg-black rounded-lg p-4 mx-auto max-w-sm">
                    <img 
                      src="/lovable-uploads/dcafb378-3409-417c-927d-616b2bf99351.png" 
                      alt="ConsentWallet Interface" 
                      className="w-full rounded aspect-video object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[hsl(var(--perse-dark-grey))] mb-3">ConsentWallet</h3>
                <p className="text-base text-gray-600">
                  Enables occupants, bill payers or landlords to choose how they receive and share their data
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customers and Partners Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[hsl(var(--perse-pale-orange))]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-12">
              Market leading data and solutions powering the path to net zero in energy, real estate and finance
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center mb-8">
              <img src={ib1Logo} alt="IB1 Icebreaker One" className="h-12 object-contain filter brightness-0 invert" />
              <img src={edfLogo} alt="EDF" className="h-12 object-contain filter brightness-0 invert" />
              <img src={gresbLogo} alt="GRESB" className="h-12 object-contain filter brightness-0 invert" />
              <img src={compareTheMarketLogo} alt="Compare the Market" className="h-12 object-contain filter brightness-0 invert" />
              <img src={harworthLogo} alt="Harworth" className="h-12 object-contain filter brightness-0 invert" />
              <img src={nesoLogo} alt="NESO" className="h-12 object-contain filter brightness-0 invert" />
            </div>
            
            <p className="text-white text-lg">Some of our customers and partners</p>
          </div>
        </div>
      </section>

      {/* Recognition and Support Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[hsl(var(--perse-dark-grey))]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Market leading <span className="text-[hsl(var(--perse-pale-orange))]">data</span> and solutions powering the path to net zero in energy, real estate and finance
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center mb-8 mt-12">
              <img src={googleLogo} alt="Google" className="h-12 object-contain" />
              <div className="h-12 flex items-center">
                <div className="text-white text-center">
                  <div className="text-xs text-[hsl(var(--perse-pale-orange))]">Start Up</div>
                  <div className="text-xs">Energy Transition</div>
                  <div className="text-xs text-[hsl(var(--perse-pale-orange))]">SET100 Start-up 2025</div>
                </div>
              </div>
              <img src={unGlobalCompactLogo} alt="UN Global Compact" className="h-12 object-contain filter brightness-0 invert" />
              <div className="h-12 w-12 rounded-full border-2 border-green-400 flex items-center justify-center">
                <div className="text-green-400 text-xs">ECO</div>
              </div>
              <img src={reaLogo} alt="REA" className="h-12 object-contain" />
              <img src={be100Logo} alt="BE100" className="h-12 object-contain filter brightness-0 invert" />
            </div>
            
            <p className="text-white text-lg">Recognised by and supporting</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;