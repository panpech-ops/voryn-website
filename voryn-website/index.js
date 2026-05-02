// Loader Animation
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
  }, 1500);
});

// Scroll Reveal Cards (Optimized)
const cards = document.querySelectorAll(".card");
const revealCards = () => {
  const trigger = window.innerHeight * 0.85;
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < trigger) card.classList.add("show");
  });
};

window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);


// FIXED: Header Appearance Logic
const header = document.querySelector("header");
const heroSection = document.querySelector(".hero"); // Ensure your hero has class="hero"

window.addEventListener("scroll", () => {
  // Option A: Use a fixed pixel value (e.g., 600) 
  // Option B: Use the actual height of your hero image
  const heroHeight = heroSection ? heroSection.offsetHeight : 100;

  if (window.scrollY > heroHeight) {
    // Show header when past hero
    header.style.transform = "translateY(0)";
    header.style.opacity = "1";
    header.style.background = "rgba(255,255,255,.95)";
    header.style.boxShadow = "0 8px 20px rgba(0,0,0,.05)";
  } else {
    // Hide header when on top/hero
    header.style.transform = "translateY(-100%)";
    header.style.opacity = "0";
    header.style.boxShadow = "none";
  }
});


// FIXED: Mobile Menu (Cleaner Toggle)
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  // Instead of rewriting CSS in JS, just toggle a class
  nav.classList.toggle("active");
  
  // Fallback if you don't want to use CSS classes:
  if (nav.classList.contains("active")) {
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
  } else {
    nav.style.display = "none";
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