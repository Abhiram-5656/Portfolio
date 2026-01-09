



import "../styles/contact.css";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>

      <div className="contact-card">
        <p className="contact-text">
          I’m open to internship and full-time opportunities in software
          development, backend engineering, and full-stack roles. Feel free to
          reach out.
        </p>

        <div className="contact-details">
          {/* Email */}
          <a href="mailto:nallaabhiram20@gmail.com" className="contact-item">
            <FaEnvelope />
            <span>nallaabhiram20@gmail.com</span>
          </a>

          {/* Phone */}
          <a href="tel:+919063265598" className="contact-item">
            <FaPhoneAlt />
            <span>+91 9063265598</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Abhiram-5656"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <FaGithub />
            <span>github.com/Abhiram-5656</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/nalla-abhiram-806381266/"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <FaLinkedin />
            <span>linkedin.com/in/nalla-abhiram-806381266</span>
          </a>
        </div>
      </div>
    </section>
  );
}
