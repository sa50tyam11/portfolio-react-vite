import Lightning from "../components/ui/Lightning";

function Hero() {
  return (
    <section id="home" className="hero">
      <Lightning
        hue={230}
        speed={1}
        intensity={1}
        size={1}
      />

      <div className="hero-content">
        <h1>Hi, I’m Satyam</h1>
        <p>Frontend Developer building clean and interactive web experiences.</p>
      </div>
    </section>
  );
}

export default Hero;
