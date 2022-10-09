import {
  GET_SAVED_VIDEO_ERROR,
  GET_SAVED_VIDEO_REQUEST,
  GET_SAVED_VIDEO_SUCCESS,
  POST_SAVED_VIDEO_ERROR,
  POST_SAVED_VIDEO_REQUEST,
  POST_SAVED_VIDEO_SUCCESS,
} from "./actionTypes";
import { getFromLocalStorage } from "../../utils/localStorage";
import { notification } from "../../utils/extraFunction";
import axios from "axios";
export const postSavedVideoRequest = () => {
  return {
    type: POST_SAVED_VIDEO_REQUEST,
  };
};

export const postSavedVideoSuccess = () => {
  return {
    type: POST_SAVED_VIDEO_SUCCESS,
  };
};

export const postSavedVideoFailure = () => {
  return {
    type: POST_SAVED_VIDEO_ERROR,
  };
};

export const getSavedVideoRequest = () => {
  return {
    type: GET_SAVED_VIDEO_REQUEST,
  };
};

export const getSavedVideoSuccess = (payload) => {
  return {
    type: GET_SAVED_VIDEO_SUCCESS,
    payload,
  };
};

export const getSavedVideoFailure = () => {
  return {
    type: GET_SAVED_VIDEO_ERROR,
  };
};

export const gettingSavedVideos = () => (dispatch) => {
  try {
  } catch (err) {}
};

export const postingSavedVideos = (toast, payload) => (dispatch) => {
  try {
    let user_id = getFromLocalStorage("user_id");
    let video_id = getFromLocalStorage("v_id");
    payload.user_id = user_id;
    payload.video_id = video_id;
    console.log("payload", payload);
    dispatch(postSavedVideoRequest());
    axios
      .post(
        `https://youtube-by-navneet-server.herokuapp.com/save?user_id=${user_id}&video_id=${video_id}`,
        payload
      )
      .then(({ data }) => {
        dispatch(postSavedVideoSuccess());
        const { status, message } = data;
        notification(toast, "Video is Saved", message, status);
      })
      .catch((err) => {
        console.log(err);
        notification(
          toast,
          "Not added",
          "This video is already  added to the saved section "
        );
      });
  } catch (err) {
    dispatch(postSavedVideoFailure());
  }
};
