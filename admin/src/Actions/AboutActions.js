import {
    GET_ADMIN_ABOUT_REQUEST,
    GET_ADMIN_ABOUT_SUCCESS,
    GET_ADMIN_ABOUT_FAIL,
    CLEAR_ERRORS,
} from '../Constants/AboutConstants';
import axios from 'axios';

export const getAbout = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ADMIN_ABOUT_REQUEST });

        const { data } = await axios.get('/api/v1/about/get-about');

        dispatch({ type: GET_ADMIN_ABOUT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_ADMIN_ABOUT_FAIL, payload: error.response.data.message });
    }
}


export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};