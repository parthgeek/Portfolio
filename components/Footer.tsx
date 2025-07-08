"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/LanguageContext"
import MediaIcon from "./MediaIcon"
import Logo from "./Logo"
import { media } from "@/constants/media"

const mediaLinks = ["email", "github", "discord"]

export default function Footer() {
  const { t } = useLanguage()

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <div className="footer__inner">
          <div className="footer__info">
            <div className="footer__header">
              <Logo />
              <motion.a className="footer__email" href={media.email} whileHover={{ color: "#ffffff" }}>
                {media.emailRaw}
              </motion.a>
            </div>
            <p className="footer__description">{t.footer.description}</p>
          </div>

          <div className="footer__media">
            <div className="footer__title">{t.footer.media}</div>
            <div className="footer__list">
              {mediaLinks.map((name, index) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <MediaIcon name={name} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="footer__copyright"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          © {t.footer.copyright}
        </motion.div>
      </div>
    </motion.footer>
  )
}
