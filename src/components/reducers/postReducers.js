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
    GET_POST_DETAIL_REQUEST,
    GET_POST_DETAIL_SUCCESS,
    GET_POST_DETAIL_FAIL,
    CLEAR_ERROR,
    LIKE_POST_REQUEST,
    LIKE_POST_SUCCESS,
    LIKE_POST_FAIL, 
    LIKE_POST_RESET,
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
    CREATE_COMMENT_RESET,
} from '../contants/postContants';

export const postsReducer = (state = { posts: [] }, action) => {
    switch (action.type) {
        case ALL_POST_REQUEST:
        case GET_POST_PROFILE_REQUEST:
            return {
                loading: true,
                posts: []
            }
        case ALL_POST_SUCCESS:
        case GET_POST_PROFILE_SUCCESS:
            return {
                loading: false,
                posts: action.payload
            }
        case ALL_POST_FAIL:
        case GET_POST_PROFILE_FAIL:
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
                success: false,
                loading: true,
            }

        case CREATE_POST_SUCCESS:
            return {
                success: true,
                loading: false,
                post: action.payload
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

export const getPostDetailReducer = (state = { postDetail: {} }, action) => {
    switch (action.type) {
        case GET_POST_DETAIL_REQUEST:
            return {
                ...state,
                success: false,
                loading: true,
            }

        case GET_POST_DETAIL_SUCCESS:
            return {
                success: true,
                loading: false,
                postDetail: action.payload
            }

        case GET_POST_DETAIL_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
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

export const likePostReducer = (state = { postLike: {} }, action) => {
    switch (action.type) {
        case LIKE_POST_REQUEST:
            return {
                ...state,
                success: false,
                loading: true,
            }
        case LIKE_POST_SUCCESS:
            return {
                success: true,
                loading: false,
                postLike: action.payload
            }
        case LIKE_POST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case LIKE_POST_RESET:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}

export const dislikePostReducer = (state = { postDislike: {} }, action) => {
    switch (action.type) {
        case DISLIKE_POST_REQUEST:
            return {
                ...state,
                success: false,
                loading: true,
            }
        case DISLIKE_POST_SUCCESS:
            return {
                success: true,
                loading: false,
                postDislike: action.payload
            }
        case DISLIKE_POST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case DISLIKE_POST_RESET:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
};

export const addCommentReducer = (state = { postComment: {} }, action) => {
    switch (action.type) {
        case CREATE_COMMENT_REQUEST:
            return {
                ...state,
                success: false,
                loading: true,
            }
        case CREATE_COMMENT_SUCCESS:
            return {
                success: true,
                loading: false,
                postComment: action.payload
            }
        case CREATE_COMMENT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case CREATE_COMMENT_RESET:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}




