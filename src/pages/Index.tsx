
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Benefits } from "@/components/Benefits";
import { Stats } from "@/components/Stats";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Stats />
      <ProductShowcase />
      <Benefits />
      <Footer />
    </div>
  );
};

export default Index;
