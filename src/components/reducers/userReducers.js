import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  UPDATE_USER_RESET,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  CLEAR_ERROR,
} from "../contants/userContants";

export const userReducer = (
  state = { user: {} },
  action
) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
    case LOAD_USER_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };

    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };

    case LOGIN_FAIL:
    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    case LOGOUT_SUCCESS:
      return {
        loading: false,
        user: null,
        isAuthenticated: false
      }

    case LOAD_USER_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    
    case LOGOUT_FAIL: 
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER_REQUEST:
      return {
        ...state,
        loading: true,
      }
    
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload
      }
    
    case UPDATE_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case UPDATE_USER_RESET:
      return {
        ...state,
        isUpdated: false,
      }
    default:
      return state;
  }
}

export const getUserDetailReducer = (state = { userDetail: {} }, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        loading: true,
        userDetail: {}
      }

    case GET_USER_SUCCESS:
      return {
        loading: false,
        userDetail: action.payload
      }
    
    case GET_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}

//Clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERROR });
};
