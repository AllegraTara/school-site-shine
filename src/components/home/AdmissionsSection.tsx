import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Users, CheckCircle } from "lucide-react";
import { admissionSteps } from "@/data/schoolData";
import SectionHeader from "@/components/shared/SectionHeader";

const stepIcons = [FileText, Users, CheckCircle, CheckCircle];

const AdmissionsSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="page-container">
        <SectionHeader
          title="Your Journey Starts Here"
          subtitle="Joining the Maranyundo family is a straightforward process. We welcome applications from motivated students across Rwanda."
        />

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {admissionSteps.map((step, index) => {
            const IconComponent = stepIcons[index] || CheckCircle;
            return (
              <div key={index} className="relative text-center">
                {/* Connector Line */}
                {index < admissionSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-border" />
                )}
                
                {/* Step Circle */}
                <div className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-primary-foreground">{step.step}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            );
          })}
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card rounded-xl p-6 text-center shadow-sm border border-border">
            <div className="text-2xl font-bold text-secondary mb-1">50%+</div>
            <div className="text-sm text-muted-foreground">Students on Scholarship</div>
          </div>
          <div className="bg-card rounded-xl p-6 text-center shadow-sm border border-border">
            <div className="text-2xl font-bold text-secondary mb-1">Rolling</div>
            <div className="text-sm text-muted-foreground">Admissions Available</div>
          </div>
          <div className="bg-card rounded-xl p-6 text-center shadow-sm border border-border">
            <div className="text-2xl font-bold text-secondary mb-1">Full Boarding</div>
            <div className="text-sm text-muted-foreground">Campus Experience</div>
          </div>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <Link to="/admissions">
              Start Your Application
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;
