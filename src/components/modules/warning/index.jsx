import React from "react";
import propTypes from "prop-types";
import Warn from "./components/warn";

export default function Warning(props) {
  const { errors } = props;
  if (errors === "") return null;
  return <Warn text={errors} />;
}

Warning.propTypes = {
  errors: propTypes.string.isRequired,
};
