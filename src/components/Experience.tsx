"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import SectionHeading from "./SectionHeading"

export default function Experience() {
  const { t } = useLanguage()

  const experiences = [
    {
      company: "NETLINE SERV",
      role: t("experience.netline.role"),
      period: t("experience.netline.period"),
      description: t("experience.netline.description"),
    },
    {
      company: "FASOREL SA",
      role: t("experience.fasorel.role"),
      period: t("experience.fasorel.period"),
      description: t("experience.fasorel.description"),
    },
    {
      company: "MEREC INDUSTRIES",
      role: t("experience.merec.role"),
      period: t("experience.merec.period"),
      description: t("experience.merec.description"),
    },
    {
      company: "STARTIMES",
      role: t("experience.startimes.role"),
      period: t("experience.startimes.period"),
      description: t("experience.startimes.description"),
    },
    {
      company: "CFM-SUL",
      role: t("experience.cfm.role"),
      period: t("experience.cfm.period"),
      description: t("experience.cfm.description"),
    },
  ]

  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="container">
        <SectionHeading index="02" title={t("experience.title")} />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-400/60 via-white/10 to-transparent md:left-1/2" />

          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0
            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`relative mb-10 flex items-start gap-6 md:gap-10 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent-400/40 bg-ink-900 text-accent-400 md:absolute md:left-1/2 md:-translate-x-1/2">
                  <Briefcase size={16} />
                </div>

                <div
                  className={`flex-1 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-accent-400/30 md:w-[calc(50%-3rem)] ${
                    isEven ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold text-slate-100">{exp.company}</h3>
                    <span className="font-mono text-xs text-accent-400">{exp.period}</span>
                  </div>
                  <p className="mt-1 font-medium text-accent-300">{exp.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{exp.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
