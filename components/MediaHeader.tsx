"use client"

import { motion } from "framer-motion"
import MediaIcon from "./MediaIcon"

const mediaLinks = ["discord", "github", "email"]

export default function MediaHeader() {
  return (
    <motion.div
      className="media-header"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <span className="media-header__line"></span>
      <div className="media-header__links">
        {mediaLinks.map((name, index) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
          >
            <MediaIcon name={name} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
