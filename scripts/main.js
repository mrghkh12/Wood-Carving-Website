const headerNavbar = document.querySelector(".header-section");

let menuBtn = document.querySelector("#menuBtn");
let navMenuLink = document.querySelector(".navMenuLink");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("bx-x");
  navMenuLink.classList.toggle("open");
});

window.addEventListener("scroll", () => {
  headerNavbar.classList.toggle("sticky", window.scrollY > 70);
  menuBtn.classList.remove("bx-x");
  navMenuLink.classList.remove("open");
});
