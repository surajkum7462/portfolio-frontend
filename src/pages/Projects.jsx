// // src/pages/Projects.jsx
// import { motion } from "framer-motion";

// const projects = [
//   {
//     title: "E-Commerce Platform",
//     description: "Full-stack Spring Boot + React shopping site with authentication, cart, admin panel, and Stripe integration.",
//     github: "https://github.com/yourusername/ecommerce-project",
//     live: "https://ecommerce-demo.vercel.app",
//   },
//   {
//     title: "Omegle Clone",
//     description: "Text + video chat app using WebSockets and WebRTC with gender-based user matching.",
//     github: "https://github.com/yourusername/omegle-clone",
//     live: "https://omegle-suraj.vercel.app",
//   },
//   {
//     title: "WhatsApp Chatbot",
//     description: "Spring Boot backend chatbot integrated with WhatsApp Business API and Firebase data store.",
//     github: "https://github.com/yourusername/whatsapp-chatbot",
//     live: "https://decodechatbot.onrender.com",
//   },
// ];

// const Projects = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white py-12 px-6">
//       <motion.h2
//         className="text-4xl font-bold text-center mb-12"
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         My Projects
//       </motion.h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             className="bg-white text-black rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 border-4 border-transparent hover:border-yellow-400"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.3 }}
//           >
//             <h3 className="text-2xl font-bold mb-3 text-purple-700">{project.title}</h3>
//             <p className="mb-4 text-gray-800">{project.description}</p>
//             <div className="flex gap-4">
//               <a
//                 href={project.github}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
//               >
//                 GitHub
//               </a>
//               <a
//                 href={project.live}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 transition"
//               >
//                 Live Demo
//               </a>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;

// src/components/Projects.jsx
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Projects.css";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with authentication, product listing, admin dashboard, cart and payment integration.",
    tags: ["React", "Spring Boot", "MySQL", "JWT"],
    image: "/images/ecommerce.jpg",
    github: "https://github.com/your-username/ecommerce-app",
  },
  {
    title: "Omegle Clone",
    description:
      "A WebRTC-based video and text chat application with gender-based matching, real-time signaling, and secure connections.",
    tags: ["JavaScript", "WebRTC", "Socket.IO", "Spring Boot"],
    image: "/images/omegle.jpeg",
    github: "https://github.com/your-username/omegle-clone",
  },
  {
    title: "Contact Dashboard App",
    description:
      "A React Native mobile app to manage contacts with favorites, AsyncStorage, and data visualization.",
    tags: ["React Native", "TypeScript", "Expo", "Recharts"],
    image: "/images/conatct.jpeg",
    github: "https://github.com/your-username/contact-dashboard",
  },
  {
    title: "E-Notes App",
    description:
      "Students can upload, search, and manage notes categorized by subject and semester. Admin panel included.",
    tags: ["Spring Boot", "Thymeleaf", "MySQL"],
    image: "/images/enotes.jpeg",
    github: "https://github.com/your-username/e-notes-app",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing projects, skills, and blog with animations and responsive UI.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    image: "/images/muimage.png",
    github: "https://github.com/your-username/portfolio",
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-16"
      id="projects"
    >
      <h2
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]"
        data-aos="fade-up"
      >
        🚀 My Projects
      </h2>
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
          loop={true}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} data-aos="zoom-in">
              <div className="project-card group perspective">
                <div className="bg-gray-800 rounded-2xl shadow-2xl p-6 transition-transform transform hover:scale-105 border border-blue-500/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg mb-4 w-full h-40 object-cover border border-white/10"
                  />
                  <h3 className="text-xl font-bold mb-2 text-blue-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-blue-700 text-sm px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-4 py-2 text-sm font-semibold bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-pink-500/50 transition"
                  >
                    🔗 View Code
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
