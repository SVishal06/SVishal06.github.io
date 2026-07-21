"use client";

import { ElementType, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  amount?: number;
  as?: ElementType;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 18,
  amount = 0.14,
  as = "div"
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion.create(as);

  if (shouldReduceMotion) {
    return <MotionTag className={className}>{children}</MotionTag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.72, ease: [0.2, 0.8, 0.2, 1], delay }}
    >
      {children}
    </MotionTag>
  );
}

