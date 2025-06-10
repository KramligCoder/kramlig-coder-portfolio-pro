
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-blue-600/5"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-foreground">Mark Gil</span>
            <span className="block bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Sumanlad
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            WordPress Expert & Web Designer with 9 Years of Experience
            <br />
            <span className="text-primary font-semibold">Elementor • Squarespace • Figma</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="group">
              <a href="#portfolio" className="flex items-center gap-2">
                View My Work
                <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
            
            <Button variant="outline" size="lg" className="group">
              <Download size={20} className="group-hover:scale-110 transition-transform" />
              Download Resume
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">9+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown size={24} className="text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
