import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { Bio } from "../data/constant";
import { FaSun, FaMoon } from 'react-icons/fa';

function Navbar() {
  const [showMenu, setshowMenu] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  function handlemenuToggle() {
    setshowMenu(!showMenu);
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

        <a href={Bio.github} target="_blank">
          <button className="btn-github">GitHub</button>
        </a>

        <div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-2xl p-2 rounded-full border"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
        <div className="ham-menu">
          <button className="nav-menu" onClick={handlemenuToggle}>
            <FaBars className="menu-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

// import { MdMenu } from "react-icons/md";
// import { DiCssdeck } from "react-icons/di";
// import React, { useState } from 'react';

// function Navbar() {
//   const [showMenu, setShowMenu] = useState(false);

//   function handleMenuToggle() {
//     setShowMenu(!showMenu);
//   }

//   return (
//     <div className="Header">
//       <div className="nav-container">
//         <div className="nav-logo">
//           <DiCssdeck className="nav-logo-icon" />
//           <span>Portfolio</span>
//         </div>

//         <div className={`nav-links ${showMenu ? "nav-mobile" : "nav-web"}`}>
//           <a href="#about">About</a>
//           <a href="#skill">Skill</a>
//           <a href="#experience">Experience</a>
//           <a href="#project">Project</a>
//           <a href="#education">Education</a>
//         </div>

//         <button className="btn-github">GitHub</button>

//         <div className="ham-menu">
//           <button className="nav-menu" onClick={handleMenuToggle}>
//             <MdMenu />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
