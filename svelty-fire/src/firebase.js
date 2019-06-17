import firebase from 'firebase/app';// rollup bundle issue with ESM import
import 'firebase/auth';
import 'firebase/firestore';
var firebaseConfig = {
  apiKey: "AIzaSyA2zumgOX2ohFHpS5RHNRegZgNl8TBKfJI", //check
  authDomain: "wordsproject-a4a27.firebaseapp.com",
  databaseURL: "https://wordsproject-a4a27.firebaseio.com",
  projectId: "wordsproject-a4a27",
  storageBucket: "wordsproject-a4a27.appspot.com/",
  messagingSenderId: "758773997881"
};
console.log(firebase)
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();


