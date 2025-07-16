// Typewriter Animation
new Typed('#typed', {
  strings: ['Web Developer', 'Backend Engineer', 'Frontend Expert', 'Full Stack Coder'],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});

// Scroll Animations
AOS.init({
  duration: 800,
  offset: 100,
  once: true
});

// Particles Background
tsParticles.load("tsparticles", {
  fullScreen: { enable: false },
  particles: {
    number: { value: 60 },
    size: { value: 3 },
    color: { value: "#38bdf8" },
    links: {
      enable: true,
      color: "#8b5cf6",
      opacity: 0.4
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none"
    }
  },
  background: {
    color: "transparent"
  }
});
