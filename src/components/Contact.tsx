import { Mail, Phone, Linkedin, Send } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:banerjeebratabitan@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`;
  };

  const inputClass = "w-full bg-secondary/50 border border-border rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors";

  return (
    <section id="contact">
      <div ref={ref} className={`section-container transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="section-heading">
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
          <div className="space-y-3 sm:space-y-4">
            <p className="text-muted-foreground text-xs sm:text-sm mb-4 sm:mb-6">
              I'm looking for backend-heavy projects to contribute to. Let's build something great together!
            </p>

            <a href="mailto:banerjeebratabitan@gmail.com" className="glass-card flex items-center gap-3 p-3 sm:p-4 rounded-lg hover:border-primary/30 transition-all group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'hsla(190, 100%, 50%, 0.1)' }}>
                <Mail size={16} className="text-primary" />
              </div>
              <div className="min-w-0">
                <div className="text-[0.6875rem] sm:text-xs text-muted-foreground">Email</div>
                <div className="text-xs sm:text-sm text-foreground truncate">banerjeebratabitan@gmail.com</div>
              </div>
            </a>

            <a href="tel:+919002649893" className="glass-card flex items-center gap-3 p-3 sm:p-4 rounded-lg hover:border-primary/30 transition-all group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'hsla(190, 100%, 50%, 0.1)' }}>
                <Phone size={16} className="text-primary" />
              </div>
              <div>
                <div className="text-[0.6875rem] sm:text-xs text-muted-foreground">Phone</div>
                <div className="text-xs sm:text-sm text-foreground">+91 9002649893</div>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/bratabitanbanerjee" target="_blank" rel="noopener noreferrer" className="glass-card flex items-center gap-3 p-3 sm:p-4 rounded-lg hover:border-primary/30 transition-all group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'hsla(190, 100%, 50%, 0.1)' }}>
                <Linkedin size={16} className="text-primary" />
              </div>
              <div>
                <div className="text-[0.6875rem] sm:text-xs text-muted-foreground">LinkedIn</div>
                <div className="text-xs sm:text-sm text-foreground">bratabitanbanerjee</div>
              </div>
            </a>
          </div>

          <form onSubmit={handleSubmit} className="glass-card p-4 sm:p-6 rounded-lg space-y-3 sm:space-y-4">
            <div>
              <label className="text-[0.6875rem] sm:text-xs text-muted-foreground mb-1 block">Name</label>
              <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className={inputClass} placeholder="Your name" />
            </div>
            <div>
              <label className="text-[0.6875rem] sm:text-xs text-muted-foreground mb-1 block">Email</label>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className={inputClass} placeholder="your@email.com" />
            </div>
            <div>
              <label className="text-[0.6875rem] sm:text-xs text-muted-foreground mb-1 block">Message</label>
              <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={3} className={`${inputClass} resize-none`} placeholder="Your message..." />
            </div>
            <button type="submit" className="btn-primary w-full justify-center">
              <Send size={14} /> Send Message
            </button>
          </form>
        </div>

        <p className="text-center text-[0.6875rem] sm:text-xs text-muted-foreground mt-8 sm:mt-12">
          © 2025 Bratabitan Banerjee. Built with passion.
        </p>
      </div>
    </section>
  );
};

export default Contact;
