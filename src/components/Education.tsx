const education = [
  { degree: "MCA", school: "Lovely Professional University", year: "2023–2025", grade: "CGPA: 7.8" },
  { degree: "BCA", school: "Burdwan Institute of Management & CS", year: "2019–2022", grade: "87%" },
  { degree: "12th", school: "Sehara Bazar C.K. Institution", year: "2019", grade: "62%" },
  { degree: "10th", school: "Sehara Bazar C.K. Institution", year: "2017", grade: "52%" },
];

const languages = [
  { lang: "English", level: "Proficient" },
  { lang: "Hindi", level: "Fluent" },
  { lang: "Bengali", level: "Native" },
];

const Education = () => (
  <section id="education" className="py-8">
    <div className="section-container">
      <h2 className="text-xl font-bold mb-6 text-center">Education & <span className="heading-accent">Languages</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="md:col-span-2 space-y-2">
          {education.map((e, i) => (
            <div key={i} className="card-base flex justify-between items-center">
              <div>
                <h4 className="text-xs font-semibold text-foreground">{e.degree}</h4>
                <p className="text-xs text-muted-foreground">{e.school}</p>
              </div>
              <div className="text-right">
                <span className="text-xs text-muted-foreground">{e.year}</span>
                <div className="text-xs font-medium text-primary">{e.grade}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <h3 className="text-xs font-semibold text-foreground mb-1">Languages</h3>
          {languages.map((l, i) => (
            <div key={i} className="card-base flex justify-between py-2">
              <span className="text-xs text-foreground">{l.lang}</span>
              <span className="text-xs text-primary">{l.level}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Education;
