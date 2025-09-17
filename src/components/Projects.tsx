import { ExternalLink, Github, Play, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
      description: "Full-stack library management system with React frontend, Spring Boot backend, and MongoDB.",
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
      description: "Secure news management system with Spring Boot security and SQL database.",
      technologies: ["Spring Boot", "Spring Security", "SQL", "Java"],
      links: [
        { label: "GitHub", url: "https://github.com/neelqq/news-management-system-backend-spring-boot", icon: Github }
      ],
      status: "Complete"
    },
    {
      title: "Car Driving Simulator",
      year: "2025",
      description: "Realistic car driving simulator game using Unreal Engine 5 with advanced physics.",
      technologies: ["Unreal Engine 5", "C++", "3D Physics"],
      links: [
        { label: "Demo Video", url: "https://youtu.be/EaPGle-sY4U", icon: Play }
      ],
      status: "Featured"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Featured <span className="neon-text">Projects</span>
          </h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Recent applications I've built
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-card group hover:scale-[1.02]">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-3">
                  <Zap className="text-primary w-6 h-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                    {project.year}
                  </span>
                  {project.status === "Featured" && (
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full border border-primary/20">
                      {project.status}
                    </span>
                  )}
                </div>
              </div>
              
              <p className="text-foreground-secondary mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="skill-pill">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-3">
                {project.links.map((link, linkIndex) => (
                  <Button
                    key={linkIndex}
                    variant="outline"
                    size="sm"
                    className="border-primary/50 text-primary hover:bg-primary/10 backdrop-blur-sm hover:scale-105 transition-all"
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

export default Projects;