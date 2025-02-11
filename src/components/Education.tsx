import { motion } from 'framer-motion';

export default function Education() {
  const educations = [
    {
      degree: 'Licenciatura em Engenharia de tecnologias e sistemas de informação',
      institution: 'Universidade Joaquim Chissano',
      year: '2023',
    },
    {
      degree: 'Mecânica de Manutenção Industrial',
      institution: 'Instituto de Formação Profissional e Estudos laborais Alberto Cassimo',
      year: '2018',
    },
  ];

  return (
    <section id="projects" className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-vibrant-purple">
          Formação Académica
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educations.map((education, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2 text-vibrant-blue">
                {education.institution}
              </h3>
              <p className="text-gray-600 mb-4">{education.degree}</p>
              <p className="text-sm text-vibrant-purple">{education.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
