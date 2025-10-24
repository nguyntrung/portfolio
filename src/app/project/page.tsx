"use client"

import * as React from "react"
import { motion } from "framer-motion"

import { Lightbox } from "@/components/ui/lightbox"
import { ProjectCard } from "./_components/card-project"
import { projects } from "@/data/project"
import { useInView } from "@/hooks/useInView"
import { fadeInUp, staggerContainer } from "@/lib/animations"

export default function ProjectsPage() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [lightbox, setLightbox] = React.useState<{ isOpen: boolean; src: string; alt: string }>({ 
    isOpen: false, 
    src: "", 
    alt: "" 
  });

  const handleImageClick = (src: string, alt: string) => {
    setLightbox({ isOpen: true, src, alt });
  };

  return (
    <section 
      id="projects" 
      className="min-h-screen flex items-center justify-center py-8 sm:py-12 lg:py-16"
    >
      <motion.div 
        ref={ref}
        className="w-full max-w-6xl space-y-6 sm:space-y-8 px-4 sm:px-6 lg:px-8"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="text-center space-y-2" variants={fadeInUp}>
          <h2 className="text-2xl sm:text-3xl font-bold">Projects</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Explore projects I&apos;ve worked on
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={{ ...project, id: String(project.id) }}
              index={index}
              onImageClick={handleImageClick}
            />
          ))}
        </div>
      </motion.div>

      {/* Lightbox component */}
      <Lightbox 
        isOpen={lightbox.isOpen} 
        onClose={() => setLightbox({ ...lightbox, isOpen: false })} 
        src={lightbox.src} 
        alt={lightbox.alt} 
      />
    </section>
  )
}
