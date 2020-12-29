import React, { useState } from "react";
import FormModule from "./module";
import bd from "../../../system/Setts/firebase";
import signInHandler from "./system/signInAction";

import { connect } from "react-redux";

const createUser = async (email, pass, dispatchCallback) => {
  const res = await bd.auth().createUserWithEmailAndPassword(email, pass);
  if (res) {
    loginHandler(email, pass, dispatchCallback);
  }
};

const loginHandler = async (email, pass, dispatch) => {
  const res = await bd.auth().signInWithEmailAndPassword(email, pass);
  if (res) {
    console.log("res: ", res);
    dispatch();
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
      signInHandler({ e, setLabelState, createUser, loginAction, history });

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
