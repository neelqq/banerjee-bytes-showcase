import { Award, Download } from 'lucide-react';

const Certifications = () => {
  const certs = [
    {
      title: "Java Full Stack with React & Spring Boot",
      issuer: "Udemy", year: "2025",
      skills: ["Java", "Spring Boot", "React.js", "REST APIs", "MySQL"],
      links: [
        { label: "cert", url: "https://www.udemy.com/certificate/UC-1f932d8e-97c1-4912-b0a9-cdc17b25c404/", icon: Award },
        { label: "drive", url: "https://drive.google.com/file/d/1yNLVUzUD46pJSlecPtf_QtydD9F9oeI9/view?usp=drive_link", icon: Download }
      ],
      image: "/lovable-uploads/03a48927-c34d-4be6-9a45-fdd437facfc5.png"
    },
    {
      title: "AI Tools and ChatGPT",
      issuer: "be10X", year: "2025",
      skills: ["AI Tools", "ChatGPT", "Prompt Engineering"],
      links: [
        { label: "drive", url: "https://drive.google.com/file/d/1FWF3YyrnOceut6TGC1TCjckLCt7LSRFo/view?usp=sharing", icon: Download }
      ],
      image: "/lovable-uploads/50f2fc1f-1af1-44b1-aa47-50e7c799cc66.png"
    }
  ];

  return (
    <section id="certifications" className="py-12 bg-secondary/30">
      <div className="section-container">
        <h2 className="text-2xl font-mono font-bold mb-6"><span className="cyan">##</span> certifications</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {certs.map((c) => (
            <div key={c.title} className="terminal-card">
              {c.image && <img src={c.image} alt={c.title} className="w-full h-36 object-cover rounded mb-3" loading="lazy" />}
              <h3 className="text-sm font-mono font-semibold text-foreground">{c.title}</h3>
              <p className="text-xs text-muted-foreground font-mono mb-2">{c.issuer} • {c.year}</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {c.skills.map((s) => <span key={s} className="skill-pill">{s}</span>)}
              </div>
              <div className="flex gap-2">
                {c.links.map((l) => (
                  <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono cyan border border-border rounded px-2 py-1 hover:bg-secondary">
                    <l.icon size={12} /> {l.label}
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
