import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDiscord, FaInstagram } from "react-icons/fa";
import Lightning from "../components/ui/Lightning";
import "./Hero.css";

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero-bg">
                <Lightning
                    hue={260}
                    speed={1}
                    intensity={1}
                    size={1}
                />
            </div>


            {/* Content */}
            <div className="hero-content">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Hi, I’m <span>Satyam</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Frontend Developer crafting clean, interactive, and scalable web
                    experiences using React and modern UI technologies.
                </motion.p>

                {/* CTA */}
                <motion.div
                    className="hero-cta"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <a href="#projects" className="btn primary">
                        View Work
                    </a>
                    <a href="#contact" className="btn outline">
                        Contact Me
                    </a>
                </motion.div>

                {/* Socials */}
                <motion.div
                    className="hero-socials"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <a href="https://github.com/yourusername" target="_blank">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank">
                        <FaLinkedin />
                    </a>
                    <a href="https://discord.com/users/yourid" target="_blank">
                        <FaDiscord />
                    </a>
                    <a href="https://instagram.com/yourusername" target="_blank">
                        <FaInstagram />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
