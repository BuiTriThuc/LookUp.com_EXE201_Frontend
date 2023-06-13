import { 
    GET_PROVIDE_REQUEST,
    GET_PROVIDE_SUCCESS,
    GET_PROVIDE_FAIL,
    GET_DISTRICT_REQUEST,
    GET_DISTRICT_SUCCESS,
    GET_DISTRICT_FAIL,
    GET_WARD_REQUEST,
    GET_WARD_SUCCESS,
    GET_WARD_FAIL 
} from "../contants/provideContants";

export const provideReducer = (state = { provides: [], districts: [], wards: [] }, action) => {
    switch (action.type) {
        case GET_PROVIDE_REQUEST:
        case GET_DISTRICT_REQUEST:
        case GET_WARD_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GET_PROVIDE_SUCCESS:
            return {
                ...state,
                loading: true,
                provides: action.payload
            }
        case GET_DISTRICT_SUCCESS:
            return {
                ...state,
                loading: false,
                districts: action.payload.districts
            }
        case GET_WARD_SUCCESS:
            return {
                ...state,
                loading: false,
                wards: action.payload.wards
            }
        case GET_PROVIDE_FAIL:
        case GET_DISTRICT_FAIL:
        case GET_WARD_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}