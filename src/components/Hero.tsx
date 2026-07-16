"use client"

import { type ComponentType } from "react"
import { motion } from "framer-motion"
import { Link as ScrollLink } from "react-scroll"
import { ArrowDown, Mail, MapPin } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import { SOCIAL_LINKS, CONTACT_EMAIL } from "../lib/social-links"

const ScrollLinkComponent = ScrollLink as unknown as ComponentType<Record<string, unknown>>

export default function Hero() {
  const { t } = useLanguage()

  const highlights = ["Java", "Spring Boot", "Node.js", "React", "TypeScript", "PostgreSQL"]

  return (
    <section className="relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_10%,transparent_75%)]" />

      <div className="container relative grid gap-16 md:grid-cols-[1.15fr_0.85fr] md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 font-mono text-sm text-accent-300 ring-1 ring-inset ring-white/10">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
            {t("hero.greeting")}
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tight text-slate-50">
            {t("hero.name")}
          </h1>

          <p className="mt-3 text-xl font-medium text-accent-300">
            {t("experience.netline.role")}
          </p>

          <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-slate-400">
            {t("hero.description")}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {highlights.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 ring-1 ring-inset ring-white/10"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 rounded-lg bg-accent-400 px-6 py-3 text-sm font-semibold text-ink-950 shadow-glow transition-transform hover:-translate-y-0.5"
            >
              <Mail size={16} />
              {t("hero.cta")}
            </a>
            <ScrollLinkComponent
              to="projects"
              smooth={true}
              duration={500}
              offset={-72}
              className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-accent-400/50 hover:text-accent-300"
            >
              {t("nav.projects")}
              <ArrowDown size={16} />
            </ScrollLinkComponent>
          </div>

          <div className="mt-10 flex items-center gap-5">
            {SOCIAL_LINKS.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="text-slate-400 transition-colors hover:text-accent-300"
              >
                <Icon size={20} />
              </a>
            ))}
            <span className="ml-1 inline-flex items-center gap-1.5 text-sm text-slate-500">
              <MapPin size={14} />
              {t("footer.locationValue")}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto flex h-64 w-64 items-center justify-center md:h-80 md:w-80"
        >
          <div className="absolute inset-0 animate-pulse rounded-[2.5rem] bg-gradient-to-br from-accent-400/30 via-sky-500/10 to-transparent blur-2xl" />
          <div className="absolute inset-4 rounded-[2rem] border border-white/10 bg-ink-800/60 backdrop-blur-xl" />
          <div className="relative flex h-40 w-40 items-center justify-center rounded-3xl bg-gradient-to-br from-accent-400 to-sky-500 text-5xl font-extrabold text-ink-950 shadow-glow md:h-48 md:w-48">
            IM
          </div>
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-ink-900/90 px-4 py-1.5 font-mono text-xs text-slate-300">
            {"</> since 2021"}
          </span>
        </motion.div>
      </div>
    </section>
  )
}
