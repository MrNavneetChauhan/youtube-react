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

export const getVidoesSuccess = (payload,searchParam) => {
  return {
    type: GET_VIDEOS_SUCCESS,
    payload:payload.items,
    nextPageToken:payload.nextPageToken,
    searchParam
  };
};

export const getVideosError = () => {
  return {
    type: GET_VIDEOS_FAILURE,
  };
};




// var key =  "AIzaSyBvt7iWnHLeRYtik2Vyb0Eqc8D1Zs44XxA"
var key =  "AIzaSyD41hkSAxKHA9hdnkguwHgdIdYsqwn7m9k"

export const gettingVideosData = () => (dispatch,getState) => {
  dispatch(getVideosLoading());
  axios
    .get(`/videos`,{
      params:{
        part:"snippet,contentDetails,statistics",
        chart:"mostPopular",
        maxResults:20,
        pageToken:getState().videosReducer.nextPageToken,
        key:key
      }
    })
    .then(({ data }) => {
      console.log("data",data,"from action")
      dispatch(getVidoesSuccess(data,"All"));
    })
    .catch((err) => {
      dispatch(getVideosError());
    });
};


export const searchedVideos = (search) => (dispatch,getState) => {
  dispatch(getVideosLoading());
  axios
    .get(`/search`,{
      params:{
        part:"snippet",
        q:search,
        maxResults:20,
        pageToken:getState().videosReducer.nextPageToken,
        type:"video",
        key:key
      }
    })
    .then(({ data }) => {
      console.log("data",data,"from action")
      dispatch(getVidoesSuccess(data,search));
    })
    .catch((err) => {
      dispatch(getVideosError());
    });
};
