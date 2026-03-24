import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
    </main>
  </div>
);

export default Index;
