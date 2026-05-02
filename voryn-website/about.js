// Header Shadow On Scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.style.boxShadow = "0 10px 25px rgba(0,0,0,.06)";
  } else {
    header.style.boxShadow = "none";
  }
});


// Reveal Elements On Scroll
const cards = document.querySelectorAll(".value-card, .story-left, .story-right");

function reveal() {
  const trigger = window.innerHeight * 0.88;

  cards.forEach(item => {
    const top = item.getBoundingClientRect().top;

    if (top < trigger) {
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }
  });
}

cards.forEach(item => {
  item.style.opacity = "0";
  item.style.transform = "translateY(35px)";
  item.style.transition = ".8s ease";
});

window.addEventListener("load", reveal);
window.addEventListener("scroll", reveal);


// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
    nav.style.position = "absolute";
    nav.style.top = "80px";
    nav.style.right = "7%";
    nav.style.flexDirection = "column";
    nav.style.background = "#fff";
    nav.style.padding = "20px";
    nav.style.borderRadius = "16px";
    nav.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";
    nav.style.gap = "18px";
  }

});

// Cart Counter
const cartCount = document.getElementById("cartCount");

if (cartCount) {
  const cart = JSON.parse(localStorage.getItem("vorynCart")) || [];

  let count = 0;

  cart.forEach(item => {
    count += item.qty;
  });

  cartCount.textContent = count;
}