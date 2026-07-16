"use client"

import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useLanguage } from "../contexts/LanguageContext"
import { SOCIAL_LINKS, CONTACT_EMAIL } from "../lib/social-links"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer className="border-t border-white/5 bg-ink-950">
      <div className="container py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent-400 to-sky-500 text-xs font-bold text-ink-950">
                IM
              </span>
              <h3 className="text-lg font-semibold text-slate-100">Israel Matusse</h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">{t("footer.description")}</p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-200">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/" className="text-sm text-slate-400 transition-colors hover:text-accent-300">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  to="/articles"
                  className="text-sm text-slate-400 transition-colors hover:text-accent-300"
                >
                  {t("nav.articles")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-200">
              {t("footer.contact")}
            </h4>
            <div className="space-y-3">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-accent-300"
              >
                <FaEnvelope className="text-accent-400" size={14} />
                {CONTACT_EMAIL}
              </a>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <FaMapMarkerAlt className="text-accent-400" size={14} />
                {t("footer.locationValue")}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-200">
              {t("footer.connect")}
            </h4>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-300 ring-1 ring-inset ring-white/10 transition-colors hover:bg-accent-400/10 hover:text-accent-300 hover:ring-accent-400/30"
                  aria-label={name}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} Israel Matusse. {t("footer.rights")}
          </p>
          <span className="text-sm text-slate-500">Made with ❤️ in Mozambique</span>
        </div>
      </div>
    </footer>
  )
}
