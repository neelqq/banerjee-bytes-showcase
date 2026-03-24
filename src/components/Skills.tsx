const skills = [
  { title: "Languages", items: ["Java", "JavaScript", "Kotlin", "C", "C++"] },
  { title: "Backend & API", items: ["Spring Boot", "Spring Security", "REST API Design", "JWT Auth", "Spring AI", "RAG Architecture", "LLM API Integration", "Vector DBs"] },
  { title: "Frontend", items: ["React.js", "HTML", "CSS", "JavaScript", "JSON"] },
  { title: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "JPA/Hibernate", "API Caching"] },
  { title: "Mobile", items: ["Android (Java & Kotlin)", "XML UI", "Firebase"] },
  { title: "Core CS", items: ["DSA", "OOP", "Problem Solving"] },
];

const Skills = () => (
  <section id="skills" className="py-8 bg-secondary/30">
    <div className="section-container">
      <h2 className="text-xl font-bold mb-6 text-center">Technical <span className="heading-accent">Skills</span></h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {skills.map((cat, i) => (
          <div key={i} className="card-base">
            <h3 className="text-xs font-semibold text-foreground mb-2">{cat.title}</h3>
            <div className="flex flex-wrap gap-1">
              {cat.items.map((s, j) => <span key={j} className="skill-pill">{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
