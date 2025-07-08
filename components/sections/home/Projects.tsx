"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"
import ProjectList from "@/components/ProjectList"

export default function Projects() {
  const { t } = useLanguage()

  return (
    <section className="projects">
      <motion.div
        className="projects__header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="h2">{t.pages.home.projects.title}</h2>
        <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
          <Link className="projects__link" href="/projects">
            {t.pages.home.projects.button} {"~~>"}
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <ProjectList limit={3} />
      </motion.div>
    </section>
  )
}
