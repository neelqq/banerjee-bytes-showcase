import { ExternalLink, Github, Play } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "e-commerce-app",
      year: "2025",
      desc: "Full-stack e-commerce with React.js + Spring Boot.",
      tech: ["React.js", "Spring Boot", "Java", "REST APIs"],
      links: [
        { label: "frontend", url: "https://github.com/neelqq/e-commerce-front-end", icon: ExternalLink },
        { label: "backend", url: "https://github.com/neelqq/e-commerce-back-end", icon: Github }
      ],
    },
    {
      title: "library-mgmt-system",
      year: "2024",
      desc: "Library system with React, Spring Boot, MongoDB.",
      tech: ["React", "Spring Boot", "MongoDB", "REST APIs"],
      links: [
        { label: "frontend", url: "https://github.com/neelqq/library-management-system-frontend", icon: ExternalLink },
        { label: "backend", url: "https://github.com/neelqq/library-management-system-backend", icon: Github },
        { label: "demo", url: "https://youtu.be/jGBUgKv0wK0", icon: Play }
      ],
    },
    {
      title: "news-mgmt-system",
      year: "2024",
      desc: "Secure news management with Spring Security + SQL.",
      tech: ["Spring Boot", "Spring Security", "SQL", "Java"],
      links: [
        { label: "github", url: "https://github.com/neelqq/news-management-system-backend-spring-boot", icon: Github }
      ],
    },
    {
      title: "car-driving-sim",
      year: "2025",
      desc: "Realistic driving simulator with Unreal Engine 5.",
      tech: ["Unreal Engine 5", "C++", "3D Physics"],
      links: [
        { label: "demo", url: "https://youtu.be/EaPGle-sY4U", icon: Play }
      ],
    }
  ];

  return (
    <section id="projects" className="py-12">
      <div className="section-container">
        <h2 className="text-2xl font-mono font-bold mb-6"><span className="cyan">##</span> projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {projects.map((p) => (
            <div key={p.title} className="terminal-card">
              <div className="terminal-header">
                <span className="terminal-dot bg-red-500"></span>
                <span className="terminal-dot bg-yellow-500"></span>
                <span className="terminal-dot bg-green-500"></span>
                <span className="text-xs text-muted-foreground ml-2 font-mono">{p.title}.ts</span>
                <span className="ml-auto text-xs cyan font-mono">{p.year}</span>
              </div>
              <p className="text-sm text-muted-foreground font-mono mb-3">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {p.tech.map((t) => <span key={t} className="skill-pill">{t}</span>)}
              </div>
              <div className="flex flex-wrap gap-2">
                {p.links.map((l) => (
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

export default Projects;
