import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { news, events } from "@/data/schoolData";

const News = () => {
  const formatDate = (d: string) => new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  return (
    <Layout>
      <PageHero title="News & Events" subtitle="Stay updated with the latest from Maranyundo." breadcrumbs={[{ name: "News & Events" }]} />

      <section className="section-padding bg-background">
        <div className="page-container">
          <h2 className="text-3xl font-bold mb-8">Latest News</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item) => (
              <Card key={item.id} className="border-none shadow-md overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(item.date)}</span>
                    <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">{item.category}</span>
                  </div>
                  <h3 className="font-semibold">{item.title}</h3>
                </CardHeader>
                <CardContent><p className="text-sm text-muted-foreground">{item.excerpt}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="page-container">
          <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {events.map((event) => (
              <Card key={event.id} className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="text-sm text-primary font-medium mb-2">{formatDate(event.date)} • {event.time}</div>
                  <h3 className="font-semibold mb-2">{event.title}</h3>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
