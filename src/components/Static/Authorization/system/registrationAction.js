import validation from "./validation";

export async function signInHandler(props) {
  const {
    setLabelState,
    createUser,
    loginAction,
    history,
    loginRequest,
    data,

    setError,
    errorHandler,
  } = props;

  const { checker, result } = validation(data);
  setLabelState(result);

  if (checker !== true) {
    const { email, password } = data;

    const user = await createUser(email, password, errorHandler, setError);

    if (user) {
      loginRequest(data.email, data.password, loginAction, history, setError);
    }
  }
}
