// Cursor Script

const panels = document.querySelectorAll('.hero-panel');

panels.forEach(panel => {

const container = panel.querySelector('.hero-image-wrapper');

const img = panel.querySelector('.hero-image');

container.addEventListener('mousemove', (e) =>
{
      const rect = container.getBoundingClientRect();

  // mouse position inside the container (0–1)
  const x = (e.clientX - rect.left) / rect.width;
  const y = (e.clientY - rect.top) / rect.height;

  // convert to percentages for transform-origin
  const xPercent = x * 100;
  const yPercent = y * 100;

  img.style.transformOrigin = `${xPercent}% ${yPercent}%`;
  img.style.transform = 'scale(1.4)';   // zoom level (2x here)
})

container.addEventListener('mouseleave', () => {
  img.style.transform = 'scale(1)';
  img.style.transformOrigin = 'center center';
})});
