import Lightning from "../components/ui/Lightning";
import "./Hero.css";
import { FaGithub, FaLinkedin, FaDiscord, FaInstagram } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg">
                <Lightning />
            </div>

            <div className="hero-overlay" />

            <div className="hero-content">
                <span className="hero-eyebrow">
                    ⚡ Hey there, I’m <strong>Satyam</strong>
                </span>

                <h1 className="hero-title">
                    Building <span className="gradient-text">clean</span>, modern <br />
                    web experiences with <span className="gradient-text">React</span>
                </h1>

                <p className="hero-sub">
                    Frontend Developer · UI / UX <br />
                    I focus on performant, scalable and visually refined interfaces.
                </p>

                <div className="hero-actions">
                    <a href="#work" className="btn primary">View Work</a>
                    <a href="#contact" className="btn ghost">Contact Me</a>
                </div>

                <div className="hero-socials">
                    <a href="#" aria-label="GitHub"><FaGithub /></a>
                    <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                    <a href="https://discord.com/users/1448638445059702784" aria-label="Discord"><FaDiscord /></a>
                    <a href="#" aria-label="Instagram"><FaInstagram /></a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
