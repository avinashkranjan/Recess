import firebase from "firebase";
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyAmv2ggHpNJiZBeRX5SzRelMq1aZ2Azxb8",
  authDomain: "recess-it.firebaseapp.com",
  databaseURL: "https://recess-it.firebaseio.com",
  projectId: "recess-it",
  storageBucket: "recess-it.appspot.com",
  messagingSenderId: "352303707187",
  appId: "1:352303707187:web:1fcfbc6863dcacb3135f46",
  measurementId: "G-B3QL0CLZX9",
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
const FacebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const GithubAuthProvider  = new firebase.auth.GithubAuthProvider();
const TwitterAuthProvider = new firebase.auth.TwitterAuthProvider();

export { db, auth, storage,GoogleAuthProvider,GithubAuthProvider,FacebookAuthProvider,TwitterAuthProvider };

