import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Lovely Professional University",
    period: "Aug 2023 – Jun 2025",
    grade: "CGPA: 7.8/10",
    location: "Jalandhar, Punjab",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Burdwan Institute of Management & Computer Science",
    period: "Aug 2019 – May 2022",
    grade: "87%",
    location: "Burdwan, West Bengal",
  },
];

const Education = () => {
  return (
    <section id="education">
      <div className="section-container">
        <h2 className="section-heading">
          <span className="gradient-text">Education</span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-5">
          {education.map((e, i) => (
            <div key={i} className="glass-card p-5 sm:p-6 rounded-xl hover:-translate-y-1 transition-transform duration-300 group">
              <div className="flex items-start gap-4">
                <div className="icon-box icon-box-md group-hover:border-primary/30 transition-colors">
                  <GraduationCap size={18} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-foreground">{e.degree}</h3>
                  <p className="text-sm text-primary font-medium mt-0.5">{e.school}</p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2.5 text-xs sm:text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={12} className="text-primary/60" /> {e.period}
                    </span>
                    <span className="font-semibold text-primary">{e.grade}</span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={12} className="text-primary/60" /> {e.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
