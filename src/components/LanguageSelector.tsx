"use client"

import { Globe } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="relative">
      <button
        onClick={() => setLanguage(language === "en" ? "pt" : "en")}
        className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-600 hover:text-vibrant-blue transition-colors"
        title={language === "en" ? "Switch to Portuguese" : "Mudar para Inglês"}
      >
        <Globe size={20} />
        <span className="text-sm font-medium uppercase">{language}</span>
      </button>
    </div>
  )
}
