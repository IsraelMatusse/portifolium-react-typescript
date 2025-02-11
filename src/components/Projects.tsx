import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      name: 'E-commerce Platform',
      description: 'Plataforma de comércio eletrônico escalável com microserviços.',
      technologies: 'Node.js, React, Docker, Kubernetes',
    },
    {
      name: 'Sistema de Gestão de Tarefas',
      description: 'Aplicativo web para gerenciamento de projetos e tarefas em equipe.',
      technologies: 'Vue.js, Express, MongoDB',
    },
    {
      name: 'API de Análise de Sentimentos',
      description: 'API para análise de sentimentos em textos usando aprendizado de máquina.',
      technologies: 'Python, Flask, TensorFlow',
    },
    // Adicione mais projetos conforme necessário
  ];

  return (
    <section id="projects" className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-vibrant-purple">
          Projetos em Destaque
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
              <h3 className="text-xl font-semibold mb-2 text-vibrant-blue">{project.name}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <p className="text-sm text-vibrant-purple">{project.technologies}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
