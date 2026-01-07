import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { admissionSteps, fees, faqs } from "@/data/schoolData";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Admissions = () => {
  return (
    <Layout>
      <PageHero title="Admissions" subtitle="Join the Maranyundo family and begin your journey toward excellence." breadcrumbs={[{ name: "Admissions" }]} />

      {/* Steps */}
      <section className="section-padding bg-background">
        <div className="page-container">
          <h2 className="text-3xl font-bold text-center mb-12">How to Apply</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-foreground">{step.step}</div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fees */}
      <section id="fees" className="section-padding bg-muted">
        <div className="page-container">
          <h2 className="text-3xl font-bold text-center mb-12">Tuition & Fees</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                {fees.map((fee, i) => (
                  <div key={i} className="flex justify-between py-3 border-b last:border-0">
                    <span>{fee.item}</span>
                    <span className="font-semibold text-primary">{fee.amount}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
            <p className="text-center text-muted-foreground mt-6 text-sm">Over 50% of students receive scholarship or financial aid.</p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding bg-background">
        <div className="page-container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Start Your Application</h2>
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div><Label htmlFor="firstName">First Name</Label><Input id="firstName" placeholder="Enter first name" /></div>
                    <div><Label htmlFor="lastName">Last Name</Label><Input id="lastName" placeholder="Enter last name" /></div>
                  </div>
                  <div><Label htmlFor="email">Email</Label><Input id="email" type="email" placeholder="parent@email.com" /></div>
                  <div><Label htmlFor="phone">Phone</Label><Input id="phone" placeholder="+250 788 123 456" /></div>
                  <div><Label htmlFor="grade">Applying for Grade</Label><Input id="grade" placeholder="e.g., Senior 1" /></div>
                  <div><Label htmlFor="message">Additional Information</Label><Textarea id="message" placeholder="Tell us about the student..." /></div>
                  <Button type="submit" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">Submit Application</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-muted">
        <div className="page-container">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-lg px-6 border-none shadow-sm">
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Admissions;
