import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';

const Section = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <div
    className="animate-fade-in opacity-0"
    style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
  >
    {children}
  </div>
);

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <Section><Hero /></Section>
      <div className="section-divider" />
      <Section delay={100}><About /></Section>
      <div className="section-divider" />
      <Section delay={150}><Skills /></Section>
      <div className="section-divider" />
      <Section delay={200}><Experience /></Section>
      <div className="section-divider" />
      <Section delay={250}><Projects /></Section>
      <div className="section-divider" />
      <Section delay={300}><Education /></Section>
      <div className="section-divider" />
      <Section delay={350}><Certifications /></Section>
      <div className="section-divider" />
      <Section delay={400}><Contact /></Section>
    </main>
  </div>
);

export default Index;
