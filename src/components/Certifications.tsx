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
        { label: "Certificate", url: "https://www.udemy.com/certificate/UC-1f932d8e-97c1-4912-b0a9-cdc17b25c404/", icon: Award },
        { label: "Drive Link", url: "https://drive.google.com/file/d/1yNLVUzUD46pJSlecPtf_QtydD9F9oeI9/view?usp=drive_link", icon: Download }
      ],
      badge: "Professional",
      image: "/lovable-uploads/03a48927-c34d-4be6-9a45-fdd437facfc5.png"
    },
    {
      title: "AI Tools and ChatGPT",
      issuer: "be10X",
      year: "2025", 
      description: "Advanced certification in AI-assisted development, prompt engineering, and leveraging AI tools for enhanced productivity in software development.",
      skills: ["AI Tools", "ChatGPT", "Prompt Engineering", "Productivity"],
      links: [
        { label: "Drive Link", url: "https://drive.google.com/file/d/1FWF3YyrnOceut6TGC1TCjckLCt7LSRFo/view?usp=sharing", icon: Download }
      ],
      badge: "Innovation",
      image: "/lovable-uploads/50f2fc1f-1af1-44b1-aa47-50e7c799cc66.png"
    }
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="neon-text">Certifications</span> & Training
          </h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div key={index} className="glass-card group">
              {cert.image && (
                <div className="mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={`${cert.title} Certificate`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                    <Award className="text-primary" size={28} />
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