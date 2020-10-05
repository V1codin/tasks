import React, { useState } from "react";

import style from "./styles.module.css";
import Warning from "../modules/warning/index";
import Out from "../modules/out/index";

function App() {
  const [state, setState] = useState({
    defaultGender: "Select your gender",
    defaultGenderValue: 0,
    selectState: "",
    maleGender: "male",
    femaleGender: "female",
    values: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      about: "",
      gender: "",
    },
    isOut: false,
    outProps: {},
  });

  const [warningState, setWarningState] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    gender: "gender",
  });

  const masks = {
    firstName: /^[А-Я]{1}[а-я]{1,15}$/,
    lastName: /^[А-Я]{1}[а-я]{1,26}$/,
    gender: /^\S{0,}$/,
    username: /^[a-zA-Z_]{6,20}$/,
    email: /^[a-zA-Z\d]{1,15}@[a-z]{1,9}(\.[a-z]{2,4}){1,2}$/,
  };

  const closePopUp = () => {
    setState({
      ...state,
      isOut: !state.isOut,
    });
  };

  const customValueOf = function () {
    const values = Object.values(this);
    if (values.some((el) => el === false)) {
      const errorField = [];

      for (let item in this) {
        if (this[item] === false) {
          errorField.push(item);
        }
      }

      return errorField;
    }
    return true;
  };

  const validationField = (e) => {
    const res = masks[e.target.name].test(e.target.value);
    if (!res) {
      setWarningState({
        ...warningState,
        [e.target.name]: e.target.name,
      });
    } else {
      setWarningState({
        ...warningState,
        [e.target.name]: "",
      });
    }
  };

  const validationForm = (data, valueOfFn) => {
    const res = {};
    res.__proto__.valueOf = valueOfFn;

    for (let item in data) {
      if (masks[item]) {
        res[item] = masks[item].test(data[item]);
      }
    }

    const isValid = res.valueOf();

    if (Array.isArray(isValid)) {
      return isValid;
    }

    return true;
  };

  const selectHandler = (e) => {
    setState({
      ...state,
      values: {
        ...state.values,
        gender: e.target.value,
      },
    });
    validationField(e);
  };

  const changeHandler = (e) => {
    setState({
      ...state,
      values: {
        ...state.values,
        [e.target.name]: e.target.value,
      },
    });

    validationField(e);
  };

  const submitForm = (e) => {
    e.preventDefault();

    const elements = e.target.elements;
    const values = {};

    for (let item of elements) {
      if (item.name !== "btn") {
        values[item.name] = item.value;
      }
    }

    const res = validationForm(values, customValueOf);

    if (Array.isArray(res)) {
      const raw = {
        articleStyle: "error",
      };

      res.forEach((item) => (raw[item] = state.values[item]));

      setState({
        ...state,
        isOut: true,
        outProps: {
          ...raw,
        },
      });
    } else {
      setState({
        ...state,
        isOut: true,
        outProps: { ...state.values, articleStyle: "passed" },
      });
    }
  };

  return (
    <div className={style.app}>
      <form className={style.form} onSubmit={submitForm}>
        <h1>Sign Up</h1>
        <label>First Name: </label>
        <input
          type="text"
          name="firstName"
          value={state.values.firstName}
          onChange={changeHandler}
          required
        />
        <Warning errors={warningState.firstName} />

        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={state.values.lastName}
          onChange={changeHandler}
          required
        />
        <Warning errors={warningState.lastName} />

        <label>Gender</label>
        <select
          name="gender"
          value={
            state.values.gender ? state.values.gender : state.defaultGender
          }
          onChange={selectHandler}
          required
        >
          <option disabled defaultValue>
            {state.defaultGender}
          </option>
          <option value={state.maleGender}>Male</option>
          <option value={state.femaleGender}>Female</option>
        </select>
        <Warning errors={warningState.gender} />

        <label>Username: </label>
        <input
          type="text"
          name="username"
          value={state.values.username}
          onChange={changeHandler}
          required
        />
        <Warning errors={warningState.username} />

        <label>Email: </label>
        <input
          type="text"
          name="email"
          value={state.values.email}
          onChange={changeHandler}
          required
        />
        <Warning errors={warningState.email} />

        <label>About you: </label>
        <textarea
          name="about"
          value={state.values.about}
          onChange={changeHandler}
        />

        <input type="submit" name="btn" id="" />
      </form>
      {state.isOut ? (
        <Out setts={state.outProps} closeClick={closePopUp} />
      ) : null}
    </div>
  );
}

export default App;
