import { legacy_createStore,applyMiddleware,combineReducers } from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import { videosReducer } from "./vidoes/videosReducer";
const reducer = combineReducers({
    videosReducer
})
export const store = legacy_createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));