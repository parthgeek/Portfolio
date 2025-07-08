"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import { media } from "@/constants/media"

const contacts = [
  {
    name: "discord",
    text: media.discordTag,
  },
  {
    name: "email",
    text: media.emailRaw,
  },
]

export default function Contacts() {
  const { t } = useLanguage()

  return (
    <section className="contacts" id="contacts">
      <motion.h2
        className="h2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {t.pages.home.contacts.title}
      </motion.h2>

      <div className="contacts__content">
        <motion.p
          className="contacts__description"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t.pages.home.contacts.text}
        </motion.p>

        <motion.div
          className="contacts__media"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="contacts__title">{t.pages.home.contacts.media}</h3>
          <div className="contacts__list">
            {contacts.map((contact, index) => (
              <motion.a
                key={contact.name}
                className="contact"
                href={media[contact.name as keyof typeof media]}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <Image src={`/images/icons/${contact.name}.svg`} alt={contact.name} width={24} height={24} />
                <div className="contact__name">{contact.text}</div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
