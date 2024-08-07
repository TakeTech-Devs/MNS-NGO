import {
    CLEAR_ERRORS,
    SUBMIT_FORM_FAIL,
    SUBMIT_FORM_REQUEST,
    SUBMIT_FORM_SUCCESS
} from "../Constants/FormConstants";

import axios from "axios";

import baseUrl from '../helper';

export const submitForm = (formData) => {
    return async (dispatch) => {
        dispatch({ type: SUBMIT_FORM_REQUEST });

        try {
            const response = await axios.post(`${baseUrl}/api/v1/touch/create-touch`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            dispatch({ type: SUBMIT_FORM_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: SUBMIT_FORM_FAIL, error: error.message });
        }
    };
};


// Clearing Errors

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};