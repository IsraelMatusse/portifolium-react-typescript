"use client"

import type React from "react"
import { motion } from "framer-motion"
import { FaReact, FaNodeJs, FaDatabase, FaDocker, FaAws, FaJava } from "react-icons/fa"
import { SiTypescript, SiJavascript, SiDialogflow, SiPostgresql, SiSpring } from "react-icons/si"
import { useLanguage } from "../contexts/LanguageContext"
import SectionHeading from "./SectionHeading"

interface Skill {
  name: string
  icon: React.ReactElement
}

const skills: Skill[] = [
  { name: "Java", icon: <FaJava /> },
  { name: "Spring Boot", icon: <SiSpring /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "SQL", icon: <FaDatabase /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "BPM", icon: <SiDialogflow /> },
]

export function Skills() {
  const { t } = useLanguage()
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="container">
        <SectionHeading index="03" title={t("skills.title")} />

        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-6 transition-all hover:-translate-y-1 hover:border-accent-400/40 hover:bg-white/[0.05]"
            >
              <div className="text-3xl text-slate-400 transition-colors group-hover:text-accent-400">
                {skill.icon}
              </div>
              <h3 className="text-sm font-medium text-slate-200">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
