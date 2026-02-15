import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import profileImg from "../assets/profile.jpg";

function Navbar() {

  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  function toggleTheme() {
    setDark(!dark);
    document.body.classList.toggle("dark");
  }

  return (
    <div className="navbar">
      <a href="#home">
        <img src={profileImg} alt="profile" className="nav-profile" />
      </a>

      <div className={`nav-links ${open ? "active" : ""}`}>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        
        <div 
          onClick={toggleTheme}
          style={{ cursor: "pointer" }}
        >
          {dark ? <LightModeIcon  className="lightModeIcon"/> : <DarkModeIcon />}
        </div>

        <div 
          className={`hamburger ${open ? "active" : ""}`} 
          onClick={handleClick}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </div>

      </div>
    </div>
  );
}

export default Navbar;
