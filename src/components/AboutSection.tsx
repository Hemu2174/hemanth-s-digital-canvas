import AnimatedSection from "./AnimatedSection";
import { Code2, Brain, Rocket } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Full Stack", desc: "Java, Spring Boot, React — end-to-end delivery" },
  { icon: Brain, title: "AI/ML Explorer", desc: "Applying machine learning to real-world problems" },
  { icon: Rocket, title: "Fast Learner", desc: "Thrives on hackathons, new stacks, and challenges" },
];

const AboutSection = () => (
  <section id="about" className="relative">
    <div className="section-container">
      <AnimatedSection>
        <p className="mono-text text-primary text-sm mb-2 tracking-widest uppercase">About Me</p>
        <h2 className="section-title">Who I Am</h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-12 mt-10">
        <AnimatedSection delay={0.1}>
          <p className="text-secondary-foreground leading-relaxed mb-4">
            I'm an AIML student and Java Full Stack Developer passionate about crafting scalable,
            user-centric web applications. With hands-on internship experience at ByteXL and
            ApexPlanet, I bring real-world project delivery skills to the table.
          </p>
          <p className="text-secondary-foreground leading-relaxed mb-4">
            My toolkit spans Java, Spring Boot, React, SQL, and MongoDB — giving me the versatility
            to build robust backends and polished frontends alike.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            When I'm not coding, you'll find me competing in hackathons, publishing research, or
            diving into new frameworks to sharpen my craft.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid gap-4">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="glass-card rounded-xl p-5 flex items-start gap-4 hover:border-primary/30 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AboutSection;
