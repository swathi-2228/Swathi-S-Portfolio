
AOS.init();

const typed = new Typed("#typed", {
  strings: ["BE Computer Science and Engineering graduate(2025-BATCH)"],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true
});

// Theme toggle
const toggleBtn = document.getElementById("toggleTheme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");
  toggleBtn.classList.toggle("fa-sun");
  toggleBtn.classList.toggle("fa-moon");
});
