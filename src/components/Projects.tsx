import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Projects() {
  const projects = [
    {
      name: "LOKUS APP",
      description:
        "Accounting management platform. with POS modules, fuel pump management, customers and others",
      technologies: "Node.js, Express, React, Docker, PostGresSQL",
      link: "http://lokusapp.co.mz/",
    },
    {
      name: "PFUNA MAKWERO",
      description:
        "Donation application Where people and organizations can create solidarity campaigns on issues of disease, climate disasters, catastrophes and others",
      technologies: "Node.js, Express, React, Docker, PostGresSQL",
      link: "https://pfuna-makwero.vercel.app/",
    },
    {
      name: "THIKITHI APP",
      description:
        "Aplicação de venda de Bilhetes Online de forma fácil e segura",
      technologies: "Node.js, React",
      link: "https://thikiti-app.vercel.app/",
    },
    // Adicione mais projetos conforme necessário
  ];

  return (
    <section id="projects" className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-vibrant-purple">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2 text-vibrant-blue">
                <Link to={project.link}>{project.name}</Link>
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <p className="text-sm text-vibrant-purple">
                {project.technologies}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
