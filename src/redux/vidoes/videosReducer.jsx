import {
    GET_CHANNEL_FAILURE,
  GET_CHANNEL_LOADING,
  GET_CHANNEL_SUCCESS,
  GET_VIDEOS_FAILURE,
  GET_VIDEOS_LOADING,
  GET_VIDEOS_SUCCESS,
} from "./actionTypes";

const init = {
  isLoading: false,
  isError: false,
  posters:[],
  channels:[]
};

export const videosReducer = (state = init, { type, payload,channels }) => {
  switch (type) {
    case GET_VIDEOS_LOADING:
      return { ...state, isLoading: true, isError: false };
    case GET_VIDEOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        posters:payload
      };
    case GET_VIDEOS_FAILURE:
      return { ...state, isLoading: false, isError: true };
      case GET_CHANNEL_FAILURE:return {...state,isLoading:false,isError:true};
      case GET_CHANNEL_LOADING:return {...state,isLoading:true,isError:false};
      case GET_CHANNEL_SUCCESS:return {...state,isLoading:false,isError:false,channels:channels}
    default:
      return state;
  }
};
