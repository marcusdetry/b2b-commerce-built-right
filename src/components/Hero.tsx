import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/90"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
            Is your eCommerce platform frustrating your customers?
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Eliminate poor customer experiences and missed business opportunities with the only platform designed for B2B industrial eCommerce.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="lg" className="text-lg hidden">
              Schedule Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/20">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
              <span className="text-white/90 font-medium">Zero Order Errors</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
              <span className="text-white/90 font-medium">Maximize Revenue</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
              <span className="text-white/90 font-medium">Superior Experience</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Gradient Fade at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
