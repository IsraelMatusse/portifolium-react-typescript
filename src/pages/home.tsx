"use client"

import { motion } from "framer-motion"
import Experience from "../components/Experience"
import Projects from "../components/Projects"
import Navbar from "../components/NavBar"
import Footer from "../components/Footer"
import Education from "../components/Education"
import { Skills } from "../components/Skills"
import { useLanguage } from "../contexts/LanguageContext"

export default function Home() {
  const { t } = useLanguage()
  return (
    <div className="min-h-screen pt-16 bg-gray-100">
      <Navbar />

      <section className="bg-gradient-to-br from-vibrant-blue to-vibrant-purple text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {t("hero.greeting")} <br /> {t("hero.name")}
            </h1>
            <p className="text-xl mb-6">{t("hero.description")}</p>
           
          </motion.div>
        </div>
      </section>
      <section id="experience" className="py-10 ">
        <Experience />
      </section>

      <section id="skills" className="py-10 ">
        <Skills />
      </section>
      <section id="education" className="py-10 ">
        <Education />
      </section>
      <section id="projects" className="py-10 ">
        <Projects />
      </section>

      <Footer />
    </div>
  )
}
