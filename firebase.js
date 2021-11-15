import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCX92l88lEeNQOqouHaVX0jlOSFWnFvC94",
  authDomain: "cryptouber-674f8.firebaseapp.com",
  projectId: "cryptouber-674f8",
  storageBucket: "cryptouber-674f8.appspot.com",
  messagingSenderId: "1081978465049",
  appId: "1:1081978465049:web:072f6e589e00822dac3388",
  measurementId: "G-PP4J76H661"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export {
  app,
  analytics,
  provider,
  auth,

};