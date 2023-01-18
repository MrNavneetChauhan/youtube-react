import axios from "axios";
import {
  COMMENT_GET_FAILURE,
  COMMENT_GET_REQUEST,
  COMMENT_GET_SUCCESS,
  COMMENT_POST_FAILURE,
  COMMENT_POST_REQUEST,
  COMMENT_POST_SUCCESS,
} from "./actionTypes";
import { notification } from "../../utils/extraFunction";
import { getFromLocalStorage } from "../../utils/localStorage";
export const commentPostRequest = () => {
  return {
    type: COMMENT_POST_REQUEST,
  };
};

export const commentPostSuccess = () => {
  return {
    type: COMMENT_POST_SUCCESS,
  };
};

export const commentPostFailure = () => {
  return {
    type: COMMENT_POST_FAILURE,
  };
};

export const commentGetRequest = () => {
  return {
    type: COMMENT_GET_REQUEST,
  };
};
export const commentGetSuccess = (payload) => {
  return {
    type: COMMENT_GET_SUCCESS,
    payload,
  };
};
export const commentGetFailure = () => {
  return {
    type: COMMENT_GET_FAILURE,
  };
};

export const posttingComment = (toast, payload) => (dispatch) => {
  try {
    console.log("comment is here", payload);
    dispatch(commentPostRequest());
    axios
      .post("https://backy-dao7.onrender.com/comments", payload)
      .then((res) => {
        dispatch(commentPostSuccess());
        notification(
          toast,
          "Comment Added",
          "You have posted comment successully",
          "success"
        );
        dispatch(gettingComments());
      })
      .catch((err) => {
        let user_id = getFromLocalStorage("user_id");
        if (!user_id) {
          notification(
            toast,
            "Login Required",
            "Please login first to add comment",
            "info"
          );
        } else {
          notification(
            toast,
            "Blank Comment",
            "Please enter something to post comment",
            "info"
          );
        }
        dispatch(commentPostSuccess());
      });
  } catch (err) {
    dispatch(commentPostFailure());
    notification(
      toast,
      "Please try again later",
      "Please check your internet connection",
      "error"
    );
  }
};

export const gettingComments = () => (dispatch) => {
  try {
    let video_id = getFromLocalStorage("v_id");
    dispatch(commentGetRequest());
    axios
      .get(
        `https://backy-dao7.onrender.com/comments?videoId=${video_id}`
      )
      .then(({ data }) => {
        dispatch(commentGetSuccess(data.comments));
      })
      .catch((err) => {
        console.log(err.message);
      });
  } catch (err) {
    dispatch(commentGetFailure());
  }
};
