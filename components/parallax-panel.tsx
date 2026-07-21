"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

type ParallaxPanelProps = {
  children: React.ReactNode;
  className?: string;
  offset?: number;
};

export function ParallaxPanel({
  children,
  className,
  offset = 24
}: ParallaxPanelProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [shouldReduceMotion ? 0 : offset, shouldReduceMotion ? 0 : -offset]);

  return (
    <motion.div ref={ref} className={className} style={shouldReduceMotion ? undefined : { y }}>
      {children}
    </motion.div>
  );
}

