import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const roles = [
  'Software Developer',
  'Java & Spring Boot Engineer',
  'AI-Powered Backend Developer',
  'Full Stack Builder',
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-16 sm:-left-32 w-48 sm:w-96 h-48 sm:h-96 rounded-full opacity-[0.07] animate-float"
          style={{ background: 'radial-gradient(circle, hsl(190 100% 50%), transparent 70%)' }} />
        <div className="absolute bottom-1/4 -right-16 sm:-right-32 w-40 sm:w-80 h-40 sm:h-80 rounded-full opacity-[0.05] animate-float"
          style={{ background: 'radial-gradient(circle, hsl(260 85% 55%), transparent 70%)', animationDelay: '3s' }} />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 glass-card px-3 sm:px-4 py-1.5 rounded-full mb-4 sm:mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[0.6875rem] sm:text-xs text-muted-foreground">Available for opportunities</span>
          </div>

          <h1 className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 animate-fade-in leading-tight" style={{ animationDelay: '0.1s' }}>
            Hi, I'm{' '}
            <span className="gradient-text neon-text">Bratabitan Banerjee</span>
          </h1>

          <div className="text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 min-h-[2rem] sm:min-h-[2.5rem] animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="text-foreground-secondary">{text}</span>
            <span className="border-r-2 border-primary ml-0.5 animate-typewriter-cursor">&nbsp;</span>
          </div>

          <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-xl leading-relaxed mb-6 sm:mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Building scalable APIs & intelligent applications with Java, Spring Boot,
            RAG & LLM Integration.
          </p>

          <div className="flex gap-3 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              View Projects
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline"
            >
              Contact Me
            </button>
          </div>
        </div>

        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <ArrowDown size={18} className="text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
