"use client"

import type React from "react"
import { useState } from "react"
import Navbar from "../components/NavBar"
import Footer from "../components/Footer"
import { useLanguage } from "../contexts/LanguageContext"

export default function Contact() {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [subject, setSubject] = useState<string>("")
  const [message, setMessage] = useState<string>("")
  const { t } = useLanguage()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Sending email:", { name, email, subject, message })
    setName("")
    setEmail("")
    setSubject("")
    setMessage("")
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 bg-gray-100">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="text-4xl font-bold mb-8 text-blue-500">{t("contact.title")}</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="to" className="block text-sm font-medium text-gray-700">
                {t("contact.to")}
              </label>
              <input
                type="email"
                id="to"
                value="dev.matusse@gmail.com"
                className="mt-1 block w-full rounded-md  shadow-sm "
                readOnly
              />
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                {t("contact.name")}
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full rounded-md  shadow-sm "
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                {t("contact.email")}
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md  shadow-sm "
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                {t("contact.subject")}
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="mt-1 block w-full rounded-md  shadow-sm "
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                {t("contact.message")}
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 block w-full rounded-md  shadow-sm "
                rows={6}
                required
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 text-sm font-medium text-white bg-blue-500 hover:bg-blue-700 rounded-md   "
              >
                {t("contact.send")}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />;
    </>
  )
}
