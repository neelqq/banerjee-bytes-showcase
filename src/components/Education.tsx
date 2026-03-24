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
    <section id="education" className="py-16">
      <div ref={ref} className={`section-container transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-3xl font-bold mb-10 text-center">
          <span className="gradient-text">Education</span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {education.map((e, i) => (
            <div key={i} className="glass-card p-5 rounded-lg hover:border-primary/30 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: 'hsla(190, 100%, 50%, 0.1)' }}>
                  <GraduationCap size={20} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-foreground">{e.degree}</h3>
                  <p className="text-sm text-primary">{e.school}</p>
                  <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar size={11} /> {e.period}
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
