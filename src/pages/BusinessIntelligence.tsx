import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BarChart3, Shield, TrendingUp, FileSearch, Target, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

const BusinessIntelligence = () => {
  const features = [
    {
      icon: Shield,
      title: "Improve Governance and Cost Controls",
      description: "Previously unknown spend is now captured, assigned to the individual, and categorized into your custom spend categories. Instantly see products purchased outside your company catalog or AML, set spend parameters for each user, and customize metrics that trigger notifications. With instant visibility to all levels of spending across the organization, you can now verify adherence to corporate governance, maintain better financial controls, and easily track budgets."
    },
    {
      icon: BarChart3,
      title: "Review and Analyze Spend Data",
      description: "Real-time spend data is instantly accessible in custom dashboards and reports that can be analyzed in any way necessary to meet your needs. Set individual or role-based data access, view enterprise-wide spend, and drill down by geography, project, location, job role, or user. You can also see costs by product category, manufacturer, or individual product over any time period."
    },
    {
      icon: FileSearch,
      title: "Track Order Status and Retrieve Order History",
      description: "Instantly see the status of any open order and track delivery progress. Quickly confirm order cancellations and review all orders that are being processed, shipped, partially shipped, and delivered. Also, easily search and filter orders by date, location, PO, tracking number, and many other variables to find all related documents associated with any order past or present."
    },
    {
      icon: TrendingUp,
      title: "More Accurate Planning and Projections",
      description: "There are always unknowns in any project, but now you can reduce or eliminate the unknowns using SupplyFlow's data analytics. Use historical data for similar projects, locations, or applications to better estimate future costs, minimize surprises, track leftover inventory, eliminate waste, and improve profitability."
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Eliminate Blind Spots",
      description: "Gain full transparency into what is being purchased when, where, and by whom across your entire organization."
    },
    {
      icon: Database,
      title: "AI-Powered Insights",
      description: "Leverage AI and machine learning to uncover inefficiencies and identify spending outliers automatically."
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
              Data-Driven Business Intelligence
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-time data visibility eliminates blind spots and improves cost controls, governance, and reporting.
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-elegant border border-border p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6">Data and Analytics for Better Decisions</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Now you can see the full picture of your industrial purchases with SupplyFlow's AI and machine learning-enabled data and analytics solutions. Eliminate spending blind spots and black holes across your entire organization and gain full transparency into what is being purchased when, where, and by whom.
            </p>
            <p className="text-lg text-muted-foreground">
              With full data visibility through custom dashboards and reporting you can drill into the data you need with just a click. Quickly and easily uncover inefficiencies, confirm necessary expenditures are being made, identify spend outliers, improve accountability, and have greater control of your costs. That's faster, smarter, delivered.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 border border-primary/20"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/20 p-3 flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Main Features */}
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

      {/* Data Capabilities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Data Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-lg font-semibold mb-3">Custom Dashboards</h3>
              <p className="text-muted-foreground">Personalized views with the metrics that matter most to your role and responsibilities.</p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-lg font-semibold mb-3">Real-Time Alerts</h3>
              <p className="text-muted-foreground">Automated notifications when spending exceeds thresholds or unusual patterns are detected.</p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-lg font-semibold mb-3">Historical Analysis</h3>
              <p className="text-muted-foreground">Leverage past data to forecast future needs and optimize budget allocation.</p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-lg font-semibold mb-3">Multi-Level Drill-Down</h3>
              <p className="text-muted-foreground">Start with enterprise-wide views and drill into specific projects, locations, or users.</p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-lg font-semibold mb-3">Role-Based Access</h3>
              <p className="text-muted-foreground">Control data visibility based on user roles and organizational hierarchy.</p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-lg font-semibold mb-3">Export & Integration</h3>
              <p className="text-muted-foreground">Seamlessly export data or integrate with your existing business intelligence tools.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            Unlock the Power of Your Data
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Transform spending blind spots into strategic insights with SupplyFlow's business intelligence.
          </p>
          <Button size="lg" variant="outline" className="bg-white hover:bg-white/90 text-primary border-white">
            See Analytics in Action
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessIntelligence;
