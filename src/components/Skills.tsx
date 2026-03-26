import { useEffect, useRef, useState } from 'react';

const skillCategories = [
  { title: "Languages", skills: ["Java", "JavaScript", "Kotlin", "Python", "C", "C++"] },
  { title: "Backend & API", skills: ["Spring Boot", "Spring Security", "REST API", "JWT Auth", "Spring AI", "RAG Architecture", "LLM API Integration", "Vector Databases"] },
  { title: "Frontend", skills: ["React.js", "HTML", "CSS", "JavaScript"] },
  { title: "Databases", skills: ["MySQL", "PostgreSQL", "MongoDB", "JPA/Hibernate"] },
  { title: "Mobile", skills: ["Android (Java & Kotlin)", "Firebase"] },
  { title: "Core CS", skills: ["DSA", "OOP", "Problem Solving"] },
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
      <div ref={ref} className={`section-container transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="section-heading">
          Technical <span className="gradient-text">Skills</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {skillCategories.map((cat, i) => (
            <div key={i} className="glass-card p-3 sm:p-4 lg:p-5 rounded-lg hover:border-primary/30 transition-all duration-300 group">
              <h3 className="text-xs sm:text-sm font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:shadow-[0_0_8px_hsl(190,100%,50%,0.6)] transition-all" />
                {cat.title}
              </h3>
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
