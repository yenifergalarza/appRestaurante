import firebase from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyD9ra0-rQTEFfa9jFTvBnEhMmepibVVYXc",
    authDomain: "mobile-8f60a.firebaseapp.com",
    databaseURL: "https://mobile-8f60a.firebaseio.com",
    projectId: "mobile-8f60a",
    storageBucket: "mobile-8f60a.appspot.com",
    messagingSenderId: "1042693647806",
    appId: "1:1042693647806:web:e4873b231aee4f79e3ddef",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);