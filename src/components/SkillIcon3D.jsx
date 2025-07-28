import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Box, Cylinder, Torus } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// 3D Icon Components for different technologies
const HTMLIcon = ({ isHovered }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.02;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={meshRef}>
        {/* HTML5 Shield Shape */}
        <Box args={[1, 1.2, 0.2]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color={isHovered ? "#ffffff" : "#E34F26"}
            emissive="#E34F26"
            emissiveIntensity={isHovered ? 0.4 : 0.2}
          />
        </Box>
        <Box args={[0.8, 0.3, 0.3]} position={[0, 0.3, 0]}>
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={0.3}
          />
        </Box>
      </group>
    </Float>
  );
};

const ReactIcon = ({ isHovered }) => {
  const meshRef = useRef();
  const orbitRef1 = useRef();
  const orbitRef2 = useRef();
  const orbitRef3 = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
    if (orbitRef1.current) orbitRef1.current.rotation.z += 0.02;
    if (orbitRef2.current) orbitRef2.current.rotation.x += 0.015;
    if (orbitRef3.current) orbitRef3.current.rotation.y += 0.025;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
      <group ref={meshRef}>
        {/* React Atom Core */}
        <Sphere args={[0.2]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color={isHovered ? "#ffffff" : "#61DAFB"}
            emissive="#61DAFB"
            emissiveIntensity={isHovered ? 0.6 : 0.3}
          />
        </Sphere>
        
        {/* Electron Orbits */}
        <group ref={orbitRef1}>
          <Torus args={[0.8, 0.02, 8, 32]} rotation={[0, 0, 0]}>
            <meshStandardMaterial color="#61DAFB" emissive="#61DAFB" emissiveIntensity={0.2} />
          </Torus>
        </group>
        <group ref={orbitRef2}>
          <Torus args={[0.8, 0.02, 8, 32]} rotation={[Math.PI / 3, 0, 0]}>
            <meshStandardMaterial color="#61DAFB" emissive="#61DAFB" emissiveIntensity={0.2} />
          </Torus>
        </group>
        <group ref={orbitRef3}>
          <Torus args={[0.8, 0.02, 8, 32]} rotation={[-Math.PI / 3, 0, 0]}>
            <meshStandardMaterial color="#61DAFB" emissive="#61DAFB" emissiveIntensity={0.2} />
          </Torus>
        </group>
      </group>
    </Float>
  );
};

const JavaScriptIcon = ({ isHovered }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.02;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.6}>
      <group ref={meshRef}>
        {/* JS Rounded Rectangle */}
        <Box args={[1, 1, 0.2]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color={isHovered ? "#ffffff" : "#F7DF1E"}
            emissive="#F7DF1E"
            emissiveIntensity={isHovered ? 0.4 : 0.2}
          />
        </Box>
        {/* JS Text representation */}
        <Sphere args={[0.15]} position={[-0.2, 0.1, 0.15]}>
          <meshStandardMaterial color="#000000" />
        </Sphere>
        <Sphere args={[0.15]} position={[0.2, -0.1, 0.15]}>
          <meshStandardMaterial color="#000000" />
        </Sphere>
      </group>
    </Float>
  );
};

const JavaIcon = ({ isHovered }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.015;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={meshRef}>
        {/* Java Coffee Cup */}
        <Cylinder args={[0.4, 0.5, 0.8, 16]} position={[0, -0.2, 0]}>
          <meshStandardMaterial
            color={isHovered ? "#ffffff" : "#007396"}
            emissive="#007396"
            emissiveIntensity={isHovered ? 0.4 : 0.2}
          />
        </Cylinder>
        {/* Steam */}
        <Sphere args={[0.05]} position={[-0.1, 0.5, 0]}>
          <meshStandardMaterial color="#ffffff" transparent opacity={0.6} />
        </Sphere>
        <Sphere args={[0.05]} position={[0.1, 0.6, 0]}>
          <meshStandardMaterial color="#ffffff" transparent opacity={0.4} />
        </Sphere>
      </group>
    </Float>
  );
};

const SpringBootIcon = ({ isHovered }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.02;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.4}>
      <group ref={meshRef}>
        {/* Spring Coil */}
        <Torus args={[0.6, 0.1, 8, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color={isHovered ? "#ffffff" : "#6DB33F"}
            emissive="#6DB33F"
            emissiveIntensity={isHovered ? 0.4 : 0.2}
          />
        </Torus>
        <Cylinder args={[0.05, 0.05, 1]} position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <meshStandardMaterial color="#6DB33F" emissive="#6DB33F" emissiveIntensity={0.3} />
        </Cylinder>
      </group>
    </Float>
  );
};

const DefaultIcon = ({ isHovered, color = "#8B5CF6" }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.02;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.5}>
      <Box ref={meshRef} args={[0.8, 0.8, 0.8]}>
        <meshStandardMaterial
          color={isHovered ? "#ffffff" : color}
          emissive={color}
          emissiveIntensity={isHovered ? 0.4 : 0.2}
        />
      </Box>
    </Float>
  );
};

// Skill Icon Component Mapper
const getSkillIcon = (skillName, isHovered) => {
  const name = skillName.toLowerCase();
  
  if (name.includes('html')) return <HTMLIcon isHovered={isHovered} />;
  if (name.includes('react')) return <ReactIcon isHovered={isHovered} />;
  if (name.includes('javascript')) return <JavaScriptIcon isHovered={isHovered} />;
  if (name.includes('java') && !name.includes('script')) return <JavaIcon isHovered={isHovered} />;
  if (name.includes('spring')) return <SpringBootIcon isHovered={isHovered} />;
  if (name.includes('css')) return <DefaultIcon isHovered={isHovered} color="#1572B6" />;
  if (name.includes('three')) return <DefaultIcon isHovered={isHovered} color="#000000" />;
  if (name.includes('mysql')) return <DefaultIcon isHovered={isHovered} color="#4479A1" />;
  if (name.includes('git')) return <DefaultIcon isHovered={isHovered} color="#F05032" />;
  if (name.includes('docker')) return <DefaultIcon isHovered={isHovered} color="#0db7ed" />;
  if (name.includes('maven')) return <DefaultIcon isHovered={isHovered} color="#C71A36" />;
  if (name.includes('junit')) return <DefaultIcon isHovered={isHovered} color="#25A162" />;
  
  return <DefaultIcon isHovered={isHovered} />;
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
