import React from "react";
import style from "./styles.module.css";
import ProfileTable from "./components/profileTable";

import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  loginBtn: {
    "&:hover": {
      backgroundColor: "#476bcf",
    },
    border: "2px solid #fff",
    backgroundColor: "#1040bf",
    borderRadius: "15px",
  },
  avatar: {
    cursor: "pointer",
    margin: 0,
    color: "#fff",
    backgroundColor: "#008000",
  },
  link: {
    color: "#25469e",
  },
  activeLink: {
    color: "#adff2f",
  },
  input: {
    "& input::placeholder": {
      color: "#295ca",
    },
    color: "#fff",
  },
  item: {
    padding: "0.8em",
  },
});

function Profile(props) {
  const { history } = props;
  const isLogged = localStorage.getItem("isLogged");
  const customClasses = useStyles();

  if (isLogged === "false") {
    const click = () => {
      history.push("/auth/logIn");
    };

    return (
      <div className={style.container + " " + style.container__bg}>
        <h2>Oups. You have to login.</h2>
        <Button
          variant="contained"
          color="primary"
          className={customClasses.loginBtn}
          onClick={click}
        >
          Log In
        </Button>
      </div>
    );
  }

  return <ProfileTable customClasses={customClasses} />;
}

export default Profile;
