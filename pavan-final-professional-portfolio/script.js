const menuBtn = document.querySelector('.menu');
const navLinks = document.querySelector('.nav-links');
if (menuBtn) menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
const floatToggle = document.querySelector('.float-toggle');
const floatCard = document.querySelector('.float-card');
if (floatToggle) floatToggle.addEventListener('click', () => floatCard.classList.toggle('open'));
document.querySelectorAll('[data-copy]').forEach(btn => {
  btn.addEventListener('click', async () => {
    await navigator.clipboard.writeText(btn.dataset.copy);
    btn.textContent = 'Copied';
    setTimeout(() => btn.textContent = 'Copy Email', 1200);
  });
});
