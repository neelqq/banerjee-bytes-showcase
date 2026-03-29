import { useState, useEffect } from 'react';
import { ArrowDown, ChevronRight } from 'lucide-react';

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
    <section id="home" className="relative min-h-[88svh] sm:min-h-[92svh] flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] -left-20 sm:-left-40 w-64 sm:w-[30rem] h-64 sm:h-[30rem] rounded-full opacity-[0.06] animate-float"
          style={{ background: 'radial-gradient(circle, hsl(192 100% 50%), transparent 65%)' }} />
        <div className="absolute bottom-[15%] -right-20 sm:-right-40 w-56 sm:w-96 h-56 sm:h-96 rounded-full opacity-[0.04] animate-float"
          style={{ background: 'radial-gradient(circle, hsl(265 90% 58%), transparent 65%)', animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] rounded-full opacity-[0.02]"
          style={{ background: 'radial-gradient(circle, hsl(192 100% 50%), transparent 50%)' }} />
      </div>

      <div className="section-container relative z-10 flex flex-col items-center text-center">
        <div className="max-w-3xl">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2.5 glass-card px-4 py-2 rounded-full mb-6 sm:mb-8 animate-fade-in">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
            </span>
            <span className="text-xs sm:text-sm text-muted-foreground font-medium">Available for opportunities</span>
          </div>

          {/* Name */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-5 animate-fade-in tracking-tight leading-[1.1]" style={{ animationDelay: '0.1s' }}>
            Hi, I'm{' '}
            <span className="gradient-text neon-text block sm:inline">Bratabitan Banerjee</span>
          </h1>

          {/* Typewriter */}
          <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-5 sm:mb-7 min-h-[2.5rem] sm:min-h-[3rem] animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="text-foreground-secondary">{text}</span>
            <span className="border-r-2 border-primary ml-0.5 animate-typewriter-cursor">&nbsp;</span>
          </div>

          {/* Tagline */}
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mb-8 sm:mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Building scalable APIs & intelligent applications with Java, Spring Boot,
            RAG & LLM Integration.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 sm:gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              View Projects <ChevronRight size={16} />
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 animate-float opacity-40">
          <ArrowDown size={20} className="text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
