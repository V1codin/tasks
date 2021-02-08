import React from "react";
// import style from "./styles.module.css";
import ErrorLoginPage from "../../modules/loginErrorPage/";

// import { connect } from "react-redux";

function SingleMovie(props) {
  const {
    history,
    match: {
      params: { type },
    },
  } = props;

  const isLogged = localStorage.getItem("isLogged");

  if (isLogged === "false") {
    return <ErrorLoginPage history={history} />;
  }

  console.log("type: ", type);
  return (
    <>
      <h2>HEY. IT"S SINGLE MOVIE PAGE!</h2>
    </>
  );
}

export default SingleMovie;
