import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Users, Crown } from "lucide-react";
import { values, leadership, facilities } from "@/data/schoolData";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Award, Heart, Users, Crown,
};

const About = () => {
  return (
    <Layout>
      <PageHero
        title="About Maranyundo"
        subtitle="A legacy of excellence in girls' education since 2008."
        breadcrumbs={[{ name: "About" }]}
      />

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="page-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Founded in 2008, Maranyundo Girls School emerged from a vision to provide exceptional education for young women in Rwanda. Located in the heart of Bugesera District, our school has grown to become one of the nation's most respected institutions.</p>
                <p>What began as a small school has transformed into a thriving community of over 400 students, dedicated teachers, and supportive families united by a common goal: empowering young women to lead, learn, and transform their communities.</p>
              </div>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
              <img src="/placeholder.svg" alt="School history" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted">
        <div className="page-container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = iconMap[value.icon] || Award;
              return (
                <Card key={i} className="text-center border-none shadow-md">
                  <CardContent className="pt-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-background">
        <div className="page-container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((person, i) => (
              <Card key={i} className="text-center border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 overflow-hidden">
                    <img src="/placeholder.svg" alt={person.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-semibold">{person.name}</h3>
                  <p className="text-sm text-primary mb-2">{person.role}</p>
                  <p className="text-xs text-muted-foreground">{person.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding bg-muted">
        <div className="page-container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Campus</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {facilities.map((facility, i) => (
              <div key={i} className="bg-card p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-1">{facility.name}</h3>
                <p className="text-sm text-muted-foreground">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Join Our Community" primaryCTA={{ text: "Apply Now", href: "/admissions" }} secondaryCTA={{ text: "Schedule a Visit", href: "/contact" }} />
    </Layout>
  );
};

export default About;
