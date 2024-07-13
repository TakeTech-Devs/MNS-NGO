import {
    GET_ABOUT_REQUEST,
    GET_ABOUT_SUCCESS,
    GET_ABOUT_FAIL,
    CLEAR_ERRORS,
 } from '../Constants/AboutUsConstants';
import axios from 'axios';
import baseUrl from '../helper';
console.log(baseUrl,"Base Url");
export const getAbout = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ABOUT_REQUEST });

        const { data } = await axios.get(`${baseUrl}/api/v1/about/get-about`);

        dispatch({ type: GET_ABOUT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_ABOUT_FAIL, payload: error.response.data.message });
    }
}


// Clearing Errors

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};