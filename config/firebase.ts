// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAP6jtmVIwfmGNdyUf_xQS0Ol92GymGh-k",
    authDomain: "coin-keeper-813d5.firebaseapp.com",
    projectId: "coin-keeper-813d5",
    storageBucket: "coin-keeper-813d5.firebasestorage.app",
    messagingSenderId: "351282014124",
    appId: "1:351282014124:web:1ba2677b57021c0e66bc09",
    measurementId: "G-V2K9HG6DWP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Auth
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});

// db
export const firestore = getFirestore(app);