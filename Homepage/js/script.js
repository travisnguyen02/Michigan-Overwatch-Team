

// Script that when the viewer (Screen) detects a section, will active
document.addEventListener("DOMContentLoaded", () => {
  const panels = document.querySelectorAll(".panel, .end");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry=> {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.3
    }
  );

  panels.forEach(panel => observer.observe(panel));
});