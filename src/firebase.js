import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlUUkxHhdhvx2s44tiluoN0C_uY0KMaAg",
  authDomain: "slack-clone-8aa72.firebaseapp.com",
  databaseURL: "https://slack-clone-8aa72.firebaseio.com",
  projectId: "slack-clone-8aa72",
  storageBucket: "slack-clone-8aa72.appspot.com",
  messagingSenderId: "1091618521634",
  appId: "1:1091618521634:web:d48377ca293295016c007b",
  measurementId: "G-N54YK448ME"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {auth,provider};
export default db; 