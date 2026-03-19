import { Mail, Phone, Linkedin, ExternalLink, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+91 9002649893", link: "tel:+919002649893" },
    { icon: Mail, label: "Email", value: "banerjeebratabitan@gmail.com", link: "mailto:banerjeebratabitan@gmail.com" },
    { icon: Linkedin, label: "LinkedIn", value: "bratabitanbanerjee", link: "https://www.linkedin.com/in/bratabitanbanerjee" },
    { icon: ExternalLink, label: "Portfolio", value: "bratabitan.netlify.app", link: "https://bratabitan.netlify.app" },
  ];

  return (
    <section id="contact" className="py-14 bg-secondary/50">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">
            Let's <span className="heading-accent">Connect</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-3">
            {contactInfo.map((contact, index) => (
              <a key={index} href={contact.link}
                target={contact.link.startsWith('http') ? '_blank' : undefined}
                rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card-base flex items-center gap-3">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <contact.icon className="text-primary" size={18} />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">{contact.label}</div>
                  <div className="text-xs text-muted-foreground">{contact.value}</div>
                </div>
              </a>
            ))}
            <div className="card-base flex items-center gap-3">
              <MapPin className="text-primary" size={18} />
              <span className="text-sm text-muted-foreground">Based in India, available for remote work.</span>
            </div>
          </div>

          <div className="card-base text-center flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-3 text-foreground">Let's Build Together</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Looking for backend-heavy projects to contribute to. Let's connect!
            </p>
            <div className="space-y-3">
              <a href="mailto:banerjeebratabitan@gmail.com"
                className="bg-primary text-primary-foreground font-medium rounded-lg px-6 py-2.5 text-sm w-full inline-flex items-center justify-center gap-2">
                <Mail size={16} /> Send Email
              </a>
              <a href="https://www.linkedin.com/in/bratabitanbanerjee" target="_blank" rel="noopener noreferrer"
                className="border border-primary text-primary font-medium rounded-lg px-6 py-2.5 text-sm w-full inline-flex items-center justify-center gap-2">
                <Linkedin size={16} /> Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
