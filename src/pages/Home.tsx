import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Stats, StatItem } from "@/components/Stats";
import databaseAnimation from "@/assets/database-table.gif";

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
                    <div className="bg-white rounded aspect-video flex items-center justify-center text-gray-400 text-sm">
                      API Interface Placeholder
                    </div>
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
                    <div className="bg-white rounded aspect-video flex items-center justify-center text-gray-400 text-sm">
                      Appstore Interface Placeholder
                    </div>
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
                    <div className="bg-white rounded aspect-video flex items-center justify-center text-gray-400 text-sm">
                      Optimise Interface Placeholder
                    </div>
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
                    <div className="bg-white rounded aspect-video flex items-center justify-center text-gray-400 text-sm">
                      Energy Procurement Placeholder
                    </div>
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
                    <div className="bg-white rounded aspect-video flex items-center justify-center text-gray-400 text-sm">
                      Demand Flexibility Placeholder
                    </div>
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
                    <div className="bg-white rounded aspect-video flex items-center justify-center text-gray-400 text-sm">
                      ConsentWallet Placeholder
                    </div>
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

      <Footer />
    </div>
  );
};

export default Home;