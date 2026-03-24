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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-[0.07] animate-float"
          style={{ background: 'radial-gradient(circle, hsl(190 100% 50%), transparent 70%)' }} />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full opacity-[0.05] animate-float"
          style={{ background: 'radial-gradient(circle, hsl(260 85% 55%), transparent 70%)', animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03]"
          style={{ background: 'radial-gradient(circle, hsl(190 100% 50%), transparent 60%)' }} />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-1.5 rounded-full mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-muted-foreground">Available for opportunities</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Hi, I'm{' '}
            <span className="gradient-text neon-text">Bratabitan Banerjee</span>
          </h1>

          <div className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 h-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="text-foreground-secondary">{text}</span>
            <span className="border-r-2 border-primary ml-0.5 animate-typewriter-cursor">&nbsp;</span>
          </div>

          <p className="text-muted-foreground text-sm sm:text-base max-w-xl leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
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

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <ArrowDown size={20} className="text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
