const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

let progress = document.getElementById('progress-bar');
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.addEventListener('scroll', function() {
	let progressHeight = (window.pageYOffset / totalHeight) * 100;
	
	progress.style.height = `${progressHeight}%`;
});