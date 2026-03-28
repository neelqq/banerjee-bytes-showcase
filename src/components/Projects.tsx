import { ExternalLink, Github, Play, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    title: "AI Chemist – Intelligent Medicine Assistant",
    desc: "Production-grade RAG system retrieving medicines from MongoDB Atlas vector store based on symptoms. JWT auth with Spring Security, Ollama (Llama3) via Spring AI for conversational recommendations, and full data pipeline from embedding generation to semantic search.",
    tech: ["Java", "Spring Boot", "Spring AI", "React", "MongoDB Atlas", "Ollama (Llama3)"],
    links: [],
    featured: true,
  },
  {
    title: "News Management System",
    desc: "RESTful APIs with CRUD for news & users, JWT authentication with Spring Security, JPA/Hibernate for data persistence.",
    tech: ["Java", "Spring Boot", "Spring Security", "SQL"],
    links: [
      { label: "GitHub", url: "https://github.com/neelqq/news-management-system-backend-spring-boot", icon: Github },
    ],
    featured: false,
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
    featured: false,
  },
  {
    title: "Attendance Management App",
    desc: "Android app for student/employee attendance tracking with Firebase real-time backend and intuitive XML UI.",
    tech: ["Android", "Java", "Kotlin", "XML", "Firebase"],
    links: [
      { label: "GitHub", url: "https://github.com/neelqq/Attendance-Management-App", icon: Github },
    ],
    featured: false,
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

  const featured = projects.find(p => p.featured);
  const others = projects.filter(p => !p.featured);

  return (
    <section id="projects">
      <div ref={ref} className={`section-container transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="section-heading">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        {/* Featured project — full width */}
        {featured && (
          <div className="glass-card p-5 sm:p-7 lg:p-8 rounded-xl mb-5 sm:mb-6 group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 opacity-[0.03] pointer-events-none"
              style={{ background: 'radial-gradient(circle, hsl(192 100% 50%), transparent 70%)' }} />
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={16} className="text-accent" />
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">Featured</span>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-3">{featured.title}</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-5 max-w-3xl">{featured.desc}</p>
            <div className="flex flex-wrap gap-2">
              {featured.tech.map((t, j) => (
                <span key={j} className="skill-pill">{t}</span>
              ))}
            </div>
          </div>
        )}

        {/* Other projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {others.map((p, i) => (
            <div
              key={i}
              className="glass-card p-5 sm:p-6 rounded-xl group hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <h3 className="text-sm sm:text-base font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed flex-1">{p.desc}</p>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                {p.tech.map((t, j) => (
                  <span key={j} className="skill-pill">{t}</span>
                ))}
              </div>

              {p.links.length > 0 && (
                <div className="flex flex-wrap gap-3 pt-3 border-t border-border/30">
                  {p.links.map((l, j) => (
                    <a
                      key={j}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-primary hover:text-accent transition-colors duration-200 font-medium"
                    >
                      <l.icon size={14} /> {l.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
