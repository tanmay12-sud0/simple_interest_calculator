import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyC0XDXvW-UkEWwy-yr6y6nutWWSBSwY09M",
    authDomain: "interest-calculator-6ae43.firebaseapp.com",
    projectId: "interest-calculator-6ae43",
    storageBucket: "interest-calculator-6ae43.appspot.com",
    messagingSenderId: "974596751303",
    appId: "1:974596751303:web:2af7de670929adbb12e3e2",
    measurementId: "G-3TCXVCCNC1"
  };
 const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();

  export default db ;
