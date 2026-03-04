import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [phase, setPhase] = useState<"name" | "exit">("name");

  useEffect(() => {
    const timer = setTimeout(() => setPhase("exit"), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {phase !== "exit" ? null : null}
      {phase === "name" && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          exit={{ 
            clipPath: "circle(0% at 50% 50%)",
          }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="relative">
            <motion.h1
              className="font-display text-7xl sm:text-8xl md:text-9xl font-black text-foreground tracking-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              AHBA
            </motion.h1>
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-primary rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "left" }}
            />
            <motion.p
              className="font-display text-sm md:text-base text-muted-foreground tracking-[0.3em] uppercase mt-6 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Frontend Developer
            </motion.p>
          </div>
        </motion.div>
      )}
      {phase === "exit" && (
        <motion.div
          key="intro-exit"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          initial={{ clipPath: "circle(150% at 50% 50%)" }}
          animate={{ clipPath: "circle(0% at 50% 50%)" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          onAnimationComplete={onComplete}
        >
          <div className="relative">
            <h1 className="font-display text-7xl sm:text-8xl md:text-9xl font-black text-foreground tracking-tight">
              AHBA
            </h1>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-primary rounded-full" />
            <p className="font-display text-sm md:text-base text-muted-foreground tracking-[0.3em] uppercase mt-6 text-center">
              Frontend Developer
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
