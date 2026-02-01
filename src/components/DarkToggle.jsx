// src/components/DarkToggle.jsx
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "./DarkToggle.css";

export default function DarkToggle() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  const toggleDark = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <button className="button" onClick={toggleDark} aria-label="Toggle Dark Mode">
      <div className="button-outer">
        <div className="button-inner">
          <span>
            {isDark ? (
              <FaMoon size={18} color="#191919" />
            ) : (
              <FaSun size={18} color="#FFA500" />
            )}
          </span>
        </div>
      </div>
    </button>
  );
}
