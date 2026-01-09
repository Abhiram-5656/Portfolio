import React from "react";
import "../styles/Home.css";

export default function Hero() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>
          Hi, I’m <span className="highlight">Abhiram</span>
        </h1>

        <h2>Full Stack / Backend Software Engineer</h2>

        <p>
          I build <strong>scalable, reliable web applications</strong> with a
          strong focus on backend development, system design, and clean code.
          Experienced in <strong>React, Node.js, Java, MySQL</strong>, and modern
          DevOps practices.
        </p>

        <div className="home-buttons">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="btn primary"
          >
            View GitHub
          </a>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noreferrer"
            className="btn secondary"
          >
            LinkedIn
          </a>

          <a href="/resume.pdf" className="btn outline">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
