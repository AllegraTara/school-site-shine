import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { schoolInfo } from "@/data/schoolData";

const Contact = () => {
  const contactInfo = [
    { icon: MapPin, label: "Address", value: schoolInfo.address },
    { icon: Phone, label: "Phone", value: schoolInfo.phone },
    { icon: Mail, label: "Email", value: schoolInfo.email },
    { icon: Clock, label: "Office Hours", value: "Mon-Fri: 8:00 AM - 5:00 PM" },
  ];

  return (
    <Layout>
      <PageHero title="Contact Us" subtitle="We'd love to hear from you. Reach out with any questions." breadcrumbs={[{ name: "Contact" }]} />

      <section className="section-padding bg-background">
        <div className="page-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">{item.label}</div>
                      <div className="text-muted-foreground">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
                <span className="text-muted-foreground">Map - Maranyundo, Bugesera District</span>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-6">Send us a Message</h3>
                  <form className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div><Label htmlFor="name">Name</Label><Input id="name" placeholder="Your name" /></div>
                      <div><Label htmlFor="email">Email</Label><Input id="email" type="email" placeholder="your@email.com" /></div>
                    </div>
                    <div><Label htmlFor="subject">Subject</Label><Input id="subject" placeholder="How can we help?" /></div>
                    <div><Label htmlFor="message">Message</Label><Textarea id="message" placeholder="Your message..." rows={5} /></div>
                    <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
