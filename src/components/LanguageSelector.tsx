"use client"

import { Globe } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "pt" : "en")}
      className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium text-slate-300 ring-1 ring-inset ring-white/10 transition-colors hover:text-accent-300 hover:ring-accent-400/30"
      title={language === "en" ? "Switch to Portuguese" : "Mudar para Inglês"}
    >
      <Globe size={15} />
      <span className="uppercase tracking-wide">{language}</span>
    </button>
  )
}
