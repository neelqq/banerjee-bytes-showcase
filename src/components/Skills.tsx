const Skills = () => {
  const categories = [
    { title: "languages", skills: ["Java", "JavaScript", "Kotlin", "C", "C++"] },
    { title: "backend_&_api", skills: ["Spring Boot", "Spring Security", "REST API Design", "JWT Auth", "Spring AI", "RAG Architecture", "LLM API Integration", "Vector DBs"] },
    { title: "frontend", skills: ["React.js", "HTML", "CSS", "JavaScript", "JSON"] },
    { title: "databases", skills: ["MySQL", "PostgreSQL", "MongoDB", "JPA/Hibernate", "API Caching"] },
    { title: "mobile", skills: ["Android (Java & Kotlin)", "XML UI Design", "Firebase"] },
    { title: "core_cs", skills: ["DSA", "OOP", "Problem Solving"] },
  ];

  return (
    <section id="skills" className="py-12 bg-secondary/30">
      <div className="section-container">
        <h2 className="text-2xl font-mono font-bold mb-6"><span className="cyan">##</span> skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <div key={cat.title} className="terminal-card">
              <h3 className="text-sm font-mono green mb-3">/{cat.title}</h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((s) => (
                  <span key={s} className="skill-pill">{s}</span>
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
