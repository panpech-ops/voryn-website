// Product Database
const products = [
  {
    id:1,
    name:"Signature Hoodie",
    price:89,
    image:"assets/hoodie1.png",
    desc:"Crafted from heavyweight premium cotton with timeless oversized fit."
  },
  {
    id:2,
    name:"Crest Hoodie",
    price:92,
    image:"assets/hoodie2.png",
    desc:"Elegant old money hoodie with premium finish and comfort."
  },
  {
    id:3,
    name:"Elite Half Zip",
    price:95,
    image:"assets/halfzip1.png",
    desc:"Luxury half zip designed for refined daily wear."
  },
  {
    id:4,
    name:"Monarch Hoodie",
    price:99,
    image:"assets/hoodie1.png",
    desc:"Premium heavyweight hoodie built for presence."
  },
  {
    id:5,
    name:"Prestige Half Zip",
    price:98,
    image:"assets/halfzip1.png",
    desc:"Tailored half zip with timeless luxury aesthetic."
  },
  {
    id:6,
    name:"Royal Crest Hoodie",
    price:94,
    image:"assets/hoodie2.png",
    desc:"Classic relaxed fit hoodie with refined identity."
  }
];

// Get URL ID
const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id")) || 1;

const product = products.find(item => item.id === id);

// Inject Product
document.querySelector(".product-image img").src = product.image;
document.querySelector(".product-info h1").textContent = product.name;
document.querySelector(".product-info h2").textContent = "$" + product.price;
document.querySelector(".desc").textContent = product.desc;

// Quantity
let qty = 1;
const qtyText = document.getElementById("qty");

document.getElementById("plus").onclick = () => {
  qty++;
  qtyText.textContent = qty;
};

document.getElementById("minus").onclick = () => {
  if(qty > 1){
    qty--;
    qtyText.textContent = qty;
  }
};

// Size
document.querySelectorAll(".sizes button").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".sizes button")
    .forEach(b => b.style.cssText="background:#fff;color:#111");

    btn.style.cssText="background:#111;color:#fff";
  };
});

// Add To Cart
const addCart = document.querySelector(".add-cart");

addCart.onclick = () => {

  const item = {
    name: product.name,
    price: product.price,
    image: product.image,
    qty: qty
  };

  let cart = JSON.parse(localStorage.getItem("vorynCart")) || [];

  const existing = cart.find(p => p.name === item.name);

  if(existing){
    existing.qty += qty;
  }else{
    cart.push(item);
  }

  localStorage.setItem("vorynCart", JSON.stringify(cart));

  addCart.textContent = "Added ✓";
  addCart.style.background = "#2e6b3d";

  setTimeout(()=>{
    addCart.textContent = "Add To Cart";
    addCart.style.background = "#111";
    location.reload();
  },1200);
};

// Buy Now
document.querySelector(".buy-now").href = "checkout.html";

// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.onclick = () => {
  nav.style.display =
  nav.style.display === "flex" ? "none" : "flex";

  nav.style.position = "absolute";
  nav.style.top = "80px";
  nav.style.right = "7%";
  nav.style.flexDirection = "column";
  nav.style.background = "#fff";
  nav.style.padding = "20px";
  nav.style.borderRadius = "16px";
};