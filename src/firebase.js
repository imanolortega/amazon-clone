import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBr2nBJhmyIHbT5kGzuBeBTVox-eX7T7bI",
  authDomain: "clone-563e4.firebaseapp.com",
  projectId: "clone-563e4",
  storageBucket: "clone-563e4.appspot.com",
  messagingSenderId: "333473766269",
  appId: "1:333473766269:web:822f88a5b3d74b800c0a14",
  measurementId: "G-1WSVDPYSY3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
