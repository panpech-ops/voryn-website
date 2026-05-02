// Floating Entrance Effect
window.addEventListener("load", () => {
  const box = document.querySelector(".success-box");

  setTimeout(() => {
    box.style.transform = "translateY(0)";
    box.style.opacity = "1";
  }, 200);
});


// Auto sparkle effect
const check = document.querySelector(".checkmark");

setInterval(() => {
  check.style.transform = "scale(1.08)";

  setTimeout(() => {
    check.style.transform = "scale(1)";
  }, 250);

}, 2200);