import firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyAjq541xPH9K0VRXTZlUCg9PVFvNov8JZY",
  authDomain: "crud-firebase-8aa8b.firebaseapp.com",
  databaseURL: "https://crud-firebase-8aa8b-default-rtdb.firebaseio.com",
  projectId: "crud-firebase-8aa8b",
  storageBucket: "crud-firebase-8aa8b.appspot.com",
  messagingSenderId: "823324664409",
  appId: "1:823324664409:web:73602b208a5ce2b294c748"
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();