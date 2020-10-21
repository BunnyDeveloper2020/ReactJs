// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA_Jf_Vxvj8jRxN82hAw6meCaCrFifPwYY",
  authDomain: "todo-app-cp-d9e0b.firebaseapp.com",
  databaseURL: "https://todo-app-cp-d9e0b.firebaseio.com",
  projectId: "todo-app-cp-d9e0b",
  storageBucket: "todo-app-cp-d9e0b.appspot.com",
  messagingSenderId: "98538884328",
  appId: "1:98538884328:web:d5f9469251df0fbf900d5d",
  measurementId: "G-BE3S637PJN",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
