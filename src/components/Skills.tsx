import { useEffect, useRef, useState } from 'react';
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
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills">
      <div ref={ref} className={`section-container transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="section-heading">
          Technical <span className="gradient-text">Skills</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {skillCategories.map((cat, i) => (
            <div
              key={i}
              className="glass-card p-5 sm:p-6 rounded-xl group hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${i * 0.08}s` }}
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
