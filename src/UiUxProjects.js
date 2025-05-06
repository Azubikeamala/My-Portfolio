import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink as AnchorLink } from "react-router-hash-link";
import { motion, useInView } from "framer-motion";
import './App.css';


export default function UiUxProjects() {
  const [stopFirstSlider, setStopFirstSlider] = useState(false);
  const secondProjectRef = useRef(null);
  const isSecondProjectInView = useInView(secondProjectRef, { once: false, amount: 0.5 });

  useEffect(() => {
    setStopFirstSlider(isSecondProjectInView);
  }, [isSecondProjectInView]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-800 p-4 shadow-md z-50">
        <ul className="flex justify-center space-x-6 text-lg font-semibold">
          <li><Link to="/">Home</Link></li>
          <li><AnchorLink smooth to="/#about">About</AnchorLink></li>
          <li><AnchorLink smooth to="/#stack">Stack</AnchorLink></li>
          <li><AnchorLink smooth to="/#projects">Projects</AnchorLink></li>
          <li><AnchorLink smooth to="/#contact">Contact</AnchorLink></li>
        </ul>
      </nav>

      <div className="pt-20">
        <section className="p-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-yellow-400">UI/UX Projects</h2>
          <p className="text-lg text-gray-300">
  I specialize in{" "}
  <span className="highlight-text">UI/UX design</span>, focusing on{" "}
  <span className="highlight-text">wireframing, prototyping, and user-centric design</span>.
</p>

        </section>

        {/* Project 1 */}
        <section className="p-10 max-w-6xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-yellow-400">Healthy Eating App (Figma)</h3>
            <p className="text-gray-400 mb-4">
              A <span className="highlight-text">nutrition-focused mobile app prototype</span> designed in{" "}
              <span className="highlight-text">Figma</span>, featuring{" "}
              <span className="highlight-text">smooth navigation and intuitive UX</span>.
            </p>


            {/* Image Slider */}
            <div className="overflow-hidden w-full h-80 rounded-lg relative">
              <motion.div
                className="flex w-[300%] space-x-4"
                animate={stopFirstSlider ? { x: "0%" } : { x: ["0%", "-100%"] }}
                transition={{ repeat: stopFirstSlider ? 0 : Infinity, duration: 20, ease: "linear" }}
              >
                <img src="/images/reset.jpg" alt="Healthy Eating 1" className="w-1/3 h-80 object-contain rounded-lg" />
                <img src="/images/home.jpg" alt="Healthy Eating 2" className="w-1/3 h-80 object-contain rounded-lg" />
                <img src="/images/email.jpg" alt="Healthy Eating 3" className="w-1/3 h-80 object-contain rounded-lg" />
              </motion.div>
            </div>

            {/* Figma Project Link */}
            <a href="https://www.figma.com/proto/E2sVOeyjz5LhKEPqO8sMGg/Healthy-Eating?node-id=1-3&p=f&t=S7ghLiDYIW1EBUhr-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3"
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-4 inline-block text-yellow-400 hover:underline"
            >
              View Full Prototype on Figma →
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
