import React, { useState } from "react";
import FormModule from "./module";
import bd from "../../../system/Setts/firebase";
import { signInHandler } from "./system/registrationActions";

// blindmonk46@gmail.com

import { connect } from "react-redux";

const createUser = async (email, pass) => {
  try {
    const res = await bd.auth().createUserWithEmailAndPassword(email, pass);
    return res;
  } catch (e) {
    console.log("error: ", e.message);
    return;
  }
};

const loginHandler = async (email, pass, dispatch, history) => {
  try {
    const res = await bd.auth().signInWithEmailAndPassword(email, pass);
    if (res) {
      dispatch();
      history.push("/popular");
    }
  } catch (e) {
    console.log("error: ", e.message);
    return;
  }
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

  const [labelState, setLabelState] = useState({});

  if (isLogged === true) return null;

  const submit = (e) => {
    e.preventDefault();

    console.log("type: ", type);
    if (type === "signIn") {
      signInHandler({
        e,
        setLabelState,
        createUser,
        loginAction,
        history,
        loginHandler,
      });

      return;
    }
  };

  return (
    <>
      <FormModule type={type} submitFn={submit} labelsChecker={labelState} />
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
