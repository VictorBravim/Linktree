import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaFigma, FaGlobe } from 'react-icons/fa';

export default function Index() {
  return (
    <div
      className="bg-dark-blue text-white min-h-screen flex flex-col items-center justify-center px-4"
      style={{
        backgroundImage: "url('/Hero.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <motion.div
        className="space-y-4 w-full max-w-xs"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        <motion.a
          href="https://www.victorbravim.com"
          target="_blank"
          rel="noopener noreferrer"
          className="button flex items-center justify-center space-x-2"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <FaGlobe size={24} />
          <span className="text-lg font-medium">Portfólio</span>
        </motion.a>

        <motion.a
          href="https://github.com/VictorBravim"
          target="_blank"
          rel="noopener noreferrer"
          className="button flex items-center justify-center space-x-2"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <FaGithub size={24} />
          <span className="text-lg font-medium">GitHub</span>
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/VictorBravim/"
          target="_blank"
          rel="noopener noreferrer"
          className="button flex items-center justify-center space-x-2"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <FaLinkedin size={24} />
          <span className="text-lg font-medium">LinkedIn</span>
        </motion.a>

        <motion.a
          href="https://www.instagram.com/victorbravim_/"
          target="_blank"
          rel="noopener noreferrer"
          className="button flex items-center justify-center space-x-2"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <FaInstagram size={24} />
          <span className="text-lg font-medium">Instagram</span>
        </motion.a>

        <motion.a
          href="https://www.figma.com/@VictorBravim"
          target="_blank"
          rel="noopener noreferrer"
          className="button flex items-center justify-center space-x-2"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <FaFigma size={24} />
          <span className="text-lg font-medium">Figma</span>
        </motion.a>
      </motion.div>
    </div>
  );
}