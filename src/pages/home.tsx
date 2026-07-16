"use client"

import Hero from "../components/Hero"
import About from "../components/About"
import Experience from "../components/Experience"
import Projects from "../components/Projects"
import Navbar from "../components/NavBar"
import Footer from "../components/Footer"
import Education from "../components/Education"
import { Skills } from "../components/Skills"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      <div className="divide-y divide-white/5">
        <About />
        <Experience />
        <Skills />
        <Education />
        <Projects />
      </div>

      <Footer />
    </div>
  )
}
