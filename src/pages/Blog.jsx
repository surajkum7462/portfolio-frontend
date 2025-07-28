import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Mock blog data since backend is not available
const mockBlogs = [
  {
    id: 1,
    title: "Building Scalable Web Applications with React and Spring Boot",
    summary: "Exploring best practices for creating full-stack applications with modern technologies, focusing on performance and scalability.",
    createdAt: "2024-01-15",
    tags: ["React", "Spring Boot", "Full Stack"]
  },
  {
    id: 2,
    title: "Mastering Data Structures and Algorithms",
    summary: "Deep dive into essential DSA concepts including trees, graphs, and dynamic programming with practical examples.",
    createdAt: "2024-01-10",
    tags: ["DSA", "Algorithms", "Problem Solving"]
  },
  {
    id: 3,
    title: "3D Web Development with Three.js and React",
    summary: "Creating immersive 3D experiences on the web using Three.js, React Three Fiber, and modern animation techniques.",
    createdAt: "2024-01-05",
    tags: ["Three.js", "3D", "WebGL"]
  },
  {
    id: 4,
    title: "Optimizing React Performance for Better User Experience",
    summary: "Advanced techniques for React optimization including memo, useMemo, useCallback, and code splitting strategies.",
    createdAt: "2023-12-20",
    tags: ["React", "Performance", "Optimization"]
  },
  {
    id: 5,
    title: "Building RESTful APIs with Spring Boot",
    summary: "Complete guide to creating robust and secure REST APIs using Spring Boot with JWT authentication and validation.",
    createdAt: "2023-12-15",
    tags: ["Spring Boot", "REST API", "Backend"]
  },
  {
    id: 6,
    title: "Modern CSS Techniques: From Flexbox to Grid",
    summary: "Mastering modern CSS layout techniques including Flexbox, Grid, and advanced animations for responsive design.",
    createdAt: "2023-12-10",
    tags: ["CSS", "Frontend", "Responsive Design"]
  }
];

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with mock data
    const loadBlogs = async () => {
      try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));
        setBlogs(mockBlogs);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-slate-700 text-white py-16 px-6">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Blog Posts
      </motion.h2>

      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {blogs.length === 0 ? (
          <p className="text-center col-span-2 text-gray-300">
            No blog posts available.
          </p>
        ) : (
          blogs.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-white text-black p-6 rounded-xl shadow-lg border-l-4 border-yellow-400 hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-purple-700 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-800 mb-2">{post.summary}</p>
              <p className="text-sm text-gray-500 italic">
                Posted on:{" "}
                {post.createdAt
                  ? new Date(post.createdAt).toDateString()
                  : "Unknown"}
              </p>
            </motion.div>
          ))
        )}
      </motion.div>
    </div>
  );
};

export default Blog;
