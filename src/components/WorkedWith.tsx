import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const companies = [
  {
    name: "NEXT",
    logo: null, // Text-based logo
    featured: true,
  },
  {
    name: "Sheffield Hallam University",
    logo: null,
    featured: false,
  },
];

const WorkedWith = () => {
  const headerAnimation = useScrollAnimation(0.1);

  return (
    <section className="py-16 relative border-y border-border/30">
      <div className="container mx-auto px-6">
        <div 
          ref={headerAnimation.ref}
          className={`transition-all duration-700 ${
            headerAnimation.isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-widest">
            Worked With
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {companies.map((company, index) => (
              <div
                key={index}
                className={`transition-all duration-300 hover:scale-110 ${
                  company.featured ? '' : 'opacity-60 hover:opacity-100'
                }`}
              >
                <span 
                  className={`font-bold tracking-wider transition-colors ${
                    company.featured 
                      ? 'text-4xl md:text-5xl text-foreground grayscale hover:grayscale-0 hover:text-primary' 
                      : 'text-lg md:text-xl text-muted-foreground grayscale hover:grayscale-0 hover:text-foreground'
                  }`}
                >
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkedWith;
