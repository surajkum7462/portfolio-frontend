// // src/pages/Home.jsx
// import { motion } from 'framer-motion';

// const Home = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-600 text-white flex items-center justify-center px-4">
//       <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
//         {/* Left Side - Text */}
//         <motion.div
//           initial={{ x: -80, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg">
//             Hi, I'm <span className="text-yellow-300">Suraj Kumar</span>
//           </h1>
//           <p className="text-lg md:text-xl text-white/90 mb-6">
//             Full Stack Developer | Java • Spring Boot • React • Tailwind CSS
//           </p>
//           <a
//             href="/projects"
//             className="inline-block px-6 py-3 bg-yellow-400 text-black rounded-xl font-semibold hover:bg-yellow-300 transition transform hover:scale-105 shadow-lg"
//           >
//             View My Work
//           </a>
//         </motion.div>

//         {/* Right Side - Image */}
//         <motion.div
//           initial={{ x: 80, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="flex justify-center"
//         >
//           <img
//             src="/images/best photo.jpg"  // <- change the filename to your image
//             alt="Suraj Kumar"
//             className="rounded-3xl w-64 md:w-80 shadow-2xl border-4 border-white"
//           />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Home;


// src/pages/Home.jsx
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-600 text-white flex items-center justify-center px-4 pt-20">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Left Side - Text */}
        <motion.div
          initial={{ x: -100, opacity: 0, rotateY: 90 }}
          animate={{ x: 0, opacity: 1, rotateY: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            Hi, I'm <span className="text-yellow-300">Suraj Kumar</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-4">
            Full Stack Developer | Java • Spring Boot • React • Tailwind CSS
          </p>
          <p className="text-sm md:text-base italic text-white/80 mb-6">
            "Success is not final, failure is not fatal: it is the courage to continue that counts."
          </p>

          {/* Skills Section */}
          <div className="bg-white bg-opacity-10 p-4 rounded-xl mb-6">
            <h2 className="text-xl font-semibold text-yellow-300 mb-2">DSA & Core Skills</h2>
            <ul className="list-disc list-inside text-white/90 space-y-1">
              <li>Data Structures & Algorithms (DSA)</li>
              <li>Problem Solving (LeetCode, GFG)</li>
              <li>OOPs, Collections, Recursion</li>
              <li>Trees, Graphs, DP, LinkedList</li>
              <li>Time & Space Complexity</li>
            </ul>
          </div>

          <a
            href="/projects"
            className="inline-block px-6 py-3 bg-yellow-400 text-black rounded-xl font-semibold hover:bg-yellow-300 transition transform hover:scale-105 shadow-lg"
          >
            View My Work
          </a>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ x: 100, opacity: 0, rotateY: -90 }}
          animate={{ x: 0, opacity: 1, rotateY: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src="/images/best photo.jpg"
            alt="Suraj Kumar"
            className="rounded-3xl w-64 md:w-80 shadow-2xl border-4 border-white transform hover:scale-105 transition duration-500"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
