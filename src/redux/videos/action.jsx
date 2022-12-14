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


export const gettingVideosData = () => async (dispatch, getState) => {
  dispatch(getVideosLoading());
  await axios
    .get(`/videos`, {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        maxResults: 20,
        pageToken: getState().videosReducer.nextPageToken,
        key: process.env.REACT_APP_YT_KEY,
      },
    })
    .then(({ data }) => {
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
        key: process.env.REACT_APP_YT_KEY,
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
