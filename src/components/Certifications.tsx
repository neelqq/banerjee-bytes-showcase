import { Award, ExternalLink, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Certifications = () => {
  const certifications = [
    {
      title: "Java Full Stack with React & Spring Boot",
      issuer: "Udemy",
      year: "2025",
      description: "Comprehensive full-stack development course covering React.js frontend, Spring Boot backend, RESTful APIs, and database integration.",
      skills: ["Java", "Spring Boot", "React.js", "REST APIs", "MySQL"],
      links: [
        { label: "Certificate", url: "#", icon: Award },
        { label: "Drive Link", url: "#", icon: Download }
      ]
    },
    {
      title: "AI Tools and ChatGPT",
      issuer: "be10X",
      year: "2025", 
      description: "Advanced certification in AI-assisted development, prompt engineering, and leveraging AI tools for enhanced productivity in software development.",
      skills: ["AI Tools", "ChatGPT", "Prompt Engineering", "Productivity"],
      links: [
        { label: "Drive Link", url: "#", icon: Download }
      ]
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="gradient-text">Certifications</span> & Training
          </h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div key={index} className="portfolio-card group">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-foreground-secondary">
                      <span>{cert.issuer}</span>
                      <span>•</span>
                      <span className="text-accent font-medium">{cert.year}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-foreground-secondary mb-6 leading-relaxed">
                {cert.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {cert.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-3">
                {cert.links.map((link, linkIndex) => (
                  <Button
                    key={linkIndex}
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <link.icon size={16} className="mr-2" />
                      {link.label}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;