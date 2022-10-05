import axios from "axios";
import { getFromLocalStorage } from "../../utils/localStorage";
import {
  EXTRA_TYPES_DETAILS,
  VIDEO_DETAILS_FAILURE,
  VIDEO_DETAILS_LOADING,
  VIDEO_DETAILS_SUCCESS,
} from "./actionTypes";

export const videoDetailsLoading = () => {
  return {
    type: VIDEO_DETAILS_LOADING,
  };
};

export const videoDetailsSuccess = (payload) => {
  return {
    type: VIDEO_DETAILS_SUCCESS,
    payload,
  };
};

export const videoDetailsFailure = (payload) => {
  return {
    type: VIDEO_DETAILS_FAILURE,
  };
};

export const extraDetails = (payload)=>{
  return {
    type:EXTRA_TYPES_DETAILS,
    payload
  }
}

export const getSpecificVideoDetails = (id) => (dispatch) => {
  let c_id = getFromLocalStorage("c_id");
  try {
    dispatch(videoDetailsLoading());
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/channels?part=statistics&part=snippet&part=contentDetails&part=localizations&id=${c_id}&pageToken=nextPageToken&key=AIzaSyC7gR712tr_ZIszHk-xEJGz7oO65daeQ20`
      )
      .then(({ data }) => {
       dispatch(videoDetailsSuccess(data.items[0]))
      });

      axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=statistics&part=snippet&part=contentDetails&id=${id}&key=AIzaSyC7gR712tr_ZIszHk-xEJGz7oO65daeQ20`).then(({data})=>{
        dispatch(extraDetails(data.items[0]))
      })

  } catch (err) {
    dispatch(videoDetailsFailure());
  }
};
