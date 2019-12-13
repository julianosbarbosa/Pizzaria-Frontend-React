import * as firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5WPL9V3JFRnk2k5WmcmgLIP5XTB8wHcU",
  authDomain: "pizzaria-60905.firebaseapp.com",
  databaseURL: "https://pizzaria-60905.firebaseio.com",
  projectId: "pizzaria-60905",
  storageBucket: "pizzaria-60905.appspot.com",
  messagingSenderId: "255692066413",
  appId: "1:255692066413:web:830539d1a2651582b5b964",
  measurementId: "G-41LC8QQLHD"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
