import {
  DEL_SAVED_VIDEO_ERROR,
  DEL_SAVED_VIDEO_REQUEST,
  DEL_SAVED_VIDEO_SUCCESS,
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

export const delSaveVideoRequest = () => {
  return {
    type: DEL_SAVED_VIDEO_REQUEST,
  };
};

export const delSaveVideoSuccess = () => {
  return {
    type: DEL_SAVED_VIDEO_SUCCESS,
  };
};

export const delSaveVideoFailure = () => {
  return {
    type: DEL_SAVED_VIDEO_ERROR,
  };
};

export const gettingSavedVideos = () => (dispatch) => {
  try {
    const user_id = getFromLocalStorage("user_id");
    dispatch(getSavedVideoRequest());
    axios
      .get(
        `https://youtube-by-navneet-server.herokuapp.com/saved?user_id=${user_id}`
      )
      .then(({ data }) => {
        dispatch(getSavedVideoSuccess(data.save));
      })
      .catch((err) => {
        console.log(err.message);
      });
  } catch (err) {
    dispatch(getSavedVideoFailure());
  }
};

export const postingSavedVideos = (toast, payload) => (dispatch) => {
  try {
    let user_id = getFromLocalStorage("user_id");
    let video_id = getFromLocalStorage("v_id");
    payload.user_id = user_id;
    payload.video_id = video_id;
    console.log("save", payload);
    dispatch(postSavedVideoRequest());
    axios
      .post(
        `https://youtube-by-navneet-server.herokuapp.com/saved?user_id=${user_id}&video_id=${video_id}`,
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

export const removingVideo = (toast,id) => (dispatch) => {
  try {
    console.log("id",id)
    dispatch(delSaveVideoRequest());
    axios
      .delete(
        `https://youtube-by-navneet-server.herokuapp.com/saved/${id}`
      )
      .then(({ data }) => {
        const { status, message, description } = data;
        dispatch(delSaveVideoSuccess());
        dispatch(gettingSavedVideos());
        notification(toast, message, description, status);
      });
  } catch (err) {
    dispatch(delSaveVideoFailure());
  }
};
