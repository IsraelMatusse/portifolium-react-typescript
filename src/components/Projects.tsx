import { motion } from "framer-motion";
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
      description: "Application for selling Online Tickets easily and securely",
      technologies: "Node.js, React",
      link: "https://thikiti-app.vercel.app/",
    },

    {
      name: "SPRING CLOUD GATEWAY SERVICE",
      description:
        "Application that implements the spring cloud gateway library for routing services in a microservices environment. In which it has centralized configuration of retry, caching, rate limit and other mechanisms ",
      technologies: "Java, Srpring boot",
      link: "https://github.com/IsraelMatusse/GATEWAY-SERVICE-SPRING",
    },

    {
      name: "PICPAY CHALLENGE",
      description:
        "Application that simulates a payment system with the ability to create, process, cancel payments and send notifications, using the picpay api",
      technologies: "PHP, Laravel",
      link: "https://github.com/IsraelMatusse/desafio-picpay-backend-laravel",
    },
    {
      name: "NOTIFICATIONS SERVICE",
      description:
        "Service for issuing notifications to application users (email, SMS and others), developed to be used by applications in managing notifications where anyone who wants to join receives an API key and implements the application based on the documentation provided",
      technologies: "Java, Spring boot",
      link: "https://github.com/IsraelMatusse/NOTIFICATIONS_SERVICE",
    },
  ];

  return (
    <section id="projects" className="py-2">
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl font-bold mb-6 text-center text-vibrant-blue">
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
              <h3 className="text-xl font-semibold text-vibrant-blue">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-vibrant-blue"
                >
                  {project.name}
                </a>
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
