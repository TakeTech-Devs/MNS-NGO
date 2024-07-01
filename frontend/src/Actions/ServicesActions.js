import axios from 'axios';
import {
    GET_SERVICES_REQUEST,
    GET_SERVICES_SUCCESS,
    GET_SERVICES_FAIL,
    CLEAR_ERRORS,
} from '../Constants/ServicesConstants';

export const getServices = () => async (dispatch) => {
    try {
        dispatch({ type: GET_SERVICES_REQUEST });

        const { data } = await axios.get(`/api/v1/services/get-services`);

        dispatch({ type: GET_SERVICES_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_SERVICES_FAIL, payload: error.response.data.message });
    }
};

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};