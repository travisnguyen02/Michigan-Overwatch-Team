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


// Filter script
const filterButtons = document.querySelectorAll('.filter-btn');

const heroPanels = document.querySelectorAll('.hero-panel');

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const role = btn.dataset.role; // "all", "support", "tank", "damage"

    // update which button looks active
    filterButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    // show / hide panels based on role
    heroPanels.forEach((panel) => {
      const panelRole = panel.dataset.role;

      if (role === 'all' || panelRole === role) {
        panel.style.display = '';   // show
      } else {
        panel.style.display = 'none'; // hide
      }
    });
  });
});
