
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "WordPress Development",
      skills: [
        { name: "WordPress Core", level: 95 },
        { name: "Custom Themes", level: 90 },
        { name: "Plugin Development", level: 85 },
        { name: "WooCommerce", level: 88 }
      ]
    },
    {
      title: "Page Builders & CMS",
      skills: [
        { name: "Elementor", level: 95 },
        { name: "Squarespace", level: 80 },
        { name: "Gutenberg", level: 85 },
        { name: "ACF", level: 90 }
      ]
    },
    {
      title: "Design & Frontend",
      skills: [
        { name: "Figma", level: 75 },
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 80 },
        { name: "Responsive Design", level: 95 }
      ]
    }
  ];

  // Duplicate the skills array for seamless loop
  const duplicatedSkills = [...skillCategories, ...skillCategories];

  return (
    <section id="skills" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit built over 9 years of professional development experience
          </p>
        </div>

        <div className="relative">
          <div className="flex animate-scroll-horizontal space-x-8">
            {duplicatedSkills.map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 flex-shrink-0 w-80">
                <CardHeader>
                  <CardTitle className="text-xl text-center">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
