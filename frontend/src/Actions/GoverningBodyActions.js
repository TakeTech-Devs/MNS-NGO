import {
    GET_GOVERNING_REQUEST,
    GET_GOVERNING_SUCCESS,
    GET_GOVERNING_FAIL,
    CLEAR_ERRORS,
} from '../Constants/GoverningBodyConstants';
import axios from 'axios';

export const getGoverning = () => async (dispatch) => {
    try {
        dispatch({ type: GET_GOVERNING_REQUEST });

        const { data } = await axios.get(`/api/v1/goveringBody/get-goveringBody`);


        dispatch({ type: GET_GOVERNING_SUCCESS, payload: data.goveringBody });
    } catch (error) {
        dispatch({ type: GET_GOVERNING_FAIL, payload: error.response.data.message });
    }
}


// Clearing Errors

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};