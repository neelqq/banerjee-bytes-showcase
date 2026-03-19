import { Award, Download } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Java Full Stack with React & Spring Boot",
      issuer: "Udemy",
      year: "2025",
      skills: ["Java", "Spring Boot", "React.js", "REST APIs", "MySQL"],
      links: [
        { label: "Certificate", url: "https://www.udemy.com/certificate/UC-1f932d8e-97c1-4912-b0a9-cdc17b25c404/", icon: Award },
        { label: "Drive Link", url: "https://drive.google.com/file/d/1yNLVUzUD46pJSlecPtf_QtydD9F9oeI9/view?usp=drive_link", icon: Download }
      ],
      image: "/lovable-uploads/03a48927-c34d-4be6-9a45-fdd437facfc5.png"
    },
    {
      title: "AI Tools and ChatGPT",
      issuer: "be10X",
      year: "2025",
      skills: ["AI Tools", "ChatGPT", "Prompt Engineering"],
      links: [
        { label: "Drive Link", url: "https://drive.google.com/file/d/1FWF3YyrnOceut6TGC1TCjckLCt7LSRFo/view?usp=sharing", icon: Download }
      ],
      image: "/lovable-uploads/50f2fc1f-1af1-44b1-aa47-50e7c799cc66.png"
    }
  ];

  return (
    <section id="certifications" className="py-14 bg-secondary/50">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">
            <span className="heading-accent">Certifications</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div key={index} className="card-base">
              {cert.image && (
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img src={cert.image} alt={cert.title} className="w-full h-40 object-cover" loading="lazy" />
                </div>
              )}
              <h3 className="text-lg font-semibold text-foreground mb-1">{cert.title}</h3>
              <p className="text-sm text-foreground-secondary mb-3">{cert.issuer} • {cert.year}</p>
              
              <div className="flex flex-wrap gap-1.5 mb-4">
                {cert.skills.map((skill, i) => (
                  <span key={i} className="skill-pill text-xs">{skill}</span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {cert.links.map((link, i) => (
                  <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-primary border border-primary/30 rounded-lg px-3 py-1.5 hover:bg-accent">
                    <link.icon size={14} /> {link.label}
                  </a>
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
