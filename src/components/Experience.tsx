import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      company: "NETLINE SERV",
      role: "Programmer Analyst",
      period: " February 2023 - Presente",
      description:
        "I currently work as a programmer analyst. participating from business process modeling to solution development.    I have experience in developing web services using architectures such as REST and GRAPHQL. And Technologies such as Java, Spring Boot, Node JS, Typescript.",
    },
    {
      company: "FASOREL SA",
      role: "Industrial Mechanic",
      period: "September 2022",
      description:
        "I worked as an industrial mechanic. ensuring the operation of industrial equipment in the organization's functional units, such as: food oil refinery, soap plant, bottle, filling plant, oil acid plant and others.",
    },

    {
      company: "MEREC INDUSTRIES",
      role: "Technical Production Operator",
      period: "September 2022",
      description:
        "I worked as a technical production operator at the biscuit factory. Where it guaranteed the full functioning of equipment such as packaging machines, ovens, industrial mixers and other equipment. carrying out periodic and corrective maintenance.",
    },
    {
      company: "STARTIMES",
      role: "Sales Promoter",
      period: "January 2021",
      description:
        "I worked as a sales promoter for TMT kits and 3 months later I became team leader",
    },
    {
      company: "CFM-SUL",
      role: "Industrial Mechanic",
      period: "February 2019",
      description:
        "   I was an industrial mechanics intern in the general workshops of CFM Maputo. in the departments of workshop conservation and general production.",
    },
  ];

  return (
    <section id="experience" className="py-2">
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl font-bold mb-6 text-center text-vibrant-blue">
          Professional Experience
        </h2>
        <div className="relative">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-8 flex"
            >
              <div className="flex flex-col items-center mr-4">
                <div className="w-4 h-4 bg-vibrant-purple rounded-full" />
                {index !== experiences.length - 1 && (
                  <div className="w-0.5 h-full bg-vibrant-purple" />
                )}
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex-grow">
                <h3 className="text-xl font-semibold text-vibrant-blue">
                  {exp.company}
                </h3>
                <p className="text-vibrant-purple font-medium">{exp.role}</p>
                <p className="text-gray-600">{exp.period}</p>
                <p className="mt-2">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
