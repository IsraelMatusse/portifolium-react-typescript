"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"
export default function Projects() {
  const { t } = useLanguage()
  const projects = [
    {
      name: 'MOZ ONLINE',
      description: t('projects.mozonline.description'),
      technologies: 'Node.js, Express, NEXT, Docker, PostGresSQL',
      link: 'https://servicos-moz.israelmatusse.com/',
    },
    {
      name: 'METICAL CONVERTER',
      description: t('projects.meticalconverter.description'),
      technologies: 'Java, Spring Boot, NEXT, Docker, PostGresSQL',
      link: 'https://docs.metical-converter.israelmatusse.com/',
    },
    {
      name: 'LOKUS APP',
      description: t('projects.lokus.description'),
      technologies: 'Node.js, Express, React, Docker, PostGresSQL',
      link: 'http://lokusapp.co.mz/',
    },
    {
      name: 'YOUR QRCODE',
      description: t('projects.yourqrcode.description'),
      technologies: 'Node.js, NEXT, TypeScript',
      link: 'https://yourqrcode.israelmatusse.com/',
    },
    {
      name: 'PFUNA MAKWERO',
      description: t('projects.pfuna.description'),
      technologies: 'Node.js, Express, React, Docker, PostGresSQL',
      link: 'https://pfuna-makwero.vercel.app/',
    },
    {
      name: 'GOVERNMENT PROJECTS MONITOR',
      description: t('projects.government.description'),
      technologies: 'Node.js, Express, Next, TypeScript, PostGresSQL',
      link: 'https://govprojectsmonitor-mz.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="py-2">
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl font-bold mb-6 text-center text-vibrant-blue">{t("projects.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-vibrant-blue">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-vibrant-blue">
                  {project.name}
                </a>
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <p className="text-sm text-vibrant-purple">{project.technologies}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
