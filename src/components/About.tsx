import { Code2, Brain, Server } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const highlights = [
  { icon: Server, label: 'Java Backend', desc: 'Spring Boot, REST APIs, JWT' },
  { icon: Brain, label: 'AI Integration', desc: 'RAG, LLM APIs, Vector DBs' },
  { icon: Code2, label: 'Full Stack', desc: 'React + Spring Boot' },
];

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about">
      <div ref={ref} className={`section-container transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="section-heading">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-center">
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-2xl overflow-hidden glow-border relative z-10">
                <img
                  src="/lovable-uploads/3a35c934-4217-4b36-872c-4e3ed1f68d07.png"
                  alt="Bratabitan Banerjee"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-muted-foreground leading-relaxed mb-5 text-xs sm:text-sm">
              Java Full Stack Developer with hands-on experience building RESTful backend systems using
              Spring Boot, secure authentication with JWT, and database-driven applications using SQL & MongoDB.
              Strong focus on clean API design, CRUD operations, ORM concepts, and scalable architecture.
              Passionate about AI integration — including RAG architecture, LLM APIs, and vector databases —
              to build intelligent, next-generation applications.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {highlights.map((h, i) => (
                <div key={i} className="glass-card p-3 sm:p-4 rounded-lg group hover:border-primary/30 transition-all duration-300">
                  <h.icon size={18} className="text-primary mb-2 group-hover:drop-shadow-[0_0_8px_hsl(190,100%,50%,0.5)] transition-all" />
                  <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-0.5">{h.label}</h4>
                  <p className="text-[0.6875rem] sm:text-xs text-muted-foreground">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
