import { Mail, Phone, Linkedin, Send, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:banerjeebratabitan@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`;
  };

  const inputClass = "w-full bg-secondary/40 border border-border/60 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 focus:bg-secondary/60 transition-colors duration-300";

  return (
    <section id="contact">
      <div className="section-container">
        <h2 className="section-heading">
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 max-w-4xl mx-auto">
          <div className="space-y-4">
            <p className="text-muted-foreground text-sm sm:text-base mb-6 leading-relaxed">
              I'm looking for backend-heavy projects to contribute to. Let's build something great together!
            </p>

            {[
              { icon: Mail, label: 'Email', value: 'banerjeebratabitan@gmail.com', href: 'mailto:banerjeebratabitan@gmail.com' },
              { icon: Phone, label: 'Phone', value: '+91 9002649893', href: 'tel:+919002649893' },
              { icon: Linkedin, label: 'LinkedIn', value: 'bratabitanbanerjee', href: 'https://www.linkedin.com/in/bratabitanbanerjee' },
            ].map((item, i) => (
              <a key={i} href={item.href} target={item.icon === Linkedin ? '_blank' : undefined} rel="noopener noreferrer"
                className="glass-card flex items-center gap-4 p-4 rounded-xl hover:-translate-y-0.5 transition-transform duration-300 group">
                <div className="icon-box icon-box-sm group-hover:border-primary/30 transition-colors">
                  <item.icon size={15} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-muted-foreground mb-0.5">{item.label}</div>
                  <div className="text-sm font-medium text-foreground truncate">{item.value}</div>
                </div>
                <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </a>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="glass-card p-5 sm:p-7 rounded-xl space-y-4">
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Name</label>
              <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className={inputClass} placeholder="Your name" />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Email</label>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className={inputClass} placeholder="your@email.com" />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Message</label>
              <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={4} className={`${inputClass} resize-none`} placeholder="Your message..." />
            </div>
            <button type="submit" className="btn-primary w-full justify-center">
              <Send size={15} /> Send Message
            </button>
          </form>
        </div>

        <div className="section-divider mt-12 sm:mt-16 mb-6" />
        <p className="text-center text-xs text-muted-foreground">
          © 2025 Bratabitan Banerjee. Built with passion.
        </p>
      </div>
    </section>
  );
};

export default Contact;
