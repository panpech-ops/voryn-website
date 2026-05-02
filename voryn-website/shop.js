// Product Reveal Animation
const cards = document.querySelectorAll(".product-card");

function revealProducts() {
  const trigger = window.innerHeight * 0.88;

  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;

    if (top < trigger) {
      card.classList.add("show");
    }
  });
}

window.addEventListener("load", revealProducts);
window.addEventListener("scroll", revealProducts);


// Filter Buttons
const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {

    document
      .querySelector(".filter-btn.active")
      .classList.remove("active");

    btn.classList.add("active");

    const filter = btn.dataset.filter;

    cards.forEach(card => {
      if (
        filter === "all" ||
        card.classList.contains(filter)
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});


// Header Shadow on Scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    header.style.boxShadow = "0 8px 20px rgba(0,0,0,.06)";
  } else {
    header.style.boxShadow = "none";
  }
});


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