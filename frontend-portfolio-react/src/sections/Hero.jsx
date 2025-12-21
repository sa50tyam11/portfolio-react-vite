import Lightning from "../components/ui/Lightning";
import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero">
            {/* Background Lightning */}
            <div className="hero-bg">
                <Lightning
                    hue={270}
                    speed={1.1}
                    intensity={1.6}
                    size={1.4}
                />
            </div>

            {/* Hero Content */}
            <div className="hero-content">
                <span className="hero-badge">Frontend Developer</span>

                <h1 className="hero-title">
                    Hey there, I’m <span>Satyam</span>
                    <br />
                    Building clean, modern
                    <br />
                    web experiences with <span className="accent">React</span>
                </h1>

                <p className="hero-subtitle">
                    I focus on crafting performant, scalable and visually refined
                    interfaces using modern frontend technologies.
                </p>

                <div className="hero-actions">
                    <a href="#projects" className="btn primary">
                        View Work
                    </a>
                    <a href="#contact" className="btn ghost">
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
