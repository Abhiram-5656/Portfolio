import "../styles/about.css";
import profileImg from "../assets/image.png";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* Left image */}
        <div className="about-image">
          <img src={profileImg} alt="Abhiram" />
        </div>

        {/* Right content */}
        <div className="about-content">
          <h2>About Me</h2>

          <p className="about-text">
            Hi, I’m Abhiram Nalla, a B.Tech 4th  -year Computer Science student
            passionate about Software Development. I have a strong foundation
            in Java, Data Structures & Algorithms, HTML, CSS, and React.
            I enjoy building scalable web applications and solving complex
            problems efficiently.
          </p>

          <p className="about-text">
            My goal is to become a Software Developer, continuously learning
            and improving my skills to build clean, optimized, and
            user-friendly applications while staying updated with modern
            technologies.
          </p>

          {/* Info list */}
          <div className="about-info">
            <div><span>Name:</span> Abhiram Nalla</div>
            <div><span>Date of Birth:</span> 26 April 2004</div>
            <div>
              <span>Address:</span> Vinayak Temple Opposite Road,
              Madhira, Khammam, Telangana, India
            </div>
            <div><span>Zip Code:</span> 507203</div>
            <div><span>Email:</span> 2200031123cseh@gmail.com</div>
            <div><span>Phone:</span> 9063265598</div>
          </div>

          <div className="about-projects">
            <span>3</span> Projects Completed
          </div>
        </div>

      </div>
    </section>
  );
}
