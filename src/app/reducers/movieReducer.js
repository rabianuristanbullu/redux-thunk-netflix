const initialState = {
  isLoading: false,
  genres: [],
  popularMovies: [],
};

export const movieReducer = (state=initialState, action) => {
  switch (action.type) {
    case "SET_POPULAR_MOVIES":
      return {
        ...state,
        popularMovies: action.payload,
      };
    
      case "SET_CATEGORY_MOVIES":
        return {
          ...state,
          genres: action.payload
        }

    default:
      return state;
  }
};
