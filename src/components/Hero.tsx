import { Mail, Phone, Linkedin, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-[85vh] flex items-center pt-12">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-2 flex justify-center">
            <div className="w-52 h-52 rounded-full overflow-hidden border-2 border-primary/40">
              <img src="/lovable-uploads/3a35c934-4217-4b36-872c-4e3ed1f68d07.png" alt="Bratabitan Banerjee" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="terminal-card">
              <div className="terminal-header">
                <span className="terminal-dot bg-red-500"></span>
                <span className="terminal-dot bg-yellow-500"></span>
                <span className="terminal-dot bg-green-500"></span>
                <span className="text-xs text-muted-foreground ml-2 font-mono">about.sh</span>
              </div>
              
              <div className="font-mono text-sm space-y-2">
                <p className="text-muted-foreground">// MCA 2025 Graduate</p>
                <p><span className="text-accent">const</span> <span className="cyan">name</span> = <span className="text-amber-400">"Bratabitan Banerjee"</span>;</p>
                <p><span className="text-accent">const</span> <span className="cyan">role</span> = <span className="text-amber-400">"Java Full Stack Developer"</span>;</p>
                <p className="text-muted-foreground mt-3">/* Hands-on experience building RESTful backends with Spring Boot, JWT auth, SQL & MongoDB. Focus on clean API design, CRUD ops, ORM, and scalable architecture. */</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <button className="bg-primary text-primary-foreground font-mono text-xs px-4 py-2 rounded"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                ./view-projects
              </button>
              <button className="border border-primary cyan font-mono text-xs px-4 py-2 rounded"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                ./contact-me
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {[
                { href: "tel:+919002649893", icon: Phone, label: "call" },
                { href: "mailto:banerjeebratabitan@gmail.com", icon: Mail, label: "email" },
                { href: "https://www.linkedin.com/in/bratabitanbanerjee", icon: Linkedin, label: "linkedin", ext: true },
                { href: "https://bratabitan.netlify.app", icon: ExternalLink, label: "portfolio", ext: true },
              ].map((item) => (
                <a key={item.label} href={item.href} target={item.ext ? "_blank" : undefined} rel={item.ext ? "noopener noreferrer" : undefined}
                  className="terminal-card flex items-center gap-1.5 py-1.5 px-3 text-xs font-mono text-muted-foreground hover:cyan">
                  <item.icon size={13} className="cyan" /> {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
