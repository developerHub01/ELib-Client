import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCe0l_wXUF-CyFLYJwbDcrgsg4bBaEqehQ",
  authDomain: "elib-16499.firebaseapp.com",
  projectId: "elib-16499",
  storageBucket: "elib-16499.appspot.com",
  messagingSenderId: "991091034279",
  appId: "1:991091034279:web:d542fab4b1fc14c8c83382",
  measurementId: "G-BZETBM84N1",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;
