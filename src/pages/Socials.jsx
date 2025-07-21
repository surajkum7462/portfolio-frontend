// src/pages/Socials.jsx
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub size={30} />,
    label: "GitHub",
    url: "https://github.com/suraj097",
  },
  {
    icon: <FaLinkedin size={30} />,
    label: "LinkedIn",
    url: "https://linkedin.com/in/suraj-kumar-dev",
  },
  {
    icon: <FaTwitter size={30} />,
    label: "Twitter",
    url: "https://twitter.com/suraj_dev",
  },
  {
    icon: <FaInstagram size={30} />,
    label: "Instagram",
    url: "https://instagram.com/suraj_codes",
  },
  {
    icon: <FaEnvelope size={30} />,
    label: "Email",
    url: "mailto:suraj@example.com",
  },
];

const Socials = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-16 px-6">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Connect With Me
      </motion.h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {socials.map((social, index) => (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-white text-black flex items-center gap-4 p-4 rounded-xl shadow-md hover:bg-yellow-300 transition"
          >
            <div className="text-purple-700">{social.icon}</div>
            <span className="font-semibold text-lg">{social.label}</span>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Socials;
