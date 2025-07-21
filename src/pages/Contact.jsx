// src/pages/Contact.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios"; // ✅ Import axios

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    try {
      const response = await axios.post("http://localhost:8080/api/contact", formData);
      console.log("Message sent:", response.data);
      alert("Message sent successfully! ✅");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("❌ Failed to send message. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-slate-700 text-white py-16 px-6">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white text-black rounded-xl p-8 shadow-2xl space-y-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <label className="block text-lg font-semibold">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-lg font-semibold">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-lg font-semibold">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-400 text-black py-3 rounded-md font-bold hover:bg-yellow-300 transition"
        >
          Send Message
        </button>
      </motion.form>
    </div>
  );
};

export default Contact;
