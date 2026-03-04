"use client";

import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:pl-28">
      <div className="max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-secondary-foreground leading-relaxed mb-12 max-w-3xl">
            I believe in a user-centered design approach, ensuring that every project I work on is tailored to meet the specific needs of its users.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div>
            <p className="text-primary font-display text-sm font-semibold mb-3">This is me.</p>
            <h3 className="font-display text-2xl font-bold mb-4">Hi, I'm Ahba.</h3>
            <p className="text-secondary-foreground leading-relaxed text-sm">
              I'm a frontend web developer dedicated to turning ideas into creative solutions. I specialize in creating seamless and intuitive user experiences using React, TypeScript, and modern CSS frameworks.
            </p>
          </div>
          <div>
            <p className="text-secondary-foreground leading-relaxed text-sm">
              My approach focuses on creating scalable, high-performing solutions tailored to both user needs and business objectives. By prioritizing performance, accessibility, and responsiveness, I strive to deliver experiences that not only engage users but also drive tangible results.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
