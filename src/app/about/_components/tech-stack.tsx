"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { TechCardProps, techStack } from "@/data/tech-stack"
import { useInView } from "@/hooks/useInView"
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations"

function TechCard({ title, imageUrl, description }: TechCardProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <motion.div 
          className="relative flex flex-col items-center justify-between space-y-2 p-3 sm:p-4 rounded-xl backdrop-blur-md bg-card shadow-sm w-full h-24 sm:h-28 md:h-32 cursor-pointer"
          // variants={scaleIn}
          // whileHover={{ scale: 1.05, y: -5 }}
          // whileTap={{ scale: 0.95 }}
          // transition={{ duration: 0.2 }}
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              width={32}
              height={32}
              className="object-contain transition-all hover:scale-110 duration-400 w-full h-full"
            />
          </div>
          <p className="text-center text-xs sm:text-sm text-muted-foreground font-medium leading-tight">{title}</p>
        </motion.div>
      </HoverCardTrigger>
      <HoverCardContent className="w-64 text-sm">
        <h4 className="flex gap-2 font-semibold mb-1">
          <Image src={imageUrl || "/placeholder.svg"}
            alt={title}
            width={16}
            height={16}
          />
          {title}
        </h4>
        <p className="text-muted-foreground">{description}</p>
      </HoverCardContent>
    </HoverCard>
  )
}

export default function TechStack() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <motion.div 
      ref={ref}
      className="w-full space-y-4 sm:space-y-6"
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div className="text-center space-y-2" variants={fadeInUp}>
        <h2 className="text-2xl sm:text-3xl font-bold">Tech Stack</h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
          Skilled in developing full-stack web applications using modern technologies like React, Next.js, Node.js, and TypeScript.
        </p>
      </motion.div>
      <motion.div 
        className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8"
        variants={staggerContainer}
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.title}
            variants={scaleIn}
            custom={index}
          >
            <TechCard
              title={tech.title}
              imageUrl={tech.imageUrl}
              description={tech.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
