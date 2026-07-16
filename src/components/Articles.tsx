"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Newspaper } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import SectionHeading from "./SectionHeading"

interface Article {
  title: string
  excerpt: string
  link: string
}

export default function Articles() {
  const { t } = useLanguage()

  const articles: Article[] = [
    {
      title: t("articles.multitenancy.title"),
      excerpt: t("articles.multitenancy.excerpt"),
      link: "https://medium.com/@israelmathusse451/aplica%C3%A7%C3%B5es-multi-tenant-como-construir-e-t%C3%A9cnicas-para-lidar-com-elas-e991137992d9",
    },
    {
      title: t("articles.internationalization.title"),
      excerpt: t("articles.internationalization.excerpt"),
      link: "https://medium.com/@israelmathusse451/software-internationalization-and-localization-why-and-how-to-apply-d8d2f3bcedc8",
    },
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
    <div className="py-24 md:py-32">
      <div className="container">
        <SectionHeading index="articles" title={t("articles.title")} />

        <div className="mx-auto grid max-w-3xl gap-5">
          {articles.map((article, index) => (
            <motion.a
              key={article.link}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:-translate-y-0.5 hover:border-accent-400/40 hover:bg-white/[0.05]"
            >
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-400/10 text-accent-400">
                <Newspaper size={18} />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold leading-snug text-slate-100 group-hover:text-accent-300">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{article.excerpt}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent-300">
                  {t("articles.readMore")}
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  )
}
