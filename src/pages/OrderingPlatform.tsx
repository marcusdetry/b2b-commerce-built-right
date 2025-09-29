import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle2, Search, FileText, Bell, Archive, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const OrderingPlatform = () => {
  const features = [
    {
      icon: Search,
      title: "Easily Find Products",
      description: "No more flipping through outdated printed catalogs to find the right items. Now operations professionals can easily find pre-approved and up-to-date products multiple ways on SupplyFlow. Instantly search by product categories and keywords, review your saved 'favorite' products, review or duplicate past orders with a click, or use our product configurators to build and match product requirements on complex items. Improve order accuracy in less time and get back to doing what you do."
    },
    {
      icon: ShoppingCart,
      title: "Place and Track Orders",
      description: "With pre-approved catalog items and platform-integrated approvals for new products you can easily place orders in just minutes. Simply add items to your cart, adjust quantities, include PO details if needed, and add special delivery notes at check-out. Also instantly track delivery timing on all orders to avoid any surprises and improve onsite planning."
    },
    {
      icon: FileText,
      title: "Request New Products & Quotes",
      description: "Need a quote on new or difficult-to-find products not in your catalog? Provide as much information as you have, and our Client Success team will source it and provide you with delivery options and a quote. All quotes are saved and can be shared with other users for reference. For regularly ordered items we'll work with your team to add them into your company catalog for even easier future orders."
    },
    {
      icon: Bell,
      title: "Catalog Update Notifications",
      description: "Now you can immediately see if new products have been added or if there has been any updated pricing in your approved product catalog since your last login. The menu notification will show you the number of Pricing changes and New Products. You can quickly and easily view today's updates and the historical daily changes for both."
    },
    {
      icon: Archive,
      title: "Document Repository",
      description: "Stop digging through your email history or looking for printed pages to locate the documents you need. Now numerous digital records can easily be found in your Document Repository. All past orders, invoices, delivery tickets, POs, and product documentation (e.g. material test reports, certificates of compliance, SDS, and inspections) are organized, sortable, and at your fingertips 24/7."
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
              Easily find and order products from approved digital catalogs, request quotes, and track orders.
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-elegant border border-border p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6">Easily Search, Request, and Order Products</h2>
            <p className="text-lg text-muted-foreground mb-8">
              SupplyFlow's intuitive, feature-rich online ordering platform helps heavy industrial sectors address the challenges of ordering, tracking, and documenting industrial tool and supply orders. With multiple search features, pre-approved product catalogs, easy quote requests, order tracking, and more, we bring the online buying experience to industrial markets. That's faster, smarter, delivered.
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
            Ready to Transform Your B2B Ordering?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Experience the power of SupplyFlow's ordering platform designed specifically for B2B complexity.
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
