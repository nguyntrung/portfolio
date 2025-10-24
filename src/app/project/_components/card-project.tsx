import * as React from "react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, Github } from "lucide-react"
import { scaleIn } from "@/lib/animations"

interface ProjectCardProps {
  project: {
    id: string
    title: string
    description: string
    imageUrl: string | StaticImageData
    status: string
    techUsed: string[]
    link?: string
    gitHubUrl?: string
  }
  index: number
  onImageClick: (src: string, alt: string) => void
}

export function ProjectCard({ project, index, onImageClick }: ProjectCardProps) {
  return (
    <motion.div variants={scaleIn} custom={index}>
      <Card className="h-full border-none shadow-2xl p-4">
        <CardContent className="p-0">
          <div 
            className="group relative w-full aspect-video rounded-xl overflow-hidden shadow-md cursor-pointer"
            onClick={() => onImageClick(typeof project.imageUrl === "string" ? project.imageUrl : project.imageUrl.src, project.title)}
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover transition-all duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {/* Overlay with Eye icon that appears on hover */}
            <div className="absolute inset-0 bg-muted/80 flex items-center justify-center opacity-0 group-hover:opacity-80 transition-opacity duration-300">
              <Eye className="h-8 w8 text-white" />
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
  )
}
