import React from "react";
import propTypes from "prop-types";
import style from "./styles.module.css";

export default function Warn({ text }) {
  if (text) {
    switch (text) {
      case "firstName":
        return <p className={style.__article}>Enter a valid first name</p>;
      case "lastName":
        return <p className={style.__article}>Enter a valid last name</p>;
      case "email":
        return <p className={style.__article}>Enter a valid email address</p>;
      case "gender":
        return <p className={style.__article}>Select your gender</p>;
      case "username":
        return <p className={style.__article}>Enter a valid username</p>;
      default:
        return null;
    }
  }
  return null;
}

Warn.propTypes = {
  text: propTypes.string.isRequired,
};
