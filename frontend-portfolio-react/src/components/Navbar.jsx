import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="logo">Satyam</div>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li className="cta"><a href="#contact">Contact</a></li>
        </ul>

        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
