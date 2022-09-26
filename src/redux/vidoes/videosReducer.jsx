import { GET_VIDEOS_FAILURE, GET_VIDEOS_LOADING, GET_VIDEOS_SUCCESS } from "./actionTypes"

const init = {
    isLoading:false,
    isError:false,
    ids:[],
    urls:[]
}

export const videosReducer = (state=init,{type,ids,urls})=>{
    switch(type){
        case GET_VIDEOS_LOADING:return {...state,isLoading:true,isError:false};
        case GET_VIDEOS_SUCCESS:return {...state,isLoading:false,isError:false,ids:ids,urls:urls};
        case GET_VIDEOS_FAILURE:return {...state,isLoading:false,isError:true};
        default:return state;
    }
}