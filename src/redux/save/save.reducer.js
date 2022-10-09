import { GET_SAVED_VIDEO_ERROR, GET_SAVED_VIDEO_REQUEST, GET_SAVED_VIDEO_SUCCESS, POST_SAVED_VIDEO_ERROR, POST_SAVED_VIDEO_REQUEST, POST_SAVED_VIDEO_SUCCESS } from "./actionTypes"

const init = {
    isLoading:false,
    isError:false,
    saved:[]
}

export const saveReducer = (state=init,{type,payload})=>{
    switch(type){
        case POST_SAVED_VIDEO_REQUEST:return {...state,isLoading:true,isError:false};
        case POST_SAVED_VIDEO_SUCCESS:return {...state,isLoading:false,isError:false};
        case POST_SAVED_VIDEO_ERROR:return {...state,isLoading:false,isError:true};
        case GET_SAVED_VIDEO_REQUEST:return {...state,isLoading:true,isError:false};
        case GET_SAVED_VIDEO_SUCCESS:return {...state,isLoading:false,isError:false,saved:payload};
        case GET_SAVED_VIDEO_ERROR:return {...state,isLoading:false,isError:true};
        default:return state;
    }
}