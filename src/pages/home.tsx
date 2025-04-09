import { motion } from "framer-motion";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Education from "../components/Education";
import { Link } from "react-router-dom";
import { Skills } from "../components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen pt-16 bg-gray-100">
      <Navbar />

      <section className="bg-gradient-to-br from-vibrant-blue to-vibrant-purple text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hello World <br /> I'm Israel Matusse
            </h1>
            <p className="text-xl mb-6">
              A young man with a passion for solving everyday problems and
              driving improvements in the quality of life through technology. I
              have a curious and innovative mindset, always seeking creative and
              disruptive approaches to complex challenges. I am constantly
              looking for new opportunities for learning and professional
              growth, motivated to become a visionary leader in the technology
              sector. I am able to work collaboratively in multidisciplinary
              teams, encouraging the exchange of ideas and driving
              transformative solutions. I have experience using technologies
              such as java, spring boot, typescript, node js, react, relational
              and non-relational databases, application redesign and business
              process modeling.
            </p>
            <Link
              to="/contact"
              className="bg-white text-vibrant-purple px-6 py-2 rounded-full font-semibold inline-block"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
      <section id="experience" className="py-10 ">
        <Experience />
      </section>

      <section id="skills" className="py-10 ">
        <Skills />
      </section>
      <section id="education" className="py-10 ">
        <Education />
      </section>
      <section id="projects" className="py-10 ">
        <Projects />
      </section>

      <Footer />
    </div>
  );
}
