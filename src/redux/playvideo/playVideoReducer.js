import {
  EXTRA_TYPES_DETAILS,
  VIDEO_DETAILS_FAILURE,
  VIDEO_DETAILS_LOADING,
  VIDEO_DETAILS_SUCCESS,
} from "./actionTypes";

const init = {
  isLoading: false,
  isError: false,
  details: {},
  extraDetails:{}
};

export const playVideoReducer = (state = init, { type, payload }) => {
  switch (type) {
    case VIDEO_DETAILS_LOADING:
      return { ...state, isLoading: true, isError: false };
    case VIDEO_DETAILS_SUCCESS:
      return { ...state, isLoading: false, isError: false, details: payload };
    case VIDEO_DETAILS_FAILURE:
      return { ...state, isLoading: false, isError: true };
      case EXTRA_TYPES_DETAILS:return {...state,isLoading:false,isError:false,extraDetails:payload}
    default:
      return state;
  }
};
