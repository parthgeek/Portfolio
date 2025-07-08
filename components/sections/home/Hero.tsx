"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import Dots from "@/components/Dots"

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 0.3,
    },
  },
}

const floatingAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 3,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut",
  },
}

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="hero">
      <motion.div className="hero__content" variants={textVariants} initial="hidden" animate="visible">
        <motion.h1 className="hero__title" dangerouslySetInnerHTML={{ __html: t.pages.home.hero.title }} />

        <motion.div
          className="hero__description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {t.pages.home.hero.description}
        </motion.div>

        <motion.a
          className="button button__primary"
          href="#contacts"
          whileHover={{ scale: 1.05, backgroundColor: "rgba(199, 120, 221, 0.2)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          {t.pages.home.hero.button} {"=>"}
        </motion.a>
      </motion.div>

      <motion.div className="hero__illustrations" variants={imageVariants} initial="hidden" animate="visible">
        <motion.div animate={floatingAnimation}>
          <Image src="/images/logo-outline.svg" alt="" className="hero__logo" width={200} height={200} priority />
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
          <Image src="/images/hero.png" alt="Parth" className="hero__image" width={400} height={400} priority />
        </motion.div>

        <motion.div
          className="hero__status"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          {t.pages.home.hero.status}
        </motion.div>

        <motion.div animate={floatingAnimation} style={{ animationDelay: "1s" }}>
          <Dots />
        </motion.div>
      </motion.div>
    </section>
  )
}
