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
  // var key = "AIzaSyDxd46ApMcIDxCdgKbAX5eH13OqTErTDYM"
  var key = "AIzaSyAcNLcGQoNeXAlaziIiKK90kJh0WenPaVc";
  try {
    dispatch(searchDataLoading());
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${search}&type=video&key=${key}`
      )
      .then(({ data }) => {
        dispatch(searchDataSuccess(data.items))
      });
  } catch (err) {
    dispatch(searchDataError());
  }
};
