import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: 27 June 2025</p>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">About Us and This Notice</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  This Privacy Notice applies to personal data collected through our website at www.perse.io, through our website at www.thelabrador.co.uk, and which we obtain in the course of providing services to our customers.
                </p>
                <p>
                  This Privacy Notice is provided by Perse Technology Limited. We are a 'controller' for the purposes of the UK Data Protection Act 2018 and UK General Data Protection Regulation (EU) 2016/679.
                </p>
                <p>
                  We take your privacy very seriously. We ask that you read this Privacy Notice carefully, as it contains important information about our processing and your rights.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">How to Contact Us</h2>
              <div className="bg-muted p-6 rounded-lg">
                <p className="text-muted-foreground mb-4">If you have any questions about this Privacy Notice, how we handle your personal data, or want to exercise any of your rights, please contact:</p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Data Protection Contact:</strong> Jane Lucy</p>
                  <p><strong>Address:</strong> Mappin House, 4 Winsley Street, London, W1W 8HF</p>
                  <p><strong>Telephone:</strong> 020 4538 3431</p>
                  <p><strong>Email:</strong> controller@perse.io</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">What Personal Data Do We Collect?</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>We have set out below the personal data that we collect and how we collect it:</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Direct interactions:</strong> if you give us your name, email address, contact information and other details when you contact us with an enquiry or give us feedback on our services (Identity Data).</li>
                  <li><strong>Banking information:</strong> if you provide us with your direct debit details or bank card details (Financial Data).</li>
                  <li><strong>Cookies:</strong> we use cookies on our website which collect data such as your IP address, device type, your login information, browser type and version, time zone setting, screen resolution, operating system and platform (Technical Data).</li>
                  <li><strong>From industry sources:</strong> when you provide us with your address, we pull information from relevant industry databases to understand your energy demand and carbon footprint. This includes your current gas and electricity suppliers, historical usage, switch history, meter details, and EPC data (Industry Data).</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Smart Meter Data</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  With your consent, we use n3rgy data service to interface with the national smart meter systems in order to collect, store, manage and share with us your Smart Meter data. When you provide consent for us to process and control your smart meter data, you are also providing consent for n3rgy to process it.
                </p>
                <p>
                  You can withdraw consent at any time by contacting us at info@perse.io.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">How Do We Use Your Personal Data?</h2>
              <div className="space-y-6 text-muted-foreground">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-muted">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-muted p-3 text-left">Purpose</th>
                        <th className="border border-muted p-3 text-left">Personal Data Used</th>
                        <th className="border border-muted p-3 text-left">Legal Basis</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-muted p-3">Monitoring and analyzing usage of our website and services</td>
                        <td className="border border-muted p-3">Technical data</td>
                        <td className="border border-muted p-3">Consent</td>
                      </tr>
                      <tr>
                        <td className="border border-muted p-3">To provide our services and keep you informed</td>
                        <td className="border border-muted p-3">Identity Data, Industry data</td>
                        <td className="border border-muted p-3">Contract / Legitimate interest</td>
                      </tr>
                      <tr>
                        <td className="border border-muted p-3">Payment processing and credit checks</td>
                        <td className="border border-muted p-3">Financial data</td>
                        <td className="border border-muted p-3">Contract / Legitimate interest</td>
                      </tr>
                      <tr>
                        <td className="border border-muted p-3">Carbon footprint monitoring and reporting</td>
                        <td className="border border-muted p-3">Industry data</td>
                        <td className="border border-muted p-3">Legitimate interest</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security and Retention</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We strive to implement appropriate technical and organisational measures in order to protect your personal data against accidental or unlawful destruction, accidental loss or alteration, unauthorised disclosure or access and any other unlawful forms of processing.
                </p>
                <p>
                  We follow recognised industry practices for protecting our IT environment and physical facilities.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-muted mt-4">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-muted p-3 text-left">Data Type</th>
                        <th className="border border-muted p-3 text-left">Retention Period</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-muted p-3">Technical data from cookies</td>
                        <td className="border border-muted p-3">12 months from consent</td>
                      </tr>
                      <tr>
                        <td className="border border-muted p-3">Identity and Financial data</td>
                        <td className="border border-muted p-3">Until you opt out of our service</td>
                      </tr>
                      <tr>
                        <td className="border border-muted p-3">Industry data for services</td>
                        <td className="border border-muted p-3">8 years from collection</td>
                      </tr>
                      <tr>
                        <td className="border border-muted p-3">Industry data for carbon reporting</td>
                        <td className="border border-muted p-3">Held indefinitely for research</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>As a data subject, you have the following rights under the Data Protection Laws:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>the right to object to processing of your personal data;</li>
                  <li>the right of access to personal data relating to you;</li>
                  <li>the right to correct any mistakes in your information;</li>
                  <li>the right to restrict your personal data being processed;</li>
                  <li>the right to have your personal data ported to another controller;</li>
                  <li>the right to withdraw your consent;</li>
                  <li>the right to erasure; and</li>
                  <li>rights in relation to automated decision-making</li>
                </ul>
                <p>
                  If you would like to exercise your rights, please contact us using the details provided above. We will respond to any rights that you exercise within a month of receiving your request.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Complaints</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  If you do not think that we have processed your data in accordance with this Privacy Notice, you should let us know as soon as possible. You also have the right to complain to the Information Commissioner's Office. Information about how to do this is available on their website at www.ico.org.uk.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;