const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="section-container">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            About <span className="neon-text">Me</span>
          </h2>
          
          <div className="floating-card mb-10">
            <p className="text-lg text-foreground-secondary leading-relaxed mb-6">
              Java Full Stack Developer with React.js, Spring Boot, and AI tools expertise.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 group">
                <div className="text-4xl font-bold neon-text mb-2 group-hover:scale-110 transition-transform">3+</div>
                <div className="text-foreground-secondary">Years Learning</div>
              </div>
              
              <div className="p-6 group">
                <div className="text-4xl font-bold neon-text mb-2 group-hover:scale-110 transition-transform">10+</div>
                <div className="text-foreground-secondary">Technologies</div>
              </div>
              
              <div className="p-6 group">
                <div className="text-4xl font-bold neon-text mb-2 group-hover:scale-110 transition-transform">5+</div>
                <div className="text-foreground-secondary">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;