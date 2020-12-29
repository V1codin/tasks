import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCY2E3nfuG098DZ_5U2Ep0lwO2YU3HtocE",
  authDomain: "movie-searcher-a4582.firebaseapp.com",
  projectId: "movie-searcher-a4582",
  storageBucket: "movie-searcher-a4582.appspot.com",
  messagingSenderId: "533877148999",
  appId: "1:533877148999:web:a50f3c1411de0b8fa05062",
};

const bd = firebase.initializeApp(firebaseConfig);

export default bd;
