import {
  GET_VIDEOS_FAILURE,
  GET_VIDEOS_LOADING,
  GET_VIDEOS_SUCCESS,
} from "./actionTypes";

const init = {
  isLoading: false,
  isError: false,
  video_data: [],
  nextPageToken:null,
  searchParam:"All"
};

export const videosReducer = (state = init, { type, payload,nextPageToken,searchParam }) => {
  switch (type) {
    case GET_VIDEOS_LOADING:
      return { ...state, isLoading: true, isError: false };
    case GET_VIDEOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        video_data: state.searchParam === searchParam ? [...state.video_data,...payload]:payload,
        nextPageToken:nextPageToken,
        searchParam
      };
    case GET_VIDEOS_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
