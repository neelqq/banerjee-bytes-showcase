import { Award, Download } from 'lucide-react';

const certs = [
  {
    title: "Java Full Stack with React & Spring Boot",
    issuer: "Udemy • 2025",
    links: [
      { label: "Certificate", url: "https://www.udemy.com/certificate/UC-1f932d8e-97c1-4912-b0a9-cdc17b25c404/", icon: Award },
      { label: "Drive", url: "https://drive.google.com/file/d/1yNLVUzUD46pJSlecPtf_QtydD9F9oeI9/view?usp=drive_link", icon: Download },
    ],
    image: "/lovable-uploads/03a48927-c34d-4be6-9a45-fdd437facfc5.png",
  },
  {
    title: "AI Tools and ChatGPT",
    issuer: "be10X • 2025",
    links: [
      { label: "Drive", url: "https://drive.google.com/file/d/1FWF3YyrnOceut6TGC1TCjckLCt7LSRFo/view?usp=sharing", icon: Download },
    ],
    image: "/lovable-uploads/50f2fc1f-1af1-44b1-aa47-50e7c799cc66.png",
  },
];

const Certifications = () => (
  <section id="certifications" className="py-8 bg-secondary/30">
    <div className="section-container">
      <h2 className="text-xl font-bold mb-6 text-center"><span className="heading-accent">Certifications</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
        {certs.map((c, i) => (
          <div key={i} className="card-base">
            <img src={c.image} alt={c.title} className="w-full h-32 object-cover rounded mb-2" loading="lazy" />
            <h3 className="text-sm font-semibold text-foreground">{c.title}</h3>
            <p className="text-xs text-muted-foreground mb-2">{c.issuer}</p>
            <div className="flex gap-1.5">
              {c.links.map((l, j) => (
                <a key={j} href={l.url} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-primary border border-primary/20 rounded px-2 py-1 hover:bg-accent">
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

export default Certifications;
