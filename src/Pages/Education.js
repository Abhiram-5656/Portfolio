import "../styles/Education.css";

export default function Education() {
  return (
    <section id="education" className="education-section">
      <h2>Education</h2>

      <div className="education-grid">

        {/* B.Tech */}
        <div className="education-card primary">
          <div className="education-header">
            <h3>Bachelor of Technology (B.Tech) – Computer Science</h3>
            <span className="education-duration">2022 – 2026</span>
          </div>

          <p className="education-subtitle">
            K L University
            <span className="education-score"> • CGPA: 9.3 / 10</span>
          </p>

          <ul>
            <li>Relevant coursework: Data Structures, DBMS, Operating Systems, Computer Networks</li>
            <li>Focused on backend development, databases, and system design</li>
            <li>Completed multiple academic and personal software projects</li>
          </ul>
        </div>

        {/* Intermediate */}
        <div className="education-card">
          <div className="education-header">
            <h3>Intermediate (Class XII) – MPC</h3>
            <span className="education-duration">2020 – 2022</span>
          </div>

          <p className="education-subtitle">
            Sri Chaitanya Junior College
            <span className="education-score"> • Percentage: 95 / 100</span>
            <span className="education-board">
              {" "}
              (The Telangana Board of Intermediate Education – TGBIE)
            </span>
          </p>

          <ul>
            <li>Stream: Mathematics, Physics, Chemistry</li>
            <li>Developed strong analytical and problem-solving skills</li>
          </ul>
        </div>

        {/* 10th */}
        <div className="education-card">
          <div className="education-header">
            <h3>Secondary School Certificate (Class X)</h3>
            <span className="education-duration">2019 – 2020</span>
          </div>

          <p className="education-subtitle">
            Millennium Talent High School
            <span className="education-score"> • CGPA: 10 / 10</span>
            <span className="education-board">
              {" "}
              (Board of Secondary Education, Telangana – BSET)
            </span>
          </p>

          <ul>
            <li>Built strong fundamentals in mathematics and science</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
