const Stats = () => {
  const stats = [
    {
      value: "99.9%",
      label: "Order Accuracy",
      description: "Virtually eliminate errors",
    },
    {
      value: "35%",
      label: "Revenue Increase",
      description: "identified new sales opportunities",
    },
    {
      value: "48hrs",
      label: "Faster Implementation",
      description: "Compared to competitors",
    },
    {
      value: "24/7",
      label: "Expert Support",
      description: "Always here to help",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Results That Speak for Themselves
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Delight your customers with transformed eCommerce operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="mb-4">
                <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 inline-block">
                  {stat.value}
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {stat.label}
              </h3>
              <p className="text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
