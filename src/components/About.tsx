import { Code2, Brain, Server } from 'lucide-react';

const highlights = [
  { icon: Server, label: 'Java Backend', desc: 'Spring Boot, REST APIs, JWT Auth' },
  { icon: Brain, label: 'AI Integration', desc: 'RAG, LLM APIs, Vector DBs' },
  { icon: Code2, label: 'Full Stack', desc: 'React.js + Spring Boot' },
];

const About = () => {
  return (
    <section id="about">
      <div className="section-container">
        <h2 className="section-heading">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative group">
              <div className="w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52 rounded-2xl overflow-hidden glow-border relative z-10 transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src="/lovable-uploads/3a35c934-4217-4b36-872c-4e3ed1f68d07.png"
                  alt="Bratabitan Banerjee"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Java Full Stack Developer with hands-on experience building RESTful backend systems using
              Spring Boot, secure authentication with JWT, and database-driven applications using SQL & MongoDB.
              Strong focus on clean API design, CRUD operations, ORM concepts, and scalable architecture.
              Passionate about AI integration — including RAG architecture, LLM APIs, and vector databases —
              to build intelligent, next-generation applications.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {highlights.map((h, i) => (
                <div key={i} className="glass-card p-4 sm:p-5 rounded-xl group/card hover:-translate-y-1 transition-transform duration-300">
                  <div className="icon-box icon-box-sm mb-3 group-hover/card:border-primary/30 transition-colors">
                    <h.icon size={16} className="text-primary" />
                  </div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">{h.label}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{h.desc}</p>
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
