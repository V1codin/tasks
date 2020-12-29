import React from "react";
import style from "./styles.module.css";

import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    isLogged: state.auth.isLogged,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOutAction: () => {
      return dispatch({
        type: "LOGOUT",
      });
    },
  };
};

function LoginBlock(props) {
  const { isLogged, logOutAction } = props;

  const logoutHandler = () => {
    logOutAction();
  };

  if (isLogged === true)
    return (
      <div className={style.auth}>
        <button
          to="/"
          className={style.auth__control + " " + style.auth__control_sightOut}
          onClick={logoutHandler}
        >
          SIGN OUT
        </button>
      </div>
    );
  return (
    <>
      <div className={style.auth}>
        <NavLink
          to="/auth/signIn"
          className={style.auth__control}
          activeStyle={{
            backgroundColor: "#00b566",
          }}
        >
          SIGN IN
        </NavLink>
        <NavLink
          to="/auth/logIn"
          className={style.auth__control}
          activeStyle={{
            backgroundColor: "#00b566",
          }}
        >
          LOG IN
        </NavLink>
      </div>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginBlock);
