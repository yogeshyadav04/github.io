// Scroll Reveal Animation
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  for (let el of reveals) {
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;
    const revealPoint = 150;
    if (revealTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  }
});

// Custom Cursor Movement
const cursor = document.querySelector(".custom-cursor");
window.addEventListener("mousemove", (e) => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

// Canvas Particle Background
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

class Particle {
  constructor(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update() {
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) this.dx = -this.dx;
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) this.dy = -this.dy;
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
}

function initParticles() {
  particlesArray = [];
  for (let i = 0; i < 100; i++) {
    const radius = Math.random() * 2 + 1;
    const x = Math.random() * (canvas.width - radius * 2) + radius;
    const y = Math.random() * (canvas.height - radius * 2) + radius;
    const dx = (Math.random() - 0.5) * 1.5;
    const dy = (Math.random() - 0.5) * 1.5;
    particlesArray.push(new Particle(x, y, dx, dy, radius));
  }
}

function animateParticles() {
  requestAnimationFrame(animateParticles);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach((p) => p.update());
}

initParticles();
animateParticles();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});

// Theme Toggle (Dark <-> Light)
const themeToggleBtn = document.getElementById("themeToggle");
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
});
