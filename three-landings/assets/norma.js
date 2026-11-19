const body = document.body;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function setupReveal() {
  if (reducedMotion.matches || !("IntersectionObserver" in window)) {
    return;
  }
  body.classList.add("motion-ready");
  const page = document.querySelector(".case-page");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  page.classList.add("reveal");
  observer.observe(page);
}

setupReveal();
