import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import WelcomeSection from "@/components/home/WelcomeSection";
import AcademicsSection from "@/components/home/AcademicsSection";
import StudentLifeSection from "@/components/home/StudentLifeSection";
import AdmissionsSection from "@/components/home/AdmissionsSection";
import NewsSection from "@/components/home/NewsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTABanner from "@/components/shared/CTABanner";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <WelcomeSection />
      <AcademicsSection />
      <StudentLifeSection />
      <AdmissionsSection />
      <NewsSection />
      <TestimonialsSection />
      <CTABanner
        title="Ready to become part of the Maranyundo family?"
        subtitle="Take the first step toward an exceptional education that will shape your future."
        primaryCTA={{ text: "Apply Now", href: "/admissions" }}
        secondaryCTA={{ text: "Contact Admissions", href: "/contact" }}
      />
    </Layout>
  );
};

export default Index;
