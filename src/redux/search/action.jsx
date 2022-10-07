import axios from "axios";
import {
  SEARCH_DATA_ERROR,
  SEARCH_DATA_LOADING,
  SEARCH_DATA_SUCCESS,
} from "./actionTypes";

export const searchDataLoading = () => {
  return {
    type: SEARCH_DATA_LOADING,
  };
};

export const searchDataSuccess = (payload) => {
  return {
    type: SEARCH_DATA_SUCCESS,
    payload,
  };
};

export const searchDataError = () => {
  return {
    type: SEARCH_DATA_ERROR,
  };
};

export const gettingSearchData = (search) => (dispatch) => {
  try {
    dispatch(searchDataLoading());
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${search}&type=video&key=${process.env.REACT_APP_YT_KEY}`
      )
      .then(({ data }) => {
        dispatch(searchDataSuccess(data.items))
      });
  } catch (err) {
    dispatch(searchDataError());
  }
};
