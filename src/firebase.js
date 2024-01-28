import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqIvTKpNU6Cl7GCmsINmkqSIDSKSitVN0",
  authDomain: "linkedin-clone-3fbf8.firebaseapp.com",
  projectId: "linkedin-clone-3fbf8",
  storageBucket: "linkedin-clone-3fbf8.appspot.com",
  messagingSenderId: "1025886170057",
  appId: "1:1025886170057:web:30e0cfabb80e490c1d9618",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
