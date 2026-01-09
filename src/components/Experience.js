import "../styles/Experience.css";

export default function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>

      <div className="experience-list">
        <div className="experience-card">
          <h3>AICTE Cloud Virtual Internship – EduSkills</h3>
          <p className="role">Cloud & DevOps Intern</p>
          <p className="duration">2023</p>

          <ul>
            <li>
              Gained hands-on exposure to cloud computing fundamentals and
              deployment models using AWS.
            </li>
            <li>
              Worked with core AWS services such as EC2, S3, and IAM under guided
              mentorship.
            </li>
            <li>
              Learned DevOps fundamentals including CI/CD concepts, containerization,
              and infrastructure best practices.
            </li>
            <li>
              Developed understanding of cloud security, monitoring, and cost
              optimization principles.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
