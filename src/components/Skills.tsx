const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Kotlin", "C", "C++", "JavaScript"]
    },
    {
      title: "Frontend Development",
      skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"]
    },
    {
      title: "Backend Development", 
      skills: ["Spring Boot", "RESTful APIs", "Microservices", "SQL"]
    },
    {
      title: "Mobile Development",
      skills: ["Android (Java)", "Android (Kotlin)", "Mobile UI/UX"]
    },
    {
      title: "Game Development",
      skills: ["Unity", "Unreal Engine 5", "Game Design", "3D Modeling"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Firebase", "Git", "AI Tools (ChatGPT)", "GitHub Copilot", "Lovable AI"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="portfolio-card">
              <h3 className="text-xl font-semibold mb-6 text-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
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