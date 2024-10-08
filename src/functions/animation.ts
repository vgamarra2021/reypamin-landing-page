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

export function addFadeInLettersAnimation(selector: string) {
  const $texts = document.querySelectorAll(selector);
  formatTitles($texts);

  document.addEventListener("DOMContentLoaded", function () {
    $texts.forEach((text) => {
      const $letters = text.querySelectorAll("span");
      let previousBottom = 0;
      let auxIndex = 0;
      $letters.forEach((span, index) => {
        const rect = span.getBoundingClientRect();
        if (rect.top > previousBottom) auxIndex = 0;
        previousBottom = rect.bottom;
        span.style.animationDelay = `${auxIndex * 20}ms`;
        auxIndex++;
      });
    });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__animated", "animate__fadeInUp");
          observer.unobserve(entry.target);
        }
      });
    });

    $texts.forEach((text) => {
      text
        .querySelectorAll("span")
        .forEach((letter) => observer.observe(letter));
    });
  });
}

export function formatTitle(element: HTMLElement) {
  element.innerHTML = element.textContent!.replace(
    /\S/g,
    '<span class="letter">$&</span>'
  );
}

export function formatTitles(element: HTMLElement[]) {
  element.forEach((title: HTMLElement) => {
    title.innerHTML = title.textContent!.replace(
      /\S/g,
      '<span class="letter">$&</span>'
    );
  });
}
