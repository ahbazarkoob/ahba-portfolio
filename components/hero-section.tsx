"use client"
import { motion } from "framer-motion";

const stats = [
  { value: "2+", label: "Years of Experience" },
  { value: "10+", label: "Completed Projects" },
  { value: "5K+", label: "Hours Worked" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 md:px-12 lg:pl-28">
      <div className="max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-900 leading-[0.9] tracking-tight mb-6">
            <span className="text-foreground">FRONTEND</span>
            <br />
            <span className="text-gradient">DEVELOPER</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-xl mt-6"
        >
          <p className="text-secondary-foreground text-base md:text-lg leading-relaxed">
            Hi! I'm <span className="text-foreground font-medium">Ahba</span>. A creative Frontend Developer with 2+ years of experience in building high-performance, scalable, and responsive web solutions.
          </p>
          <a
            href="https://www.linkedin.com/in/ahba-lateef-zarkoob-9a503920b/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-6 px-7 py-3 rounded-full bg-primary text-primary-foreground font-display font-semibold text-sm hover:opacity-90 transition-opacity glow"
          >
            Hire Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex gap-10 md:gap-16 mt-16 pt-10 border-t border-border"
        >
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="font-display text-3xl md:text-4xl font-bold text-foreground">{value}</p>
              <p className="text-muted-foreground text-xs md:text-sm mt-1">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
