import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

import { createPostReducer, ownerPostReducer, postsReducer } from './components/reducers/postReducers'
import { userReducer } from "./components/reducers/userReducers";

const reducer = combineReducers({
    posts: postsReducer,
    ownerPost: ownerPostReducer,
    user: userReducer,
    createPost: createPostReducer,
})

const middeware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middeware))
);

export default store;