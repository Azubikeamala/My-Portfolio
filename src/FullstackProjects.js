import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink as AnchorLink } from "react-router-hash-link";
import { motion, useInView } from "framer-motion";
import './App.css';


export default function FullstackProjects() {
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
          <h2 className="text-3xl font-bold mb-4 text-yellow-400">Full Stack Development Projects</h2>
          <p className="text-lg text-gray-300">
  I build scalable full-stack applications using{" "}
  <span className="text-green-400 font-semibold">
    React, Node.js, Express, MongoDB, and SQL
  </span>
  . My work focuses on{" "}
  <span className="text-green-400 font-semibold">
    secure, high-performance applications
  </span>{" "}
  that offer a seamless user experience.
</p>

        </section>

         {/* Healthy Eating App Project */}
         <section className="p-10 max-w-6xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-yellow-400">Healthy Eating App</h3>
            <p className="text-gray-400 mb-4">
  Healthy Eating App is a full-stack web application designed to help users personalize meal plans based on their dietary goals, preferences, and health needs. The app allows users to explore categorized recipes (e.g., weight loss, keto, muscle gain), generate shopping lists, and download meal plans in CSV format. It features an AI-powered chatbot for support and a responsive design for seamless access across devices. The app uses a React frontend with Tailwind CSS and a Django backend with PostgreSQL. Full functionality—including recipe exploration, personalized meal planning, shopping list downloads, and chatbot access—is available to logged-in users.
</p>

<p className="text-yellow-400 font-semibold mt-4">Key features include:</p>
<ul className="list-disc list-inside text-gray-400 mb-4">
  <li>Personalized meal planning with dynamic recipe categories</li>
  <li>Downloadable CSV meal plans and shopping lists</li>
  <li>AI-powered chatbot for user assistance</li>
  <li>Contact form integration that sends support emails</li>
  <li>Full responsive design using Tailwind CSS</li>
  <li>Secure authentication and user management</li>
  <li>Admin management tools for recipes and users</li>
</ul>


            {/* Image Slider (Stops when second project is in view) */}
            <div className="overflow-hidden w-full h-80 rounded-lg relative">
              <motion.div
                className="flex w-[300%] space-x-4"
                animate={stopFirstSlider ? { x: "0%" } : { x: ["0%", "-100%"] }}
                transition={{ repeat: stopFirstSlider ? 0 : Infinity, duration: 20, ease: "linear" }}
              >
                <img src="/images/HE.jpg" alt="Movie App 1" className="w-1/3 h-80 object-contain rounded-lg" />
                <img src="/images/HE1.jpg" alt="Movie App 2" className="w-1/3 h-80 object-contain rounded-lg" />
                <img src="/images/HE2.jpg" alt="Movie App 3" className="w-1/3 h-80 object-contain rounded-lg" />
              </motion.div>
            </div>

            {/* GitHub Project Link */}
            <a href="https://github.com/healthyeatingssja"
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-4 inline-block text-yellow-500 hover:underline"
            >
              View Full Project on GitHub →
            </a>
            <br></br>
            {/* Live Project Link */}
            <a href="https://healthyeating.help/"
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-4 inline-block text-yellow-500 hover:underline"
            >
              Click to view Live Project →
            </a>
          </div>
        </section>

         {/* Car Tracker App Project */}
<section className="p-10 max-w-6xl mx-auto">
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
    <h3 className="text-2xl font-semibold text-yellow-400">Car Tracker App</h3>

    {/* Project Description */}
    <p className="text-gray-400 mb-4">
      Car Tracker is a web-based application built with{" "}
      <span className="highlight-text">Framework7</span> and{" "}
      <span className="highlight-text">Firebase</span> that allows users to manage and track car purchase plans in real time. The app features a{" "}
      <span className="highlight-text">user authentication system</span> (supporting both{" "}
      <span className="highlight-text">Email/Password</span> and{" "}
      <span className="highlight-text">Google Sign-In</span>), enabling users to securely register and log in.
    </p>

    {/* Key Features */}
    <h4 className="text-yellow-400 font-semibold mt-6 mb-2">Key Features:</h4>
    <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
      <li>Adding new cars with details like make, model, year, price, and an image.</li>
      <li>Viewing a dynamic list of cars in a visually organized card layout.</li>
      <li>Updating car status (marking as purchased) and removing cars from the list.</li>
      <li>Real-time database synchronization using Firebase Realtime Database.</li>
      <li>Responsive design with a mobile-first approach for smooth usability on different devices.</li>
    </ul>

    {/* Skills & Technologies */}
    <h4 className="text-yellow-400 font-semibold mt-6 mb-2">Skills & Technologies Used:</h4>

    <h5 className="font-semibold text-gray-300 mt-4">Frontend Framework:</h5>
    <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
      <li><span className="highlight-text">Framework7</span> (HTML/CSS/JavaScript framework for building mobile-first web apps)</li>
    </ul>

    <h5 className="font-semibold text-gray-300 mt-4">Firebase Integration:</h5>
    <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
      <li><span className="highlight-text">Firebase Authentication</span> (Email/Password and Google Sign-In)</li>
      <li><span className="highlight-text">Firebase Realtime Database</span> (CRUD operations)</li>
      <li><span className="highlight-text">Firebase Hosting</span> (for live deployment)</li>
    </ul>

    <h5 className="font-semibold text-gray-300 mt-4">Authentication & Security:</h5>
    <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
      <li><span className="highlight-text">Email/Password</span> registration and login</li>
      <li><span className="highlight-text">Google OAuth 2.0 authentication</span></li>
      <li><span className="highlight-text">Secure user session management</span></li>
    </ul>

    <h5 className="font-semibold text-gray-300 mt-4">Web Development:</h5>
    <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
      <li><span className="highlight-text">JavaScript</span> (DOM manipulation, event handling)</li>
      <li><span className="highlight-text">Responsive UI Design</span> (CSS, mobile-first design)</li>
      <li>Dynamic content rendering using JavaScript template literals</li>
    </ul>

    <h5 className="font-semibold text-gray-300 mt-4">Other Key Skills:</h5>
    <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
      <li>Modular JavaScript (splitting code into reusable files like <span className="highlight-text">firebase.js</span>, <span className="highlight-text">index.js</span>)</li>
      <li>Debugging and error handling (form validation and login errors)</li>
      <li>Working with modern <span className="highlight-text">ES6+</span> features (e.g., template literals, const/let scoping)</li>
      <li>Using CDN libraries and ES module imports</li>
      <li>Real-time data syncing with Firebase listeners (<span className="highlight-text">onValue</span>)</li>
    </ul>

    {/* Bonus Highlights */}
    <h4 className="text-yellow-400 font-semibold mt-6 mb-2">Bonus Highlights:</h4>
    <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
      <li><span className="highlight-text">Google Sign-In</span> button integrated on the login screen.</li>
      <li>Real-time updates: any car added or updated reflects instantly without needing a page refresh.</li>
      <li>Hosted and accessible via <span className="highlight-text">Firebase Hosting</span> for easy public access.</li>
    </ul>

    {/* Image Slider */}
    <div className="overflow-hidden w-full h-80 rounded-lg relative">
      <motion.div
        className="flex w-[300%] space-x-4"
        animate={stopFirstSlider ? { x: "0%" } : { x: ["0%", "-100%"] }}
        transition={{ repeat: stopFirstSlider ? 0 : Infinity, duration: 20, ease: "linear" }}
      >
        <img src="/images/CT.jpg" alt="Car Tracker 1" className="w-1/3 h-80 object-contain rounded-lg" />
        <img src="/images/CT2.jpg" alt="Car Tracker 2" className="w-1/3 h-80 object-contain rounded-lg" />
        <img src="/images/CT4.jpg" alt="Car Tracker 3" className="w-1/3 h-80 object-contain rounded-lg" />
      </motion.div>
    </div>

    {/* GitHub Project Link */}
    <a
      href="https://github.com/Azubikeamala/Car-Tracker-App" 
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-block text-yellow-500 hover:underline"
    >
      View Full Project on GitHub →
    </a>
    <br></br>
            {/* Live Project Link */}
            <a href="https://car-tracker-3aeb5.web.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-4 inline-block text-yellow-500 hover:underline"
            >
              Click to view Live Project →
            </a>
  </div>
</section>

        {/* Movie App Project */}
        <section className="p-10 max-w-6xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-yellow-400">Movie App</h3>
            <p className="text-gray-400 mb-4">
              A <span className="highlight-text">movie listing app</span> built using{" "}
              <span className="highlight-text">C# with MSSQL integration</span>. Features include{" "}
              <span className="highlight-text">CRUD operations, real-time updates, and dynamic UI</span>.
            </p>

            {/* Image Slider (Stops when second project is in view) */}
            <div className="overflow-hidden w-full h-80 rounded-lg relative">
              <motion.div
                className="flex w-[300%] space-x-4"
                animate={stopFirstSlider ? { x: "0%" } : { x: ["0%", "-100%"] }}
                transition={{ repeat: stopFirstSlider ? 0 : Infinity, duration: 20, ease: "linear" }}
              >
                <img src="/images/9.webp" alt="Movie App 1" className="w-1/3 h-80 object-contain rounded-lg" />
                <img src="/images/9.webp" alt="Movie App 2" className="w-1/3 h-80 object-contain rounded-lg" />
                <img src="/images/9.webp" alt="Movie App 3" className="w-1/3 h-80 object-contain rounded-lg" />
              </motion.div>
            </div>

            {/* GitHub Project Link */}
            <a href="https://github.com/Azubikeamala/MovieApp"
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-4 inline-block text-yellow-500 hover:underline"
            >
              View Full Project on GitHub →
            </a>
          </div>
        </section>

        {/* ChatBot App - Only Visible When Scrolled Down */}
        <motion.section 
          className="p-10 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          ref={secondProjectRef} // This detects when in view
        >
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-yellow-400">ChatBot App</h3>
            <p className="text-gray-400 mb-4">
              A <span className="highlight-text">fully functional ChatBot app</span> built using{" "}
              <span className="highlight-text">JavaScript</span>. Features include{" "}
              <span className="highlight-text">Upselling items with PayPal integration</span>.
            </p>


            {/* Image Slider using Framer Motion */}
            <div className="overflow-hidden w-full h-80 rounded-lg relative">
              <motion.div
                className="flex w-[300%] space-x-4"
                animate={{ x: ["0%", "-100%"] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              >
                <img src="/images/6.jpg" alt="ChatBot App 1" className="w-1/3 h-80 object-contain rounded-lg" />
                <img src="/images/6.jpg" alt="ChatBot App 2" className="w-1/3 h-80 object-contain rounded-lg" />
                <img src="/images/6.jpg" alt="ChatBot App 3" className="w-1/3 h-80 object-contain rounded-lg" />
              </motion.div>
            </div>

            {/* GitHub Project Link */}
            <a href="https://github.com/Azubikeamala/ChatBot-MobileDev"
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-4 inline-block text-yellow-500 hover:underline"
            >
              View Full Project on GitHub →
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
