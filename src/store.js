import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import {
  addCommentReducer,
  createPostReducer,
  dislikePostReducer,
  getPostDetailReducer,
  likePostReducer,
  ownerPostReducer,
  postsReducer,
  
} from "./components/reducers/postReducers";
import { getUserDetailReducer, profileReducer, userReducer } from "./components/reducers/userReducers";
import { provideReducer } from "./components/reducers/provideReducers";

const rootReducer = combineReducers({
  posts: postsReducer,
  ownerPost: ownerPostReducer,
  user: userReducer,
  createPost: createPostReducer,
  postDetail: getPostDetailReducer,
  postLike: likePostReducer,
  postDislike: dislikePostReducer,
  addComment: addCommentReducer,
  profile: profileReducer,
  getUserDetail: getUserDetailReducer,
  getProvide: provideReducer,
});

const store = configureStore({
  reducer: rootReducer 
});

export default store;
