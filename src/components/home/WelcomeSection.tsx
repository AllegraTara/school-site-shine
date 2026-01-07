import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const WelcomeSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="page-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/placeholder.svg"
                alt="Maranyundo Girls School Campus"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Accent Card */}
            <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground rounded-xl p-6 shadow-xl hidden md:block">
              <div className="text-4xl font-bold">16+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <SectionHeader
              title="A Legacy of Excellence, A Future of Possibility"
              centered={false}
              className="mb-6"
            />
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                Founded in 2008, Maranyundo Girls School has become one of Rwanda's most respected 
                institutions for girls' education. Our holistic approach develops confident, capable 
                young women prepared to lead in their communities and beyond.
              </p>
              <p>
                With a rigorous academic program, nurturing boarding community, and emphasis on 
                faith and service, we provide the foundation for lifelong success. Our graduates 
                go on to prestigious universities and impactful careers across Rwanda and the world.
              </p>
            </div>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
