// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPELEHKT1pxvSRcb0Qmul9g5Pyq3kzdbU",
  authDomain: "restauranteweb-4e43e.firebaseapp.com",
  projectId: "restauranteweb-4e43e",
  storageBucket: "restauranteweb-4e43e.appspot.com",
  messagingSenderId: "927797820048",
  appId: "1:927797820048:web:b4ade774b772bc1d327615"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const FirebaseFirestore = getFirestore(app);

export {
    FirebaseFirestore,
}