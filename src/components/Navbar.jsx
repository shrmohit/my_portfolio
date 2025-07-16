import React, { useState, useEffect } from "react";
import { DiCssdeck } from "react-icons/di";
import { FaBars, FaSun, FaMoon } from "react-icons/fa";
import { Bio } from "../data/constant";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  function handleMenuToggle() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="Header">
      <div className="nav-container">
        <div className="nav-logo">
          <DiCssdeck className="nav-logo-icon" />
          <span className="nav-logo-text">Portfolio</span>
        </div>

        <div className={`nav-links ${showMenu ? "nav-mobile" : "nav-web"}`}>
          <a href="#about">About</a>
          <a href="#skill">Skill</a>
          <a href="#experience">Experience</a>
          <a href="#project">Project</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <a href={Bio.github} target="_blank" rel="noopener noreferrer">
          <button className="btn-github">GitHub</button>
        </a>

        <div className="theme-toggle">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-2xl p-2 rounded-full border toggle-btn"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        <div className="ham-menu">
          <button className="nav-menu" onClick={handleMenuToggle}>
            <FaBars className="menu-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
