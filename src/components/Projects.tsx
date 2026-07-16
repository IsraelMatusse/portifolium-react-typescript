"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, FolderGit2 } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import SectionHeading from "./SectionHeading"

export default function Projects() {
  const { t } = useLanguage()
  const projects = [
    {
      name: "MOZ ONLINE",
      description: t("projects.mozonline.description"),
      technologies: ["Node.js", "Express", "Next.js", "Docker", "PostgreSQL"],
      link: "https://servicos-moz.israelmatusse.com/",
    },
    {
      name: "METICAL CONVERTER",
      description: t("projects.meticalconverter.description"),
      technologies: ["Java", "Spring Boot", "Next.js", "Docker", "PostgreSQL"],
      link: "https://docs.metical-converter.israelmatusse.com/",
    },
    {
      name: "LOKUS APP",
      description: t("projects.lokus.description"),
      technologies: ["Node.js", "Express", "React", "Docker", "PostgreSQL"],
      link: "http://lokusapp.co.mz/",
    },
    {
      name: "YOUR QRCODE",
      description: t("projects.yourqrcode.description"),
      technologies: ["Node.js", "Next.js", "TypeScript"],
      link: "https://yourqrcode.israelmatusse.com/",
    },
    {
      name: "PFUNA MAKWERO",
      description: t("projects.pfuna.description"),
      technologies: ["Node.js", "Express", "React", "Docker", "PostgreSQL"],
      link: "https://pfuna-makwero.vercel.app/",
    },
    {
      name: "GOVERNMENT PROJECTS MONITOR",
      description: t("projects.government.description"),
      technologies: ["Node.js", "Express", "Next.js", "TypeScript", "PostgreSQL"],
      link: "https://govprojectsmonitor-mz.vercel.app/",
    },
  ]

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container">
        <SectionHeading index="05" title={t("projects.title")} />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:-translate-y-1 hover:border-accent-400/40 hover:bg-white/[0.05]"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-400/10 text-accent-400">
                  <FolderGit2 size={20} />
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-slate-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-300"
                />
              </div>

              <h3 className="mt-4 text-base font-semibold tracking-tight text-slate-100 group-hover:text-accent-300">
                {project.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-white/5 px-2.5 py-1 font-mono text-[11px] text-slate-400 ring-1 ring-inset ring-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
