const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <div className="portfolio-card">
            <p className="text-lg md:text-xl text-foreground-secondary leading-relaxed mb-8">
              Innovative and adaptive Java Full Stack Developer with expertise in React.js, Spring Boot, 
              and AI-assisted tools. Passionate about building scalable, user-centric applications that 
              solve real-world problems.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">3+</div>
                <div className="text-foreground-secondary">Years Learning</div>
              </div>
              
              <div className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-foreground-secondary">Technologies</div>
              </div>
              
              <div className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
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