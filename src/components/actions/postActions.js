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

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERROR });
};
