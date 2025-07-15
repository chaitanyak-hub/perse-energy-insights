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
                <div className="grid grid-cols-1 gap-6">
                  <StatItem number="10000000" label="Tonnes of carbon processed" isAnimated={true} isDark={true} />
                  <StatItem number="£65000000" label="Savings identified" isAnimated={true} isDark={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-text-primary mb-8">Data</h2>
            <div className="space-y-6 text-lg text-text-primary/80 leading-relaxed">
              <p>
                A one-stop shop for all data needs for utility optimisation, carbon reporting and carbon reduction.
              </p>
              <p>
                We convert disparate datasets from energy, insurance, government and Google, to ensure data makes sense for your use case "out of the box".
              </p>
              <p>
                Our proprietary algorithms offer market leading address to utility meter matching, meaning data may be accessed with address as the only required data input.
              </p>
            </div>
            
            <div className="mt-12">
              <p className="text-xl text-text-primary mb-8">
                Access data via API or our Appstore, being a user interface to search and download data.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-muted p-8 rounded-xl">
                  <h3 className="text-2xl font-semibold text-text-primary mb-4">APIs</h3>
                  <p className="text-text-primary/70">
                    Direct integration with our comprehensive data platform through robust APIs.
                  </p>
                </div>
                
                <div className="bg-muted p-8 rounded-xl">
                  <h3 className="text-2xl font-semibold text-text-primary mb-4">Appstore</h3>
                  <p className="text-text-primary/70">
                    User-friendly interface to search, explore, and download the data you need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-8">Solutions</h2>
            <div className="space-y-6 text-lg text-text-primary/80 leading-relaxed">
              <p>
                Our solutions make it easy to understand energy and carbon baselines, benchmark comparisons, as well as personalised recommendations to optimise energy cost and carbon.
              </p>
              <p>
                We are integrated with utility providers, demand response providers, as well as powering solutions for installers of low carbon technologies, including solar PV and heat pumps.
              </p>
              <p>
                Future proofed legal compliance can be built-in with our ConsentWallet permission management tool, based on the principles of Open Banking and Ofgem's Consumer Consent Solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;