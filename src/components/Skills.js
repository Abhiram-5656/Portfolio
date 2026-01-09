import "../styles/skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>

      <div className="skills-grid">

        {/* Backend */}
        <div className="skills-card primary">
          <div className="skills-header">
            <h3>Backend</h3>
            <span className="skills-badge">Core</span>
          </div>
          <p className="skills-desc">
            Designing scalable APIs and backend systems
          </p>
          <ul>
            <li>Java</li>
            <li>Spring Boot</li>
            <li>Node.js</li>
            <li>RESTful API Design</li>
          </ul>
        </div>

        {/* Frontend */}
        <div className="skills-card">
          <div className="skills-header">
            <h3>Frontend Development</h3>
          </div>
          <p className="skills-desc">
            Building clean, responsive user interfaces
          </p>
          <ul>
            <li>React.js</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5 & CSS3</li>
          </ul>
        </div>

        {/* Databases */}
        <div className="skills-card">
          <div className="skills-header">
            <h3>Databases</h3>
          </div>
          <p className="skills-desc">
            Data modeling and query optimization
          </p>
          <ul>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
        </div>

        {/* Cloud */}
        <div className="skills-card">
          <div className="skills-header">
            <h3>Cloud & DevOps</h3>
          </div>
          <p className="skills-desc">
            Deployment, containers, and cloud fundamentals
          </p>
          <ul>
            <li>AWS (EC2, S3, IAM)</li>
            <li>Docker</li>
            <li>CI/CD Basics</li>
          </ul>
        </div>

        {/* Tools */}
        <div className="skills-card">
          <div className="skills-header">
            <h3>Developer Tools</h3>
          </div>
          <p className="skills-desc">
            Daily tools for development & collaboration
          </p>
          <ul>
            <li>Git & GitHub</li>
            <li>VS Code</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
