import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Package, Settings, BarChart3, Users, FileText, ShoppingCart } from "lucide-react";

const SupplierPortal = () => {
  const features = [
    {
      icon: Package,
      title: "Product Catalogue Management",
      description: "Easily build, organize, and maintain your complete product catalogue with custom categories and attributes."
    },
    {
      icon: Settings,
      title: "Bulk Product Updates",
      description: "Update pricing, inventory, and specifications across multiple products simultaneously with spreadsheet imports."
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Track product performance, view orders, and monitor inventory levels with comprehensive dashboards."
    },
    {
      icon: Users,
      title: "Customer Access Control",
      description: "Manage which products are visible to specific customers with custom catalogues and pricing rules."
    },
    {
      icon: FileText,
      title: "Product Documentation",
      description: "Attach specs sheets, certifications, safety data, and technical documentation to each product."
    },
    {
      icon: ShoppingCart,
      title: "Order Management",
      description: "Process orders, manage fulfillment, and communicate with customers all from one central portal."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Supplier Portal
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Empower your suppliers with a comprehensive portal to build, manage, and optimize their product catalogues. Streamline collaboration and keep your inventory up-to-date.
            </p>
            <Button size="lg" variant="hero" className="text-lg">
              Request a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything Suppliers Need to Succeed
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Give your suppliers the tools to manage their products effectively while maintaining control over your platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
              Why Suppliers Love Our Portal
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">For Suppliers</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Self-service product management saves time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Direct access to sales data and analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Faster order processing and fulfillment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Better customer communication tools</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">For Your Business</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Reduce manual data entry and errors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Always up-to-date product information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Scale your supplier network effortlessly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Maintain control with approval workflows</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Empower Your Suppliers?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              See how the Supplier Portal can transform your supplier relationships and streamline your operations.
            </p>
            <Button size="lg" variant="hero" className="text-lg">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SupplierPortal;
