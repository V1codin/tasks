const checker = localStorage.getItem("isLogged") === "true" ? true : false;

const init = {
  isLogged: checker,
};

export default function (state = init, { type }) {
  if (type === "LOGIN") {
    return {
      ...state,
      isLogged: true,
    };
  }
  if (type === "LOGOUT") {
    return {
      ...state,
      isLogged: false,
    };
  }

  return state;
}
