document.addEventListener("DOMContentLoaded", () => {
  AOS.init({ duration: 1000, once: true });

  const toggle = document.getElementById("themeToggle");
  const body = document.getElementById("body");

  toggle.addEventListener("click", () => {
    body.classList.toggle("bg-gray-100");
    body.classList.toggle("bg-gray-900");
    body.classList.toggle("text-white");
    body.classList.toggle("text-gray-800");
  });

  const progressBar = document.createElement("div");
  progressBar.id = "scroll-progress";
  document.body.appendChild(progressBar);

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    progressBar.style.width = `${scrolled}%`;
  });
});
