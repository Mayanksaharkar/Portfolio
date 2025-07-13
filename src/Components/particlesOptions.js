const particlesOptions = {
  background: {
    opacity: 0,
  },
  fpsLimit: 60,
  interactivity: {
    detectsOn: "window",
    events: {
      resize: true,
    },
    modes: {
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#6587ff",
    },
    collisions: {
      enable: false,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 0.5, // Reduced for better performance
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 1000, // Reduced particle density
      },
      value: 50, // Reduced particle count
    },
    opacity: {
      value: 0.3,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 3, // Smaller particles for better performance
    },
  },
  detectRetina: true,
  smooth: true,
};

export { particlesOptions };
