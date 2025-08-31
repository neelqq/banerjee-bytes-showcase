import { ExternalLink, Github, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Web Application",
      year: "2025",
      description: "Full-stack e-commerce platform built with React.js frontend and Spring Boot backend, featuring user authentication, product management, and secure payment processing.",
      technologies: ["React.js", "Spring Boot", "Java", "REST APIs"],
      links: [
        { label: "Frontend", url: "#", icon: ExternalLink },
        { label: "Backend", url: "#", icon: Github }
      ]
    },
    {
      title: "Attendance Management System",
      year: "2022", 
      description: "Comprehensive attendance tracking application with user management, real-time updates, and detailed reporting capabilities.",
      technologies: ["Java", "Android", "SQLite", "Material Design"],
      links: [
        { label: "GitHub", url: "#", icon: Github }
      ]
    },
    {
      title: "Weather Application",
      year: "2022",
      description: "Real-time weather application with location-based forecasting, interactive UI, and weather alerts functionality.",
      technologies: ["Java", "Weather API", "Android", "JSON"],
      links: [
        { label: "GitHub", url: "#", icon: Github }
      ]
    },
    {
      title: "Car Driving Simulator",
      year: "2025",
      description: "Immersive 3D car driving simulator with realistic physics, multiple vehicle options, and dynamic environments.",
      technologies: ["Unity", "C#", "3D Physics", "Game Design"],
      links: [
        { label: "Demo Video", url: "#", icon: Play }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            A collection of applications and systems I've built using modern technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-card group">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                  {project.year}
                </span>
              </div>
              
              <p className="text-foreground-secondary mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="skill-tag">
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

export default Projects;