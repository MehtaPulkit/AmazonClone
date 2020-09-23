import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB0A4GMrDEnzLQkfTIv4gt8xQzU7o4gePU",
  authDomain: "amazno.firebaseapp.com",
  databaseURL: "https://amazno.firebaseio.com",
  projectId: "amazno",
  storageBucket: "amazno.appspot.com",
  messagingSenderId: "357026126419",
  appId: "1:357026126419:web:3532fe875603a81c9b04a6",
  measurementId: "G-45FNM07HTW",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
