"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/LanguageContext"
import SkillBlock from "@/components/SkillBlock"

const skills = {
  language: ["JavaScript", "TypeScript", "Java"],
  database: ["MongoDB", "PostgreSQL"],
  other: ["HTML", "CSS", "SASS", "Tailwindcss"],
  tool: ["VSCode", "Figma", "Git", "Supabase", "Postman"],
  framework: ["React.js", "Next.js", "Express.js", "Node.js"],
}

export default function Skills() {
  const { t } = useLanguage()

  return (
    <section className="skills">
      <motion.h2
        className="h2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {t.pages.about.skills.title}
      </motion.h2>

      <motion.div
        className="skills__content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {Object.keys(skills).map((id, index) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
          >
            <SkillBlock id={id} items={skills[id as keyof typeof skills]} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
