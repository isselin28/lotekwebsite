import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyARBzoDjW5hw8kKWNVc5J37hvt1Bk5-0dQ",
  authDomain: "lotekkalipahapo-a76b3.firebaseapp.com",
  projectId: "lotekkalipahapo-a76b3",
  storageBucket: "lotekkalipahapo-a76b3.appspot.com",
  messagingSenderId: "1043920695472",
  appId: "1:1043920695472:web:2a7fa718e5ee5330bfcb75",
  measurementId: "G-M378Z2RDNP",
};

initializeApp(firebaseConfig);
const analytics = getAnalytics();

export const firebaseEvent = (name) => logEvent(analytics, name);
