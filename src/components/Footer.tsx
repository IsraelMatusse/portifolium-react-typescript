import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">
            &copy; {currentYear} @IsraelMatusse. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/IsraelMatusse"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-vibrant-blue"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/israel-matusse-0828a3239/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-vibrant-blue"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com/Israel_matusse"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-vibrant-blue"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
