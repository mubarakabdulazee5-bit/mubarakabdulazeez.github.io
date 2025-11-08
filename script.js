// ===== Smooth Scrolling Effect =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ===== Section Fade-in Animation on Scroll =====
const sections = document.querySelectorAll("section");

const revealSection = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealSection);
revealSection();

// ===== Dark / Light Mode Toggle =====
const modeToggle = document.getElementById("modeToggle");
const body = document.body;

// Load saved theme from localStorage (so it remembers after reload)
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  modeToggle.textContent = "☀️ Light Mode";
}

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeToggle.textContent = "☀️ Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    modeToggle.textContent = "🌙 Dark Mode";
    localStorage.setItem("theme", "light");
  }
});