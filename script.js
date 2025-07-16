document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS (Animate On Scroll)
  AOS.init({
    duration: 1000,
    once: true,
  });

  // Dark Mode Toggle
  const toggle = document.getElementById("themeToggle");
  const body = document.getElementById("body");

  toggle.addEventListener("click", () => {
    body.classList.toggle("bg-gray-100");
    body.classList.toggle("bg-gray-900");
    body.classList.toggle("text-white");
    body.classList.toggle("text-gray-800");
  });

  // Scroll Progress Bar
  const progressBar = document.createElement("div");
  progressBar.id = "scroll-progress";
  document.body.appendChild(progressBar);

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    progressBar.style.width = `${scrolled}%`;
  });

  // Navbar Section Highlight
  const navLinks = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll("section");

  function updateActiveLink() {
    const scrollY = window.pageYOffset;
    sections.forEach((section, index) => {
      const top = section.offsetTop - 100;
      const bottom = top + section.offsetHeight;

      if (scrollY >= top && scrollY < bottom) {
        navLinks.forEach(link => link.classList.remove("active"));
        if (navLinks[index]) {
          navLinks[index].classList.add("active");
        }
      }
    });
  }

  window.addEventListener("scroll", updateActiveLink);
});
