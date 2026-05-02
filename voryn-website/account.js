import { auth } from "./firebase.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// Tabs
const tabs = document.querySelectorAll(".tab");
const forms = document.querySelectorAll(".form");

tabs.forEach(tab => {
  tab.onclick = () => {
    tabs.forEach(t => t.classList.remove("active"));
    forms.forEach(f => f.classList.remove("active"));

    tab.classList.add("active");

    document
      .getElementById(
        tab.dataset.tab === "login"
        ? "loginForm"
        : "registerForm"
      )
      .classList.add("active");
  };
});


// Register
document.getElementById("registerForm")
.addEventListener("submit", async (e) => {
  e.preventDefault();

  const inputs = e.target.querySelectorAll("input");
  const email = inputs[1].value;
  const password = inputs[2].value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Account created.");
    location.href = "index.html";
  } catch (error) {
    alert(error.message);
  }
});


// Login
document.getElementById("loginForm")
.addEventListener("submit", async (e) => {
  e.preventDefault();

  const inputs = e.target.querySelectorAll("input");
  const email = inputs[0].value;
  const password = inputs[1].value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Welcome back.");
    location.href = "index.html";
  } catch (error) {
    alert(error.message);
  }
});


// Logged In State
onAuthStateChanged(auth, (user) => {

  if (user) {

    document.querySelector(".account-box").innerHTML = `
      <p class="mini">SIGNED IN</p>
      <h1 style="margin-bottom:20px;">Welcome</h1>
      <p style="margin-bottom:25px;color:#666;">${user.email}</p>

      <button class="main-btn" id="logoutBtn">
        Logout
      </button>
    `;

    document
      .getElementById("logoutBtn")
      .onclick = async () => {
        await signOut(auth);
        location.reload();
      };
  }

});