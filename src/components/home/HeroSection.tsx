import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 min-h-[600px] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary-foreground blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary-foreground blur-3xl" />
      </div>

      <div className="page-container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <p className="text-secondary font-medium mb-4 tracking-wide uppercase text-sm">
              Rwanda's Premier Girls' School
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Empowering Young Women to{" "}
              <span className="text-secondary">Lead, Learn,</span> and Transform Rwanda
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl mx-auto lg:mx-0">
              At Maranyundo Girls School, we nurture academic excellence, faith, and leadership in a 
              supportive boarding community. Join a legacy of empowered women shaping Rwanda's future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base"
              >
                <Link to="/admissions">
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-base"
              >
                <Link to="/contact">
                  Schedule a Visit
                </Link>
              </Button>
            </div>
          </div>

          {/* Hero Image/Video Card */}
          <div className="relative hidden lg:block">
            <div className="relative bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-2 shadow-2xl">
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-primary-foreground/20 to-primary-foreground/5 flex items-center justify-center overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Students at Maranyundo Girls School"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              {/* Play Button Overlay */}
              <button 
                className="absolute inset-0 flex items-center justify-center group"
                aria-label="Watch our story"
              >
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-secondary-foreground ml-1" />
                </div>
              </button>
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-xl">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">University Placement</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
