import { useEffect, useState } from "react";
import "../styles/themeToggle.css";

export default function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      document.body.classList.add("light");
      setLight(true);
    }
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle("light");
    const isLight = document.body.classList.contains("light");
    setLight(isLight);
    localStorage.setItem("theme", isLight ? "light" : "dark");
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {light ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
