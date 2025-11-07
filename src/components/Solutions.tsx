import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import solutionsImage from "@/assets/solutions-image.png";

const Solutions = () => {
  const benefits = [
    "Custom pricing & discounting rules",
    "Multi-level approval workflows",
    "Account-specific catalogs",
    "Bulk ordering & quick reorder",
    "Integration with ERP & accounting",
    "Advanced inventory management",
  ];

  return (
    <section id="solutions" className="py-24 bg-secondary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Everything Your B2B Business Needs
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              SupplyFlow understands the unique requirements of B2B commerce. From complex pricing structures to multi-level approvals, we've built features that actually work for wholesale, distribution, and manufacturing businesses.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button variant="hero" size="lg" className="text-lg hidden">
              Explore All Features
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="relative">
            <img 
              src={solutionsImage} 
              alt="SupplyFlow Configuration Dashboard" 
              className="rounded-2xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
