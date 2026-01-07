import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SectionHeader from "@/components/shared/SectionHeader";

const images = [
  { src: "/placeholder.svg", alt: "Students in classroom" },
  { src: "/placeholder.svg", alt: "Sports activities" },
  { src: "/placeholder.svg", alt: "Community service" },
  { src: "/placeholder.svg", alt: "School events" },
  { src: "/placeholder.svg", alt: "Campus life" },
];

const StudentLifeSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="page-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <SectionHeader
              title="More Than a School — A Community"
              centered={false}
              className="mb-6"
            />
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                Life at Maranyundo extends far beyond the classroom. Our boarding community 
                creates lasting friendships and personal growth opportunities that shape 
                students for life.
              </p>
              <p>
                From debate club to sports, community service to performing arts, students 
                discover their passions and develop leadership skills. Every day brings new 
                opportunities to learn, grow, and serve.
              </p>
            </div>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/students">
                Discover Student Life
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Image Carousel */}
          <div className="relative">
            <Carousel className="w-full" opts={{ loop: true }}>
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentLifeSection;
