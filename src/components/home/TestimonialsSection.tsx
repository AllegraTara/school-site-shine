import { Quote } from "lucide-react";
import { testimonials } from "@/data/schoolData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SectionHeader from "@/components/shared/SectionHeader";

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="page-container">
        <SectionHeader
          title="Voices of Our Community"
          subtitle="Hear from students, parents, and alumni about their Maranyundo experience."
          className="[&_h2]:text-primary-foreground [&_p]:text-primary-foreground/80"
        />

        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="text-center px-4 md:px-12">
                    <Quote className="w-12 h-12 text-secondary mx-auto mb-6 rotate-180" />
                    <blockquote className="text-xl md:text-2xl text-primary-foreground mb-8 leading-relaxed italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <div className="text-lg font-semibold text-primary-foreground">
                        {testimonial.author}
                      </div>
                      <div className="text-primary-foreground/70">{testimonial.role}</div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 md:-left-4 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20" />
            <CarouselNext className="right-0 md:-right-4 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
