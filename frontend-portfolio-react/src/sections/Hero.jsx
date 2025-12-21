import Lightning from "../components/ui/Lightning";
import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero">
            {/* Lightning Background */}
            <div className="hero-bg">
                <Lightning hue={230} speed={1} intensity={1} size={1} />
            </div>

            {/* Hero Content */}
            <div className="hero-content">
                <p className="hero-eyebrow">Hey there, I’m <span>Satyam</span></p>

                <h1 className="hero-title">
                    Building <span className="grad grad-clean">clean</span>, modern <br />
                    web experiences with <span className="grad grad-react">React</span>
                </h1>

                <p className="hero-subtitle">
                    Frontend Developer · UI / UX <br />
                    I focus on performant, scalable and visually refined interfaces.
                </p>

                <div className="hero-actions">
                    <a href="#projects" className="btn-primary">View Work</a>
                    <a href="#contact" className="btn-secondary">Contact Me</a>
                </div>

                <div className="hero-socials">
                    <a href="https://github.com/sa50tyam11" target="_blank" aria-label="GitHub">
                        <i className="ri-github-fill" />
                    </a>
                    <a href="https://www.linkedin.com/in/satyamkrjha5011" target="_blank" aria-label="LinkedIn">
                        <i className="ri-linkedin-fill" />
                    </a>
                    <a href="https://discord.com/users/1448638445059702784" target="_blank" aria-label="Discord">
                        <i className="ri-discord-fill" />
                    </a>
                    <a href="https://instagram.com/_satyamkrjha_" target="_blank" aria-label="Instagram">
                        <i className="ri-instagram-line" />
                    </a>
                </div>
            </div>
        </section>
    );
};


export default Hero;
