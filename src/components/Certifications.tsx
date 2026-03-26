import { Award, ExternalLink } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Certifications = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="certifications">
      <div ref={ref} className={`section-container transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="section-heading">
          <span className="gradient-text">Certifications</span>
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-4 sm:p-6 rounded-lg hover:border-primary/30 transition-all duration-300 group">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: 'hsla(190, 100%, 50%, 0.1)' }}>
                <Award size={16} className="sm:hidden text-primary" />
                <Award size={20} className="hidden sm:block text-primary" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm sm:text-base font-semibold text-foreground">
                  Java Full Stack with React and Spring Boot
                </h3>
                <p className="text-xs sm:text-sm text-primary mb-2 sm:mb-3">Udemy — Course Completion Certificate</p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://www.udemy.com/certificate/UC-1f932d8e-97c1-4912-b0a9-cdc17b25c404/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[0.6875rem] sm:text-xs text-primary hover:text-accent transition-colors"
                  >
                    <ExternalLink size={11} /> View Certificate
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1yNLVUzUD46pJSlecPtf_QtydD9F9oeI9/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[0.6875rem] sm:text-xs text-primary hover:text-accent transition-colors"
                  >
                    <ExternalLink size={11} /> Drive Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
