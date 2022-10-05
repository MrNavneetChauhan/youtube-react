import { GET_RELATED_VIDEOS_ERROR, GET_RELATED_VIDEOS_LOADING, GET_RELATED_VIDEOS_SUCCESS } from "./actionTypes"

const init = {
    isLoading:false,
    isError:false,
    relatedVideos:[]
}

export const relatedVideoReducer = (state=init,{type,payload})=>{
    switch(type){
        case GET_RELATED_VIDEOS_LOADING:return {...state,isLoading:true,isError:false};
        case GET_RELATED_VIDEOS_SUCCESS:return {...state,isLoading:false,isError:false,relatedVideos:payload}
        case GET_RELATED_VIDEOS_ERROR:return {...state,isLoading:false,isError:true};
        default:return state;
    }
}