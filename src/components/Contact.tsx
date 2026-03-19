import { Mail, Phone, Linkedin, ExternalLink, MapPin } from 'lucide-react';

const Contact = () => {
  const links = [
    { icon: Phone, label: "phone", value: "+91 9002649893", href: "tel:+919002649893" },
    { icon: Mail, label: "email", value: "banerjeebratabitan@gmail.com", href: "mailto:banerjeebratabitan@gmail.com" },
    { icon: Linkedin, label: "linkedin", value: "bratabitanbanerjee", href: "https://www.linkedin.com/in/bratabitanbanerjee", ext: true },
    { icon: ExternalLink, label: "portfolio", value: "bratabitan.netlify.app", href: "https://bratabitan.netlify.app", ext: true },
  ];

  return (
    <section id="contact" className="py-12 bg-secondary/30">
      <div className="section-container">
        <h2 className="text-2xl font-mono font-bold mb-6"><span className="cyan">##</span> contact</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="space-y-2">
            {links.map((c) => (
              <a key={c.label} href={c.href} target={c.ext ? "_blank" : undefined} rel={c.ext ? "noopener noreferrer" : undefined}
                className="terminal-card flex items-center gap-3 py-3">
                <c.icon size={16} className="cyan flex-shrink-0" />
                <div className="font-mono">
                  <div className="text-xs text-muted-foreground">{c.label}</div>
                  <div className="text-sm text-foreground">{c.value}</div>
                </div>
              </a>
            ))}
            <div className="terminal-card flex items-center gap-3 py-3">
              <MapPin size={16} className="cyan flex-shrink-0" />
              <span className="text-xs text-muted-foreground font-mono">India • Open to remote</span>
            </div>
          </div>

          <div className="terminal-card text-center flex flex-col justify-center">
            <div className="terminal-header justify-center">
              <span className="terminal-dot bg-red-500"></span>
              <span className="terminal-dot bg-yellow-500"></span>
              <span className="terminal-dot bg-green-500"></span>
            </div>
            <p className="text-sm font-mono cyan mb-1">$ echo "Let's build together"</p>
            <p className="text-xs font-mono text-muted-foreground mb-4">Ready for backend-heavy projects</p>
            <div className="space-y-2">
              <a href="mailto:banerjeebratabitan@gmail.com"
                className="bg-primary text-primary-foreground font-mono text-xs px-4 py-2 rounded w-full inline-flex items-center justify-center gap-1.5">
                <Mail size={14} /> ./send-email
              </a>
              <a href="https://www.linkedin.com/in/bratabitanbanerjee" target="_blank" rel="noopener noreferrer"
                className="border border-primary cyan font-mono text-xs px-4 py-2 rounded w-full inline-flex items-center justify-center gap-1.5">
                <Linkedin size={14} /> ./connect-linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
