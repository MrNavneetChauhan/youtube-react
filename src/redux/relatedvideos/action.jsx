import axios from "axios";
import { getFromLocalStorage } from "../../utils/localStorage";
import {
  GET_RELATED_VIDEOS_ERROR,
  GET_RELATED_VIDEOS_LOADING,
  GET_RELATED_VIDEOS_SUCCESS,
} from "./actionTypes";

export const getRelatedVideosLoading = () => {
  return {
    type: GET_RELATED_VIDEOS_LOADING,
  };
};

export const getRelatedVideosSuccess = (payload) => {
  return {
    type: GET_RELATED_VIDEOS_SUCCESS,
    payload,
  };
};

export const getRelatedVideosFailure = () => {
  return {
    type: GET_RELATED_VIDEOS_ERROR,
  };
};

export const gettingRelatedContent = (id) => (dispatch) => {
  // var key = "AIzaSyC7gR712tr_ZIszHk-xEJGz7oO65daeQ20";
  // var key = "AIzaSyDxd46ApMcIDxCdgKbAX5eH13OqTErTDYM";
  var key = "AIzaSyAcNLcGQoNeXAlaziIiKK90kJh0WenPaVc";
  try {
    dispatch(getRelatedVideosLoading());
    axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&type=video&relatedToVideoId=${id}&key=${key}`).then(({data})=>{
      dispatch(getRelatedVideosSuccess(data.items))
    });
  } catch (err) {
    dispatch(getRelatedVideosFailure());
  }
};
