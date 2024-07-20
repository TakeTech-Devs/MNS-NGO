import {
    GET_OTHER_REQUEST,
    GET_OTHER_SUCCESS,
    GET_OTHER_FAIL,
    CLEAR_ERRORS,
} from '../Constants/OtherConstants';
import axios from 'axios';
import baseUrl from '../helper'

export const getOther = () => async (dispatch) => {
    try {
        dispatch({ type: GET_OTHER_REQUEST });

        const { data } = await axios.get(`${baseUrl}/api/v1/other/get-other`);


        dispatch({ type: GET_OTHER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_OTHER_FAIL, payload: error.response.data.message });
    }
};

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};