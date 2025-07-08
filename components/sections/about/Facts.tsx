"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Facts() {
  const { t } = useLanguage()

  return (
    <section className="facts">
      <motion.h2
        className="h2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {t.pages.about.facts.title}
      </motion.h2>

      <div className="facts__content">
        <motion.ul
          className="facts__list"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t.pages.about.facts.list.map((fact, index) => (
            <motion.li
              key={index}
              className="fact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, backgroundColor: "var(--gray-op)" }}
            >
              {fact}
            </motion.li>
          ))}
        </motion.ul>

        <div className="facts__illustrations">{/* Add illustrations here if needed */}</div>
      </div>
    </section>
  )
}
