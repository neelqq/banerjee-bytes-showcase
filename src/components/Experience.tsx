import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience">
      <div className="section-container">
        <h2 className="section-heading">
          Work <span className="gradient-text">Experience</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 sm:pl-10">
            <div className="absolute left-[11px] sm:left-[13px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent" />

            <div className="absolute left-0 sm:left-0 top-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-[0_0_12px_hsla(192,100%,50%,0.3)]">
              <Briefcase size={12} className="text-primary" />
            </div>

            <div className="glass-card p-5 sm:p-7 rounded-xl">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground">Software Developer</h3>
                  <p className="text-sm sm:text-base text-primary font-medium">PCS Global Pvt. Ltd.</p>
                </div>
                <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={12} className="text-primary/70" /> Aug 2025 – Nov 2025
                  </span>
                  <span className="mono text-primary/60 text-xs">ID: 4123</span>
                </div>
              </div>

              <ul className="space-y-2.5 text-sm text-muted-foreground mb-5">
                {[
                  'Full stack development with React.js, Spring Boot, and relational databases',
                  'Cross-functional team collaboration on enterprise applications',
                  'API integration and optimization for production systems',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
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
