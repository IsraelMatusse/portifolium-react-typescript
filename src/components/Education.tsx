"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import SectionHeading from "./SectionHeading"

export default function Education() {
  const { t } = useLanguage()

  const educations = [
    {
      degree: t("education.degree1"),
      institution: t("education.institution1"),
      year: t("education.year1"),
    },
    {
      degree: t("education.degree2"),
      institution: t("education.institution2"),
      year: t("education.year2"),
    },
  ]

  return (
    <section id="education" className="py-20 md:py-28">
      <div className="container">
        <SectionHeading index="04" title={t("education.title")} />

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {educations.map((education, index) => (
            <motion.div
              key={education.institution}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-accent-400/30"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-400/10 text-accent-400">
                <GraduationCap size={22} />
              </div>
              <h3 className="text-lg font-semibold text-slate-100">{education.institution}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{education.degree}</p>
              <p className="mt-4 font-mono text-xs text-accent-400">{education.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
