"use client"

import { motion } from "framer-motion"
import Path from "@/components/Path"
import About from "@/components/sections/about/About"
import Skills from "@/components/sections/about/Skills"
import Facts from "@/components/sections/about/Facts"
import { useLanguage } from "@/contexts/LanguageContext"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

export default function AboutMe() {
  const { t } = useLanguage()

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="about-page">
      <motion.div variants={sectionVariants}>
        <Path description={t.pages.about.description} />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <About />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <Skills />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <Facts />
      </motion.div>
    </motion.div>
  )
}
