// Navbar
const navbar = document.querySelector("nav");
window.addEventListener("scroll", ()=> navbar.classList.toggle("sticky", window.scrollY > 0));

const menu = document.querySelector(".menu");
const toggleMenu = () => menu.classList.toggle("active");

document.querySelector(".menu-btn").addEventListener("click", toggleMenu);
document.querySelector(".close-btn").addEventListener("click", toggleMenu);

document
    .querySelectorAll(".menu a")
    .forEach((link)=> link.addEventListener("click", toggleMenu));



    // Scroll Reveal
const sr = ScrollReveal({
    origin: "bottom",
    distance: "60px",
    duration: 1000,
    delay: 300,
    easing: "ease-in-out",
  });
  
  sr.reveal(".hero-headline", { origin: "top" });
  sr.reveal(".hero-section img", { delay: 400 });
  sr.reveal(".hero-tagline");
  sr.reveal(".about div");
  sr.reveal(".projects h1");
  sr.reveal(".project-item");
  sr.reveal(".testimony");
  sr.reveal(".callout img", { origin: "left" });
  sr.reveal(".callout img:nth-child(3)", { origin: "right" });
  sr.reveal(".callout div");
  sr.reveal(".footer");
  sr.reveal(".work-page");
  sr.reveal(".contact-container h1", { origin: "left" });
  sr.reveal(".contact-container div", { origin: "right" });
  sr.reveal(".contact-form");


// Open Resume
function openResume() {
    window.open("img/AbhiBashyal_Resume.pdf"); 
}