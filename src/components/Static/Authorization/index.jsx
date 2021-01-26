import React, { useState } from "react";
import FormModule from "./module";
import bd from "../../../system/Setts/firebase";
import { signInHandler } from "./system/registrationAction";
import { getFormData, clearData } from "./system/dataHelper";

import { connect } from "react-redux";

const createUser = async (email, pass, errorFn, setErrorState) => {
  try {
    const res = await bd.auth().createUserWithEmailAndPassword(email, pass);

    const user = await bd.auth().currentUser;

    // user.sendEmailVerification();

    return res;
  } catch (e) {
    console.log("error console: ", e.message);
    errorFn(e.message, setErrorState);
    return {
      user: {
        email: undefined,
      },
    };
  }
};

const loginRequest = async (
  email,
  pass,
  dispatch,
  history,
  errorFn,
  setErrorState
) => {
  if (email === undefined || pass === undefined) {
    console.log("Data is undefined");
    return;
  }
  try {
    const res = await bd.auth().signInWithEmailAndPassword(email, pass);
    if (res) {
      dispatch();
      history.push("/popular");
      localStorage.setItem("isLogged", true);
    }
  } catch (e) {
    console.log("error: ", e.message);
    errorFn(e.message, setErrorState);
    return;
  }
};

const errorHandler = (errorMessage, setErrorFn) => {
  setErrorFn({ isError: true, errorText: errorMessage });
};

const mapStateToProps = (state) => {
  return {
    isLogged: state.auth.isLogged,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginAction: () => {
      return dispatch({
        type: "LOGIN",
      });
    },
  };
};

function Auth(props) {
  const {
    loginAction,
    isLogged,
    history,
    match: {
      params: { type },
    },
  } = props;

  const [labelState, setLabelState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    error: false,
    errorText: "",
  });

  const [error, setError] = useState({ isError: false, errorText: "" });

  if (isLogged === true) return null;

  const submit = (e) => {
    e.preventDefault();

    console.log("type: ", type);

    const data = getFormData(e.target);
    if (type === "signIn") {
      console.log("data: ", data);
      /*
      signInHandler({
        setLabelState,
        createUser,
        loginAction,
        history,
        loginRequest,
        data,

        setError,
        errorHandler,
      });
      */
    } else if (type === "logIn") {
      loginRequest(
        data.email,
        data.password,
        loginAction,
        history,
        errorHandler,
        setError
      );
    }

    clearData(e.target);
    return;
  };

  return (
    <>
      <FormModule
        error={error}
        type={type}
        submitFn={submit}
        labelsChecker={labelState}
      />
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
