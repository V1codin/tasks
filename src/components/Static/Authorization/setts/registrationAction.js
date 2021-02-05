import validation from "./validation";
import { db, logoutWrapper } from "../../../../system/Setts/firebase";

export const signInHandler = async (props) => {
  const {
    setLabelState,
    createUser,
    history,
    data,

    setError,
    errorHandler,
  } = props;
  const { checker, result } = validation(data);
  setLabelState(result);

  if (checker !== true) {
    const { email, password } = data;

    const newUser = await createUser(email, password, errorHandler, setError);

    if (newUser.user.email) {
      /*
      const {
        user: { uid, email },
      } = newUser;

      try {
        const createUsersCollaction = await firestore.collection("users").add({
          [uid]: {
            email: email,
          },
        });

        console.log("createUsersCollaction: ", createUsersCollaction);
      } catch (e) {
        console.error("create collation error: ", e);
      }
      */

      setLabelState({
        email: "",
        password: "",
        confirmPassword: "",
        error: false,
        errorText: "",
      });
      setError({ signIn: false, errorText: "", login: false });

      history.push("/auth/logIn");
    }
  }
};

export const createUser = async (email, pass, errorFn, setErrorState) => {
  try {
    const res = await db.auth().createUserWithEmailAndPassword(email, pass);

    // const user = await db.auth.currentUser;
    // user.sendEmailVerification();

    return res;
  } catch (e) {
    console.log("error console: ", e.message);
    errorFn(e, setErrorState, "signIn");
    return {
      user: {
        email: undefined,
      },
    };
  }
};

export const loginRequest = async (
  email,
  pass,
  dispatch,
  history,
  errorFn,
  setErrorState,

  logoutHandler
) => {
  if (email === undefined || pass === undefined) {
    console.log("Data is undefined");
    return;
  }
  try {
    const res = await db.auth().signInWithEmailAndPassword(email, pass);

    if (res) {
      /*
      firestore
        .collection("users")
        .get()
        .then((querySnapshot) => {
          console.log("querySnapshot: ", querySnapshot);
        });
        */
      const { user } = res;

      const userData = {
        photoURL: user.photoURL,
        displayName: user.displayName,
      };

      const logout = logoutHandler(logoutWrapper);

      db.auth().onAuthStateChanged((curUser) => {
        if (curUser) {
          dispatch(userData);

          localStorage.setItem("isLogged", true);
          history.push("/profile");
        } else {
          console.log("log out");
          logout();
        }
      });
    }
  } catch (e) {
    console.log("error: ", e.message);
    errorFn(e, setErrorState, "logIn");
    return;
  }
};
