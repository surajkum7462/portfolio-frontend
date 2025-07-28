import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiJava,
  SiSpring,
  SiMysql,
  SiGit,
  SiDocker,
  SiMaven,
  SiThreedotjs,
  SiTailwindcss
} from 'react-icons/si';
import { FaCode } from 'react-icons/fa';

// Exact Technology Icons Mapping
const getSkillIcon = (skillName) => {
  const name = skillName.toLowerCase();

  if (name.includes('html')) return {
    icon: SiHtml5,
    color: "#E34F26",
    bgGradient: "from-orange-500 to-red-500"
  };
  if (name.includes('css')) return {
    icon: SiCss3,
    color: "#1572B6",
    bgGradient: "from-blue-500 to-blue-600"
  };
  if (name.includes('javascript')) return {
    icon: SiJavascript,
    color: "#F7DF1E",
    bgGradient: "from-yellow-400 to-yellow-500"
  };
  if (name.includes('react')) return {
    icon: SiReact,
    color: "#61DAFB",
    bgGradient: "from-cyan-400 to-blue-500"
  };
  if (name.includes('java') && !name.includes('script')) return {
    icon: SiJava,
    color: "#007396",
    bgGradient: "from-orange-600 to-red-600"
  };
  if (name.includes('spring')) return {
    icon: SiSpring,
    color: "#6DB33F",
    bgGradient: "from-green-500 to-green-600"
  };
  if (name.includes('three')) return {
    icon: SiThreedotjs,
    color: "#000000",
    bgGradient: "from-gray-800 to-black"
  };
  if (name.includes('mysql')) return {
    icon: SiMysql,
    color: "#4479A1",
    bgGradient: "from-blue-600 to-blue-700"
  };
  if (name.includes('git') || name.includes('github')) return {
    icon: SiGit,
    color: "#F05032",
    bgGradient: "from-orange-500 to-red-500"
  };
  if (name.includes('docker')) return {
    icon: SiDocker,
    color: "#0db7ed",
    bgGradient: "from-blue-400 to-blue-600"
  };
  if (name.includes('maven')) return {
    icon: SiMaven,
    color: "#C71A36",
    bgGradient: "from-red-600 to-red-700"
  };
  if (name.includes('tailwind')) return {
    icon: SiTailwindcss,
    color: "#06B6D4",
    bgGradient: "from-cyan-400 to-cyan-600"
  };

  // Default fallback
  return {
    icon: FaCode,
    color: "#8B5CF6",
    bgGradient: "from-purple-500 to-purple-600"
  };
};

// Main Skill Icon 3D Component
const SkillIcon3D = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ 
        scale: 1.05, 
        backgroundColor: "rgba(255,255,255,0.1)",
        boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)"
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      viewport={{ once: true }}
    >
      {/* 3D Icon */}
      <div className="h-24 mb-4">
        <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[2, 2, 2]} intensity={1} />
          <pointLight position={[-2, -2, -2]} intensity={0.5} color="#8B5CF6" />
          
          {getSkillIcon(skill.name, isHovered)}
        </Canvas>
      </div>

      {/* Skill Info */}
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
        {skill.name}
      </h3>
      <p className="text-purple-300 text-sm mb-2">{skill.category}</p>
      <div className="flex items-center">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          skill.level === 'Expert' ? 'bg-green-600/80 text-white' :
          skill.level === 'Advanced' ? 'bg-blue-600/80 text-white' :
          'bg-yellow-600/80 text-white'
        }`}>
          {skill.level}
        </span>
      </div>
    </motion.div>
  );
};

export default SkillIcon3D;
