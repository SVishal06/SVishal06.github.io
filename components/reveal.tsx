"use client";

import { ElementType, ReactNode, useMemo } from "react";
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
  y = 14,
  amount = 0.14,
  as = "div"
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = useMemo(() => motion.create(as), [as]);

  if (shouldReduceMotion) {
    return <MotionTag className={className}>{children}</MotionTag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </MotionTag>
  );
}
