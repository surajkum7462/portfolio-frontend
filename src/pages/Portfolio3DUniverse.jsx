import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  Float,
  Text,
  OrbitControls,
  Stars,
  Sphere,
  Box,
  Cylinder,
  Torus,
  Html,
  Environment,
  ContactShadows
} from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';

// Data from repository
const personalData = {
  name: "Suraj Kumar",
  title: "Full Stack Developer",
  skills: ["Java", "Spring Boot", "React", "JavaScript", "Tailwind CSS", "MySQL", "DSA"],
  quote: "Success is not final, failure is not fatal: it is the courage to continue that counts."
};

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A powerful e-commerce system featuring JWT-based login, intuitive product management, and secure transactions.",
    tags: ["React", "Spring Boot", "MySQL", "JWT"],
    github: "https://github.com/surajkum7462/E-Commecre-Project/tree/master",
    position: [-8, 2, 0],
    color: "#8B5CF6"
  },
  {
    id: 2,
    title: "Contact Dashboard App",
    description: "Mobile contact manager with data visualization and persistent storage. Built with performance and usability in mind.",
    tags: ["React Native", "TypeScript", "Expo", "Recharts"],
    github: "https://github.com/surajkum7462/Contact-DashBoard-App",
    position: [8, 2, 0],
    color: "#EC4899"
  },
  {
    id: 3,
    title: "E-Notes App",
    description: "Organize and share academic notes effectively by semester and subject with full CRUD and admin capabilities.",
    tags: ["Spring Boot", "Thymeleaf", "MySQL"],
    github: "https://github.com/surajkum7462/E-Notes-Real-Time-Project-",
    position: [-8, -2, 0],
    color: "#F59E0B"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A visually rich personal portfolio showcasing achievements with animated effects, 3D cards, and responsive layout.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/surajkum7462/portfolio-frontend",
    position: [8, -2, 0],
    color: "#10B981"
  }
];

const education = [
  { year: "2018–2019", title: "Matriculation", score: "86%", position: [-12, 6, 0] },
  { year: "2019–2021", title: "Intermediate Science", score: "84%", position: [0, 6, 0] },
  { year: "2022–2026", title: "B.Tech in CSE", score: "8.5 CGPA", position: [12, 6, 0] }
];

