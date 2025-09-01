import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Lovely Professional University",
      period: "2023 – 2025",
      grade: "CGPA: 7.8",
      description: "Advanced studies in computer applications with focus on full-stack development, software engineering, and emerging technologies."
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Burdwan Institute of Management & Computer Science",
      period: "2019 – 2022",
      grade: "87%",
      description: "Comprehensive foundation in computer science, programming languages, and software development methodologies."
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "Sehara Bazar C.K. Institution",
      period: "2019",
      grade: "62%",
      description: "Science stream with mathematics, focusing on analytical and problem-solving skills."
    },
    {
      degree: "Secondary (10th)",
      institution: "Sehara Bazar C.K. Institution", 
      period: "2017",
      grade: "52%",
      description: "Foundation education with strong emphasis on science and mathematics."
    }
  ];

  const languages = [
    { language: "English", proficiency: "Proficient" },
    { language: "Hindi", proficiency: "Fluent" },
    { language: "Bengali", proficiency: "Native" }
  ];

  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Education & <span className="gradient-text">Languages</span>
          </h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Academic journey and linguistic capabilities that shape my professional growth
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-8 text-foreground">Academic Qualifications</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="portfolio-card">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        {edu.degree}
                      </h4>
                      <div className="text-primary font-medium mb-2">
                        {edu.institution}
                      </div>
                      <div className="flex items-center space-x-4 text-foreground-secondary mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{edu.period}</span>
                        </div>
                        {edu.grade && (
                          <div className="text-accent font-medium">
                            {edu.grade}
                          </div>
                        )}
                      </div>
                      <p className="text-foreground-secondary leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-foreground">Languages</h3>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="portfolio-card">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{lang.language}</span>
                    <span className="text-primary font-medium">{lang.proficiency}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;