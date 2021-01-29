// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyA3cwyPMtvmZX5mHc_c5B83fyRp3W252Ng",
    authDomain: "clone-cf2e7.firebaseapp.com",
    projectId: "clone-cf2e7",
    storageBucket: "clone-cf2e7.appspot.com",
    messagingSenderId: "961643569221",
    appId: "1:961643569221:web:8b706be5b8bab1b2aa832c",
    measurementId: "G-K818016EM3"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

