import "../styles/projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>

      <div className="projects-grid">

        {/* Project 1 */}
        <div className="project-card featured">
          <div className="project-header">
            <h3>Hotel Booking Management System</h3>
            <span className="project-tag">Frontend</span>
          </div>

          <p className="project-desc">
            A scalable hotel booking platform enabling real-time room
            availability, secure reservations, and backend-driven business
            logic.
          </p>

          <ul className="project-points">
            <li>Designed RESTful APIs for booking, users, and availability</li>
            <li>Implemented transactional database logic to prevent conflicts</li>
            <li>Dockerized backend services for consistent deployments</li>
          </ul>

          <div className="project-tech">
            <span>React</span>
            <span>Node.js</span>
            <span>MySQL</span>
            <span>Docker</span>
          </div>

          <div className="project-links">
            <a
              href="https://github.com/Abhiram-5656/Hotel-Booking-Management-System-MERN-STACK-"
              target="_blank"
              rel="noreferrer"
            >
              GitHub →
            </a>
                 <a
              href="https://hotel-booking-management-system1.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="deploy-btn"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <div className="project-header">
            <h3>Feedback Management System</h3>
            <span className="project-tag">Backend Focused</span>
          </div>

          <p className="project-desc">
            A role-based feedback collection system for users and administrators,
            focused on data validation and structured storage.
          </p>

          <ul className="project-points">
            <li>Built secure backend APIs using Spring Boot</li>
            <li>Implemented role-based access for admin and users</li>
            <li>Designed clean UI for submitting categorized feedback</li>
          </ul>

          <div className="project-tech">
            <span>React</span>
            <span>Spring Boot</span>
            <span>MySQL</span>
          </div>

          <div className="project-links">
            <a
              href="https://github.com/yourusername/feedback-management-system"
              target="_blank"
              rel="noreferrer"
            >
              GitHub →
            </a>
                 <a
              href="https://your-deployed-link.com"
              target="_blank"
              rel="noreferrer"
              className="deploy-btn"
            >
              Live Demo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
