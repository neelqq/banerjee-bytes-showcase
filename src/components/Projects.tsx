import { ExternalLink, Github, Play } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Web Application",
      year: "2025",
      description: "Full-stack e-commerce platform with React.js frontend and Spring Boot backend.",
      technologies: ["React.js", "Spring Boot", "Java", "REST APIs"],
      links: [
        { label: "Frontend", url: "https://github.com/neelqq/e-commerce-front-end", icon: ExternalLink },
        { label: "Backend", url: "https://github.com/neelqq/e-commerce-back-end", icon: Github }
      ],
      status: "Featured"
    },
    {
      title: "Library Management System",
      year: "2024",
      description: "Full-stack library system with React, Spring Boot, and MongoDB.",
      technologies: ["React", "Spring Boot", "MongoDB", "REST APIs"],
      links: [
        { label: "Frontend", url: "https://github.com/neelqq/library-management-system-frontend", icon: ExternalLink },
        { label: "Backend", url: "https://github.com/neelqq/library-management-system-backend", icon: Github },
        { label: "Demo", url: "https://youtu.be/jGBUgKv0wK0", icon: Play }
      ],
      status: "Featured"
    },
    {
      title: "News Management System",
      year: "2024",
      description: "Secure news management with Spring Boot security and SQL database.",
      technologies: ["Spring Boot", "Spring Security", "SQL", "Java"],
      links: [
        { label: "GitHub", url: "https://github.com/neelqq/news-management-system-backend-spring-boot", icon: Github }
      ],
      status: "Complete"
    },
    {
      title: "Car Driving Simulator",
      year: "2025",
      description: "Realistic car driving simulator using Unreal Engine 5 with advanced physics.",
      technologies: ["Unreal Engine 5", "C++", "3D Physics"],
      links: [
        { label: "Demo Video", url: "https://youtu.be/EaPGle-sY4U", icon: Play }
      ],
      status: "Featured"
    }
  ];

  return (
    <section id="projects" className="py-14">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">
            Featured <span className="heading-accent">Projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="card-base">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                <span className="text-xs font-medium text-primary bg-accent px-2 py-1 rounded-full">{project.year}</span>
              </div>
              
              <p className="text-foreground-secondary text-sm mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="skill-pill text-xs">{tech}</span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.links.map((link, i) => (
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

export default Projects;
