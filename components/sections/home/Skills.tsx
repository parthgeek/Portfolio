"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import Dots from "@/components/Dots"
import SkillBlock from "@/components/SkillBlock"

const skills = {
  language: ["JavaScript", "TypeScript", "Java"],
  database: ["MongoDB", "PostgreSQL"],
  other: ["HTML", "CSS", "SASS", "Tailwindcss"],
  tool: ["VSCode", "Figma", "Git", "Supabase", "Postman"],
  framework: ["React.js", "Next.js", "Express.js", "Node.js"],
}

const floatingAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 4,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut",
  },
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
        {t.pages.home.skills.title}
      </motion.h2>

      <div className="skills__content">
        <motion.div
          className="skills__illustrations illustrations"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div animate={floatingAnimation}>
            <Image src="/images/logo-outline.svg" alt="" className="illustrations__logo" width={100} height={100} />
          </motion.div>
          <motion.div animate={floatingAnimation} style={{ animationDelay: "1s" }}>
            <Dots width={4} height={4} />
          </motion.div>
          <motion.div animate={floatingAnimation} style={{ animationDelay: "2s" }}>
            <Dots width={6} height={6} />
          </motion.div>
        </motion.div>

        <motion.div
          className="skills__list"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {Object.keys(skills)
            .filter((id) => id !== "tool")
            .map((id, index) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <SkillBlock id={id} items={skills[id as keyof typeof skills]} />
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  )
}
