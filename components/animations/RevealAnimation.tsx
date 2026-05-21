"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";

interface RevealAnimationProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export function RevealAnimation({
  children,
  delay = 0,
  duration = 0.5,
  direction = "up",
  className = "",
}: RevealAnimationProps) {
  // Define initial positions based on direction
  const initialPositions = {
    up: { y: 20, opacity: 0 },
    down: { y: -20, opacity: 0 },
    left: { x: 20, opacity: 0 },
    right: { x: -20, opacity: 0 },
  };

  return (
    <motion.div
      initial={initialPositions[direction]}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
