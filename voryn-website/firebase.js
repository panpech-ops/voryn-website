import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCfuW2u-7Z9F9-ubIp0BW7SkjFkgIwpNFQ",
  authDomain: "voryn-f19f0.firebaseapp.com",
  projectId: "voryn-f19f0",
  storageBucket: "voryn-f19f0.firebasestorage.app",
  messagingSenderId: "94759351246",
  appId: "1:94759351246:web:4202de40e08551b758719f",
  measurementId: "G-NKPJ1CYSVN"
};

// Initialize
const app = initializeApp(firebaseConfig);

// Export Services
export const auth = getAuth(app);
export const db = getFirestore(app);