import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Microscope, Languages, Trophy, Calendar } from "lucide-react";
import { academicPrograms } from "@/data/schoolData";

const Academics = () => {
  return (
    <Layout>
      <PageHero title="Academic Programs" subtitle="A rigorous curriculum designed to prepare students for university and beyond." breadcrumbs={[{ name: "Academics" }]} />

      <section className="section-padding bg-background">
        <div className="page-container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Curriculum</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {academicPrograms.map((program, i) => (
              <Card key={i} className="border-none shadow-md">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    {i === 0 && <BookOpen className="w-7 h-7 text-primary" />}
                    {i === 1 && <Microscope className="w-7 h-7 text-primary" />}
                    {i === 2 && <Languages className="w-7 h-7 text-primary" />}
                  </div>
                  <CardTitle>{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {program.subjects.map((s, idx) => (
                      <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{s}</span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="page-container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3"><Trophy className="text-secondary" /> Student Achievements</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Our students consistently rank among the top performers in national examinations, with 98% proceeding to university education.</p>
                <ul className="space-y-2">
                  <li>• Top 5 national ranking in sciences</li>
                  <li>• Multiple national competition winners</li>
                  <li>• Scholarships to international universities</li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3"><Calendar className="text-secondary" /> Academic Calendar</h2>
              <div className="bg-card p-6 rounded-xl shadow-sm">
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b"><span>Term 1</span><span className="text-muted-foreground">Jan - Apr</span></div>
                  <div className="flex justify-between py-2 border-b"><span>Term 2</span><span className="text-muted-foreground">May - Aug</span></div>
                  <div className="flex justify-between py-2"><span>Term 3</span><span className="text-muted-foreground">Sep - Dec</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Ready to Excel Academically?" primaryCTA={{ text: "Apply Now", href: "/admissions" }} />
    </Layout>
  );
};

export default Academics;
