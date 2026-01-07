import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";
import { Card, CardContent } from "@/components/ui/card";
import { clubs } from "@/data/schoolData";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Students = () => {
  const galleryImages = Array(6).fill("/placeholder.svg");

  return (
    <Layout>
      <PageHero title="Student Life" subtitle="Experience a vibrant community where learning extends beyond the classroom." breadcrumbs={[{ name: "Student Life" }]} />

      {/* Daily Life */}
      <section className="section-padding bg-background">
        <div className="page-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">A Day at Maranyundo</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Our structured daily schedule balances rigorous academics with time for personal growth, spiritual development, and recreation.</p>
                <div className="bg-muted p-4 rounded-lg space-y-2 text-sm">
                  <div className="flex justify-between"><span>Morning Prayer & Breakfast</span><span>6:00 - 7:30 AM</span></div>
                  <div className="flex justify-between"><span>Academic Classes</span><span>7:30 AM - 12:30 PM</span></div>
                  <div className="flex justify-between"><span>Lunch & Rest</span><span>12:30 - 2:00 PM</span></div>
                  <div className="flex justify-between"><span>Afternoon Classes</span><span>2:00 - 5:00 PM</span></div>
                  <div className="flex justify-between"><span>Sports & Activities</span><span>5:00 - 6:30 PM</span></div>
                  <div className="flex justify-between"><span>Evening Study</span><span>7:30 - 9:30 PM</span></div>
                </div>
              </div>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
              <img src="/placeholder.svg" alt="Daily life" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Clubs */}
      <section id="clubs" className="section-padding bg-muted">
        <div className="page-container">
          <h2 className="text-3xl font-bold text-center mb-12">Clubs & Activities</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubs.map((club, i) => (
              <Card key={i} className="border-none shadow-md">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">{club.name}</h3>
                  <p className="text-sm text-muted-foreground">{club.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="section-padding bg-background">
        <div className="page-container">
          <h2 className="text-3xl font-bold text-center mb-12">Photo Gallery</h2>
          <Carousel opts={{ loop: true }}>
            <CarouselContent>
              {galleryImages.map((img, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <CTABanner title="Experience Maranyundo Life" primaryCTA={{ text: "Apply Now", href: "/admissions" }} secondaryCTA={{ text: "Schedule a Visit", href: "/contact" }} />
    </Layout>
  );
};

export default Students;
