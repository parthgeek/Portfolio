"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function Logo() {
  return (
    <Link href="/" className="logo">
      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
        <Image className="logo__img" src="/images/logo.svg" alt="Parth logo" width={16} height={16} priority />
      </motion.div>
      <span className="logo__name">Parth</span>
    </Link>
  )
}
