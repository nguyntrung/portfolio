"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Lightbox } from "@/components/ui/lightbox"
import { projects } from "@/data/project"
import { useInView } from "@/hooks/useInView"
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations"
import { Eye, Github } from "lucide-react"

export default function ProjectsPage() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [lightbox, setLightbox] = React.useState<{ isOpen: boolean; src: string; alt: string }>({ 
    isOpen: false, 
    src: "", 
    alt: "" 
  });

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
            <motion.div key={project.id} variants={scaleIn} custom={index}>
              <Card className="h-full border-none shadow-2xl p-4">
                <CardContent className="p-0">
                  <div 
                    className="group relative w-full aspect-video rounded-xl overflow-hidden shadow-md cursor-pointer"
                    onClick={() => setLightbox({ isOpen: true, src: project.imageUrl.src, alt: project.title })}
                  >
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Overlay with Eye icon that appears on hover */}
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-80 transition-opacity duration-300">
                      <Eye className="h-5 w-5 text-white" />
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    <h3 className="font-semibold text-base sm:text-lg">{project.title}</h3>

                    {/* Badge */}
                    <div className="flex items-center gap-2">
                      <span className={`inline-flex items-center gap-2 text-xs sm:text-sm font-medium ${project.status === "Completed" ? "text-green-500" : "text-yellow-500"}`}>
                        <span className={`inline-block w-3 h-3 rounded-full ${project.status === "Completed" ? "bg-green-500" : "bg-yellow-500"}`} />
                        {project.status}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Used Badges */}
                    <div className="flex flex-wrap gap-2">
                      {project.techUsed.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="text-xs px-2 py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      {project.link && (
                        <Button 
                          asChild 
                          variant="outline"
                          size="sm"
                          className="text-xs sm:text-sm"
                        >
                          <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            Preview
                          </Link>
                        </Button>
                      )}

                      {project.gitHubUrl && (
                        <Button 
                          asChild 
                          variant="outline"
                          size="sm"
                          className="text-xs sm:text-sm"
                        >
                          <Link
                            href={project.gitHubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            GitHub
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
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
