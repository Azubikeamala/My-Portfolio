

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 
import "@fortawesome/fontawesome-free/css/all.min.css";
import ParticlesBackground from "./ParticlesBackground";
import "./App.css";


export default function Portfolio() {
  return (
<div className="relative z-10 min-h-screen bg-gray-900 text-white">
<ParticlesBackground />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-800 p-4 shadow-md z-50">
        <ul className="flex justify-center space-x-6 text-lg font-semibold">
          <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
          <li><a href="#stack" className="hover:text-blue-400 transition">Stack</a></li>
          <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col justify-center items-center h-screen text-center"
      >
        <img
          src="/images/1.jpg"
          alt="Amalachukwu"
          className="w-60 h-60 rounded-full border-4 border-white shadow-lg"
        />
        <h1 className="text-5xl font-bold mt-4">Hi, I'm Amalachukwu</h1>
        <p className="text-xl mt-2">Full Stack Developer | QA Engineer | UI/UX Enthusiast</p>
      </motion.section>

      {/* About Section */}
      
      <motion.section id="about" className="p-10 max-w-4xl mx-auto">
      <br />
      <br />
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg">
          I am an application developer and cybersecurity analyst with experience in UI/UX design,
          Quality Assurance, and Full Stack Development. I specialize in creating secure and scalable
          solutions while ensuring seamless user experiences.
        </p>
      </motion.section>
     

      {/* Tech Stack Section */}
      <motion.section id="stack" className="p-10 max-w-6xl mx-auto text-center">
      <br />
      <br />
        <h2 className="text-3xl font-bold mb-6">My Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg">
          <div>
            <h3 className="text-yellow-500 font-semibold">UI/UX</h3>
            <p>Figma, Adobe XD, InVision, Sketch</p>
          </div>
          <div>
            <h3 className="text-yellow-500 font-semibold">Quality Assurance</h3>
            <p>Playwright, Apache Jmeter, Jest, Cypress, Selenium, Mocha, Postman, etc</p>
          </div>
          <div>
            <h3 className="text-yellow-500 font-semibold">Full Stack Development</h3>
            <p>React, Node.js, Django, MongoDB, SQL, Express, C#, etc</p>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section id="projects" className="p-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* UI/UX Projects */}
          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-5 rounded-lg shadow-lg">
            <Link to="/ui-ux">
              <img src="/images/4.webp" alt="UI/UX Projects" className="w-full h-40 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold mt-3">UI/UX Projects</h3>
              <p className="text-gray-400">Click to view UI/UX Projects</p>
            </Link>
          </motion.div>

          {/* QA Projects */}
          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-5 rounded-lg shadow-lg">
            <Link to="/qa">
              <img src="/images/2.webp" alt="QA Projects" className="w-full h-40 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold mt-3">QA Projects</h3>
              <p className="text-gray-400">Click to view QA Projects</p>
            </Link>
          </motion.div>

          {/* Full Stack Projects */}
          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-5 rounded-lg shadow-lg">
            <Link to="/fullstack">
              <img src="/images/3.webp" alt="Full Stack Projects" className="w-full h-40 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold mt-3">Full Stack Projects</h3>
              <p className="text-gray-400">Click to view Full Stack Projects</p>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
<motion.section
  id="contact"
  className="p-10 max-w-4xl mx-auto text-center"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
  <p className="text-lg">Reach out for collaborations and opportunities.</p>
  
  {/* Social Links */}
  <div className="flex justify-center space-x-6 mt-4">
    {/* GitHub */}
    <a 
      href="https://github.com/Azubikeamala" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white text-2xl"
    >
      <i className="fab fa-github"></i>
    </a>

    {/* LinkedIn */}
    <a 
      href="https://www.linkedin.com/in/amalachukwu-azubike-4b8179a3/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-blue-500 hover:text-blue-600 text-2xl"
    >
      <i className="fab fa-linkedin"></i>
    </a>

    {/* Gmail */}
    <a 
      href="mailto:onyenweamala@gmail.com" 
      className="text-red-500 hover:text-red-600 text-2xl"
    >
      <i className="fas fa-envelope"></i>
    </a>
  </div>


</motion.section>

    </div>
  );
}
