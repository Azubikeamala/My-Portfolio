import React from "react";
import Particles from "react-tsparticles";

export default function ParticlesBackground() {
  const particlesInit = (main) => {
    console.log("Particles initialized:", main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      canvasClassName="particles-canvas" 
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,  
        pointerEvents: "none", 
      }}
      options={{
        fullScreen: { enable: false },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            repulse: { distance: 150, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#ffffff" },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: { enable: true },
          move: {
            directions: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: { enable: true, area: 800 },
            value: 60,
          },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
      }}
    />
  );
}
