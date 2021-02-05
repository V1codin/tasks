/*
export const createData = (display, value, editFn, name) => {
  const rawValue = value ?? "Not Set";
  return { display, value: rawValue, edit: editFn, name };
};
*/

export const createData = (prop = {}, state) => {
  const res = {
    ...state,
  };

  if (Object.keys(prop).length > 0) {
    for (let item in prop) {
      res[item].value = prop[item] ?? "Not Set";
    }
  }

  return res;
};


