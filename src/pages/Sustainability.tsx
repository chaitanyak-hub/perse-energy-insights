import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Sustainability = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-6">Sustainability Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: 27 June 2025</p>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We, Perse Technology Ltd ("Perse"), build technology and provide services that enable homes and businesses to understand their carbon footprint, with suggestions on how to save carbon.
                </p>
                <p>
                  Our services also strive to help identify investment opportunities into products and assets that are aligned with enabling the transition to net zero. We also make data available to improve accuracy of carbon reporting and proof of outcomes. We unify our practices, partnerships, and products around a single mission — to foster sustainability at scale.
                </p>
                <p>
                  By organising information about energy, and making it actionable through technology, we help people make a more positive impact together. At work, at home and on the road. Within Perse, we also strive to minimise the impact of our own activities on the environment.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Environmental Commitments</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>This includes our commitment to:</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Minimise waste</strong> by evaluating operations and ensuring they are as efficient as possible</li>
                  <li><strong>Minimise emissions</strong> through the selection and the source of our energy requirements</li>
                  <li><strong>Actively promote recycling</strong></li>
                  <li><strong>Promote the use of public transport</strong>, wherever feasible</li>
                  <li><strong>Meet or exceed</strong> all the environmental legislation that relates to us</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Partner Expectations</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We expect our partners and customers to do the same. Sustainability is a shared responsibility, and we work with organisations that share our commitment to environmental stewardship.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Going Above and Beyond</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  But we are also committed to go above and beyond. Perse has an ambition to deliver:
                </p>
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg border border-primary/20">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">10M+</div>
                      <p className="text-sm font-medium">Tonnes of CO₂ savings</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">£100M+</div>
                      <p className="text-sm font-medium">Cost savings</p>
                    </div>
                  </div>
                  <p className="text-center mt-4 font-medium">by 2030</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Technology for Sustainability</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our technology platform enables:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-3">Carbon Understanding</h3>
                    <p className="text-sm">Helping organisations understand their current carbon footprint through comprehensive data analysis and reporting.</p>
                  </div>
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-3">Energy Optimisation</h3>
                    <p className="text-sm">Providing actionable insights to reduce energy consumption and improve efficiency across all operations.</p>
                  </div>
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-3">Investment Guidance</h3>
                    <p className="text-sm">Identifying opportunities for sustainable investments that align with net-zero transition goals.</p>
                  </div>
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-3">Impact Verification</h3>
                    <p className="text-sm">Providing accurate measurement and verification of sustainability outcomes and carbon savings.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Join Our Mission</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We hope you will join us in our mission to foster sustainability at scale. Together, we can make a meaningful impact on the transition to net zero and create a more sustainable future for all.
                </p>
                <div className="bg-primary/5 border border-primary/20 p-6 rounded-lg">
                  <p className="text-center font-medium text-foreground">
                    "By organising information about energy, and making it actionable through technology, we help people make a more positive impact together."
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  If you have any questions about our Sustainability Policy or would like to learn more about our environmental initiatives, please contact us:
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <p><strong>Perse Technology Ltd</strong></p>
                  <p>Mappin House, 4 Winsley Street, London, W1W 8HF</p>
                  <p>Phone: 020 4538 3431</p>
                  <p>Email: info@perse.io</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Sustainability;