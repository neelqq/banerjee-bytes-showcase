import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', label: '~/home' },
    { id: 'about', label: '~/about' },
    { id: 'skills', label: '~/skills' },
    { id: 'projects', label: '~/projects' },
    { id: 'certifications', label: '~/certs' },
    { id: 'education', label: '~/edu' },
    { id: 'contact', label: '~/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 border-b border-border z-50">
      <div className="max-w-5xl mx-auto px-5">
        <div className="flex items-center justify-between h-12">
          <div className="font-mono text-sm cyan">bratabitan@dev:~$</div>
          <div className="hidden md:flex gap-4">
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => scrollToSection(link.id)}
                className={`text-xs font-mono ${activeSection === link.id ? 'cyan' : 'text-muted-foreground hover:text-foreground'}`}>
                {link.label}
              </button>
            ))}
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-1.5">
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden py-2 border-t border-border">
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left py-1.5 text-xs font-mono ${activeSection === link.id ? 'cyan' : 'text-muted-foreground'}`}>
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