// 3D Project Node Component
const ProjectNode = ({ project, onClick, isSelected, connections }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime + project.id) * 0.1;
      
      if (hovered || isSelected) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.3, 1.3, 1.3), 0.1);
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }
  });

  return (
    <group position={project.position}>
      {/* Connection Lines */}
      {connections.map((connection, index) => (
        <group key={index}>
          <Cylinder
            args={[0.01, 0.01, connection.distance]}
            position={connection.midpoint}
            rotation={connection.rotation}
          >
            <meshStandardMaterial 
              color="#8B5CF6" 
              transparent 
              opacity={0.6}
              emissive="#4C1D95"
              emissiveIntensity={0.2}
            />
          </Cylinder>
        </group>
      ))}
      
      {/* Project Node */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
        <Sphere
          ref={meshRef}
          args={[1.2]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={() => onClick(project)}
        >
          <meshStandardMaterial
            color={hovered || isSelected ? "#ffffff" : project.color}
            transparent
            opacity={0.8}
            emissive={project.color}
            emissiveIntensity={hovered || isSelected ? 0.6 : 0.3}
          />
        </Sphere>
        
        {/* Floating particles around project */}
        {[...Array(8)].map((_, i) => (
          <Float key={i} speed={3 + i} rotationIntensity={0.5} floatIntensity={0.8}>
            <Sphere 
              args={[0.05]} 
              position={[
                Math.cos((i / 8) * Math.PI * 2) * 2,
                Math.sin((i / 8) * Math.PI * 2) * 2,
                Math.random() * 2 - 1
              ]}
            >
              <meshStandardMaterial
                color={project.color}
                emissive={project.color}
                emissiveIntensity={0.8}
              />
            </Sphere>
          </Float>
        ))}
      </Float>

      {/* Text Label */}
      <Html position={[0, -2.5, 0]} center>
        <div className="text-white font-bold text-lg text-center bg-black/50 px-3 py-1 rounded-lg backdrop-blur-sm border border-white/20">
          {project.title.split(' ')[0]}
        </div>
      </Html>
    </group>
  );
};

// Central Hub (Suraj's Avatar)
const CentralHub = ({ onClick }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.02;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.3}>
        <Torus
          ref={meshRef}
          args={[2, 0.5, 16, 32]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={onClick}
        >
          <meshStandardMaterial
            color={hovered ? "#ffffff" : "#8B5CF6"}
            emissive="#4C1D95"
            emissiveIntensity={0.4}
          />
        </Torus>
        
        {/* Inner Core */}
        <Sphere args={[1]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#EC4899"
            emissive="#EC4899"
            emissiveIntensity={0.3}
            transparent
            opacity={0.8}
          />
        </Sphere>
      </Float>

      {/* Name Text */}
      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={0.5}
        height={0.1}
        position={[0, -3.5, 0]}
        castShadow
      >
        SURAJ KUMAR
        <meshStandardMaterial color="#ffffff" />
      </Text3D>
    </group>
  );
};

// Education Timeline in 3D
const EducationTimeline = () => {
  return (
    <group>
      {education.map((edu, index) => (
        <group key={index} position={edu.position}>
          <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
            <Box args={[1.5, 0.3, 0.3]}>
              <meshStandardMaterial
                color="#F59E0B"
                emissive="#F59E0B"
                emissiveIntensity={0.2}
              />
            </Box>
          </Float>
          
          <Text3D
            font="/fonts/helvetiker_regular.typeface.json"
            size={0.2}
            height={0.02}
            position={[0, -1, 0]}
          >
            {edu.year}
            <meshStandardMaterial color="#ffffff" />
          </Text3D>
        </group>
      ))}
      
      {/* Timeline connector */}
      <Cylinder
        args={[0.02, 0.02, 24]}
        position={[0, 6, 0]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <meshStandardMaterial
          color="#F59E0B"
          emissive="#F59E0B"
          emissiveIntensity={0.3}
        />
      </Cylinder>
    </group>
  );
};

// Skills Constellation
const SkillsConstellation = () => {
  const skillPositions = [
    [-15, 10, -5], [15, 10, -5], [-15, -10, -5], [15, -10, -5],
    [0, 15, -8], [0, -15, -8], [-10, 0, -10]
  ];

  return (
    <group>
      {personalData.skills.map((skill, index) => (
        <group key={skill} position={skillPositions[index] || [0, 0, -15]}>
          <Float speed={2 + index * 0.5} rotationIntensity={0.4} floatIntensity={0.6}>
            <Sphere args={[0.5]}>
              <meshStandardMaterial
                color="#10B981"
                emissive="#10B981"
                emissiveIntensity={0.4}
                transparent
                opacity={0.7}
              />
            </Sphere>
          </Float>
          
          <Text3D
            font="/fonts/helvetiker_regular.typeface.json"
            size={0.15}
            height={0.02}
            position={[0, -1.2, 0]}
          >
            {skill}
            <meshStandardMaterial color="#ffffff" />
          </Text3D>
        </group>
      ))}
    </group>
  );
};

// Calculate connections between projects
const calculateConnections = (project, allProjects) => {
  return allProjects
    .filter(p => p.id !== project.id)
    .map(targetProject => {
      const start = new THREE.Vector3(...project.position);
      const end = new THREE.Vector3(...targetProject.position);
      const midpoint = start.clone().lerp(end, 0.5);
      const distance = start.distanceTo(end);
      const direction = end.clone().sub(start).normalize();
      const rotation = new THREE.Euler(0, 0, Math.atan2(direction.y, direction.x));
      
      return { midpoint: midpoint.toArray(), distance, rotation: [rotation.x, rotation.y, rotation.z] };
    });
};

// Main 3D Scene Component
const Scene3D = ({ selectedProject, onProjectClick, onCentralClick }) => {
  return (
    <>
      <Environment preset="night" />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
      <spotLight position={[0, 15, 0]} intensity={0.8} angle={0.3} penumbra={1} />
      
      <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
      
      {/* Central Hub */}
      <CentralHub onClick={onCentralClick} />
      
      {/* Project Nodes with Connections */}
      {projects.map(project => (
        <ProjectNode
          key={project.id}
          project={project}
          onClick={onProjectClick}
          isSelected={selectedProject?.id === project.id}
          connections={calculateConnections(project, projects)}
        />
      ))}
      
      {/* Education Timeline */}
      <EducationTimeline />
      
      {/* Skills Constellation */}
      <SkillsConstellation />
      
      <ContactShadows position={[0, -15, 0]} opacity={0.4} scale={100} blur={2} />
      <OrbitControls enableZoom={true} enablePan={true} maxDistance={50} minDistance={5} />
    </>
  );
};

// UI Overlay Components
const ProjectOverlay = ({ project, onClose }) => (
  <motion.div
    className="fixed inset-0 bg-black/50 backdrop-blur-lg z-50 flex items-center justify-center p-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 max-w-2xl w-full border border-white/20"
      initial={{ scale: 0.8, y: 50 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.8, y: 50 }}
    >
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-3xl font-bold text-white">{project.title}</h2>
        <button
          onClick={onClose}
          className="text-white/60 hover:text-white text-2xl"
        >
          ×
        </button>
      </div>
      
      <p className="text-white/80 mb-6 leading-relaxed">{project.description}</p>
      
      <div className="flex flex-wrap gap-3 mb-6">
        {project.tags.map(tag => (
          <span
            key={tag}
            className="px-3 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-sm text-white"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-semibold hover:shadow-lg transition-all"
        >
          View Code
        </a>
        <button
          onClick={onClose}
          className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl text-white font-semibold hover:bg-white/20 transition-all"
        >
          Close
        </button>
      </div>
    </motion.div>
  </motion.div>
);

const CentralOverlay = ({ onClose }) => (
  <motion.div
    className="fixed inset-0 bg-black/50 backdrop-blur-lg z-50 flex items-center justify-center p-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 max-w-3xl w-full border border-white/20"
      initial={{ scale: 0.8, y: 50 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.8, y: 50 }}
    >
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-4xl font-bold text-white">{personalData.name}</h2>
        <button
          onClick={onClose}
          className="text-white/60 hover:text-white text-2xl"
        >
          ×
        </button>
      </div>
      
      <h3 className="text-2xl text-purple-300 mb-4">{personalData.title}</h3>
      <p className="text-white/80 mb-6 italic">"{personalData.quote}"</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-xl font-bold text-white mb-3">Technical Skills</h4>
          <div className="flex flex-wrap gap-2">
            {personalData.skills.map(skill => (
              <span
                key={skill}
                className="px-3 py-1 bg-gradient-to-r from-blue-600/80 to-green-600/80 rounded-full text-sm text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-xl font-bold text-white mb-3">Education</h4>
          {education.map(edu => (
            <div key={edu.year} className="mb-2">
              <div className="text-white">{edu.title}</div>
              <div className="text-white/60 text-sm">{edu.year} • {edu.score}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex gap-4 mt-8">
        <button
          onClick={onClose}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-semibold hover:shadow-lg transition-all"
        >
          Explore Universe
        </button>
      </div>
    </motion.div>
  </motion.div>
);

// Main Portfolio Component
const Portfolio3DUniverse = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showCentral, setShowCentral] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCentralClick = () => {
    setShowCentral(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <motion.div
          className="text-white text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="text-6xl mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            🚀
          </motion.div>
          <h1 className="text-2xl font-bold">Initializing 3D Universe...</h1>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 20], fov: 60 }}
        className="absolute inset-0"
      >
        <Suspense fallback={null}>
          <Scene3D
            selectedProject={selectedProject}
            onProjectClick={handleProjectClick}
            onCentralClick={handleCentralClick}
          />
        </Suspense>
      </Canvas>

      {/* UI Instructions */}
      <div className="absolute top-6 left-6 text-white z-40">
        <h1 className="text-2xl font-bold mb-2">Suraj Kumar's Universe</h1>
        <p className="text-white/80">Click on nodes to explore • Drag to orbit • Scroll to zoom</p>
      </div>

      {/* Legend */}
      <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-lg rounded-2xl p-4 text-white z-40">
        <h3 className="font-bold mb-2">Legend</h3>
        <div className="space-y-1 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <span>Projects</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span>Education</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span>Skills</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-pink-500"></div>
            <span>Central Hub</span>
          </div>
        </div>
      </div>

      {/* Overlays */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectOverlay
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
        {showCentral && (
          <CentralOverlay onClose={() => setShowCentral(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio3DUniverse;
