import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        {/* Left: Brand */}
        <div className="nav-left">
          <h3>Nalla Abhiram</h3>
        </div>

        {/* Right: Links + Theme */}
        <div className="nav-right">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            {/* <li><Link to="/experience">Experience</Link></li> */}
            <li><Link to="/contact">Contact</Link></li>
            

          </ul>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
