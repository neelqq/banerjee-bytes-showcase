import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    { degree: "Master of Computer Applications (MCA)", institution: "Lovely Professional University", period: "2023 – 2025", grade: "CGPA: 7.8" },
    { degree: "Bachelor of Computer Applications (BCA)", institution: "Burdwan Institute of Management & Computer Science", period: "2019 – 2022", grade: "87%" },
    { degree: "Higher Secondary (12th)", institution: "Sehara Bazar C.K. Institution", period: "2019", grade: "62%" },
    { degree: "Secondary (10th)", institution: "Sehara Bazar C.K. Institution", period: "2017", grade: "52%" },
  ];

  const languages = [
    { language: "English", proficiency: "Proficient" },
    { language: "Hindi", proficiency: "Fluent" },
    { language: "Bengali", proficiency: "Native" },
  ];

  return (
    <section id="education" className="py-14">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">
            Education & <span className="heading-accent">Languages</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="card-base flex items-start gap-3">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">{edu.degree}</h4>
                  <p className="text-primary text-sm">{edu.institution}</p>
                  <div className="flex items-center gap-3 text-muted-foreground text-xs mt-1">
                    <span className="flex items-center gap-1"><Calendar size={12} />{edu.period}</span>
                    <span className="text-primary font-medium">{edu.grade}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-foreground mb-2">Languages</h3>
            {languages.map((lang, index) => (
              <div key={index} className="card-base flex justify-between items-center py-3">
                <span className="text-sm font-medium text-foreground">{lang.language}</span>
                <span className="text-sm text-primary">{lang.proficiency}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
