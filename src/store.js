import { createStore, combineReducers, applyMiddleware } from "redux";
import { configureStore, createReducer } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import {
  createPostReducer,
  getPostDetailReducer,
  ownerPostReducer,
  postsReducer,
} from "./components/reducers/postReducers";
import { userReducer } from "./components/reducers/userReducers";

const rootReducer = combineReducers({
  posts: postsReducer,
  ownerPost: ownerPostReducer,
  user: userReducer,
  createPost: createPostReducer,
  postDetail: getPostDetailReducer,
});

const store = configureStore({
  reducer: rootReducer 
});

export default store;
