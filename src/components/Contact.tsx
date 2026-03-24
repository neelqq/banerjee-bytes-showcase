import { Mail, Phone, Linkedin, ExternalLink } from 'lucide-react';

const links = [
  { icon: Phone, label: "+91 9002649893", href: "tel:+919002649893" },
  { icon: Mail, label: "banerjeebratabitan@gmail.com", href: "mailto:banerjeebratabitan@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/bratabitanbanerjee" },
  { icon: ExternalLink, label: "Portfolio", href: "https://bratabitan.netlify.app" },
];

const Contact = () => (
  <section id="contact" className="py-8 bg-secondary/30">
    <div className="section-container text-center">
      <h2 className="text-xl font-bold mb-4">Let's <span className="heading-accent">Connect</span></h2>
      <p className="text-xs text-muted-foreground mb-4">Based in India • Available for remote work</p>
      <div className="flex flex-wrap gap-2 justify-center max-w-md mx-auto">
        {links.map((l, i) => (
          <a key={i} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
            className="card-base inline-flex items-center gap-1.5 text-xs py-2 px-3">
            <l.icon size={14} className="text-primary" /> {l.label}
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
