const About = () => {
  return (
    <section id="about" className="py-14">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            About <span className="heading-accent">Me</span>
          </h2>
          
          <div className="card-base mb-8">
            <p className="text-foreground-secondary leading-relaxed mb-6 text-sm">
              Java Full Stack Developer seeking an opportunity to contribute to backend-heavy projects while continuously improving system design and performance.
            </p>
            
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-2xl font-bold text-primary mb-1">3+</div>
                <div className="text-muted-foreground text-sm">Years Learning</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">10+</div>
                <div className="text-muted-foreground text-sm">Technologies</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">5+</div>
                <div className="text-muted-foreground text-sm">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
