import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDgS4DGLVPJHHU1jYJ2tHrLiFAKA8EEVLA",
    authDomain: "facebook-15086.firebaseapp.com",
    projectId: "facebook-15086",
    storageBucket: "facebook-15086.appspot.com",
    messagingSenderId: "496209905512",
    appId: "1:496209905512:web:cd48d5573c51f28fcdb8dd",
    measurementId: "G-CH0MF07JRM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig); //Connect React.js FRONTEND to the firebase BACKEND 
  const db = firebaseApp.firestore(); // Get access to the DATABASE
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider(); // Informing firebase that we want Google Authentication


  export { auth , provider};
  export default db;