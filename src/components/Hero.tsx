import { Mail, Phone, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="section-container text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Bratabitan</span>
            <br />
            <span className="text-foreground">Banerjee</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground-secondary mb-8 max-w-3xl mx-auto">
            Java Full Stack Developer | React | Spring Boot | AI Enthusiast
          </p>
          
          <p className="text-lg text-foreground-secondary mb-12 max-w-2xl mx-auto">
            MCA 2025 graduate specializing in modern web technologies and innovative solutions
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="default" 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <a 
              href="tel:+919002649893"
              className="portfolio-card flex items-center space-x-3 hover:bg-primary hover:text-primary-foreground group"
            >
              <Phone size={20} className="text-primary group-hover:text-primary-foreground" />
              <span className="font-medium">+91 9002649893</span>
            </a>
            
            <a 
              href="mailto:banerjeebratabitan@gmail.com"
              className="portfolio-card flex items-center space-x-3 hover:bg-primary hover:text-primary-foreground group"
            >
              <Mail size={20} className="text-primary group-hover:text-primary-foreground" />
              <span className="font-medium">Email Me</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/bratabitanbanerjee"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-card flex items-center space-x-3 hover:bg-primary hover:text-primary-foreground group"
            >
              <Linkedin size={20} className="text-primary group-hover:text-primary-foreground" />
              <span className="font-medium">LinkedIn</span>
            </a>
            
            <a 
              href="https://bratabitan.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-card flex items-center space-x-3 hover:bg-primary hover:text-primary-foreground group"
            >
              <ExternalLink size={20} className="text-primary group-hover:text-primary-foreground" />
              <span className="font-medium">Portfolio</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;