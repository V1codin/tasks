const initial = {
  page: 1,
  results: [],
};

export default function (state = initial, action) {
  if (action.type === "GET_MOVIES_BY_POPULARITY") {
    return {
      ...state,
      results: [...state.results, ...action.movies],
      page: ++state.page,
    };
  }
  return state;
}
