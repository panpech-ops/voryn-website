// Contact Form Submit
const form = document.querySelector("form");
const button = document.querySelector("button");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  button.textContent = "Sending...";
  button.style.opacity = ".8";

  setTimeout(() => {
    button.textContent = "Message Sent ✓";
    button.style.background = "#2e6b3d";

    setTimeout(() => {
      form.reset();
      button.textContent = "Send Message";
      button.style.background = "#111";
      button.style.opacity = "1";
    }, 1800);

  }, 1300);
});


// Header Shadow
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.style.boxShadow = "0 10px 25px rgba(0,0,0,.06)";
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