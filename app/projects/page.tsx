"use client"

import { motion } from "framer-motion"
import Path from "@/components/Path"
import ProjectList from "@/components/ProjectList"
import { useLanguage } from "@/contexts/LanguageContext"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function Projects() {
  const { t } = useLanguage()

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="projects-page">
      <motion.div variants={itemVariants}>
        <Path description={t.pages.projects.description} />
      </motion.div>

      <motion.div variants={itemVariants}>
        <ProjectList title={t.pages.projects.decent} filter={(p) => !p.isSmall} />
      </motion.div>
    </motion.div>
  )
}
