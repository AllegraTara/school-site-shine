import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, MessageSquare, Heart, Download } from "lucide-react";

const Parents = () => {
  const resources = [
    { title: "Parent Handbook", description: "Complete guide to school policies and procedures", icon: FileText },
    { title: "Communication Portal", description: "Stay connected with teachers and administration", icon: MessageSquare },
    { title: "Support the School", description: "Learn about giving opportunities", icon: Heart },
  ];

  return (
    <Layout>
      <PageHero title="For Parents" subtitle="Partner with us in your daughter's educational journey." breadcrumbs={[{ name: "Parents" }]} />

      <section className="section-padding bg-background">
        <div className="page-container">
          <h2 className="text-3xl font-bold text-center mb-12">Parent Resources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, i) => (
              <Card key={i} className="text-center border-none shadow-md">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <resource.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle>{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{resource.description}</p>
                  <Button variant="outline" size="sm"><Download className="w-4 h-4 mr-2" />Download</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="page-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Staying Connected</h2>
            <div className="bg-card p-8 rounded-xl shadow-md">
              <div className="space-y-6">
                <div><h3 className="font-semibold mb-2">Parent-Teacher Conferences</h3><p className="text-muted-foreground">Held twice per term to discuss student progress.</p></div>
                <div><h3 className="font-semibold mb-2">Visiting Hours</h3><p className="text-muted-foreground">Sundays from 2:00 PM - 5:00 PM during term time.</p></div>
                <div><h3 className="font-semibold mb-2">Emergency Contact</h3><p className="text-muted-foreground">Available 24/7 at +250 788 123 456</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Questions? We're Here to Help" primaryCTA={{ text: "Contact Us", href: "/contact" }} />
    </Layout>
  );
};

export default Parents;
