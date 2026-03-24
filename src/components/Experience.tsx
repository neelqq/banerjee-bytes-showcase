import { Briefcase } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="experience" className="py-16">
      <div ref={ref} className={`section-container transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-3xl font-bold mb-10 text-center">
          Work <span className="gradient-text">Experience</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 border-l border-primary/30">
            <div className="absolute -left-[9px] top-0 w-[18px] h-[18px] rounded-full bg-background border-2 border-primary flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>

            <div className="glass-card p-6 rounded-lg mb-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <Briefcase size={16} className="text-primary" />
                    Software Developer
                  </h3>
                  <p className="text-sm text-primary">PCS Global Pvt. Ltd.</p>
                </div>
                <div className="text-xs text-muted-foreground mt-1 sm:mt-0 sm:text-right">
                  <div>Aug 2025 – Nov 2025</div>
                  <div>Employee ID: 4123</div>
                </div>
              </div>

              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary mt-1.5 shrink-0">▹</span>
                  Full stack development with React.js, Spring Boot, and relational databases
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1.5 shrink-0">▹</span>
                  Cross-functional team collaboration on enterprise applications
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1.5 shrink-0">▹</span>
                  API integration and optimization for production systems
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                {["React.js", "Spring Boot", "SQL", "REST APIs"].map((t, i) => (
                  <span key={i} className="skill-pill">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
