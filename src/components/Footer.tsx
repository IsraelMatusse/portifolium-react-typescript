"use client"

import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useLanguage } from "../contexts/LanguageContext"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-vibrant-blue to-vibrant-purple bg-clip-text text-transparent">
              Israel Matusse
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">{t("footer.description")}</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-vibrant-blue">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-vibrant-blue transition-colors text-sm">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-gray-300 hover:text-vibrant-blue transition-colors text-sm">
                  {t("nav.articles")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-vibrant-blue transition-colors text-sm">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-vibrant-blue">{t("footer.contact")}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-vibrant-purple" size={16} />
                <span className="text-gray-300 text-sm">dev.matusse@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-vibrant-purple" size={16} />
                <span className="text-gray-300 text-sm">{t("footer.locationValue")}</span>
              </div>
    
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-vibrant-blue">{t("footer.connect")}</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/IsraelMatusse"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-vibrant-blue transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/israel-matusse-0828a3239/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-vibrant-blue transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://twitter.com/Israel_matusse"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-vibrant-blue transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Israel Matusse. {t("footer.rights")}
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Made with ❤️ in Mozambique</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
