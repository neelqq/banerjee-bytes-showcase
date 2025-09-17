import { Mail, Phone, Linkedin, ExternalLink, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9002649893",
      link: "tel:+919002649893"
    },
    {
      icon: Mail,
      label: "Email",
      value: "banerjeebratabitan@gmail.com",
      link: "mailto:banerjeebratabitan@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "bratabitanbanerjee",
      link: "https://www.linkedin.com/in/bratabitanbanerjee"
    },
    {
      icon: ExternalLink,
      label: "Portfolio",
      value: "bratabitan.netlify.app",
      link: "https://bratabitan.netlify.app"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's <span className="neon-text">Connect</span>
          </h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Let's collaborate on your next project!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-foreground">Get in Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  target={contact.link.startsWith('http') ? '_blank' : undefined}
                  rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="glass-card flex items-center space-x-4 hover:bg-primary/10 group transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-primary/10 group-hover:bg-primary/20 rounded-2xl flex items-center justify-center transition-colors border border-primary/20">
                    <contact.icon className="text-primary group-hover:scale-110 transition-transform" size={28} />
                  </div>
                  <div>
                    <div className="font-medium text-foreground group-hover:text-primary-foreground">
                      {contact.label}
                    </div>
                    <div className="text-foreground-secondary group-hover:text-primary-foreground/80">
                      {contact.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <Card className="p-6 mt-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="text-primary" size={20} />
                <span className="font-medium text-foreground">Location</span>
              </div>
              <p className="text-foreground-secondary">
                Based in India, available for remote work and collaboration worldwide.
              </p>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col justify-center">
            <div className="glass-card text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-primary/25">
                <Send className="text-white" size={36} />
              </div>
              
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Let's Build Together
              </h3>
              
              <p className="text-foreground-secondary mb-10 leading-relaxed">
                Whether you need a full-stack web application, mobile app, or want to explore 
                AI-enhanced solutions, I'm here to help bring your ideas to life.
              </p>
              
              <div className="space-y-4">
                <a href="mailto:banerjeebratabitan@gmail.com" className="glow-button w-full inline-flex items-center justify-center">
                  <Mail size={20} className="mr-2" />
                  Send me an Email
                </a>
                
                <Button 
                  variant="outline"
                  size="lg"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/bratabitanbanerjee" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={20} className="mr-2" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;