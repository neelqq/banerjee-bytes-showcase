import { Mail, Phone, Linkedin, ExternalLink } from 'lucide-react';

const Hero = () => (
  <section id="home" className="pt-16 pb-8">
    <div className="section-container">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <img
          src="/lovable-uploads/3a35c934-4217-4b36-872c-4e3ed1f68d07.png"
          alt="Bratabitan Banerjee"
          className="w-28 h-28 rounded-full object-cover border-2 border-primary/20"
          loading="eager"
        />
        <div className="text-center md:text-left">
          <span className="inline-block px-3 py-0.5 bg-accent text-accent-foreground rounded-full text-xs font-medium mb-2">MCA 2025</span>
          <h1 className="text-2xl md:text-3xl font-bold mb-1">Bratabitan <span className="heading-accent">Banerjee</span></h1>
          <p className="text-sm text-foreground-secondary mb-2">Java Full Stack Developer</p>
          <p className="text-xs text-muted-foreground max-w-md leading-relaxed mb-3">
            Hands-on experience building RESTful systems with Spring Boot, JWT auth, and SQL/MongoDB. Focused on clean API design, scalable architecture, and backend-heavy projects.
          </p>
          <div className="flex gap-2 flex-wrap justify-center md:justify-start">
            <a href="tel:+919002649893" className="inline-flex items-center gap-1 text-xs text-primary border border-border rounded px-2.5 py-1">
              <Phone size={12} /> Call
            </a>
            <a href="mailto:banerjeebratabitan@gmail.com" className="inline-flex items-center gap-1 text-xs text-primary border border-border rounded px-2.5 py-1">
              <Mail size={12} /> Email
            </a>
            <a href="https://www.linkedin.com/in/bratabitanbanerjee" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-primary border border-border rounded px-2.5 py-1">
              <Linkedin size={12} /> LinkedIn
            </a>
            <a href="https://bratabitan.netlify.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-primary border border-border rounded px-2.5 py-1">
              <ExternalLink size={12} /> Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
