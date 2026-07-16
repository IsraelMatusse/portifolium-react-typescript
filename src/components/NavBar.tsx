"use client"

import { useEffect, useState, type ComponentType } from "react"
import { useLocation } from "react-router-dom"
import { Link as RouterLink } from "react-router-dom"
import { Link as ScrollLink } from "react-scroll"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Mail } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import LanguageSelector from "./LanguageSelector"

const SECTIONS = [
  { to: "about", key: "about.title" as const },
  { to: "experience", key: "nav.experience" as const },
  { to: "skills", key: "nav.skills" as const },
  { to: "education", key: "nav.education" as const },
  { to: "projects", key: "nav.projects" as const },
]

type NavLinksProps = {
  pathname: string
  onNavigate: () => void
  variant?: "desktop" | "mobile"
}

const ScrollLinkComponent = ScrollLink as unknown as ComponentType<Record<string, unknown>>

const NavLinks = ({ pathname, onNavigate, variant = "desktop" }: NavLinksProps) => {
  const { t } = useLanguage()

  const baseLink =
    variant === "desktop"
      ? "relative text-sm font-medium text-slate-300 transition-colors hover:text-accent-300"
      : "block text-base font-medium text-slate-200 transition-colors hover:text-accent-300"

  return (
    <>
      <li>
        <RouterLink
          className={`${baseLink} ${pathname === "/" ? "text-accent-300" : ""}`}
          to={"/"}
          onClick={onNavigate}
        >
          {t("nav.home")}
          {pathname === "/" && variant === "desktop" && (
            <motion.span
              className="absolute -bottom-1.5 left-0 right-0 h-px bg-accent-400"
              layoutId="nav-underline"
            />
          )}
        </RouterLink>
      </li>

      {pathname === "/" &&
        SECTIONS.map((section) => (
          <li key={section.to}>
            <ScrollLinkComponent
              to={section.to}
              smooth={true}
              duration={500}
              offset={-72}
              spy={true}
              activeClass="text-accent-300"
              className={`${baseLink} cursor-pointer`}
              onClick={onNavigate}
            >
              {t(section.key)}
            </ScrollLinkComponent>
          </li>
        ))}

      <li>
        <RouterLink
          className={`${baseLink} ${pathname === "/articles" ? "text-accent-300" : ""}`}
          to={"/articles"}
          onClick={onNavigate}
        >
          {t("nav.articles")}
          {pathname === "/articles" && variant === "desktop" && (
            <motion.span
              className="absolute -bottom-1.5 left-0 right-0 h-px bg-accent-400"
              layoutId="nav-underline"
            />
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
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink-900/80 backdrop-blur-lg border-b border-white/5 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container">
        <div className="flex justify-between items-center py-4">
          <RouterLink className="group flex items-center gap-2.5" to={"/"}>
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent-400 to-sky-500 text-sm font-bold text-ink-950 shadow-glow">
              IM
            </span>
            <span className="text-lg font-semibold tracking-tight text-slate-100 group-hover:text-accent-300 transition-colors">
              Israel Matusse
            </span>
          </RouterLink>

          <button
            className="md:hidden text-slate-200 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-7">
              <NavLinks pathname={pathname} onNavigate={() => setIsOpen(false)} />
            </ul>
            <div className="flex items-center gap-3 pl-2 border-l border-white/10">
              <LanguageSelector />
              <a
                href="mailto:dev.matusse@gmail.com"
                className="inline-flex items-center gap-1.5 rounded-full bg-accent-400/10 px-4 py-2 text-sm font-medium text-accent-300 ring-1 ring-inset ring-accent-400/30 transition-colors hover:bg-accent-400/20"
              >
                <Mail size={15} />
                {t("nav.contact")}
              </a>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-white/5 bg-ink-900/95 backdrop-blur-lg"
          >
            <ul className="container flex flex-col gap-5 py-6">
              <NavLinks pathname={pathname} onNavigate={() => setIsOpen(false)} variant="mobile" />
              <li className="flex items-center justify-between pt-2 border-t border-white/5">
                <LanguageSelector />
                <a
                  href="mailto:dev.matusse@gmail.com"
                  className="inline-flex items-center gap-1.5 rounded-full bg-accent-400/10 px-4 py-2 text-sm font-medium text-accent-300 ring-1 ring-inset ring-accent-400/30"
                  onClick={() => setIsOpen(false)}
                >
                  <Mail size={15} />
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
