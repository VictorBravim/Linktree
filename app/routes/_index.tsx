import { FaGithub, FaLinkedin, FaInstagram, FaFigma, FaGlobe } from 'react-icons/fa';

export default function Index() {
  return (
    <div className="bg-dark-gray text-white min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center mb-10">
        <img
          src="/Logo.jpeg"
          alt="Logo"
          className="mx-auto mb-4 w-24 h-24 rounded-full border-4 border-light-gray shadow-lg"
        />
        <h1 className="text-4xl font-extrabold">
          Victor Bravim
        </h1>
      </div>

      <div className="space-y-4 w-full max-w-xs">
        <a
          href="https://victorbravim.com"
          target="_blank"
          rel="noopener noreferrer"
          className="button flex items-center justify-center space-x-2"
        >
          <FaGlobe size={24} />
          <span className="text-lg font-medium">Portfólio</span>
        </a>

        <a
          href="https://github.com/victorbravim"
          target="_blank"
          rel="noopener noreferrer"
          className="button flex items-center justify-center space-x-2"
        >
          <FaGithub size={24} />
          <span className="text-lg font-medium">GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/victorbravim"
          target="_blank"
          rel="noopener noreferrer"
          className="button flex items-center justify-center space-x-2"
        >
          <FaLinkedin size={24} />
          <span className="text-lg font-medium">LinkedIn</span>
        </a>

        <a
          href="https://www.instagram.com/victorbravim"
          target="_blank"
          rel="noopener noreferrer"
          className="button flex items-center justify-center space-x-2"
        >
          <FaInstagram size={24} />
          <span className="text-lg font-medium">Instagram</span>
        </a>

        <a
          href="https://www.figma.com/@victorbravim"
          target="_blank"
          rel="noopener noreferrer"
          className="button flex items-center justify-center space-x-2"
        >
          <FaFigma size={24} />
          <span className="text-lg font-medium">Figma</span>
        </a>
      </div>
    </div>
  );
}