import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgniwg28IFXrIkdYCcBHZVNDIf2rW4EEE",
  authDomain: "advaita-map.firebaseapp.com",
  projectId: "advaita-map",
  storageBucket: "advaita-map.appspot.com",
  messagingSenderId: "29747955663",
  appId: "1:29747955663:web:7033638d6360388c8374ba"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db, app};