import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Settings, Eye, CheckCircle2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductConfiguration = () => {
  const benefits = [
    {
      icon: Eye,
      title: "Visual Validation",
      description: "Real-time 3D, 360° visual validation tools allow you to see exactly what you're ordering before purchase."
    },
    {
      icon: CheckCircle2,
      title: "Improved Accuracy",
      description: "Eliminate ordering errors with visual confirmation and intelligent configuration rules."
    },
    {
      icon: Zap,
      title: "Faster Configuration",
      description: "Configure complex products in minutes instead of hours with our intuitive interface."
    },
    {
      icon: Settings,
      title: "Technical Precision",
      description: "Handle dozens of feature combinations with confidence using our guided configuration process."
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
              Product Configuration Tools
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Configure, compare, and order complex products with accuracy using real-time, 3-D, 360° visual validation tools.
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-elegant border border-border p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6">Configure Complex Products Before Purchasing</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Ordering complex or technical products with dozens of feature combinations can often be confusing, time-consuming, and inaccurate. SupplyFlow offers product configurators to eliminate these issues.
            </p>
            <p className="text-lg text-muted-foreground">
              Tools like our Valve Configurator and Mud Pump Configurator provide real-time 3D renderings of products, allowing you to verify you're ordering exactly what you need. Match technical specifications, compare options side-by-side, and place orders with complete confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why Use Product Configurators?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-all duration-300 hover:border-primary/50"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3 flex-shrink-0">
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
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 border border-primary/20">
            <h2 className="text-3xl font-bold mb-8">Key Features</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Real-Time 3D Visualization</h3>
                  <p className="text-muted-foreground">See your configured product from every angle with interactive 360° views</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Intelligent Configuration Rules</h3>
                  <p className="text-muted-foreground">Automatic validation ensures compatible combinations and eliminates configuration errors</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Side-by-Side Comparison</h3>
                  <p className="text-muted-foreground">Compare multiple configurations to select the perfect product for your application</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Technical Specification Matching</h3>
                  <p className="text-muted-foreground">Input your requirements and let the configurator guide you to the right solution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            Experience Precision Configuration
          </h2>
          <p className="text-xl text-white/90 mb-8">
            See how SupplyFlow's configurators eliminate ordering errors and save time.
          </p>
          <Button size="lg" variant="outline" className="bg-white hover:bg-white/90 text-primary border-white">
            Request a Demo
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductConfiguration;
