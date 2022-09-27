import {
  GET_CHANNEL_FAILURE,
  GET_CHANNEL_LOADING,
  GET_CHANNEL_SUCCESS,
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

export const getVidoesSuccess = (payload) => {
  return {
    type: GET_VIDEOS_SUCCESS,
    payload,
  };
};

export const getVideosError = () => {
  return {
    type: GET_VIDEOS_FAILURE,
  };
};

export const getChannelLoading = () => {
  return {
    type: GET_CHANNEL_LOADING,
  };
};

export const getChannelSuccess = (channels) => {
  return {
    type: GET_CHANNEL_SUCCESS,
    channels,
  };
};

export const getChannelError = () => {
  return {
    type: GET_CHANNEL_FAILURE,
  };
};

// var key =  "AIzaSyBvt7iWnHLeRYtik2Vyb0Eqc8D1Zs44XxA"
// var key =  "AIzaSyD41hkSAxKHA9hdnkguwHgdIdYsqwn7m9k"
// var key =  "AIzaSyCVVszc0u-8aUBeMJEk9V05dJPWeFGS-B0"
// var key =  "AIzaSyDxLeAHaW7iAPosvEHn4UqzWIdCNb29dMU"
// var key =  "AIzaSyC7gR712tr_ZIszHk-xEJGz7oO65daeQ20"
// var key =  "AIzaSyAvAgJEWS5JlDu-MFT2WOCFBTzzYtjp5kU"
// var key = "AIzaSyCsRIuf_pMcRlCB2gZ2GCFlOIqelxHSFC0";
// var key = "AIzaSyC2np_M715o9hKi1PfaJzi0R6jzCvOkKWg";
// var key = "AIzaSyAcNLcGQoNeXAlaziIiKK90kJh0WenPaVc";
// var key = "AIzaSyAdeiaus67QmV3uyfwjIjSnWBH90q5_NJ0";
// var key = "AIzaSyDpx13edRT2DX8saUFD1ndmKt8ag1hkUng";
// var key  = "AIzaSyBLhDDm8FW4acup89dHpsUF4r0lxgcSiLc";
// var key ="AIzaSyBYRO8aYIij_BRkhUT108XC-n1qUqIg52w";
var key = "AIzaSyAs66ROVmHWci7f367TC23hsSK4M3g_iPA";
export const gettingVideosData = (search) => (dispatch) => {
  dispatch(getVideosLoading());
  axios
    .get(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=65&order=viewCount&q=${search}&key=${key}`
    )
    .then(({ data }) => {
      dispatch(getVidoesSuccess(data.items));
    })
    .catch((err) => {
      dispatch(getVideosError());
    });
};

export const gettingChannelInfo = (posters, arr) => (dispatch) => {
  dispatch(getVideosLoading());
  try {
    for (let x of posters) {
      const {
        snippet: { channelId },
      } = x;
      axios
        .get(
          `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${key}`
        )
        .then(({ data }) => {
          arr.push(data);
        });
    }
    if (arr.length !== 0) {
      dispatch(getChannelSuccess(arr));
    }
  } catch (err) {
    dispatch(getChannelError());
  }
};
