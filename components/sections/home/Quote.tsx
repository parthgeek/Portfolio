"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Quote() {
  const { t } = useLanguage()

  return (
    <motion.figure
      className="quote"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.blockquote
        className="quote__text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {t.pages.home.quote.text}
      </motion.blockquote>
      <motion.figcaption
        className="quote__author"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {t.pages.home.quote.author}
      </motion.figcaption>
    </motion.figure>
  )
}
