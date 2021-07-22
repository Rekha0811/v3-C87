
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAWlhtEfK0IXL93QcZAj1YZHxtH6MpZfaQ",
    authDomain: "storytelling-new.firebaseapp.com",
    databaseURL: "https://storytelling-new-default-rtdb.firebaseio.com",
    projectId: "storytelling-new",
    storageBucket: "storytelling-new.appspot.com",
    messagingSenderId: "841584658449",
    appId: "1:841584658449:web:956004e16fa692a9d589b0"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}