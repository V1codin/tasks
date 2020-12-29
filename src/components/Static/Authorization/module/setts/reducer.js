const init = {
  isLogged: false,
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
