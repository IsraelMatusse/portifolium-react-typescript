import { motion } from "framer-motion"

interface SectionHeadingProps {
  index: string
  title: string
  align?: "center" | "left"
}

export default function SectionHeading({ index, title, align = "center" }: SectionHeadingProps) {
  const isCenter = align === "center"

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-12 flex flex-col ${isCenter ? "items-center text-center" : "items-start text-left"}`}
    >
      <span className="mb-3 font-mono text-sm font-medium text-accent-400">{index}</span>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">{title}</h2>
      <span className="mt-4 h-px w-16 bg-gradient-to-r from-accent-400 to-transparent" />
    </motion.div>
  )
}
