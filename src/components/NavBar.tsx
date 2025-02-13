import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
const navItems = [
  { name: "Início", path: "/" },
  { name: "Experiência", path: "/#experience" },
  { name: "Formação", path: "/#education" },
  { name: "Projetos", path: "/#projects" },
  { name: "Artigos", path: "/articles" },
];

export default function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link
            className="text-3xl font-bold bg-gradient-to-r from-vibrant-blue to-vibrant-purple bg-clip-text text-transparent"
            to={"/"}
          >
            Israel Matusse
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link
                className={`text-lg font-medium relative ${
                  pathname === "/"
                    ? "text-vibrant-purple"
                    : "text-gray-600 hover:text-vibrant-blue"
                }`}
                to={"/"}
              >
                Start
                {pathname === "/" && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-vibrant-purple"
                    layoutId="underline"
                  />
                )}
              </Link>
            </li>
            <li>
              <Link
                className={`text-lg font-medium relative ${
                  pathname === "/#experience"
                    ? "text-vibrant-purple"
                    : "text-gray-600 hover:text-vibrant-blue"
                }`}
                to={"#experience"}
              >
                Experience
                {pathname === "/#experience" && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-vibrant-purple"
                    layoutId="underline"
                  />
                )}
              </Link>
            </li>

            <li>
              <Link
                className={`text-lg font-medium relative ${
                  pathname === "/#education"
                    ? "text-vibrant-purple"
                    : "text-gray-600 hover:text-vibrant-blue"
                }`}
                to={"#Education"}
              >
                Formation
                {pathname === "/#education" && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-vibrant-purple"
                    layoutId="underline"
                  />
                )}
              </Link>
            </li>

            <li>
              <Link
                className={`text-lg font-medium relative ${
                  pathname === "/#projects"
                    ? "text-vibrant-purple"
                    : "text-gray-600 hover:text-vibrant-blue"
                }`}
                to={"#projects"}
              >
                Projects
                {pathname === "/#projects" && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-vibrant-purple"
                    layoutId="underline"
                  />
                )}
              </Link>
            </li>

            <li>
              <Link
                className={`text-lg font-medium relative ${
                  pathname === "/articles"
                    ? "text-vibrant-purple"
                    : "text-gray-600 hover:text-vibrant-blue"
                }`}
                to={"/articles"}
              >
                Articles
                {pathname === "/articles" && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-vibrant-purple"
                    layoutId="underline"
                  />
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
