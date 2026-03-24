import { ExternalLink, Github, Play } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    title: "News Management System",
    desc: "RESTful APIs with CRUD for news & users, JWT authentication with Spring Security, JPA/Hibernate for data persistence.",
    tech: ["Java", "Spring Boot", "Spring Security", "SQL"],
    links: [
      { label: "GitHub", url: "https://github.com/neelqq/news-management-system-backend-spring-boot", icon: Github },
    ],
  },
  {
    title: "Library Management System",
    desc: "Full-stack app with Redux Toolkit state management, REST APIs with CRUD operations, MongoDB for flexible data storage.",
    tech: ["React.js", "Tailwind CSS", "Redux Toolkit", "Spring Boot", "MongoDB"],
    links: [
      { label: "Frontend", url: "https://github.com/neelqq/library-management-system-frontend", icon: ExternalLink },
      { label: "Backend", url: "https://github.com/neelqq/library-management-system-backend", icon: Github },
      { label: "Demo", url: "https://youtu.be/jGBUgKv0wK0", icon: Play },
    ],
  },
  {
    title: "Attendance Management App",
    desc: "Android app for student/employee attendance tracking with Firebase real-time backend and intuitive XML UI.",
    tech: ["Android", "Java", "Kotlin", "XML", "Firebase"],
    links: [
      { label: "GitHub", url: "https://github.com/neelqq/Attendance-Management-App", icon: Github },
    ],
  },
];

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" className="py-16">
      <div ref={ref} className={`section-container transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-3xl font-bold mb-10 text-center">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <div
              key={i}
              className="glass-card p-5 rounded-lg group hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_hsla(190,100%,50%,0.1)]"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-primary group-hover:shadow-[0_0_8px_hsl(190,100%,50%)] transition-all" />
                <h3 className="text-base font-semibold text-foreground">{p.title}</h3>
              </div>

              <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tech.map((t, j) => (
                  <span key={j} className="skill-pill text-[10px] px-2 py-1">{t}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-3 border-t border-border/50">
                {p.links.map((l, j) => (
                  <a
                    key={j}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-accent transition-colors duration-200"
                  >
                    <l.icon size={13} /> {l.label}
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
