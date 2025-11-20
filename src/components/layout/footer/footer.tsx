"use client"

import { Card } from "@/components/ui/card"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "@/hooks/useInView"
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations"
import { socialLinks, contactLinks } from "@/data/social"

export default function Footer() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <motion.footer 
      ref={ref}
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-background border-t border-muted-foreground/20"
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">

          {/* --- Left Section --- */}
          <motion.div className="text-center lg:text-left" variants={fadeInUp}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 max-w-md mx-auto lg:mx-0">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            {/* Social Icons */}
            <motion.div 
              className="flex gap-3 justify-center lg:justify-start"
              variants={staggerContainer}
            >
              {socialLinks.map(({ icon: Icon, href, label, color }, index) => (
                <motion.div
                  key={label}
                  variants={scaleIn}
                  custom={index}
                >
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-card backdrop-blur-md shadow-sm transition-all hover:scale-110 duration-300"
                  >
                    <Icon
                      className="w-5 h-5 transition-colors group-hover:brightness-110"
                      style={color ? { color } : {}}
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* --- Right Section --- */}
          <motion.div 
            className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            variants={staggerContainer}
          >
            {
              contactLinks.map(({ icon: Icon, href, label }, index) => (
                <motion.div
                  key={label}
                  variants={scaleIn}
                  custom={index}
                >
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"
                  >
                    <Card className="bg-card p-4 sm:p-8 flex flex-row sm:flex-col
                      items-start sm:items-center justify-center sm:text-center
                      cursor-pointer rounded-full sm:rounded-xl hover:scale-105 transition-all duration-600"
                    >
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 mb-0 sm:mb-4" />
                      <p className="font-medium text-sm sm:text-base">{label}</p>
                    </Card>
                  </Link>
                </motion.div>
              ))
            }
          </motion.div>
        </div>

        <motion.div 
          className="mt-8 sm:mt-12 text-center text-xs sm:text-sm text-muted-foreground"
          variants={fadeInUp}
        >
          © 2025 Nguyen Thanh Trung. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  )
}
