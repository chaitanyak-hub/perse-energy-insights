
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Lightbulb, RefreshCw, Zap, Building, Satellite } from "lucide-react";

export const ProductShowcase = () => {
  const products = [
    {
      title: "APIs",
      description: "Raw data or analysis to plugin to your system or third party software provider",
      icon: Database,
      features: [
        "Real-time data feeds",
        "Custom integrations", 
        "Scalable endpoints",
        "Developer documentation",
        "Rate limiting & authentication"
      ],
      gradient: "from-blue-500 to-blue-600",
      image: "/lovable-uploads/da00d67f-7551-49b4-ab73-e9d812d9f2ba.png",
      url: "https://api.perse.io"
    },
    {
      title: "Appstore",
      description: "A user interface to access data otherwise only available via API",
      icon: Building,
      features: [
        "User-friendly interface",
        "Data visualisation",
        "Dashboard access",
        "No-code solutions",
        "Pre-built applications"
      ],
      gradient: "from-emerald-500 to-emerald-600",
      image: "/lovable-uploads/4c174d27-94a8-4d03-8fcf-bb83f2a1dba9.png",
      url: "https://appstore.perse.io"
    },
    {
      title: "Optimise",
      description: "Instantly personalised low carbon recommendations, including solar PV and heat pumps, without the need for a site visit",
      icon: Lightbulb,
      features: [
        "Address as only data input",
        "Suitable for any building in Britain and any meter type",
        "Return on investment calculations",
        "Enables identification of viable focus areas across portfolios",
        "Desktop assessment"
      ],
      gradient: "from-cyan-500 to-cyan-600",
      image: "/lovable-uploads/3ba57e9e-95ed-4024-9da1-28e4874276a8.png",
      url: "https://optimise.perse.io"
    },
    {
      title: "Energy procurement",
      description: "Tariff comparison and switching for homes and businesses of all sizes",
      icon: Zap,
      features: [
        "Whole market comparison",
        "Automated switching to competitive panel",
        "Digital contract execution and submission",
        "Multi-site portfolios",
        "Multi-rate tariffs"
      ],
      gradient: "from-orange-500 to-orange-600",
      image: "/lovable-uploads/f4800111-84b4-499f-bcad-60ad33830ca0.png",
      url: "https://switching.perse.io"
    },
    {
      title: "DSR",
      description: "Smart energy management and demand response services for grid balancing",
      icon: RefreshCw,
      features: [
        "Identification of potential earnings",
        "No penalty options to participate",
        "Free revenue generation",
        "Automated bids and reconciliation",
        "Digital wallet for payments powered by NatWest"
      ],
      gradient: "from-purple-500 to-purple-600",
      image: "/lovable-uploads/19d92a18-535f-4f15-ac26-ceb05d7bd5af.png",
      url: "https://flexibility.perse.io"
    },
    {
      title: "ConsentWallet",
      description: "Choose how you receive and share your utility data securely",
      icon: Satellite,
      features: [
        "All energy meter types",
        "Open banking level security",
        "Consent management",
        "Different levels of privacy controls",
        "Caters for both pre-existing approved third parties and new"
      ],
      gradient: "from-teal-500 to-teal-600",
      image: "/lovable-uploads/5cfd7cd6-06c3-4c5f-aeac-9cc3159d9bf3.png",
      url: "https://consentwallet.perse.io"
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Solutions
          </h2>
          <p className="text-xl text-text-primary/70 max-w-3xl mx-auto">
            Click on each solution to explore our live applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="bg-background hover:shadow-xl transition-all duration-300 border-0 shadow-lg group cursor-pointer"
              onClick={() => product.url && window.open(product.url, '_blank')}
            >
              <CardHeader className="space-y-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${product.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <product.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-text-primary">{product.title}</CardTitle>
                
                {product.image && (
                  <div className="relative overflow-hidden rounded-lg border-2 border-border shadow-md hover:shadow-lg transition-shadow duration-300 bg-background">
                    <img 
                      src={product.image} 
                      alt={`${product.title} documentation`}
                      className="w-full h-48 object-contain object-center p-4"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
                  </div>
                )}
                
                <CardDescription className="text-lg text-text-primary/70">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${product.gradient} rounded-full`}></div>
                      <span className="text-text-primary/70">{feature}</span>
                    </li>
                  ))}
                </ul>
                {product.url && (
                  <div className="mt-4 text-sm text-text-secondary font-medium">
                    Click to visit live application →
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
