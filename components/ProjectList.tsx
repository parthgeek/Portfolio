"use client"

import { motion } from "framer-motion"
import Project from "./Project"
import { projects } from "@/constants/projects"

interface ProjectListProps {
  title?: string
  filter?: (project: any) => boolean
  limit?: number
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function ProjectList({ title, filter = () => true, limit = projects.length }: ProjectListProps) {
  const filteredProjects = projects
    .filter(filter)
    .slice(0, limit)
    .sort((a, b) => (a.hasImage ? -1 : 1) - (b.hasImage ? -1 : 1))

  return (
    <div>
      {title && <h2 className="h2">{title}</h2>}
      <motion.div
        className="project-list"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {filteredProjects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <Project project={project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
