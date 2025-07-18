import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show a toast message
    toast({
      title: "Form Submitted",
      description: "Thank you for your message. We'll get back to you soon!",
    });
    
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Contact Section */}
      <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: '#A8D5DB' }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[hsl(var(--perse-dark-grey))] mb-6">
                Contact Us
              </h1>
              <p className="text-lg text-[hsl(var(--perse-dark-grey))] mb-2">
                Please, complete this form below or email us at{" "}
                <a href="mailto:info@perse.io" className="underline hover:text-blue-600">
                  info@perse.io
                </a>
              </p>
              <p className="text-lg text-[hsl(var(--perse-dark-grey))]">
                We are in GMT/ BST zone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-lg font-medium text-[hsl(var(--perse-dark-grey))] uppercase tracking-wider">
                  FULL NAME
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="James Ziyech"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 text-lg border-2 border-gray-200 rounded-md focus:border-[hsl(var(--perse-pale-orange))] focus:ring-0"
                />
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-lg font-medium text-[hsl(var(--perse-dark-grey))] uppercase tracking-wider">
                  EMAIL ADDRESS
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="perse@contact.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 text-lg border-2 border-gray-200 rounded-md focus:border-[hsl(var(--perse-pale-orange))] focus:ring-0"
                />
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-lg font-medium text-[hsl(var(--perse-dark-grey))] uppercase tracking-wider">
                  SUBJECT
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="i.e. business enquiry"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 text-lg border-2 border-gray-200 rounded-md focus:border-[hsl(var(--perse-pale-orange))] focus:ring-0"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-lg font-medium text-[hsl(var(--perse-dark-grey))] uppercase tracking-wider">
                  MESSAGE
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Please add as much detail as you can"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full p-4 text-lg border-2 border-gray-200 rounded-md focus:border-[hsl(var(--perse-pale-orange))] focus:ring-0 resize-vertical"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-start">
                <Button
                  type="submit"
                  className="bg-[hsl(var(--perse-pale-orange))] hover:bg-[hsl(var(--perse-pale-orange))]/90 text-white px-8 py-3 text-lg font-medium rounded-md transition-colors"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;