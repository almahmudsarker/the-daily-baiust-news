// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa1RkOzKM0NwlSoF1NmTU9svZdKNvchUg",
  authDomain: "the-daily-baiust.firebaseapp.com",
  projectId: "the-daily-baiust",
  storageBucket: "the-daily-baiust.appspot.com",
  messagingSenderId: "395210569627",
  appId: "1:395210569627:web:e5347dc33ab3fbb286d33e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;