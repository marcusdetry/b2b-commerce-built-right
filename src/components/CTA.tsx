import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-secondary via-secondary to-secondary/90 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Ready to Transform Your B2B Commerce?
          </h2>
          <p className="text-xl sm:text-2xl text-white/80 mb-12 leading-relaxed">
            See how SupplyFlow can eliminate order errors, boost sales, and delight your customers. Schedule a personalized demo today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button variant="hero" size="lg" className="text-lg px-8">
              Schedule Your Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline-light" size="lg" className="text-lg px-8">
              Contact Sales
            </Button>
          </div>
          
          <p className="text-white/60 text-sm">
            No credit card required • Free implementation support • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
