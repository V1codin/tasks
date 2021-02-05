import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const {
  REACT_APP_API__KEY_FIREBASE_AUTH,
  REACT_APP_AUTH__DOMAIN_FIREBASE_AUTH,
  REACT_APP_PROJECT__ID_FIREBASE_ID,
  REACT_APP_STORAGE__BUCKET_FIREBASE_AUTH,
  REACT_APP_MESSAGING__SENDER__ID_FIREBASE_AUTH,
  REACT_APP_APP__ID_FIREBASE_AUTH,
} = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_API__KEY_FIREBASE_AUTH,
  authDomain: REACT_APP_AUTH__DOMAIN_FIREBASE_AUTH,
  projectId: REACT_APP_PROJECT__ID_FIREBASE_ID,
  storageBucket: REACT_APP_STORAGE__BUCKET_FIREBASE_AUTH,
  messagingSenderId: REACT_APP_MESSAGING__SENDER__ID_FIREBASE_AUTH,
  appId: REACT_APP_APP__ID_FIREBASE_AUTH,
};

export const db = firebase.initializeApp(firebaseConfig, "Movies 46");

/*
db.firestore()
  .collection("users")
  .get()
  .then((querySnapshot) => {
    console.log("querySnapshot: ", querySnapshot);
  });
*/

export const logoutWrapper = (dispatchLogout) => {
  return () => {
    const auth = db.auth();
    auth
      .signOut()
      .then(() => {
        dispatchLogout();
        window.location.reload();
        localStorage.setItem("isLogged", false);
        console.log("signed out");
      })
      .catch((e) => console.log("sign out error", e));
  };
};
// export const auth = db.auth;
