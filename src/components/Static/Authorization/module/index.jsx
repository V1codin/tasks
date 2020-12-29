import React from "react";
import style from "./styles.module.css";

import { Link } from "react-router-dom";

function FormModule(props) {
  const {
    type,
    submitFn,
    labelsChecker: { email, pass, confirmPass },
  } = props;
  switch (type) {
    case "signIn":
      return (
        <div className={style.formWrapper}>
          <form action="/" className={style.form} onSubmit={submitFn}>
            <h2>Sign In</h2>
            {/* <input type="text" placeholder="Username" required /> */}
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />
            {pass && (
              <label className={style.form__label}>
                Password should be 4 - 16 english characters
              </label>
            )}
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              required
            />
            {confirmPass && (
              <label className={style.form__label}>
                Passwords should match
              </label>
            )}
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            {email && (
              <label className={style.form__label}>Email is not valid</label>
            )}
            <button>SIGN IN</button>
          </form>
        </div>
      );
    case "logIn":
      return (
        <div className={style.formWrapper}>
          <form action="/" className={style.form} onSubmit={submitFn}>
            <h2>Log In</h2>
            <input type="Email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button>LOG IN</button>
            <p className={style.form__article}>
              forgot your password?{" "}
              <Link to="/auth/password&reset">click here</Link>
            </p>
          </form>
        </div>
      );
    case "password&reset":
      return (
        <div className={style.formWrapper}>
          <form action="/" className={style.form} onSubmit={submitFn}>
            <h2>Password reset request</h2>
            <input type="email" placeholder="Email" required />
            <button>Send</button>
          </form>
        </div>
      );
    default:
      return null;
  }
}

export default FormModule;
