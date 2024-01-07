import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgFWbr1EqssivGPe3aDwbfVXon1A3wQ1M",
  authDomain: "js-time-appsas.firebaseapp.com",
  projectId: "js-time-appsas",
  storageBucket: "js-time-appsas.appspot.com",
  messagingSenderId: "947973038228",
  appId: "1:947973038228:web:74d90eebd62635af2cd481",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
