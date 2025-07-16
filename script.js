// 💡 Smooth scroll for navbar links
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// 💡 Load Projects Dynamically (if not already inline in projects.js)
if (typeof projects !== "undefined") {
  const container = document.getElementById("project-list");
  container.innerHTML = "";

  projects.forEach((project) => {
    const el = document.createElement("div");
    el.classList.add("project-card");
    el.innerHTML = `
      <h4 class="text-xl font-semibold mb-2 text-teal-300">${project.title}</h4>
      <p class="text-sm text-gray-300 mb-2">${project.description}</p>
      <p class="text-sm text-gray-400 mb-2"><strong>Tech:</strong> ${project.tech.join(", ")}</p>
      <a href="${project.demo}" target="_blank" class="text-teal-400 text-sm mr-4">Live Demo</a>
      <a href="${project.github}" target="_blank" class="text-teal-400 text-sm">GitHub</a>
    `;
    container.appendChild(el);
  });
}
