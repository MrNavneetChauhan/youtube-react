import {
  COMMENT_GET_FAILURE,
  COMMENT_GET_REQUEST,
  COMMENT_GET_SUCCESS,
  COMMENT_POST_FAILURE,
  COMMENT_POST_REQUEST,
  COMMENT_POST_SUCCESS,
} from "./actionTypes";

const init = {
  isLoading: false,
  isError: false,
  comments: [],
};

export const commentReducer = (state = init, { type, payload }) => {
  switch (type) {
    case COMMENT_GET_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case COMMENT_GET_SUCCESS:
      return { ...state, isLoading: false, isError: false, comments: payload };
    case COMMENT_GET_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case COMMENT_POST_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case COMMENT_POST_SUCCESS:
      return { ...state, isLoading: false, isError: false };
    case COMMENT_POST_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
