// menu
const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

// Nav Links Soft
const softLinks = document.querySelectorAll(".js-nav li a");
const scrollTop = document.querySelectorAll(".scroll_top");

function scrollToSoft(event) {
  event.preventDefault();

  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);
  const initLink = section.offsetTop;
  const initsTop = section.offsetTop;

  window.scrollTo({
    top: initLink - 100,
    behavior: "smooth",
  });

  window.scrollTo({
    top: initsTop,
    behavior: "smooth",
  });
}

softLinks.forEach((sLink) => {
  sLink.addEventListener("click", scrollToSoft);
});

scrollTop.forEach((sTop) => {
  sTop.addEventListener("click", scrollToSoft);
});

// Cards Specialties
const hoverCard = document.querySelectorAll(".card_specialties");

hoverCard.forEach((hActive, index) => {
  hActive.addEventListener("mouseover", (e) => {
    e.preventDefault();

    hoverCard.forEach((hActiveR) => {
      hActiveR.classList.remove("active");
    });

    hActive.classList.toggle("active");
  });
});
