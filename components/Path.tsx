"use client"

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

interface PathProps {
  description: string
}

export default function Path({ description }: PathProps) {
  const pathname = usePathname()
  const pathName = pathname.slice(1) || "home"

  return (
    <motion.div
      className="path"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="h1 path__name"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {pathName}
      </motion.h1>
      <motion.p
        className="path__description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {description}
      </motion.p>
    </motion.div>
  )
}
