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
      <div ref={ref} className={`section-container transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="section-heading">
          <span className="gradient-text">Certifications</span>
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-5 sm:p-7 rounded-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="flex items-start gap-4">
              <div className="icon-box icon-box-md group-hover:border-primary/30 transition-colors">
                <Award size={18} className="text-primary" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm sm:text-base font-bold text-foreground">
                  Java Full Stack with React and Spring Boot
                </h3>
                <p className="text-sm text-primary font-medium mt-1 mb-4">Udemy — Course Completion Certificate</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.udemy.com/certificate/UC-1f932d8e-97c1-4912-b0a9-cdc17b25c404/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-primary hover:text-accent transition-colors font-medium"
                  >
                    <ExternalLink size={13} /> View Certificate
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1yNLVUzUD46pJSlecPtf_QtydD9F9oeI9/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-primary hover:text-accent transition-colors font-medium"
                  >
                    <ExternalLink size={13} /> Drive Link
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
