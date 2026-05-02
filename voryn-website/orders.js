import { auth, db } from "./firebase.js";

import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  collection,
  query,
  where,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const ordersList = document.getElementById("ordersList");

onAuthStateChanged(auth, async (user) => {

  if (!user) {
    location.href = "account.html";
    return;
  }

  ordersList.innerHTML = "<p>Loading orders...</p>";

  const q = query(
    collection(db, "orders"),
    where("userId", "==", user.uid)
  );

  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    ordersList.innerHTML = `
      <div class="order-card">
        <h2>No orders yet.</h2>
        <p style="margin-top:10px;color:#666;">
          Your future VORYN purchases will appear here.
        </p>
      </div>
    `;
    return;
  }

  ordersList.innerHTML = "";

  snapshot.forEach((doc) => {

    const order = doc.data();

    let itemsHTML = "";

    order.items.forEach(item => {
      itemsHTML += `
        <div class="order-line">
          <span>${item.name} x${item.qty}</span>
          <span>$${item.price * item.qty}</span>
        </div>
      `;
    });

    ordersList.innerHTML += `
      <div class="order-card">

        <div class="order-top">
          <div>
            <div class="order-id">VORYN ORDER</div>
            <div class="order-date">${order.date}</div>
          </div>
        </div>

        <div class="order-items">
          ${itemsHTML}
        </div>

        <div class="order-total">
          <span>Total</span>
          <span>$${order.total}</span>
        </div>

      </div>
    `;
  });

});