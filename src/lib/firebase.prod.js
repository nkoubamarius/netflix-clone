import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {seedDatabase} from '../seed';

const firebaseConfig = {
    apiKey: "AIzaSyDIZZAYVkJyW_PqVDkoyvzpL151Mi7OVck",
    authDomain: "netflix-ecfce.firebaseapp.com",
    databaseURL: "https://netflix-ecfce.firebaseio.com",
    projectId: "netflix-ecfce",
    storageBucket: "netflix-ecfce.appspot.com",
    messagingSenderId: "430506231055",
    appId: "1:430506231055:web:2c82257ae83fe7d831ea7a",
    measurementId: "G-FD3PF8G5VP"
};

const firebase=Firebase.initializeApp(firebaseConfig);

//seedDatabase(firebase);

export {firebase};