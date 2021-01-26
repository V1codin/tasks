import validation from "./validation";

export async function signInHandler(props) {
  const {
    setLabelState,
    createUser,
    history,
    /*
    loginRequest,
    loginAction,
    */
    data,

    setError,
    errorHandler,
  } = props;

  const { checker, result } = validation(data);
  setLabelState(result);

  if (checker !== true) {
    const { email, password } = data;

    const newUser = await createUser(email, password, errorHandler, setError);

    if (newUser.user.email) {
      localStorage.setItem("signInEmail", newUser.user.email);
      setLabelState({
        email: "",
        password: "",
        confirmPassword: "",
        error: false,
        errorText: "",
      });

      setError({ isError: false, errorText: "" });
      history.push("/auth/logIn");
    }

    /*
    loginRequest(
      newUser.user.email,
      data.password,
      loginAction,
      history,
      setError
    );
    */
  }
}
