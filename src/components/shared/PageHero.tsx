import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { name: string; href?: string }[];
  backgroundImage?: string;
}

const PageHero = ({ title, subtitle, breadcrumbs, backgroundImage }: PageHeroProps) => {
  return (
    <section
      className="relative bg-primary py-16 md:py-24"
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(to right, hsl(var(--primary) / 0.9), hsl(var(--primary) / 0.7)), url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      <div className="page-container">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-sm text-primary-foreground/80 mb-4">
            <Link to="/" className="flex items-center hover:text-primary-foreground transition-colors">
              <Home className="w-4 h-4" />
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                {crumb.href ? (
                  <Link to={crumb.href} className="hover:text-primary-foreground transition-colors">
                    {crumb.name}
                  </Link>
                ) : (
                  <span className="text-primary-foreground">{crumb.name}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
