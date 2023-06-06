import axios from "axios";
import {
  ALL_POST_REQUEST,
  ALL_POST_SUCCESS,
  ALL_POST_FAIL,
  OWNER_POST_REQUEST,
  OWNER_POST_SUCCESS,
  OWNER_POST_FAIL,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL,
  GET_POST_DETAIL_REQUEST,
  GET_POST_DETAIL_SUCCESS,
  GET_POST_DETAIL_FAIL,
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
  LIKE_POST_FAIL,
  DISLIKE_POST_REQUEST,
  DISLIKE_POST_SUCCESS,
  DISLIKE_POST_FAIL,
  DISLIKE_POST_RESET,
  GET_POST_PROFILE_REQUEST,
  GET_POST_PROFILE_SUCCESS,
  GET_POST_PROFILE_FAIL,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAIL,
  CLEAR_ERROR,
} from "../contants/postContants";

export const getPost = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_POST_REQUEST });

    const { data } = await axios.get("/post");

    dispatch({
      type: ALL_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_POST_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getOwnerPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: OWNER_POST_REQUEST });

    const { data } = await axios.get("/post/owner");

    dispatch({
      type: OWNER_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: OWNER_POST_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const createPost = (postData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_POST_REQUEST });

    const config = { headers: {"Content-Type": "application/json" } };

    const { data } = await axios.post(
      `/post`,
      postData,
      config
    );

    dispatch({
      type: CREATE_POST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: CREATE_POST_FAIL,
      payload: error.response.data.message,
    })
  }
}

export const getPostDetail = (postId) => async (dispatch) => {
  try {
    dispatch({ type: GET_POST_DETAIL_REQUEST });

    const { data } = await axios.get(`/post/${postId}`)

    dispatch({
      type: GET_POST_DETAIL_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: GET_POST_DETAIL_FAIL,
      payload: error.response.data.message,
    })
  }
}

export const likePost = (postId, userId) => async (dispatch) => {
  try {
    dispatch({ type: LIKE_POST_REQUEST });

    const { data } = await axios.post(`/post/like/like/${postId}`, userId);

    dispatch({ type: LIKE_POST_SUCCESS, payload: data});
  } catch (error) {
    dispatch({ type: LIKE_POST_FAIL, payload: error.response.data.message });
  }
}

export const dislikePost = (postId, userId) => async (dispatch) => {
  try {
    dispatch({ type: DISLIKE_POST_REQUEST });

    const { data } = await axios.post(`/post/like/unlike/${postId}`, userId);

    dispatch({ type: DISLIKE_POST_SUCCESS, payload: data});
  } catch (error) {
    dispatch({ type: DISLIKE_POST_FAIL, payload: error.response.data.message });
  }
}

export const getPostProfile = (userId) => async (dispatch) => {
  try {
    dispatch({ type: GET_POST_PROFILE_REQUEST });

    const { data } = await axios.get(`/post/profile/${userId}`)

    dispatch({ type: GET_POST_PROFILE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: GET_POST_PROFILE_FAIL, payload: error.response.data.message })
  }
};

export const createComment = (userId, postId, content) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_COMMENT_REQUEST });

    const config = { headers: {"Content-Type": "application/json" } };

    const { data } = await axios.post(
      `/post/comment/${postId}`,
      {userId, postId, content},
      config 
    );

    dispatch({ type: CREATE_COMMENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CREATE_COMMENT_FAIL, payload: error.response.data.message })
  }
}

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERROR });
};
