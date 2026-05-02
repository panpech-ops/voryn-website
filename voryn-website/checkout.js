import { auth } from "./firebase.js";

import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// Protect Page
onAuthStateChanged(auth, (user) => {
  if (!user) {
    alert("Please login first.");
    location.href = "account.html";
  }
});


// Load Cart Summary
const summary = document.getElementById("summaryItems");
const totalText = document.getElementById("checkoutTotal");

let cart = JSON.parse(localStorage.getItem("vorynCart")) || [];
let subtotal = 0;

cart.forEach(item => {
  const lineTotal = item.price * item.qty;
  subtotal += lineTotal;

  summary.innerHTML += `
    <div class="line">
      <span>${item.name} x${item.qty}</span>
      <span>$${lineTotal}</span>
    </div>
  `;
});

const shipping = cart.length ? 12 : 0;
const total = subtotal + shipping;

totalText.textContent = "$" + total;


// Place Order
document.querySelector(".place-order").onclick = (e) => {
  e.preventDefault();

  let orders =
    JSON.parse(localStorage.getItem("vorynOrders")) || [];

  orders.push({
    id: "VY" + Date.now(),
    date: new Date().toLocaleDateString(),
    items: cart,
    total: total
  });

  localStorage.setItem(
    "vorynOrders",
    JSON.stringify(orders)
  );

  localStorage.removeItem("vorynCart");

  location.href = "success.html";
};