import validation from "./validation";

export default function (props) {
  const { e, setLabelState, createUser, loginAction, history } = props;

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
    try {
      createUser(res.email, res.password, loginAction);
      history.push("/popular");
    } catch (e) {
      console.log("code", e.code);
      throw Error(e.message);
    }
  }
}
