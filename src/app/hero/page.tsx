"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import ImageProfile from "../../../public/profile.jpg"
import Reactlogo from "../../../public/tech-image/react.svg"
import { useInView } from "@/hooks/useInView"
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations"
import { FloatingElement, ParallaxElement } from "@/components/ui/scroll-animations"
import Typewriter from "typewriter-effect"
import { profile } from "@/data/profile"

export default function Page() {
  const { ref: heroRef, isInView: heroInView } = useInView<HTMLDivElement>({ threshold: 0.2 });
  const { ref: imageRef, isInView: imageInView } = useInView<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section id="hero" className="min-h-screen flex items-center py-8 sm:py-12 lg:py-16 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full">
        <FloatingElement delay={0} />
        <Image
          src={Reactlogo}
          alt="Code Icon"
          width={32}
          height={32}
          sizes="(max-width: 640px) 32px, 64px"
          className="absolute -top-6 -left-6 w-23 h-23 opacity-30 animate-spin"
        />
      </div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-secondary/30 rounded-full">
        <FloatingElement delay={0.5} />
      </div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-accent/40 rounded-full">
        <FloatingElement delay={1} />
      </div>
      <div className="absolute bottom-20 right-10 w-5 h-5 bg-primary/25 rounded-full">
        <FloatingElement delay={1.5} />
      </div>
      
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-center">
        <motion.div 
          ref={heroRef}
          className="space-y-4 sm:space-y-6 text-center lg:text-left"
          variants={staggerContainer}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          <motion.p 
            variants={fadeInUp}
            className="font-medium tracking-wide text-sm sm:text-base"
          >
            {profile.greeting}
          </motion.p>

          <motion.h1 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance leading-tight"
          >
            Im {profile.name},
            <br />
            <motion.span
              variants={fadeInLeft}
              className="block text-primary"
            >
              <Typewriter
                options={{
                  strings: [...profile.tagline],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 30,
                  cursor: "_",
                }}
              />
            </motion.span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            {profile.description}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex justify-center lg:justify-start"
          >
            <Button
              size="lg"
              className="font-semibold px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base"
              asChild
            >
              <motion.a
                href="#projects"
              >
                EXPLORE MY WORK
              </motion.a>
            </Button>
          </motion.div>
        </motion.div>

        <ParallaxElement offset={100}>
          <motion.div 
            ref={imageRef}
            className="relative h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px] mx-auto"
            variants={fadeInRight}
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="w-full h-full rounded-full overflow-hidden shadow-2xl"
              // whileHover={{ scale: 1.05 }}
              // transition={{ duration: 0.3 }}
            >
              <Image 
                src={ImageProfile}
                alt="Developer Workspace"
                className="w-full h-full object-cover"
                priority
                sizes="(max-width: 640px) 250px, (max-width: 768px) 300px, (max-width: 1024px) 400px, 500px"
              />
            </motion.div>
          </motion.div>
        </ParallaxElement>
      </div>
    </section>
  )
}
