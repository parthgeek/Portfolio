"use client"

import { motion } from "framer-motion"
import Hero from "@/components/sections/home/Hero"
import Quote from "@/components/sections/home/Quote"
import Projects from "@/components/sections/home/Projects"
import Skills from "@/components/sections/home/Skills"
import About from "@/components/sections/home/About"
import Contacts from "@/components/sections/home/Contacts"
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

export default function Home() {
  const { t } = useLanguage()

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="home-page">
      <motion.div variants={sectionVariants}>
        <Hero />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <Quote />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <Projects />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <Skills />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <About />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <Contacts />
      </motion.div>
    </motion.div>
  )
}
