// src/pages/About.jsx
import { motion } from "framer-motion";

const timeline = [
  {
    year: "2022",
    title: "Started B.Tech at Trident Academy",
    description: "Began my journey into Computer Science with core subjects and Java fundamentals.",
  },
  {
    year: "2023",
    title: "Learned Java & Web Development",
    description: "Built several Java projects, practiced DSA, and explored HTML, CSS, JavaScript.",
  },
  {
    year: "2024",
    title: "Spring Boot & React Projects",
    description: "Created full-stack apps, integrated Spring Security, deployed with Docker.",
  },
  {
    year: "2025",
    title: "Portfolio & Career Building",
    description: "Crafting my personal brand with this portfolio and preparing for exciting job roles!",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-12 px-6">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <div className="max-w-5xl mx-auto space-y-8 relative border-l-4 border-yellow-400 pl-6">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            className="relative"
          >
            <div className="absolute w-4 h-4 bg-yellow-400 rounded-full left-[-1.25rem] top-2"></div>
            <h3 className="text-xl font-bold text-yellow-300">{item.year} — {item.title}</h3>
            <p className="text-white/80 mt-2">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
