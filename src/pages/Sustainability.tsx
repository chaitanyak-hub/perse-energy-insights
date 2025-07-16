import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Sustainability = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">This page was last updated</p>
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">June 27, 2025</p>
          </div>

          <h1 className="text-3xl font-bold mb-6">Sustainability Policy</h1>
          
          <div className="space-y-8">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We, Perse Technology Ltd ("Perse"), build technology and provide services that enable homes and businesses to understand their carbon footprint, with suggestions on how to save carbon.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Our services also strive to help identify investment opportunities into products and assets that are aligned with enabling the transition to net zero. We also make data available to improve accuracy of carbon reporting and proof of outcomes. We unify our practices, partnerships, and products around a single mission — to foster sustainability at scale.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              By organising information about energy, and making it actionable through technology, we help people make a more positive impact together. At work, at home and on the road. Within Perse, we also strive to minimise the impact of our own activities on the environment.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">This includes to:</p>
            
            <ul className="list-none space-y-2 text-gray-600 dark:text-gray-300">
              <li>Minimise waste by evaluating operations and ensuring they are as efficient as possible;</li>
              <li>Minimise emissions through the selection and the source of our energy requirements;</li>
              <li>Actively promote recycling; Promote the use of public transport, wherever feasible;</li>
              <li>and Meet or exceed all the environmental legislation that relates to us.</li>
            </ul>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We expect our partners and customers to do the same.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              But we are also committed to go above and beyond. Perse has an ambition to deliver the savings of &gt;10m tonnes of CO2 and &gt;£100m of savings by 2030. We hope you will join us.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Sustainability;