import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { videosReducer } from "./videos/videosReducer";
import { playVideoReducer } from "./playvideo/playVideoReducer";
import { relatedVideoReducer } from "./relatedvideos/relatedvide.reducer";
import { searchReducer } from "./search/search.reducer";
import { authReducer } from "./authentication/auth.reducer";
import { commentReducer } from "./comment/comment.reducer";
import { favouriteReducer } from "./favourite/favourite.reducer";
import {saveReducer} from "./save/save.reducer";
const reducer = combineReducers({
  videosReducer,
  playVideoReducer,
  relatedVideoReducer,
  searchReducer,
  authReducer,
  commentReducer,
  favouriteReducer,
  saveReducer
});
export const store = legacy_createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
