"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/LanguageContext"

interface SkillBlockProps {
  id: string
  items: string[]
}

export default function SkillBlock({ id, items }: SkillBlockProps) {
  const { t } = useLanguage()

  return (
    <motion.div
      className="skill-block"
      whileHover={{ y: -5, borderColor: "var(--primary)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div
        className="skill-block__name"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {t.skills[id as keyof typeof t.skills]}
      </motion.div>

      <ul className="skill-block__list">
        {items.map((tech, index) => (
          <motion.li
            key={tech}
            className="skill-block__skill"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ color: "var(--white)" }}
          >
            {tech}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}
