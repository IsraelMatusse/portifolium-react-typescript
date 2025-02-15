import type React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaDocker,
  FaAws,
  FaJava,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiDialogflow,
  SiPostgresql,
  SiSpring,
} from "react-icons/si";

interface Skill {
  name: string;
  icon: React.ReactElement;
}

const skills: Skill[] = [
  { name: "Java", icon: <FaJava /> },
  { name: "Spring Boot", icon: <SiSpring /> },
  { name: "BPM", icon: <SiDialogflow /> },

  { name: "React", icon: <FaReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "SQL", icon: <FaDatabase /> },
];

export function Skills() {
  return (
    <section id="skills" className="py-2 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-vibrant-blue">
          My Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transition-transform duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-2 text-vibrant-blue">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
