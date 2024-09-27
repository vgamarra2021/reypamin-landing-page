export function addAnimation(selector: string, className?: string) {
  document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(selector);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(
            "animate__animated",
            className ?? "animate__fadeInUp"
          );
          observer.unobserve(entry.target);
        }
      });
    });
    elements.forEach((el) => observer.observe(el));
  });
}
