import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Microscope, Languages, ArrowRight } from "lucide-react";
import { academicPrograms } from "@/data/schoolData";
import SectionHeader from "@/components/shared/SectionHeader";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen: BookOpen,
  Microscope: Microscope,
  Languages: Languages,
};

const AcademicsSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="page-container">
        <SectionHeader
          title="Academic Excellence at Every Level"
          subtitle="Our comprehensive curriculum prepares students for success in national examinations and higher education."
        />

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {academicPrograms.map((program, index) => {
            const IconComponent = iconMap[program.icon] || BookOpen;
            return (
              <Card key={index} className="card-hover border-none shadow-md">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {program.subjects.slice(0, 3).map((subject, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/academics">
              Explore Our Curriculum
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;
