const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "JavaScript", "Kotlin", "C", "C++"],
    },
    {
      title: "Backend & API",
      skills: ["Spring Boot", "Spring Security", "REST API Design", "JWT Authentication", "Generative AI Integration (Spring AI)", "RAG Architecture", "LLM API Integration", "Vector Databases"],
    },
    {
      title: "Frontend",
      skills: ["React.js", "HTML", "CSS", "JavaScript", "JSON"],
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "JPA/Hibernate", "API Caching"],
    },
    {
      title: "Mobile",
      skills: ["Android (Java & Kotlin)", "XML UI Design", "Firebase Integration"],
    },
    {
      title: "Core CS",
      skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "Problem Solving"],
    },
  ];

  return (
    <section id="skills" className="py-14 bg-secondary/50">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">
            Technical <span className="heading-accent">Skills</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="card-base">
              <h3 className="text-base font-semibold text-foreground mb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-pill text-xs">
                    {skill}
                  </span>
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
