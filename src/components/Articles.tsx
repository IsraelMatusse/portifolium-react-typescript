"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"

interface Article {
  title: string
  excerpt: string
  link: string
}

export default function Articles() {
  const { t } = useLanguage()

  const articles: Article[] = [
    {
      title: t("articles.migration.title"),
      excerpt: t("articles.migration.excerpt"),
      link: "https://medium.com/@israelmathusse451/migrating-a-monolithic-application-to-microservices-using-the-strangler-fig-pattern-and-spring-71cfca98d047",
    },
    {
      title: t("articles.validators.title"),
      excerpt: t("articles.validators.excerpt"),
      link: "https://medium.com/@israelmathusse451/ensuring-clean-data-custom-validators-in-spring-boot-30b0aea28033",
    },
    {
      title: t("articles.bpm.title"),
      excerpt: t("articles.bpm.excerpt"),
      link: "https://medium.com/@israelmathusse451/leveraging-bpm-for-effective-knowledge-management-890d394147d1",
    },
  ]

  return (
    <div className="bg-gray-100 text-black py-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl font-bold mb-6 text-center text-vibrant-blue">{t("articles.title")}</h1>
          <div className="grid gap-6">
            {articles.map((article, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2 text-vibrant-blue">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-vibrant-purple hover:underline"
                >
                  {t("articles.readMore")}
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
