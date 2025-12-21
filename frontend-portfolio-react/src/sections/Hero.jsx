import Lightning from "../components/ui/Lightning";
import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg">
                <Lightning hue={270} speed={0.6} intensity={0.8} size={1.2} />
            </div>

            <div className="hero-content glass">
                <span className="badge">Frontend Developer</span>

                <h1>
                    Hey there, I’m <span>Satyam</span>
                </h1>

                <h2>
                    Building clean, modern <br />
                    web experiences with <span className="grad">React</span>
                </h2>

                <p>
                    I focus on crafting performant, scalable and visually refined
                    interfaces using modern frontend technologies.
                </p>

                <div className="hero-actions">
                    <a href="#projects" className="btn primary">View Work</a>
                    <a href="#contact" className="btn ghost">Contact Me</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
