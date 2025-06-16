"use client"

import { useState } from "react"
import { useLocation } from "react-router-dom"
import { Link as RouterLink } from "react-router-dom"
import { Link as ScrollLink } from "react-scroll"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import LanguageSelector from "./LanguageSelector"

type NavLinksProps = {
  pathname: string
  setIsOpen: (value: boolean) => void
}

const NavLinks = ({ pathname, setIsOpen }: NavLinksProps) => {
  const ScrollLinkComponent = ScrollLink as any
  const { t } = useLanguage()

  return (
    <>
      <li>
        <RouterLink
          className={`text-lg font-medium relative ${
            pathname === "/" ? "text-vibrant-purple" : "text-gray-600 hover:text-vibrant-blue"
          }`}
          to={"/"}
          onClick={() => setIsOpen(false)}
        >
          {t("nav.home")}
          {pathname === "/" && (
            <motion.div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-vibrant-purple" layoutId="underline" />
          )}
        </RouterLink>
      </li>

      <li>
        <ScrollLinkComponent
          to="experience"
          smooth={true}
          duration={500}
          className="cursor-pointer text-lg font-medium text-gray-600 hover:text-vibrant-blue"
          onClick={() => setIsOpen(false)}
        >
          {t("nav.experience")}
        </ScrollLinkComponent>
      </li>

      <li>
        <ScrollLinkComponent
          to="skills"
          smooth={true}
          duration={500}
          className="cursor-pointer text-lg font-medium text-gray-600 hover:text-vibrant-blue"
          onClick={() => setIsOpen(false)}
        >
          {t("nav.skills")}
        </ScrollLinkComponent>
      </li>

      <li>
        <ScrollLinkComponent
          to="education"
          smooth={true}
          duration={500}
          className="cursor-pointer text-lg font-medium text-gray-600 hover:text-vibrant-blue"
          onClick={() => setIsOpen(false)}
        >
          {t("nav.education")}
        </ScrollLinkComponent>
      </li>

      <li>
        <ScrollLinkComponent
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer text-lg font-medium text-gray-600 hover:text-vibrant-blue"
          onClick={() => setIsOpen(false)}
        >
          {t("nav.projects")}
        </ScrollLinkComponent>
      </li>

      <li>
        <RouterLink
          className={`text-lg font-medium relative ${
            pathname === "/articles" ? "text-vibrant-purple" : "text-gray-600 hover:text-vibrant-blue"
          }`}
          to={"/articles"}
          onClick={() => setIsOpen(false)}
        >
          {t("nav.articles")}
          {pathname === "/articles" && (
            <motion.div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-vibrant-purple" layoutId="underline" />
          )}
        </RouterLink>
      </li>
    </>
  )
}

export default function Navbar() {
  const location = useLocation()
  const pathname = location.pathname
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <RouterLink
            className="text-3xl font-bold bg-gradient-to-r from-vibrant-blue to-vibrant-purple bg-clip-text text-transparent"
            to={"/"}
          >
            Israel Matusse
          </RouterLink>

          <button className="md:hidden block text-gray-600 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <ul className="hidden md:flex space-x-6">
            <NavLinks pathname={pathname} setIsOpen={setIsOpen} />
            <li>
              <LanguageSelector />
            </li>
          </ul>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white shadow-md absolute left-0 right-0 top-[70px] z-40 p-4">
            <ul className="flex flex-col space-y-4">
              <NavLinks pathname={pathname} setIsOpen={setIsOpen} />
              <li>
                <LanguageSelector />
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}
