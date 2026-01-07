import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CTABannerProps {
  title: string;
  subtitle?: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

const CTABanner = ({ title, subtitle, primaryCTA, secondaryCTA }: CTABannerProps) => {
  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="page-container text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
          >
            <Link to={primaryCTA.href}>{primaryCTA.text}</Link>
          </Button>
          {secondaryCTA && (
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link to={secondaryCTA.href}>{secondaryCTA.text}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
