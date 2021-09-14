// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDhGxVV6OPyFZVZelNTVATykvhlJNZVj78",
  authDomain: "finnaclecoin-42905.firebaseapp.com",
  projectId: "finnaclecoin-42905",
  storageBucket: "finnaclecoin-42905.appspot.com",
  messagingSenderId: "683708361244",
  appId: "1:683708361244:web:bc56a8a90b3a9a23e88dd9",
  measurementId: "G-B4P7QZ50SP"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  export{db,auth}

  