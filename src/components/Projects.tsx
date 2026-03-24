import { ExternalLink, Github, Play } from 'lucide-react';

const projects = [
  {
    title: "E-commerce Web App",
    desc: "Full-stack e-commerce with React.js frontend and Spring Boot backend.",
    tech: ["React.js", "Spring Boot", "REST APIs"],
    links: [
      { label: "Frontend", url: "https://github.com/neelqq/e-commerce-front-end", icon: ExternalLink },
      { label: "Backend", url: "https://github.com/neelqq/e-commerce-back-end", icon: Github },
    ],
  },
  {
    title: "Library Management System",
    desc: "Full-stack library system with React, Spring Boot, and MongoDB.",
    tech: ["React", "Spring Boot", "MongoDB"],
    links: [
      { label: "Frontend", url: "https://github.com/neelqq/library-management-system-frontend", icon: ExternalLink },
      { label: "Backend", url: "https://github.com/neelqq/library-management-system-backend", icon: Github },
      { label: "Demo", url: "https://youtu.be/jGBUgKv0wK0", icon: Play },
    ],
  },
  {
    title: "News Management System",
    desc: "Secure news management with Spring Boot Security and SQL.",
    tech: ["Spring Boot", "Spring Security", "SQL"],
    links: [
      { label: "GitHub", url: "https://github.com/neelqq/news-management-system-backend-spring-boot", icon: Github },
    ],
  },
  {
    title: "Car Driving Simulator",
    desc: "Realistic driving simulator using Unreal Engine 5 with advanced physics.",
    tech: ["Unreal Engine 5", "C++", "3D Physics"],
    links: [
      { label: "Demo", url: "https://youtu.be/EaPGle-sY4U", icon: Play },
    ],
  },
];

const Projects = () => (
  <section id="projects" className="py-8">
    <div className="section-container">
      <h2 className="text-xl font-bold mb-6 text-center">Featured <span className="heading-accent">Projects</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {projects.map((p, i) => (
          <div key={i} className="card-base">
            <h3 className="text-sm font-semibold text-foreground mb-1">{p.title}</h3>
            <p className="text-xs text-muted-foreground mb-2">{p.desc}</p>
            <div className="flex flex-wrap gap-1 mb-2">
              {p.tech.map((t, j) => <span key={j} className="skill-pill">{t}</span>)}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {p.links.map((l, j) => (
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

export default Projects;
