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
    CREATE_POST_RESET,
    CLEAR_ERROR, 
} from '../contants/postContants';

export const postsReducer = (state = { posts: [] }, action) => {
    switch (action.type) {
        case ALL_POST_REQUEST:
            return {
                loading: true,
                posts: []
            }
        case ALL_POST_SUCCESS:
            return {
                loading: false,
                posts: action.payload
            }
        case ALL_POST_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERROR:
            return {
                ...state,
                error: null,
            }
        default:
            return state;
    }
}

export const ownerPostReducer = (state = { ownerPost: {} }, action) => {
    switch (action.type) {
        case OWNER_POST_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case OWNER_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                ownerPost: action.payload
            }
        case OWNER_POST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case CLEAR_ERROR:
            return {
                ...state,
                error: null,
            }
        default:
            return state;
    }
}

export const createPostReducer = (state = { post: {} }, action) => {
    switch (action.type) {
        case CREATE_POST_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case CREATE_POST_SUCCESS:
            return {
                loading: false,
                post: action.payload.post
            }

        case CREATE_POST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case CREATE_POST_RESET:
            return {
                ...state,
                success: false,
            }
        
        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}

