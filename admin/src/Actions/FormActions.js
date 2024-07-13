import {
    GET_ADMIN_FORM_REQUEST,
    GET_ADMIN_FORM_SUCCESS,
    GET_ADMIN_FORM_FAIL,
    CLEAR_ERRORS,
} from '../Constants/FormConstants';
import axios from 'axios';

export const getFormData = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ADMIN_FORM_REQUEST });

        const { data } = await axios.get(`/api/v1/touch/get-touch`);

        dispatch({ type: GET_ADMIN_FORM_SUCCESS, payload: data.messages });
    } catch (error) {
        dispatch({ type: GET_ADMIN_FORM_FAIL, payload: error.response.data.message });
    }
}


export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};