import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch("https://portfolio-zaue.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("Message sent successfully!");
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus(data.error || "Something went wrong.");
      }
    } catch (err) {
      setStatus("Server error.");
    }
  };

const handleDownloadCV = async (e) => {
    e.preventDefault();
  try {
    const response = await fetch("https://portfolio-zaue.onrender.com/api/download-cv", {
      method: "POST"
    });

    if (!response.ok) {
      throw new Error("Failed to download CV");
    }

    // Convert the response to a Blob and trigger download manually
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "Jayaprakash-CV.pdf"; // Suggested filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url); // Clean up
  } catch (error) {
    console.error("CV download error:", error);
    alert("Failed to download the CV. Please try again later.");
  }
};
  return (
    <motion.section
      id="contact"
      className="bg-gray-100 py-16 px-6 min-h-screen flex flex-col items-center justify-center font-inter"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold mb-6 relative inline-block pb-2"
        variants={itemVariants}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500">
          Get In Touch
        </span>
        {/* Underline effect with gradient */}
        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 rounded-full"></span>
      </motion.h2>

      <motion.p
        className="mb-10 text-center max-w-xl text-gray-700 text-lg leading-relaxed"
        variants={itemVariants}
      >
        Whether you want to discuss a project, collaborate, or just say hello, feel free to reach out! I'm always open to new opportunities and connections.
      </motion.p>

      <motion.form
  className="w-full max-w-md flex flex-col gap-6 bg-white p-8 rounded-2xl shadow-xl border border-gray-200"
  onSubmit={handleSubmit}
  variants={containerVariants}
>
  <motion.input
    type="text"
    name="name"
    placeholder="Your Name"
    required
    value={form.name}
    onChange={handleChange}
    className="px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-purple-400 focus:border-purple-400 transition duration-200 shadow-sm"
    variants={itemVariants}
  />
  <motion.input
    type="email"
    name="email"
    placeholder="Your Email"
    required
    value={form.email}
    onChange={handleChange}
    className="px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-purple-400 focus:border-purple-400 transition duration-200 shadow-sm"
    variants={itemVariants}
  />
  <motion.textarea
    name="message"
    placeholder="Your Message"
    rows="6"
    required
    value={form.message}
    onChange={handleChange}
    className="px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-purple-400 focus:border-purple-400 transition duration-200 resize-none shadow-sm"
    variants={itemVariants}
  />
  <motion.button
    type="submit"
    className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 rounded-full shadow-lg
              hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    variants={itemVariants}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    Send Message
  </motion.button>
  {status && <p className="text-sm text-center text-green-600 mt-2">{status}</p>}
      </motion.form>


      {/* Download CV Button */}
      <motion.button
        onClick={handleDownloadCV}
        className="mt-8 inline-flex items-center gap-2 bg-purple-500 text-white px-7 py-3 rounded-full font-semibold shadow-lg
                   hover:bg-purple-600 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Download My CV
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
      </motion.button>
    </motion.section>
  );
};

export default Contact;