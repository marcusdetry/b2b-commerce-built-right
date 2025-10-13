import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle2, Search, FileText, Bell, Archive, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const OrderingPlatform = () => {
  const features = [
    {
      icon: Search,
      title: "Help Customers Easily Find Products",
      description: "Your customers no longer need to flip through outdated printed catalogs. They can easily find pre-approved and up-to-date products multiple ways. Search by product categories and keywords, review saved 'favorite' products, duplicate past orders with a click, or use product configurators to match complex item requirements. Improve their order accuracy while reducing your support burden."
    },
    {
      icon: ShoppingCart,
      title: "Enable Fast Order Placement & Tracking",
      description: "With pre-approved catalog items and integrated approval workflows, your customers can place orders in minutes. They add items to cart, adjust quantities, include PO details, and add special delivery notes at check-out. Real-time order tracking keeps them informed and reduces 'where's my order' inquiries to your team."
    },
    {
      icon: FileText,
      title: "Streamline Quote Requests",
      description: "When customers need quotes on new or difficult-to-find products, they can easily submit requests through the platform. Your team receives structured information to quickly source items and provide delivery options and pricing. All quotes are saved and shareable, and frequently ordered items can be added to your catalog for future efficiency."
    },
    {
      icon: Bell,
      title: "Keep Customers Informed with Notifications",
      description: "Your customers immediately see when new products are added or pricing is updated in their approved catalog. Menu notifications show the number of pricing changes and new products, with easy access to view daily updates and historical changes. Keep your customers engaged with your latest offerings."
    },
    {
      icon: Archive,
      title: "Centralized Document Repository",
      description: "Give your customers 24/7 access to all their important documents in one organized location. Past orders, invoices, delivery tickets, POs, and product documentation (material test reports, certificates of compliance, SDS, inspections) are sortable and always accessible. Reduce document requests and improve customer self-service."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Online Ordering Platform
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empower your customers to easily search, request, and order products from your digital catalogs.
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-elegant border border-border p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6">Give Your Customers a Superior Ordering Experience</h2>
            <p className="text-lg text-muted-foreground mb-8">
              SupplyFlow's intuitive, feature-rich online ordering platform empowers your customers in heavy industrial sectors to efficiently search, request, and order products. With multiple search capabilities, digital product catalogs, streamlined quote requests, real-time order tracking, and comprehensive documentation, you can deliver a modern B2B buying experience that drives customer satisfaction and increases order volume. That's faster, smarter, delivered.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-all duration-300 hover:border-primary/50"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3 flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Customer Experience?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Give your customers the modern B2B ordering platform they expect. Reduce errors, increase satisfaction, and grow your business.
          </p>
          <Button size="lg" variant="outline" className="bg-white hover:bg-white/90 text-primary border-white">
            Get Started Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OrderingPlatform;
