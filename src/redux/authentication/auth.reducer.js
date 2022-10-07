import { getFromLocalStorage } from "../../utils/localStorage";
import { USER_GET_FAILURE, USER_GET_REQUEST, USER_GET_SUCCESS } from "./actionTypes";

export const init = {
    isLoading :false,
    isError:false,
    token:getFromLocalStorage("token") || null,
    name:getFromLocalStorage("name") || null,
    url:getFromLocalStorage("url") || null
} 

export const authReducer = (state = init,{type,payload})=>{
    switch(type){
        case USER_GET_REQUEST:return {...state,isLoading:true,isError:false};
        case USER_GET_SUCCESS:return {...state,isLoading:false,isError:false,token:payload.accessToken,name:payload.displayName,url:payload.photoURL};
        case USER_GET_FAILURE:return {...state,isLoading:false,isError:true};
        default:return state;
    }
}