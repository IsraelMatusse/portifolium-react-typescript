"use client"

import { motion } from "framer-motion"
import { Code2, GraduationCap } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import SectionHeading from "./SectionHeading"

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container">
        <SectionHeading index="01" title={t("about.title")} />

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
          >
            <GraduationCap className="mb-4 text-accent-400" size={26} />
            <p className="leading-relaxed text-slate-300">{t("about.description1")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
          >
            <Code2 className="mb-4 text-accent-400" size={26} />
            <p className="leading-relaxed text-slate-300">{t("about.description2")}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
