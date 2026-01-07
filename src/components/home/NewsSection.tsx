import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";
import { news } from "@/data/schoolData";
import SectionHeader from "@/components/shared/SectionHeader";

const NewsSection = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <section className="section-padding bg-background">
      <div className="page-container">
        <SectionHeader
          title="Latest from Maranyundo"
          subtitle="Stay updated with news, achievements, and events from our school community."
        />

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {news.map((item) => (
            <Card key={item.id} className="card-hover border-none shadow-md overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(item.date)}</span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground line-clamp-2">
                  {item.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm line-clamp-3">{item.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link to="/news">
              View All News
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
