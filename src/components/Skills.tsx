import { Code, Server, Layout, Database, Smartphone, Cpu } from 'lucide-react';

const skillCategories = [
  { title: "Languages", icon: Code, skills: ["Java", "JavaScript", "Kotlin", "Python", "C", "C++"] },
  { title: "Backend & API", icon: Server, skills: ["Spring Boot", "Spring Security", "REST API", "JWT Auth", "Spring AI", "RAG Architecture", "LLM API Integration", "Vector Databases"] },
  { title: "Frontend", icon: Layout, skills: ["React.js", "HTML", "CSS", "JavaScript"] },
  { title: "Databases", icon: Database, skills: ["MySQL", "PostgreSQL", "MongoDB", "JPA/Hibernate"] },
  { title: "Mobile", icon: Smartphone, skills: ["Android (Java & Kotlin)", "Firebase"] },
  { title: "Core CS", icon: Cpu, skills: ["DSA", "OOP", "Problem Solving"] },
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="section-container">
        <h2 className="section-heading">
          Technical <span className="gradient-text">Skills</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {skillCategories.map((cat, i) => (
            <div
              key={i}
              className="glass-card p-5 sm:p-6 rounded-xl group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box icon-box-sm group-hover:border-primary/30 transition-colors">
                  <cat.icon size={15} className="text-primary" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {cat.skills.map((skill, j) => (
                  <span key={j} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
