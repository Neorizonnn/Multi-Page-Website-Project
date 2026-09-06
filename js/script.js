
const menuButton = document.querySelector(".mobile-menu button");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
document.addEventListener("click", (event) => { if ( !navLinks.contains(event.target) && !menuButton.contains(event.target) ) { navLinks.classList.remove("active"); } });
