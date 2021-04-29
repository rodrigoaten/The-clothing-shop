import firebase from 'firebase/app'
import 'firebase/firestore' 

const firebaseConfig = {
    apiKey: "AIzaSyCq4ZtV00QUBlQPLI08umviBiVDHhklTw0",
    authDomain: "alfonsoshop-65a17.firebaseapp.com",
    projectId: "alfonsoshop-65a17",
    storageBucket: "alfonsoshop-65a17.appspot.com",
    messagingSenderId: "880186099459",
    appId: "1:880186099459:web:0442311ad54196e9250b36"
}
  
export const firebaseApp = firebase.initializeApp(firebaseConfig)