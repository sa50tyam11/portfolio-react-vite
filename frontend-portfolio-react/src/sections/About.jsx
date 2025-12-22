import "./About.css";
import profileImg from "/images/PHOTO-2025-12-22-12-38-30.jpg";

import {
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* LEFT CONTENT */}
        <div className="about-content">
          <span className="about-label">ABOUT</span>

          <h2 className="about-title">About Me</h2>
          <p className="about-name">Satyam Kumar Jha</p>

          <p className="about-text">
            I’m a <strong>Frontend Developer</strong> focused on building clean,
            accessible, and performance-focused web interfaces. I work primarily
            with modern JavaScript, React, and UI/UX principles to create
            scalable, visually refined experiences.
          </p>

          <p className="about-text">
            I enjoy turning complex ideas into intuitive digital products and
            continuously improving code quality, performance, and user
            experience.
          </p>

          <p className="about-email">
            📧 satyamkrjha5011@gmail.com
          </p>

          {/* SOCIAL LINKS */}
          <div className="about-socials">
            <a href="https://github.com/sa50tyam11" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://discord.com" target="_blank" rel="noreferrer">
              <FaDiscord />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="about-image">
          <img src={profileImg} alt="Satyam portrait" />
        </div>
      </div>
    </section>
  );
};

export default About;
