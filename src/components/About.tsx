
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: "WordPress Expert",
      description: "9 years of deep WordPress development experience"
    },
    {
      icon: <Palette size={24} />,
      title: "Design Focused",
      description: "Creating beautiful, user-friendly interfaces"
    },
    {
      icon: <Zap size={24} />,
      title: "Performance Driven",
      description: "Optimized websites that load fast and rank well"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate web developer and designer with a proven track record of creating 
            exceptional digital experiences that drive business growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              With <span className="font-semibold text-primary">9 years of hands-on experience</span> in 
              WordPress development, I've helped businesses transform their online presence through 
              strategic web design and development.
            </p>
            
            <p className="text-lg leading-relaxed">
              My expertise spans from <span className="font-semibold">custom WordPress themes</span> to 
              advanced <span className="font-semibold">Elementor implementations</span>, with additional 
              skills in Squarespace and Figma for comprehensive web solutions.
            </p>

            <p className="text-lg leading-relaxed">
              I believe in creating websites that not only look stunning but also perform exceptionally, 
              providing users with seamless experiences that convert visitors into customers.
            </p>
          </div>

          <div className="space-y-6">
            {highlights.map((item, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-primary group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
