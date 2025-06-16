"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"

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
    <section id="experience" className="py-2">
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl font-bold mb-6 text-center text-vibrant-blue">{t("experience.title")}</h2>
        <div className="relative">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-8 flex"
            >
              <div className="flex flex-col items-center mr-4">
                <div className="w-4 h-4 bg-vibrant-purple rounded-full" />
                {index !== experiences.length - 1 && <div className="w-0.5 h-full bg-vibrant-purple" />}
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex-grow">
                <h3 className="text-xl font-semibold text-vibrant-blue">{exp.company}</h3>
                <p className="text-vibrant-purple font-medium">{exp.role}</p>
                <p className="text-gray-600">{exp.period}</p>
                <p className="mt-2">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
