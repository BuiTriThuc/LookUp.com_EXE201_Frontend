import axios from "axios";
import { 
    GET_PROVIDE_REQUEST,
    GET_PROVIDE_SUCCESS,
    GET_PROVIDE_FAIL,
    GET_DISTRICT_REQUEST,
    GET_DISTRICT_SUCCESS,
    GET_DISTRICT_FAIL,
    GET_WARD_REQUEST,
    GET_WARD_SUCCESS,
    GET_WARD_FAIL, 
} from "../contants/provideContants";

const provideUrl = "https://provinces.open-api.vn/api";

export const getProvide = () => async (dispatch) => {
    try {
        dispatch({ type: GET_PROVIDE_REQUEST });

        const { data } = await axios.get(`${provideUrl}/?depth=1`);

        dispatch({ type: GET_PROVIDE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_PROVIDE_FAIL, payload: error.response.data.message })
    }
}

export const getDistrict = (provideId) => async (dispatch) => {
    try {
        dispatch({ type: GET_DISTRICT_REQUEST });

        const { data } = await axios.get(`${provideUrl}/p/${provideId}?depth=2`);

        dispatch({ type: GET_DISTRICT_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_DISTRICT_FAIL, payload: error.response.data.message })
    }
}

export const getWard = (districtId) => async (dispatch) => {
    try {
        dispatch({ type: GET_WARD_REQUEST });

        const { data } = await axios.get(`${provideUrl}/d/${districtId}?depth=2`);

        dispatch({ type: GET_WARD_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_WARD_FAIL, payload: error.response.data.message });
    }
}