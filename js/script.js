const toggleBtn = document.querySelector(".toggle-bar");
const navBarLinks = document.querySelector(".navbar-links");

toggleBtn.addEventListener("click", () => {
  navBarLinks.classList.toggle("active");
});
