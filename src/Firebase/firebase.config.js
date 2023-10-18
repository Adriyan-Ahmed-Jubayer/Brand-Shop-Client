// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1dsgYx5Dvp2F_c8REDCmccTBOB74Jj38",
  authDomain: "brand-shop-93ce3.firebaseapp.com",
  projectId: "brand-shop-93ce3",
  storageBucket: "brand-shop-93ce3.appspot.com",
  messagingSenderId: "123895041659",
  appId: "1:123895041659:web:e6c086088ebf13f9f9dcde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;