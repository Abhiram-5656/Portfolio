import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./Pages/Home";
import ProjectsPage from "./Pages/ProjectsPage";
import SkillsPage from "./Pages/SkillsPage";
import ExperiencePage from "./Pages/ExperiencePage";
import ContactPage from "./Pages/ContactPage";
import ThemeToggle from "./components/ThemeToggle";
import Education from "./Pages/Education";
import About from "./Pages/About";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/ThemeToggle" element={<ThemeToggle />} />
        <Route path="/education" element={<Education />} />
        <Route path="/about" element={<About />} />

        
      </Routes>
    </Router>
  );
}

export default App;
