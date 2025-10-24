"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/useInView"

interface FloatingElementProps {
  children?: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

export function FloatingElement({ 
  children, 
  delay = 0, 
  duration = 2, 
  className = "" 
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-10, 10, -10],
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  )
}

interface ParallaxElementProps {
  children: React.ReactNode
  offset?: number
  className?: string
}

export function ParallaxElement({ 
  children, 
  offset = 50, 
  className = "" 
}: ParallaxElementProps) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ y: offset, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: offset, opacity: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  )
}

interface ScrollRevealProps {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  className?: string
}

export function ScrollReveal({ 
  children, 
  direction = "up", 
  delay = 0,
  className = "" 
}: ScrollRevealProps) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  const directionMap = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ 
        ...directionMap[direction], 
        opacity: 0 
      }}
      animate={isInView ? { 
        y: 0, 
        x: 0, 
        opacity: 1 
      } : { 
        ...directionMap[direction], 
        opacity: 0 
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  )
}
