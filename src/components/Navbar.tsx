import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certs' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-12">
        <div className="font-bold text-primary text-sm">BB</div>
        <div className="hidden md:flex gap-5">
          {navLinks.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)} className="text-xs font-medium text-muted-foreground hover:text-primary">
              {l.label}
            </button>
          ))}
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-1">
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pb-2 border-t border-border">
          {navLinks.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)} className="block w-full text-left py-1.5 text-xs text-muted-foreground">
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
