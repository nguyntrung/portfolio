"use client"

import { Mail, Globe, Instagram, Linkedin, Facebook, Github } from "lucide-react"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "@/hooks/useInView"
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations"

export default function Footer() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 });
  
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/nguyen.trung.587064/", label: "Facebook", color: "#1877F2" },
    { icon: Instagram, href: "https://instagram.com/ntrung203/", label: "Instagram", color: "#E1306C" },
    { icon: Linkedin, href: "https://linkedin.com/in/nguyentrung203", label: "LinkedIn", color: "#0077B5" },
    { icon: Github, href: "https://github.com/nguyntrung", label: "GitHub" },
  ]

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
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-card backdrop-blur-md shadow-sm transition-all hover:scale-110"
                  >
                    <Icon
                      className="w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 group-hover:brightness-110"
                      style={color ? { color } : {}}
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* --- Right Section --- */}
          <motion.div 
            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            variants={staggerContainer}
          >
            <motion.div variants={scaleIn}>
              <Link
                href="https://nguyentrung.com"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline"
              >
                <Card className="bg-card p-6 sm:p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:scale-105 transition-all duration-300">
                  <Globe className="w-6 h-6 sm:w-8 sm:h-8 mb-3 sm:mb-4" />
                  <p className="font-medium text-sm sm:text-base">nguyentrung.com</p>
                </Card>
              </Link>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Link href="mailto:nguyentrung060503@gmail.com" className="no-underline">
                <Card className="bg-card p-6 sm:p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:scale-105 transition-all duration-300">
                  <Mail className="w-6 h-6 sm:w-8 sm:h-8 mb-3 sm:mb-4" />
                  <p className="font-medium text-sm sm:text-base break-all">nguyentrung060503@gmail.com</p>
                </Card>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-8 sm:mt-12 text-center text-xs sm:text-sm text-muted-foreground"
          variants={fadeInUp}
        >
          © {new Date().getFullYear()} Nguyen Thanh Trung. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  )
}
