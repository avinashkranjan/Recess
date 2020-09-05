import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAmv2ggHpNJiZBeRX5SzRelMq1aZ2Azxb8",
  authDomain: "recess-it.firebaseapp.com",
  databaseURL: "https://recess-it.firebaseio.com",
  projectId: "recess-it",
  storageBucket: "recess-it.appspot.com",
  messagingSenderId: "352303707187",
  appId: "1:352303707187:web:1fcfbc6863dcacb3135f46",
  measurementId: "G-B3QL0CLZX9",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
