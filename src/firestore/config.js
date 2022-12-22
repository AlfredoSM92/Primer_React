import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC-MebuZ6IUteL0ebFXkVbqb5YSsBgPJ80",
  authDomain: "conturrido-games.firebaseapp.com",
  projectId: "conturrido-games",
  storageBucket: "conturrido-games.appspot.com",
  messagingSenderId: "154180848197",
  appId: "1:154180848197:web:d99f46d1c3e4be0aca712c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestoreApp = () => {
    return app
}