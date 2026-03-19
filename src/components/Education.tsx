import { GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    { degree: "MCA", institution: "Lovely Professional University", period: "2023–2025", grade: "CGPA: 7.8" },
    { degree: "BCA", institution: "Burdwan Institute of Mgmt & CS", period: "2019–2022", grade: "87%" },
    { degree: "12th", institution: "Sehara Bazar C.K. Institution", period: "2019", grade: "62%" },
    { degree: "10th", institution: "Sehara Bazar C.K. Institution", period: "2017", grade: "52%" },
  ];

  const languages = [
    { lang: "English", level: "Proficient" },
    { lang: "Hindi", level: "Fluent" },
    { lang: "Bengali", level: "Native" },
  ];

  return (
    <section id="education" className="py-12">
      <div className="section-container">
        <h2 className="text-2xl font-mono font-bold mb-6"><span className="cyan">##</span> education</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 space-y-3">
            {education.map((e) => (
              <div key={e.degree} className="terminal-card flex items-start gap-3">
                <GraduationCap size={18} className="cyan mt-0.5 flex-shrink-0" />
                <div className="font-mono">
                  <span className="text-sm font-semibold text-foreground">{e.degree}</span>
                  <span className="text-xs text-muted-foreground"> — {e.institution}</span>
                  <div className="text-xs text-muted-foreground">{e.period} | <span className="cyan">{e.grade}</span></div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-sm font-mono green mb-3">/languages</h3>
            <div className="space-y-2">
              {languages.map((l) => (
                <div key={l.lang} className="terminal-card flex justify-between py-2 px-4 text-xs font-mono">
                  <span>{l.lang}</span><span className="cyan">{l.level}</span>
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
