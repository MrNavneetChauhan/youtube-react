import { legacy_createStore,applyMiddleware,combineReducers } from "redux";
import {composeWithDevtools} from "redux-devtools-extension";
export const store = legacy_createStore();
