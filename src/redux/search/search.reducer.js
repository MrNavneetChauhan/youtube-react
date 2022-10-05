import {
  SEARCH_DATA_ERROR,
  SEARCH_DATA_LOADING,
  SEARCH_DATA_SUCCESS,
} from "./actionTypes";

const init = {
  isLoading: false,
  isError: false,
  searchData: [],
};

export const searchReducer = (state = init, { type, payload }) => {
  switch (type) {
    case SEARCH_DATA_LOADING:
      return { ...state, isLoading: true, isError: false };
    case SEARCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        searchData: payload,
      };
    case SEARCH_DATA_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
