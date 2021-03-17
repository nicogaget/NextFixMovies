import * as actions from "./movies.actions";
// eslint-disable-next-line
export default (
  state = {
    data: [],
    isLoading: false,
    error: null,
    selectedMovie: 0,
  },
  action
) => {
  switch (action.type) {
    case actions.REQUEST_MOVIES: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case actions.FETCH_MOVIES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        data: [...action.movies],
      };
    }
    case actions.FETCH_MOVIES_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    }
    case actions.SET_SELECTED_MOVIES: {
      return {
        ...state,
        selectedMovie: action.index,
      };
    }
    default: {
      return state;
    }
  }
};
