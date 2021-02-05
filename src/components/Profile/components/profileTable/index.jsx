import React from "react";
import style from "./styles.module.css";
import UserValue from "../user/";

import { Link, Input } from "@material-ui/core";
import { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { mStP, mDtP } from "./setts/connectFns";
import { db } from "../../../../system/Setts/firebase";
import {
  getFormData,
  getFileUrl,
} from "../../../Static/Authorization/setts/dataHelper";
import { createData } from "../../setts/helper";

function ProfileTable(props) {
  const { customClasses, reduxState, updateUser } = props;

  const [userData, setUserData] = useState({
    displayName: {
      name: "Name",
      value: "",
    },
    photoURL: {
      name: "Avatar",
      value: "",
    },
  });

  useEffect(() => {
    setUserData({
      ...userData,
      ...createData(reduxState, userData),
    });

    // eslint-disable-next-line
  }, [reduxState]);

  const [inputs, setInputs] = useState({});

  const avatarInputRef = useRef(null);

  const edit = (e) => {
    const name = e.target.name;

    setInputs({
      ...inputs,
      [name]: !inputs[name] ?? true,
    });
  };

  const fileHandler = (e) => {
    getFileUrl(e.target, (src) => {
      /*
      const user = db.auth().currentUser;
      user.updateProfile({
        photoURL: src,
      });
*/
      setUserData({
        ...userData,
        photoURL: {
          ...userData.photoURL,
          value: src,
        },
      });
    });
  };

  const submit = (e) => {
    e.preventDefault();

    const data = getFormData(e.target);
    const user = db.auth().currentUser;

    user.updateProfile({
      ...data,
    });

    updateUser(data);
    setInputs({});

    /*
    const files = e.target.files;
    console.log("files: ", files);
    const data = getFormData(e.target);
    const user = db.auth().currentUser;
    
    user.updateProfile({
      ...data,
    });
    
    updateUser(data);
    setInputs({});
    */
  };

  return (
    <div className={style.container}>
      <h2>Your Profile</h2>
      <div className={style.table}>
        {Object.keys(userData).map((item, ind) => {
          const customKey = ind * Math.random() + 1;

          return (
            <div className={style.wrapper} key={customKey}>
              <div className={style.row}>
                <span className={style.article + " " + style.item}>
                  {userData[item].name}
                </span>
                <UserValue
                  state={userData}
                  valueName={item}
                  userData={userData}
                  customClasses={customClasses}
                  avatarInputRef={avatarInputRef}
                  fileHandler={fileHandler}
                />
                <Link
                  component="button"
                  name={item}
                  className={
                    inputs[item]
                      ? customClasses.activeLink + " " + customClasses.item
                      : customClasses.link + " " + customClasses.item
                  }
                  variant="body1"
                  onClick={edit}
                >
                  Edit
                </Link>
              </div>
              {inputs[item] && (
                <form
                  onSubmit={submit}
                  key={customKey}
                  className={style.avatarForm}
                >
                  <Input
                    type="text"
                    name={item}
                    className={customClasses.input}
                    placeholder={
                      item === "photoURL" ? "Avatar Link" : userData[item].name
                    }
                  />
                </form>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default connect(mStP, mDtP)(ProfileTable);
