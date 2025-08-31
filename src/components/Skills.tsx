const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Kotlin", "C", "C++", "JavaScript"],
      icon: "💻"
    },
    {
      title: "Frontend Development",
      skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
      icon: "🎨"
    },
    {
      title: "Backend Development", 
      skills: ["Spring Boot", "RESTful APIs", "Microservices", "SQL"],
      icon: "⚙️"
    },
    {
      title: "Mobile Development",
      skills: ["Android (Java)", "Android (Kotlin)", "Mobile UI/UX"],
      icon: "📱"
    },
    {
      title: "Game Development",
      skills: ["Unity", "Unreal Engine 5", "Game Design", "3D Modeling"],
      icon: "🎮"
    },
    {
      title: "Tools & Platforms",
      skills: ["Firebase", "Git", "AI Tools (ChatGPT)", "GitHub Copilot", "Lovable AI"],
      icon: "🛠️"
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Technical <span className="neon-text">Skills</span>
          </h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card group">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4 group-hover:scale-110 transition-transform">{category.icon}</span>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-pill">
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