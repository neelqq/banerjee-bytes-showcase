import { ExternalLink, Github, Play, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Web Application",
      year: "2025",
      description: "Full-stack e-commerce platform built with React.js frontend and Spring Boot backend, featuring user authentication, product management, and secure payment processing.",
      technologies: ["React.js", "Spring Boot", "Java", "REST APIs"],
      links: [
        { label: "Frontend", url: "https://github.com/neelqq/e-commerce-front-end", icon: ExternalLink },
        { label: "Backend", url: "https://github.com/neelqq/e-commerce-back-end", icon: Github }
      ],
      status: "Featured"
    },
    {
      title: "Attendance Management System",
      year: "2022", 
      description: "Comprehensive attendance tracking application with user management, real-time updates, and detailed reporting capabilities.",
      technologies: ["Java", "Android", "SQLite", "Material Design"],
      links: [
        { label: "GitHub", url: "https://github.com/neelqq/Attendance-Management-App", icon: Github }
      ],
      status: "Complete"
    },
    {
      title: "Weather Application",
      year: "2022",
      description: "Real-time weather application with location-based forecasting, interactive UI, and weather alerts functionality.",
      technologies: ["Java", "Weather API", "Android", "JSON"],
      links: [
        { label: "GitHub", url: "https://github.com/neelqq/weather-application-for-android", icon: Github }
      ],
      status: "Complete"
    },
    {
      title: "Car Driving Simulator",
      year: "2025",
      description: "Designed and developed a realistic car driving simulator using Unreal Engine 5. Implemented advanced vehicle physics, environmental interactions, and responsive controls to create an immersive driving experience. Focused on optimizing performance for smooth gameplay with high graphical fidelity.",
      technologies: ["Unreal Engine 5", "C++", "3D Physics", "Game Design"],
      links: [
        { label: "Demo Video", url: "https://www.youtube.com/watch?v=EaPGle-sY4U", icon: Play }
      ],
      status: "Featured"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Featured <span className="neon-text">Projects</span>
          </h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            A collection of applications and systems I've built using modern technologies
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