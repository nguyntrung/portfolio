"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { FloatingElement } from "./scroll-animations"

// Tech logos
import ReactLogo from "../../../public/tech-image/react.svg"
import TypeScriptLogo from "../../../public/tech-image/typescript.svg"
import NextJSLogo from "../../../public/tech-image/nextjs.svg"
import NodeJSLogo from "../../../public/tech-image/nodejs.svg"
import TailwindLogo from "../../../public/tech-image/tailwindcss.svg"
import MongoDBLogo from "../../../public/tech-image/mongodb.svg"
import ExpressLogo from "../../../public/tech-image/express.svg"
import PostgreSQLLogo from "../../../public/tech-image/postgresql.svg"
import MySQLLogo from "../../../public/tech-image/mysql.svg"

interface TechBackgroundProps {
  className?: string
  opacity?: number
  density?: "low" | "medium" | "high"
}

export function TechBackground({ 
  className = "", 
  opacity = 0.05,
  density = "medium" 
}: TechBackgroundProps) {
  const getLogoCount = () => {
    switch (density) {
      case "low": return 4
      case "medium": return 6
      case "high": return 9
      default: return 6
    }
  }

  const allLogos = [
    { src: ReactLogo, alt: "React", size: "w-12 h-12" },
    { src: TypeScriptLogo, alt: "TypeScript", size: "w-10 h-10" },
    { src: NextJSLogo, alt: "Next.js", size: "w-14 h-14" },
    { src: NodeJSLogo, alt: "Node.js", size: "w-11 h-11" },
    { src: TailwindLogo, alt: "Tailwind CSS", size: "w-9 h-9" },
    { src: MongoDBLogo, alt: "MongoDB", size: "w-13 h-13" },
    { src: ExpressLogo, alt: "Express.js", size: "w-10 h-10" },
    { src: PostgreSQLLogo, alt: "PostgreSQL", size: "w-12 h-12" },
    { src: MySQLLogo, alt: "MySQL", size: "w-11 h-11" },
  ]

  const positions = [
    "top-20 left-16", "top-32 right-20", "top-48 left-8", "top-60 right-32",
    "top-80 left-24", "top-96 right-12", "bottom-80 left-16", "bottom-60 right-24",
    "bottom-40 left-32", "bottom-20 right-16", "top-40 left-40", "top-72 right-40",
    "bottom-72 left-8", "bottom-48 right-8", "top-16 left-24", "top-56 right-28"
  ]

  const delays = [0.2, 0.8, 1.2, 0.6, 1.4, 1.0, 0.3, 0.9, 1.1, 0.7, 0.4, 1.3, 0.5, 1.5, 0.1, 0.8]

  const selectedLogos = allLogos.slice(0, getLogoCount())
  const selectedPositions = positions.slice(0, getLogoCount())
  const selectedDelays = delays.slice(0, getLogoCount())

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} style={{ opacity }}>
      {selectedLogos.map((logo, index) => (
        <div 
          key={logo.alt}
          className={`absolute ${selectedPositions[index]} ${logo.size}`}
        >
          <FloatingElement delay={selectedDelays[index]}>
            <Image 
              src={logo.src} 
              alt={logo.alt} 
              className="w-full h-full object-contain" 
            />
          </FloatingElement>
        </div>
      ))}
      
      {/* Additional floating dots for more visual interest */}
      <div className="absolute top-80 left-32 w-2 h-2 bg-primary/30 rounded-full">
        <FloatingElement delay={0.3} />
      </div>
      <div className="absolute top-72 right-40 w-3 h-3 bg-secondary/25 rounded-full">
        <FloatingElement delay={0.9} />
      </div>
      <div className="absolute bottom-60 left-40 w-2 h-2 bg-accent/35 rounded-full">
        <FloatingElement delay={1.1} />
      </div>
      <div className="absolute bottom-80 right-16 w-4 h-4 bg-primary/20 rounded-full">
        <FloatingElement delay={0.7} />
      </div>
      <div className="absolute top-40 right-48 w-2 h-2 bg-secondary/30 rounded-full">
        <FloatingElement delay={1.3} />
      </div>
      <div className="absolute bottom-40 left-48 w-3 h-3 bg-accent/25 rounded-full">
        <FloatingElement delay={0.5} />
      </div>
    </div>
  )
}

// Sticky version that follows scroll
export function StickyTechBackground({ 
  className = "", 
  opacity = 0.03,
  density = "low" 
}: TechBackgroundProps) {
  return (
    <motion.div 
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{ opacity }}
      initial={{ opacity: 0 }}
      animate={{ opacity }}
      transition={{ duration: 1 }}
    >
      <TechBackground density={density} opacity={1} />
    </motion.div>
  )
}

