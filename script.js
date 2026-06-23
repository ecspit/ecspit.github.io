const elements = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

elements.forEach(el => observer.observe(el));

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("transparent");
    } else {
        header.classList.remove("transparent");
    }
});
const emailEl = document.getElementById("copyEmail");

if (emailEl) {
  emailEl.addEventListener("click", async () => {
    const original = emailEl.innerText;

    try {
      await navigator.clipboard.writeText(original);

      emailEl.innerText = "Copied!";
      emailEl.classList.add("copied");

      setTimeout(() => {
        emailEl.innerText = original;
        emailEl.classList.remove("copied");
      }, 2000);

    } catch (err) {
      console.error("Copy failed:", err);
    }
  });
}

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLeft   = document.getElementById('navLeft');
const overlay   = document.getElementById('navOverlay');

function openMenu()  { hamburger.classList.add('open');    navLeft.classList.add('open');    overlay.classList.add('open'); }
function closeMenu() { hamburger.classList.remove('open'); navLeft.classList.remove('open'); overlay.classList.remove('open'); }

hamburger.addEventListener('click', () => hamburger.classList.contains('open') ? closeMenu() : openMenu());
overlay.addEventListener('click', closeMenu);
navLeft.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
