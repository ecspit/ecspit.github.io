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
