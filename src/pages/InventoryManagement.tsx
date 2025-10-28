import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Package, Users, Bell, ShieldCheck } from "lucide-react";

const InventoryManagement = () => {
  const features = [
    {
      icon: Package,
      title: "Real-Time Inventory Transparency",
      description: "Track inventory as it enters and leaves your storage areas with digital scanning. All products are automatically counted in real-time, giving you accurate visibility into what's on-hand across every location."
    },
    {
      icon: Users,
      title: "Eliminate Manual Counts",
      description: "Digital inventory tracking removes the need for expensive onsite personnel and time-consuming manual counts. Your team can focus on productive tasks while accuracy improves and costs are reduced."
    },
    {
      icon: ShieldCheck,
      title: "Enhanced Controls & Governance",
      description: "Know exactly when inventory moves and who's responsible for specific items. Digital tracking minimizes loss, improves accountability, and provides accurate time-of-use data for better inventory planning."
    },
    {
      icon: Bell,
      title: "Automated Notifications",
      description: "Set minimum inventory counts and re-order points to receive instant notifications. Get alerts when inventory levels reach thresholds or when items move without proper authorization."
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
                Digital Inventory Management
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Add efficiencies, real-time inventory accuracy, and personal accountability 
                to your tool and supply rooms with automated digital tracking.
              </p>
              <Button variant="hero" size="lg">
                Request a Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Digitally Manage Your Onsite Inventory
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
                Managing industrial inventory across facilities and project sites can be difficult, 
                expensive, and inaccurate. Our inventory management solution provides the business 
                insights you need to operate efficiently with automated, real-time tracking.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
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
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Key Benefits
            </h2>
            <div className="space-y-6">
              <div className="bg-background rounded-lg p-6 border border-border">
                <h3 className="text-xl font-semibold mb-3">Reduce Personnel Costs</h3>
                <p className="text-muted-foreground">
                  Eliminate the need for dedicated onsite inventory personnel with automated 
                  digital tracking and real-time counts.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 border border-border">
                <h3 className="text-xl font-semibold mb-3">Improve Accuracy</h3>
                <p className="text-muted-foreground">
                  Digital scanning and automated tracking ensures inventory counts are always 
                  accurate and up-to-date across all locations.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 border border-border">
                <h3 className="text-xl font-semibold mb-3">Increase Accountability</h3>
                <p className="text-muted-foreground">
                  Track which employees handle specific inventory items with digital time-stamps 
                  and product assignments for full accountability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Modernize Your Inventory Management?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Discover how digital inventory tracking can reduce costs, improve accuracy, 
              and give you complete visibility across all locations.
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

export default InventoryManagement;
