import "../styles/Home.css";
import profileImg from "../assets/profile.png";
import resume from "../assets/ABHIRAM_RESUME-3.pdf";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-container fade-in">

        {/* Left Content */}
        <div className="home-content">
          <h1>
            Hi, I’m <span>Nalla Abhiram</span>
          </h1>

          <h2>Frontend / Full Stack Engineer</h2>

          <p className="home-summary">
            Computer Science undergraduate with a strong backend focus and
            hands-on experience building scalable web applications using
            Java, Spring Boot, Node.js, React, and relational databases.
          </p>

          <div className="home-actions">
            <a href={resume} download className="primary-btn">
              Download Resume
            </a>
            <a href="/projects" className="secondary-btn">
              View Projects
            </a>
          </div>

          <div className="home-socials">
            <a
              href="https://github.com/Abhiram-5656"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/nalla-abhiram-806381266/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="home-profile">
          <img src={profileImg} alt="Abhiram Profile" />
        </div>

      </div>
    </section>
  );
}
