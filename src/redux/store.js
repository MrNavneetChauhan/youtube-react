import { legacy_createStore,applyMiddleware,combineReducers } from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import { videosReducer } from "./videos/videosReducer";
import { playVideoReducer } from "./playvideo/playVideoReducer";
const reducer = combineReducers({
    videosReducer,
    playVideoReducer
})
export const store = legacy_createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));