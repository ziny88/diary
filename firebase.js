import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

// ================== 여기부터 복사 ==================
const firebaseConfig = {
  apiKey: "AIzaSyDAOgI909CTBynHjkQNj60XDaFUtZkM8bw",
  authDomain: "diary-e4ae9.firebaseapp.com",
  projectId: "diary-e4ae9",
  storageBucket: "diary-e4ae9.firebaseapp.com",
  messagingSenderId: "402785131426",
  appId: "1:402785131426:web:1ce7a3fd20e06647ab0fb"
};
// ================== 여기까지 복사 ==================

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);