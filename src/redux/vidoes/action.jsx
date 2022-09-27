import {
  GET_VIDEOS_FAILURE,
  GET_VIDEOS_LOADING,
  GET_VIDEOS_SUCCESS,
} from "./actionTypes";

import axios from "axios";
export const getVideosLoading = () => {
  return {
    type: GET_VIDEOS_LOADING,
  };
};

export const getVidoesSuccess = (payload, searchParam) => {
  return {
    type: GET_VIDEOS_SUCCESS,
    payload: payload.items,
    nextPageToken: payload.nextPageToken,
    searchParam,
  };
};

export const getVideosError = () => {
  return {
    type: GET_VIDEOS_FAILURE,
  };
};

// var key = "AIzaSyC7gR712tr_ZIszHk-xEJGz7oO65daeQ20";
// var key =  "AIzaSyD41hkSAxKHA9hdnkguwHgdIdYsqwn7m9k"
var key = "helo"

export const gettingVideosData = () => async (dispatch, getState) => {
  dispatch(getVideosLoading());
  await axios
    .get(`/videos`, {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        maxResults: 20,
        pageToken: getState().videosReducer.nextPageToken,
        key: key,
      },
    })
    .then(({ data }) => {
      console.log("data", data, "from action");
      dispatch(getVidoesSuccess(data, "All"));
    })
    .catch((err) => {
      dispatch(getVideosError());
    });
};

export const searchedVideos = (search) => async (dispatch, getState) => {
  await dispatch(getVideosLoading());
  axios
    .get(`/search`, {
      params: {
        part: "snippet",
        q: search,
        maxResults: 20,
        pageToken: getState().videosReducer.nextPageToken,
        type: "video",
        key: key,
      },
    })
    .then(({ data }) => {
      console.log("data", data, "from action");
      dispatch(getVidoesSuccess(data, search));
    })
    .catch((err) => {
      dispatch(getVideosError());
    });
};
