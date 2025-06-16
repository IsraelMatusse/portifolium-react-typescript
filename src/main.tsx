import "./index.css"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import React from "react"
import Home from "./pages/home"
import ArticlesPage from "./pages/ArticlesPage"
import Contact from "./pages/Contact"
import { LanguageProvider } from "./contexts/LanguageContext"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/articles",
    element: <ArticlesPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  </React.StrictMode>,
)
