import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { SetStateAction, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
const navItems = [
  { name: "Início", path: "/" },
  { name: "Experience", path: "/#experience" },
  { name: "Skills", path: "/#skills" },
  { name: "Education", path: "/#education" },
  { name: "Projects", path: "/#projects" },
  { name: "Articles", path: "/articles" },
];

export default function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <RouterLink
            className="text-3xl font-bold bg-gradient-to-r from-vibrant-blue to-vibrant-purple bg-clip-text text-transparent"
            to={"/"}
          >
            Israel Matusse
          </RouterLink>

          {/* Botão Menu Mobile */}
          <button
            className="md:hidden block text-gray-600 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Navbar - Desktop */}
          <ul className="hidden md:flex space-x-6">
            {navLinks(pathname, setIsOpen)}
          </ul>
        </div>

        {/* Navbar - Mobile (Dropdown) */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md absolute left-0 right-0 top-[70px] z-40 p-4">
            <ul className="flex flex-col space-y-4">
              {navLinks(pathname, setIsOpen)}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

function navLinks(
  pathname: string,
  setIsOpen: {
    (value: SetStateAction<boolean>): void;
    (value: SetStateAction<boolean>): void;
    (arg0: boolean): void;
  }
) {
  return (
    <>
      <li>
        <RouterLink
          className={`text-lg font-medium relative ${
            pathname === "/"
              ? "text-vibrant-purple"
              : "text-gray-600 hover:text-vibrant-blue"
          }`}
          to={"/"}
          onClick={() => setIsOpen(false)} // Fecha o menu mobile ao clicar
        >
          Home
          {pathname === "/" && (
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-vibrant-purple"
              layoutId="underline"
            />
          )}
        </RouterLink>
      </li>

      <li>
        <ScrollLink
          to="experience"
          smooth={true}
          duration={500}
          className="cursor-pointer text-lg font-medium text-gray-600 hover:text-vibrant-blue"
          onClick={() => setIsOpen(false)}
        >
          Experience
        </ScrollLink>
      </li>

      <li>
        <ScrollLink
          to="skills"
          smooth={true}
          duration={500}
          className="cursor-pointer text-lg font-medium text-gray-600 hover:text-vibrant-blue"
          onClick={() => setIsOpen(false)}
        >
          Skills
        </ScrollLink>
      </li>

      <li>
        <ScrollLink
          to="education"
          smooth={true}
          duration={500}
          className="cursor-pointer text-lg font-medium text-gray-600 hover:text-vibrant-blue"
          onClick={() => setIsOpen(false)}
        >
          Formation
        </ScrollLink>
      </li>

      <li>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer text-lg font-medium text-gray-600 hover:text-vibrant-blue"
          onClick={() => setIsOpen(false)}
        >
          Projects
        </ScrollLink>
      </li>

      <li>
        <RouterLink
          className={`text-lg font-medium relative ${
            pathname === "/articles"
              ? "text-vibrant-purple"
              : "text-gray-600 hover:text-vibrant-blue"
          }`}
          to={"/articles"}
          onClick={() => setIsOpen(false)}
        >
          Articles
          {pathname === "/articles" && (
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-vibrant-purple"
              layoutId="underline"
            />
          )}
        </RouterLink>
      </li>
    </>
  );
}
