import {
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  USER_GET_FAILURE,
  USER_GET_REQUEST,
  USER_GET_SUCCESS,
} from "./actionTypes";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  removeItemFromLocalStorage,
  setToLocalStorage,
} from "../../utils/localStorage";
import axios from "axios";
import { notification } from "../../utils/extraFunction";
export const userGetRequest = () => {
  return {
    type: USER_GET_REQUEST,
  };
};

export const userGetSuccess = (payload) => {
  return {
    type: USER_GET_SUCCESS,
    payload,
  };
};

export const userGetFailure = () => {
  return {
    type: USER_GET_FAILURE,
  };
};

export const logOutRequest = () => {
  return {
    type: LOG_OUT_REQUEST,
  };
};

export const logOutSuccess = () => {
  return {
    type: LOG_OUT_SUCCESS,
  };
};

export const logOutFailure = () => {
  return {
    type: LOG_OUT_FAILURE,
  };
};

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const Provider = new GoogleAuthProvider();

export const fetchingUser = (toast) => (dispatch) => {
  try {
    dispatch(userGetRequest());
    signInWithPopup(auth, Provider)
      .then((data) => {
        console.log("data", data);
        let { user } = data;
        let { accessToken, displayName, photoURL, email } = user;
        console.log("ye hai email", email);
        setToLocalStorage("token", accessToken);
        setToLocalStorage("name", displayName);
        setToLocalStorage("url", photoURL);
        dispatch(userGetSuccess({ accessToken, displayName, photoURL }));
        axios
          .post("https://youtube-by-navneet-server.herokuapp.com/users", {
            username: displayName,
            email_id: email,
            accessToken: accessToken,
            image_url: photoURL,
          })
          .then(({ data }) => {
            const { status, user_id } = data;
            setToLocalStorage("user_id", user_id);
            notification(
              toast,
              "Logged In Successfully",
              "You have logged in successfully",
              status
            );
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  } catch (err) {
    dispatch(userGetFailure());
  }
};

export const loggingOut = (toast,onClose) => (dispatch) => {
  try {
    dispatch(logOutRequest());
    removeItemFromLocalStorage("token");
    removeItemFromLocalStorage("user_id");
    removeItemFromLocalStorage("url");
    notification(toast,"Logout Successful","You are logout successfully","success")
    dispatch(logOutSuccess());
    onClose()
  } catch (err) {
    dispatch(logOutFailure());
  }
};
