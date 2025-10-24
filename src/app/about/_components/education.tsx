"use client"

import { educationData } from "@/data/education";
import { motion } from "framer-motion"
import { useInView } from "@/hooks/useInView"
import { fadeInUp, staggerContainer } from "@/lib/animations"

export default function Education() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="space-y-4 sm:space-y-6"
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div className="text-center space-y-2" variants={fadeInUp}>
        <h2 className="text-2xl sm:text-3xl font-bold">Education</h2>
      </motion.div>
      <motion.div
        variants={staggerContainer}
        className="relative bg-card backdrop-blur-md shadow-sm rounded-xl p-4 sm:p-6 transition-all"
        // whileHover={{ scale: 1.02, y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-base sm:text-lg font-semibold"
          >
            {educationData.school}
          </motion.h1>
          <motion.span
            variants={fadeInUp}
            className="text-xs sm:text-sm text-muted-foreground"
          >
            {educationData.startYear} – {educationData.endYear}
          </motion.span>
        </motion.div>

        <motion.p 
          variants={fadeInUp}
          className="text-xs sm:text-sm mt-2 text-muted-foreground font-medium"
        >
          {educationData.degree ? `${educationData.degree} – ${educationData.major}` : educationData.major}
        </motion.p>

        {educationData.description && (
          <motion.p
            variants={fadeInUp}
            className="mt-3 text-xs sm:text-sm leading-relaxed"
          >
            {educationData.description}
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  )
}
