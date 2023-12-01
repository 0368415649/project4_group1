// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD5J4jPC-1wyRLn-V7Sz5b1MvPXpbuPOYU',
  authDomain: 'addda-1c480.firebaseapp.com',
  projectId: 'addda-1c480',
  storageBucket: 'addda-1c480.appspot.com',
  messagingSenderId: '760069052018',
  appId: '1:760069052018:web:22f2cbaa963555c8efd4eb',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
auth.languageCode = 'it';
