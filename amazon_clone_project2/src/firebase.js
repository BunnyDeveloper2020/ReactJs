import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDt7dt0RFBhd8MVsWc_MJu2ZL73wjohjkU",
  authDomain: "clone-6c0d4.firebaseapp.com",
  databaseURL: "https://clone-6c0d4.firebaseio.com",
  projectId: "clone-6c0d4",
  storageBucket: "clone-6c0d4.appspot.com",
  messagingSenderId: "715768226455",
  appId: "1:715768226455:web:05099779e87d31e5363fd2",
  measurementId: "G-29Q761K9X7",
});

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
