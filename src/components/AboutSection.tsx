import AnimatedSection from "./AnimatedSection";
import Lottie from "lottie-react";
import devAnimation from "../assets/animation/dev.json";

const AboutSection = () => (
  <section id="about" className="relative">
    <div className="section-container">
      <AnimatedSection>
        <p className="mono-text text-sm mb-2 tracking-widest uppercase" style={{ color: "#8b5cf6" }}>About Me</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#8b5cf6" }}>Who I Am</h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-12 mt-10">
        <AnimatedSection delay={0.1}>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I'm an AIML student and Java Full Stack Developer passionate about crafting scalable,
            user-centric web applications. With hands-on internship experience at ByteXL and
            ApexPlanet, I bring real-world project delivery skills to the table.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            My toolkit spans Java, Spring Boot, React, SQL, and MongoDB — giving me the versatility
            to build robust backends and polished frontends alike.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            When I'm not coding, you'll find me competing in hackathons, publishing research, or
            diving into new frameworks to sharpen my craft.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="about-animation">
            <Lottie 
              animationData={devAnimation} 
              loop={true}
              autoplay={true}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AboutSection;
