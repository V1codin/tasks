import validation from "./validation";

export async function signInHandler(props) {
  const {
    e,
    setLabelState,
    createUser,
    loginAction,
    history,
    loginHandler,
  } = props;

  const elements = e.target.elements;
  const res = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  for (let item of elements) {
    if (item.name !== "") {
      res[item.name] = item.value;
    }
  }
  const { checker, result } = validation(res);
  setLabelState(result);

  if (checker !== true) {
    const user = await createUser(res.email, res.password, loginAction);
    if (user) {
      loginHandler(res.email, res.password, loginAction, history);
    }
  }
}
