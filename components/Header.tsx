"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/contexts/LanguageContext"
import Logo from "./Logo"


const routes = [
  { path: "/", name: "home" },
  { path: "/projects", name: "projects" },
  { path: "/about-me", name: "about" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  return (
    <motion.header
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <input
        className="hamburger"
        type="checkbox"
        aria-label="Menu"
        checked={isMenuOpen}
        onChange={(e) => setIsMenuOpen(e.target.checked)}
      />

      <div className="container">
        <div className="header__inner">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Logo />
          </motion.div>

          <nav className="header__links">
            {routes.map((route) => (
              <motion.div key={route.path} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <Link
                  href={route.path}
                  className={`header__link ${pathname === route.path ? "header__link_active" : ""}`}
                >
                  {t.header[route.name as keyof typeof t.header]}
                </Link>
              </motion.div>
            ))}
          </nav>

        </div>
      </div>
    </motion.header>
  )
}
