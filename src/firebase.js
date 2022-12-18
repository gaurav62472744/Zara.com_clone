import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB81JLY5JouenkYmdjNQLr_RLsfby_07WI",
  authDomain: "sara-web-app.firebaseapp.com",
  projectId: "sara-web-app",
  storageBucket: "sara-web-app.appspot.com",
  messagingSenderId: "33618999932",
  appId: "1:33618999932:web:cff23e6af9b6ee19c367f9",
  databaseURL: "https://sara-web-app-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);
