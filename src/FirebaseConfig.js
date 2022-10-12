import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCA2QqbViRZDMpwCeh5RFEvK9F_jUW4LXc",
    authDomain: "challenge-26b59.firebaseapp.com",
    projectId: "challenge-26b59",
    storageBucket: "challenge-26b59.appspot.com",
    messagingSenderId: "145670511465",
    appId: "1:145670511465:web:3b4c67c8b670bb35823bf8",
    measurementId: "G-F2D6VZ7PW0"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore();
const auth=firebase.auth();
export { db, auth}