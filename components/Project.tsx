"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import type { projects } from "@/constants/projects"
import { techs } from "@/constants/techs"
import { media } from "@/constants/media"
import { websites } from "@/constants/websites"

interface ProjectProps {
  project: (typeof projects)[0]
}

function mapLinks(links: Record<string, string>) {
  return Object.entries(links).map(([link, value]) => {
    let href: string

    if (value.startsWith("http://") || value.startsWith("https://")) {
      href = value
    } else if (link === "figma") {
      href = `https://figma.com/community/file/${value}`
    } else if (link === "github" && value.startsWith("/")) {
      href = media.github + value
    } else {
      href = `https://${link === "live" ? "" : websites[link] || ""}${value}`
    }

    const className = link === "cached" ? "button__secondary" : ""
    const name = `${link[0].toUpperCase()}${link.slice(1)}`

    return (
      <motion.a
        key={link}
        href={href}
        className={`button ${className}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        {name} {"=>"}
      </motion.a>
    )
  })
}

export default function Project({ project }: ProjectProps) {
  const {
    id,
    name = id,
    description = "No description available.",
    techs: projectTech = [],
    links = {},
    hasImage = false,
  } = project

  return (
    <motion.div className="project" whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
      {hasImage && (
        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
          <Image src={`/images/projects/${id}.webp`} alt={name} className="project__image" width={400} height={225} />
        </motion.div>
      )}

      <motion.ul
        className="project__techs"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {projectTech.map((tech, index) => (
          <motion.li
            key={tech}
            className="project__tech"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {techs[tech] || tech}
          </motion.li>
        ))}
      </motion.ul>

      <div className="project__content">
        <motion.div
          className="project__name"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {name}
        </motion.div>

        <motion.div
          className="project__description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {description}
        </motion.div>

        <motion.div
          className="project__links"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {mapLinks(links)}
        </motion.div>
      </div>
    </motion.div>
  )
}
