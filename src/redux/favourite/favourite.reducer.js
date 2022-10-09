import {
  GET_LIKED_VIDEO_ERROR,
  GET_LIKED_VIDEO_REQUEST,
  GET_LIKED_VIDEO_SUCCESS,
  POST_LIKED_VIDEO_ERROR,
  POST_LIKED_VIDEO_REQUEST,
  POST_LIKED_VIDEO_SUCCESS,
} from "./actionTypes";

const init = {
  isLoading: false,
  isError: false,
  favourites: [],
};

export const favouriteReducer = (state = init, { type, payload }) => {
  switch (type) {
    case POST_LIKED_VIDEO_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case POST_LIKED_VIDEO_SUCCESS:
      return { ...state, isLoading: false, isError: false };
    case POST_LIKED_VIDEO_ERROR:
      return { ...state, isLoading: false, isError: true };
    case GET_LIKED_VIDEO_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case GET_LIKED_VIDEO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        favourites: payload,
      };
    case GET_LIKED_VIDEO_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
