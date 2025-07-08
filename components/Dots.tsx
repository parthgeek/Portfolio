"use client"

import { motion } from "framer-motion"

interface DotsProps {
  width?: number
  height?: number
}

const radius = 4
const gap = 16

export default function Dots({ width = 5, height = 5 }: DotsProps) {
  const svgWidth = (radius * 2 + gap) * width - gap
  const svgHeight = (radius * 2 + gap) * height - gap

  return (
    <motion.svg
      width="100%"
      className="dots"
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {Array.from({ length: width }, (_, i) =>
        Array.from({ length: height }, (_, j) => {
          const x = radius + i * (radius * 2 + gap)
          const y = radius + j * (radius * 2 + gap)

          return (
            <motion.circle
              key={`${i}-${j}`}
              cx={x}
              cy={y}
              r={radius}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.7 + (i + j) * 0.1,
                type: "spring",
                stiffness: 300,
              }}
            />
          )
        }),
      )}
    </motion.svg>
  )
}
