import { Mail, Phone, Linkedin, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-[80vh] flex items-center pt-16">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center lg:justify-end">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20">
              <img 
                src="/lovable-uploads/3a35c934-4217-4b36-872c-4e3ed1f68d07.png" 
                alt="Bratabitan Banerjee"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
              MCA 2025 Graduate
            </span>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground leading-tight">
              Bratabitan <span className="heading-accent">Banerjee</span>
            </h1>
            
            <p className="text-lg text-foreground-secondary mb-4">
              Java Full Stack Developer
            </p>

            <p className="text-muted-foreground mb-6 max-w-lg text-sm leading-relaxed">
              Hands-on experience in building RESTful backend systems using Spring Boot, secure authentication with JWT, and database-driven applications using SQL & MongoDB. Strong focus on clean API design, CRUD operations, ORM concepts, and scalable architecture.
            </p>

            <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
              <button 
                className="bg-primary text-primary-foreground font-medium rounded-lg px-6 py-2.5 text-sm"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </button>
              <button 
                className="border border-primary text-primary font-medium rounded-lg px-6 py-2.5 text-sm"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </button>
            </div>

            <div className="flex gap-3 justify-center lg:justify-start">
              <a href="tel:+919002649893" className="card-base flex items-center gap-2 py-2 px-4 text-sm">
                <Phone size={16} className="text-primary" /> Call
              </a>
              <a href="mailto:banerjeebratabitan@gmail.com" className="card-base flex items-center gap-2 py-2 px-4 text-sm">
                <Mail size={16} className="text-primary" /> Email
              </a>
              <a href="https://www.linkedin.com/in/bratabitanbanerjee" target="_blank" rel="noopener noreferrer" className="card-base flex items-center gap-2 py-2 px-4 text-sm">
                <Linkedin size={16} className="text-primary" /> LinkedIn
              </a>
              <a href="https://bratabitan.netlify.app" target="_blank" rel="noopener noreferrer" className="card-base flex items-center gap-2 py-2 px-4 text-sm">
                <ExternalLink size={16} className="text-primary" /> Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
