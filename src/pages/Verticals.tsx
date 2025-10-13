import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Wrench, Building2, Pickaxe, Ship } from "lucide-react";
import { Button } from "@/components/ui/button";

const Verticals = () => {
  const verticals = [
    {
      icon: Wrench,
      title: "Oil & Gas",
      description: "Streamline procurement and supply chain operations for upstream, midstream, and downstream operations.",
      benefits: [
        "Real-time inventory tracking for critical equipment",
        "Compliance management for hazardous materials",
        "Vendor management and certification tracking",
        "Integration with ERP systems for seamless operations"
      ]
    },
    {
      icon: Building2,
      title: "Construction",
      description: "Manage complex material ordering, supplier relationships, and project-based procurement with ease.",
      benefits: [
        "Project-specific catalogs and pricing",
        "Bulk ordering with delivery scheduling",
        "Multi-site inventory management",
        "Subcontractor access and approval workflows"
      ]
    },
    {
      icon: Pickaxe,
      title: "Mining",
      description: "Ensure continuous operations with reliable parts procurement and equipment management for mining operations.",
      benefits: [
        "Critical parts identification and fast ordering",
        "Equipment maintenance tracking",
        "Remote site delivery coordination",
        "Supplier performance analytics"
      ]
    },
    {
      icon: Ship,
      title: "Maritime",
      description: "Optimize vessel provisioning, spare parts management, and marine equipment procurement for maritime operations.",
      benefits: [
        "Marine-grade product specifications",
        "Port-to-port delivery tracking",
        "Regulatory compliance documentation",
        "Emergency parts expediting"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Industry Verticals
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
              Tailored B2B commerce solutions for specialized industries with unique procurement needs
            </p>
          </div>
        </div>
      </section>

      {/* Verticals Sections */}
      {verticals.map((vertical, index) => {
        const Icon = vertical.icon;
        const isEven = index % 2 === 0;
        
        return (
          <section 
            key={vertical.title}
            className={`py-24 ${isEven ? 'bg-background' : 'bg-muted/30'}`}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
                    {vertical.title}
                  </h2>
                </div>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {vertical.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {vertical.benefits.map((benefit, idx) => (
                    <div 
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors"
                    >
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-secondary via-secondary to-secondary/90 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Transform Your Industry Operations?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Schedule a demo to see how SupplyFlow can address your industry-specific challenges
            </p>
            <Button variant="hero" size="lg" className="text-lg px-8">
              Schedule Your Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Verticals;
