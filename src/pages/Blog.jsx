import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/blogs") // replace with deployed API if needed
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error("Failed to fetch blogs:", err));
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
