// Load Cart
const cartItems = document.getElementById("cartItems");
const subtotalText = document.querySelectorAll(".line span")[1];
const totalText = document.querySelector(".total span:last-child");

let cart = JSON.parse(localStorage.getItem("vorynCart")) || [];

function renderCart() {

  cartItems.innerHTML = "";

  let subtotal = 0;

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
  }

  cart.forEach((item, index) => {

    subtotal += item.price * item.qty;

    cartItems.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" alt="">

        <div class="item-info">
          <h3>${item.name}</h3>
          <p>$${item.price}</p>
        </div>

        <div class="item-qty">
          <button onclick="decrease(${index})">-</button>
          <span>${item.qty}</span>
          <button onclick="increase(${index})">+</button>
        </div>
      </div>
    `;
  });

  const shipping = cart.length > 0 ? 12 : 0;
  const total = subtotal + shipping;

  subtotalText.textContent = "DT" + subtotal;
  totalText.textContent = "DT" + total;
}

function increase(index) {
  cart[index].qty++;
  saveCart();
}

function decrease(index) {
  if (cart[index].qty > 1) {
    cart[index].qty--;
  } else {
    cart.splice(index, 1);
  }
  saveCart();
}

function saveCart() {
  localStorage.setItem("vorynCart", JSON.stringify(cart));
  renderCart();
}

renderCart();


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