"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"

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
    <section id="projects" className="py-2">
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl font-bold mb-6 text-center text-vibrant-blue">{t("education.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educations.map((education, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2 text-vibrant-blue">{education.institution}</h3>
              <p className="text-gray-600 mb-4">{education.degree}</p>
              <p className="text-sm text-vibrant-purple">{education.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
