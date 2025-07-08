"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"

export default function About() {
  const { t } = useLanguage()

  return (
    <section className="about">
      <motion.div
        className="about__illustrations"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.02 }}
      >
        <Image src="/images/about-me.png" alt="About me" className="about__image" width={400} height={500} priority />
      </motion.div>

      <motion.div
        className="about__text"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {t.pages.about.about.description.map((text, index) => (
          <motion.p
            key={index}
            className="about__description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
          >
            {text}
          </motion.p>
        ))}
      </motion.div>
    </section>
  )
}
