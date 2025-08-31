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
    <section id="contact" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Ready to collaborate on your next project? I'm always open to discussing new opportunities 
            and innovative ideas. Let's build something amazing together!
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
                  className="portfolio-card flex items-center space-x-4 hover:bg-primary hover:text-primary-foreground group transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-colors">
                    <contact.icon className="text-primary group-hover:text-primary-foreground" size={24} />
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
            <div className="portfolio-card text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="text-white" size={32} />
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Ready to Start a Project?
              </h3>
              
              <p className="text-foreground-secondary mb-8 leading-relaxed">
                Whether you need a full-stack web application, mobile app, or want to explore 
                AI-enhanced solutions, I'm here to help bring your ideas to life.
              </p>
              
              <div className="space-y-4">
                <Button 
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  asChild
                >
                  <a href="mailto:banerjeebratabitan@gmail.com">
                    <Mail size={20} className="mr-2" />
                    Send me an Email
                  </a>
                </Button>
                
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