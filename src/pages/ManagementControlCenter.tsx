import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield, BarChart3, FileCheck, Eye } from "lucide-react";
import managementImage from "@/assets/management-control-center.png";

const ManagementControlCenter = () => {
  const features = [
    {
      icon: Eye,
      title: "Cross-Site Visibility",
      description: "Get complete visibility into ordering across all customer sites from a single unified dashboard."
    },
    {
      icon: Shield,
      title: "Approvals & Permissions",
      description: "Implement approval workflows and permission controls to ensure compliance adherence."
    },
    {
      icon: BarChart3,
      title: "Order Tracking",
      description: "Real-time tracking and monitoring of all orders across your customer base."
    },
    {
      icon: FileCheck,
      title: "Compliance Management",
      description: "Maintain regulatory compliance with configurable approval processes and audit trails."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Management Control Center
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Empower your customers with centralized control and visibility. 
                The Management Control Center provides complete oversight of ordering 
                across all sites with built-in compliance and approval workflows.
              </p>
              <Button variant="hero" size="lg">
                Request a Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Screenshot Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <img 
                src={managementImage} 
                alt="Management Control Center Dashboard showing company sites, orders, alerts, and order tracking"
                className="w-full rounded-lg shadow-2xl border border-border"
              />
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/30">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Complete Control & Visibility
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-background rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
                >
                  <feature.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Give Your Customers Full Control?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how the Management Control Center can streamline 
              operations and ensure compliance for your customers.
            </p>
            <Button variant="hero" size="lg">
              Schedule a Consultation
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ManagementControlCenter;
