import firebase from "firebase/app"
import "firebase/firestore";
import "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyA2BzXxlv_XIhZCpAboKnfwME3X0e9qfIA",
    authDomain: "hookahblender.firebaseapp.com",
    databaseURL: "https://hookahblender.firebaseio.com",
    projectId: "hookahblender",
    storageBucket: "hookahblender.appspot.com",
    messagingSenderId: "255834844451",
    appId: "1:255834844451:web:f6a82d36cdf42c53"
};


firebase.initializeApp(firebaseConfig);

firebase.firestore();
export default firebase