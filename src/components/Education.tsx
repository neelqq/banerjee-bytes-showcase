import { GraduationCap, Calendar } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

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
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="education">
      <div ref={ref} className={`section-container transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="section-heading">
          <span className="gradient-text">Education</span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {education.map((e, i) => (
            <div key={i} className="glass-card p-4 sm:p-5 rounded-lg hover:border-primary/30 transition-all duration-300 group">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: 'hsla(190, 100%, 50%, 0.1)' }}>
                  <GraduationCap size={16} className="sm:hidden text-primary" />
                  <GraduationCap size={20} className="hidden sm:block text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-semibold text-foreground">{e.degree}</h3>
                  <p className="text-xs sm:text-sm text-primary truncate">{e.school}</p>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-1.5 sm:mt-2 text-[0.6875rem] sm:text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar size={10} className="shrink-0" /> {e.period}
                    </span>
                    <span className="text-primary font-medium">{e.grade}</span>
                    <span>{e.location}</span>
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
