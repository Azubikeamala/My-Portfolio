import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink as AnchorLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import './App.css';


export default function QaProjects() {
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

      <section className="p-10 max-w-4xl mx-auto pt-20">
      <h2 className="text-3xl font-bold mb-4 text-yellow-400">Quality Assurance Projects</h2>
      <p className="text-lg text-gray-300 mb-4">
        I specialize in 
        <span className="highlight-text"> automated testing, bug tracking, and performance analysis</span>. 
        My work focuses on
        <span className="highlight-text"> ensuring software reliability and security </span> 
         through detailed test cases, regression testing, and performance optimization.
      </p>


      </section>

      {/* Project 1 */}
      <section className="p-10 max-w-6xl mx-auto">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-yellow-400">Apache Jmeter</h3>
       
          <p className="text-gray-400 mb-4">
            The JMeter Performance Testing Project was part of my Software Quality Assurance coursework at Conestoga College, where I conducted performance testing on a sample web application. I used{" "}
            <span className="highlight-text">Apache JMeter, Java, and ServerAgent</span> to design, execute, and monitor load tests simulating different numbers of users and loop counts. The project focused on identifying performance bottlenecks, analyzing server behavior under load, and recommending{" "}
            <span className="highlight-text">optimization strategies</span> for scalability and improved response times.
          </p>

          <h4 className="text-yellow-400 font-semibold mb-2">Key features include:</h4>
          <ul className="list-disc list-inside text-gray-400 mb-4">
            <li>Full setup and execution of performance tests using Apache JMeter</li>
            <li>Real-time monitoring of server metrics via ServerAgent</li>
            <li>Simulated various user loads (1 to 50 concurrent users)</li>
            <li>Detailed analysis of response times and bottlenecks</li>
            <li>Optimization strategies: image compression, caching, and CDN integration</li>
            <li>Insights into Amazon’s scalable infrastructure and performance tools</li>
            <li>Video walkthrough showcasing setup, execution, and analysis</li>
          </ul>




          {/* Image Slider */}
          <div className="overflow-hidden w-full h-80 rounded-lg relative">
            <motion.div
              className="flex w-[300%] space-x-4"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              <img src="/images/JM1.jpg" alt="QA Project 1" className="w-1/3 h-80 object-contain rounded-lg" />
              <img src="/images/JM2.jpg" alt="QA Project 2" className="w-1/3 h-80 object-contain rounded-lg" />
              <img src="/images/JM3.jpg" alt="QA Project 3" className="w-1/3 h-80 object-contain rounded-lg" />
            </motion.div>
          </div>

          {/* GitHub Link */}
          <a href="https://www.linkedin.com/posts/amalachukwu-azubike-4b8179a3_performancetesting-apachejmeter-serveragent-activity-7309837726982295552-jgr-?utm_source=share&utm_medium=member_desktop&rcm=ACoAABXqcowBGgRDTVEf38WPIjLpi-vtRITr9A8
"
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-4 inline-block text-yellow-400 hover:underline"
          >
            View Full Project on LinkedIn →
          </a>
        </div>
      </section>

        {/* Project 2 */}
        <section className="p-10 max-w-6xl mx-auto">
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
    <h3 className="text-2xl font-semibold text-yellow-400">Playwright Automation Project</h3>

    <p className="text-gray-400 mb-4">
      This project focused on automating real-world e-commerce workflows using{" "}
      <span className="highlight-text">Playwright</span>. I developed a suite of{" "}
      <span className="highlight-text">10 end-to-end UI test cases</span> targeting the popular website{" "}
      <span className="highlight-text">automationexercise.com</span>, covering key user journeys like registration, product browsing, cart handling, and form validation.
      The project gave me deep hands-on experience with Playwright’s assertion techniques, tracing features, and report generation, all aimed at improving the reliability and maintainability of web applications.
    </p>

    <h4 className="text-yellow-400 font-semibold mb-2">Key features include:</h4>
    <ul className="list-disc list-inside text-gray-400 mb-4">
      <li>Automated registration flow with account creation validation</li>
      <li>Dynamic product detail checks and review submissions</li>
      <li>Shopping cart automation for multiple products</li>
      <li>UI element verification: sliders, scroll-to-top, and navigation</li>
      <li>Console logs and trace logs for execution feedback and debugging</li>
      <li>Screenshots and HTML reports generated with <code>npx playwright show-report</code></li>
      <li>Test scenarios designed with edge cases in mind (e.g., empty form validation)</li>
     
    </ul>



          {/* Image Slider */}
          <div className="overflow-hidden w-full h-80 rounded-lg relative">
            <motion.div
              className="flex w-[300%] space-x-4"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              <img src="/images/PL1.jpg" alt="QA Project 1" className="w-1/3 h-80 object-contain rounded-lg" />
              <img src="/images/PL2.jpg" alt="QA Project 2" className="w-1/3 h-80 object-contain rounded-lg" />
              <img src="/images/PL3.jpg" alt="QA Project 3" className="w-1/3 h-80 object-contain rounded-lg" />
            </motion.div>
          </div>

          {/* GitHub Link */}
          <a href="https://github.com/Azubikeamala/Playwright-Automation-Exercise"
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-4 inline-block text-yellow-400 hover:underline"
          >
            View Full Project on GitHub →
          </a>
        </div>
      </section>


      {/* Project 3 */}
      <section className="p-10 max-w-6xl mx-auto">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-yellow-400">Triangle Testing</h3>
       
          <p className="text-gray-400 mb-4">
            This project involved <span className="highlight-text">unit testing using NUnit</span> for different types of triangles in{" "}
            <span className="highlight-text">C#</span>.
          </p>


          {/* Image Slider */}
          <div className="overflow-hidden w-full h-80 rounded-lg relative">
            <motion.div
              className="flex w-[300%] space-x-4"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              <img src="/images/5.webp" alt="QA Project 1" className="w-1/3 h-80 object-contain rounded-lg" />
              <img src="/images/10.webp" alt="QA Project 2" className="w-1/3 h-80 object-contain rounded-lg" />
              <img src="/images/8.webp" alt="QA Project 3" className="w-1/3 h-80 object-contain rounded-lg" />
            </motion.div>
          </div>

          {/* GitHub Link */}
          <a href="https://github.com/Azubikeamala/QA-Testing"
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-4 inline-block text-yellow-400 hover:underline"
          >
            View Full Project on GitHub →
          </a>
        </div>
      </section>
    </div>
  );
}
