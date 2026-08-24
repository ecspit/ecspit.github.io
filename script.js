const fades = document.querySelectorAll('.fade');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
fades.forEach(el => observer.observe(el));

const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
});

const emailEl = document.getElementById('copyEmail');
emailEl.addEventListener('click', async () => {
  const original = emailEl.innerText;
  try {
    await navigator.clipboard.writeText(original);
    emailEl.innerText = 'Copied!';
    emailEl.classList.add('copied');
    setTimeout(() => { emailEl.innerText = original; emailEl.classList.remove('copied'); }, 1600);
  } catch (e) { console.error(e); }
});

const hamburger = document.getElementById('hamburger');
const navLeft = document.getElementById('navLeft');
hamburger.addEventListener('click', () => navLeft.classList.toggle('open'));


