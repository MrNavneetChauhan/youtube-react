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

export const getVidoesSuccess = (ids,urls) => {
  return {
    type: GET_VIDEOS_SUCCESS,
    ids,
    urls
  };
};

export const getVideosError = (payload) => {
  return {
    type: GET_VIDEOS_FAILURE,
  };
};

export const gettingVideosData = () => (dispatch) => {
  dispatch(getVideosLoading());
  axios
    .get(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&order=viewCount&q=Nasa&key=AIzaSyBvt7iWnHLeRYtik2Vyb0Eqc8D1Zs44XxA"
    )
    .then(({ data }) => {
      let ids = [];
      let urls = [];
      for (let x of data?.items) {
        ids.push(x?.id?.videoId);
        const { snippet } = x;
        const {
          thumbnails: { medium },
        } = snippet;
        urls.push(medium);
      }

      dispatch(getVidoesSuccess(ids, urls));
    })
    .catch((err) => {
      dispatch(getVideosError());
    });
};
