"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { media } from "@/constants/media"

interface MediaIconProps {
  name: string
}

export default function MediaIcon({ name }: MediaIconProps) {
  const href = media[name as keyof typeof media] || "#"

  return (
    <motion.a
      href={href}
      className="media"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image src={`/images/icons/${name}.svg`} alt={name} className="media__icon" width={32} height={32} />
    </motion.a>
  )
}
