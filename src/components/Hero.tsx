import { Mail, Phone, Linkedin, ExternalLink, Download, Code2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Profile Image Side */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-20 scale-110"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                <img 
                  src="/lovable-uploads/3a35c934-4217-4b36-872c-4e3ed1f68d07.png" 
                  alt="Bratabitan Banerjee - Java Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center animate-bounce">
                <Code2 size={24} className="text-accent-foreground" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center animate-pulse">
                <Sparkles size={24} className="text-primary-foreground" />
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="text-center lg:text-left">
            <div className="inline-block px-6 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <span className="text-primary font-medium">MCA 2025 Graduate</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block">Hey, I'm</span>
              <span className="neon-text block">Bratabitan</span>
              <span className="block text-foreground-secondary">Banerjee</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-foreground-secondary mb-6 leading-relaxed">
              Java Full Stack Developer specializing in
              <span className="text-primary font-semibold"> React</span>,
              <span className="text-accent font-semibold"> Spring Boot</span>, and
              <span className="text-primary font-semibold"> AI Tools</span>
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Passionate about building scalable, user-centric applications that solve real-world problems with modern technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                className="glow-button"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Projects
              </button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/50 text-primary hover:bg-primary/10 backdrop-blur-sm"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Connect
              </Button>
            </div>

            {/* Quick Contact */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <a 
                href="tel:+919002649893"
                className="glass-card flex items-center justify-center space-x-2 py-4 hover:bg-primary/10 group"
              >
                <Phone size={18} className="text-primary group-hover:scale-110 transition-transform" />
                <span className="hidden sm:block text-sm font-medium">Call</span>
              </a>
              
              <a 
                href="mailto:banerjeebratabitan@gmail.com"
                className="glass-card flex items-center justify-center space-x-2 py-4 hover:bg-primary/10 group"
              >
                <Mail size={18} className="text-primary group-hover:scale-110 transition-transform" />
                <span className="hidden sm:block text-sm font-medium">Email</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/bratabitanbanerjee"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card flex items-center justify-center space-x-2 py-4 hover:bg-primary/10 group"
              >
                <Linkedin size={18} className="text-primary group-hover:scale-110 transition-transform" />
                <span className="hidden sm:block text-sm font-medium">LinkedIn</span>
              </a>
              
              <a 
                href="https://bratabitan.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card flex items-center justify-center space-x-2 py-4 hover:bg-primary/10 group"
              >
                <ExternalLink size={18} className="text-primary group-hover:scale-110 transition-transform" />
                <span className="hidden sm:block text-sm font-medium">Portfolio</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Effects */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-ping"></div>
      <div className="absolute bottom-20 right-10 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-primary rounded-full animate-bounce"></div>
    </section>
  );
};

export default Hero;