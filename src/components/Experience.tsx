
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior WordPress Developer",
      company: "Freelance",
      location: "Remote",
      period: "2020 - Present",
      description: [
        "Led development of 50+ WordPress websites using Elementor and custom themes",
        "Specialized in e-commerce solutions with WooCommerce integration",
        "Improved website performance by 40% through optimization techniques",
        "Collaborated with design teams using Figma for pixel-perfect implementations"
      ]
    },
    {
      title: "WordPress Developer",
      company: "Digital Agency",
      location: "Philippines",
      period: "2018 - 2020",
      description: [
        "Developed custom WordPress themes and plugins for client projects",
        "Managed Squarespace projects for small to medium businesses",
        "Implemented responsive design principles across all projects",
        "Mentored junior developers in WordPress best practices"
      ]
    },
    {
      title: "Web Developer",
      company: "Tech Startup",
      location: "Philippines",
      period: "2015 - 2018",
      description: [
        "Built and maintained WordPress websites for various industries",
        "Learned advanced Elementor techniques and custom CSS",
        "Collaborated with UX/UI designers using Figma",
        "Optimized websites for SEO and performance"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            9 years of progressive growth in WordPress development and web design
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl mb-2">{exp.title}</CardTitle>
                    <div className="text-lg font-semibold text-primary">{exp.company}</div>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
