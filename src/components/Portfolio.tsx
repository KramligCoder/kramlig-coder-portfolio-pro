
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Fashion Store",
      category: "WordPress + WooCommerce",
      description: "Modern e-commerce website built with custom WordPress theme and WooCommerce integration. Features include advanced product filtering, wishlist functionality, and mobile-optimized checkout.",
      technologies: ["WordPress", "WooCommerce", "Elementor", "Custom CSS"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop"
    },
    {
      title: "Corporate Business Website",
      category: "Squarespace",
      description: "Professional corporate website with custom animations and integrations. Built on Squarespace with custom code injections for enhanced functionality.",
      technologies: ["Squarespace", "Custom CSS", "JavaScript", "Figma"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop"
    },
    {
      title: "Restaurant Chain Website",
      category: "WordPress + Elementor",
      description: "Multi-location restaurant website with online ordering system, reservation functionality, and dynamic menu management built with Elementor Pro.",
      technologies: ["WordPress", "Elementor Pro", "Custom Plugins", "API Integration"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop"
    },
    {
      title: "Portfolio Website",
      category: "WordPress",
      description: "Creative portfolio website for a photographer with custom gallery layouts, lightbox functionality, and seamless mobile experience.",
      technologies: ["WordPress", "Custom Theme", "JavaScript", "CSS Grid"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
    },
    {
      title: "SaaS Landing Page",
      category: "WordPress + Elementor",
      description: "High-converting SaaS landing page with lead generation forms, pricing tables, and integrated analytics. Built with Elementor and custom CSS.",
      technologies: ["WordPress", "Elementor", "Custom CSS", "Analytics"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    },
    {
      title: "Non-Profit Organization",
      category: "Squarespace",
      description: "Donation-focused website for a non-profit organization with event management, volunteer registration, and payment processing integration.",
      technologies: ["Squarespace", "Payment Integration", "Custom Forms", "SEO"],
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my best work across WordPress, Elementor, and Squarespace platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button size="sm" variant="secondary" className="mr-2">
                    <Eye size={16} className="mr-2" />
                    Preview
                  </Button>
                  <Button size="sm" variant="outline">
                    <ExternalLink size={16} className="mr-2" />
                    Live Site
                  </Button>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <p className="text-sm text-primary font-medium">{project.category}</p>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-muted text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
