import { FaGithub, FaLinkedin, FaInstagram, FaFigma } from 'react-icons/fa';

export default function Index() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mb-10">
        <img
          src="/logo.png"
          alt="Logo"
          className="mx-auto mb-4 w-24 h-24 rounded-full"
        />
        <h1 className="text-3xl font-bold">
          Victor Bravim
        </h1>
      </div>

      <div className="space-y-4">
        <a
          href="https://github.com/victorbravim"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700"
        >
          <FaGithub size={24} />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/victorbravim"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700"
        >
          <FaLinkedin size={24} />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://www.instagram.com/victorbravim"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700"
        >
          <FaInstagram size={24} />
          <span>Instagram</span>
        </a>

        <a
          href="https://www.figma.com/@victorbravim"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700"
        >
          <FaFigma size={24} />
          <span>Figma</span>
        </a>
      </div>
    </div>
  );
}