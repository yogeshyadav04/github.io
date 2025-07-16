// Scroll reveal animation
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
