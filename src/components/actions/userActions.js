import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOAD_USER_SUCCESS,
  LOAD_USER_REQUEST,
  LOAD_USER_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  CLEAR_ERROR,
} from "../contants/userContants";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `/auth/login`,
      { email, password },
      config
    );

    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};

export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST });

    const config = { headers: { "Content-Type": "application/json" }}

    const { data } = await axios.post(`/auth/register`, userData, config);

    dispatch({ type: REGISTER_SUCCESS, payload: data.user })
  } catch(error) {
    dispatch({ type: REGISTER_FAIL, payload: error.response.data.message})
  }
}

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const { data } = await axios.get(`/user`);

    dispatch({ type: LOAD_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    await axios.get('/auth/logout');

    dispatch({ type: LOGOUT_SUCCESS })

  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
  }
};

export const updateUser = (userId, userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_USER_REQUEST });

    const config = { headers: {"Content-Type": "application/json" } };

    const { data } = await axios.put(`/user/${userId}`, userData, config)

    dispatch({ type: UPDATE_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UPDATE_USER_FAIL, payload: error.response.data.message })
  }
}

export const getUserDetail = (userId) => async (dispatch) => {
  try {
    dispatch({ type: GET_USER_REQUEST });

    const { data } = await axios.get(`/user/${userId}`);

    dispatch({ type: GET_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_USER_FAIL, payload: error.response.data.message })
  }
}

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERROR });
};
