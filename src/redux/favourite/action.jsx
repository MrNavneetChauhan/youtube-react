import axios from "axios";
import { notification } from "../../utils/extraFunction";
import { getFromLocalStorage, setToLocalStorage } from "../../utils/localStorage";
import {
  GET_LIKED_VIDEO_ERROR,
  GET_LIKED_VIDEO_REQUEST,
  GET_LIKED_VIDEO_SUCCESS,
  POST_DISLIKED_VIDEO_ERROR,
  POST_DISLIKED_VIDEO_REQUEST,
  POST_DISLIKED_VIDEO_SUCCESS,
  POST_LIKED_VIDEO_ERROR,
  POST_LIKED_VIDEO_REQUEST,
  POST_LIKED_VIDEO_SUCCESS,
} from "./actionTypes";

export const addLikedVideoRequest = () => {
  return {
    type: POST_LIKED_VIDEO_REQUEST,
  };
};

export const addLikedVideoSuccess = () => {
  return {
    type: POST_LIKED_VIDEO_SUCCESS,
  };
};

export const addLikedVideoFailure = () => {
  return {
    type: POST_LIKED_VIDEO_ERROR,
  };
};

export const getLikedVideoRequest = () => {
  return {
    type: GET_LIKED_VIDEO_REQUEST,
  };
};

export const getLikedVideSuccess = (payload) => {
  return {
    type: GET_LIKED_VIDEO_SUCCESS,
    payload,
  };
};

export const getLikedVideoError = () => {
  return {
    type: GET_LIKED_VIDEO_ERROR,
  };
};

export const addDisLikedVideoRequest = () => {
  return {
    type: POST_DISLIKED_VIDEO_REQUEST,
  };
};

export const addDisLikedVideoSuccess = () => {
  return {
    type: POST_DISLIKED_VIDEO_SUCCESS,
  };
};

export const addDisLikedVideoFailure = () => {
  return {
    type: POST_DISLIKED_VIDEO_ERROR,
  };
};

export const postingLikedVideos = (toast, payload) => (dispatch) => {
  console.log("payload",payload)
  try {
    let user_id = getFromLocalStorage("user_id");
    let video_id = getFromLocalStorage("v_id");
    payload.user_id = user_id;
    payload.video_id = video_id;
    console.log("payload", payload);
    dispatch(addLikedVideoRequest());
    axios
      .post(
        `https://youtube-by-navneet-server.herokuapp.com/favourite?user_id=${user_id}&video_id=${video_id}`,
        payload
      )
      .then(({ data }) => {
        dispatch(addLikedVideoSuccess());
        const { status, message,del_id } = data;
        setToLocalStorage("del_id",del_id)
        notification(toast, "Added", message, status);
      })
      .catch((err) => {
        console.log(err);
        if(!user_id){
          notification(
            toast,
            "Login Required",
            "You need to Login first",
            "info"
          );
        }else{
          notification(
            toast,
            "Not Liked",
            "This video is already  added to the liked section ",
            "info"
          );
        }
        dispatch(addLikedVideoSuccess());
      });
  } catch (err) {
    dispatch(addLikedVideoFailure());
  }
};

export const gettingLikedVideos = () => (dispatch) => {
  try {
    const user_id = getFromLocalStorage("user_id");
    dispatch(getLikedVideoRequest());
    axios
      .get(
        `https://youtube-by-navneet-server.herokuapp.com/favourite?user_id=${user_id}`
      )
      .then(({ data }) => {
        dispatch(getLikedVideSuccess(data.favourite))
      })
      .catch((err) => {
        console.log(err.message);
      });
  } catch (err) {
    dispatch(getLikedVideoError());
  }
};

export const dislikingVideo = (toast,id) => (dispatch) => {
  try {
    let ids = id || getFromLocalStorage("del_id")
    dispatch(addDisLikedVideoRequest());
    axios
      .delete(`https://youtube-by-navneet-server.herokuapp.com/favourite/${ids}`)
      .then(({ data }) => {
        const { status, message, description } = data;
        dispatch(addDisLikedVideoSuccess());
        dispatch(gettingLikedVideos());
        notification(toast, message, description, status);
      });
  } catch (err) {
    dispatch(addDisLikedVideoFailure());
  }
};
