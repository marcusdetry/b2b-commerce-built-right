import featureAccuracy from "@/assets/feature-accuracy.png";
import featureSales from "@/assets/feature-sales.png";
import featureExperience from "@/assets/feature-experience.png";

const Features = () => {
  const features = [
    {
      icon: featureAccuracy,
      title: "Eliminate Incorrect Orders",
      description: "Intelligent validation and automated workflows ensure every order is accurate from the start, reducing returns and customer frustration.",
    },
    {
      icon: featureSales,
      title: "Never Miss a Sale",
      description: "Real-time inventory sync, smart pricing rules, and seamless integrations mean you're always ready to capture every opportunity.",
    },
    {
      icon: featureExperience,
      title: "Exceptional Customer Experience",
      description: "Self-service portals, personalized catalogs, and streamlined reordering make it easy for your customers to do business with you.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Built for B2B Complexity
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Address the challenges that generic eCommerce platforms can't solve
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/50"
            >
              <div className="mb-6 flex justify-center">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={feature.icon} 
                    alt={feature.title}
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
