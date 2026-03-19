const About = () => {
  const stats = [
    { value: "3+", label: "yrs_learning" },
    { value: "10+", label: "technologies" },
    { value: "5+", label: "projects" },
  ];

  return (
    <section id="about" className="py-12">
      <div className="section-container">
        <h2 className="text-2xl font-mono font-bold mb-6"><span className="cyan">##</span> about_me</h2>
        <div className="terminal-card">
          <div className="terminal-header">
            <span className="terminal-dot bg-red-500"></span>
            <span className="terminal-dot bg-yellow-500"></span>
            <span className="terminal-dot bg-green-500"></span>
            <span className="text-xs text-muted-foreground ml-2 font-mono">stats.json</span>
          </div>
          <p className="text-sm text-muted-foreground font-mono mb-4">
            // Seeking opportunity to contribute to backend-heavy projects while improving system design & performance.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-xl font-bold cyan font-mono">{s.value}</div>
                <div className="text-xs text-muted-foreground font-mono">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
