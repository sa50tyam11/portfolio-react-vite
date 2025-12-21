import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <span className="logo">Satyam</span>

        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li className="cta"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
