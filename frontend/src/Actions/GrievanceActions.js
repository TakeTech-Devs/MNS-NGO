// src/actions/grievanceActions.js
import axios from 'axios';
import {
    GET_GRIEVANCE_REQUEST,
    GET_GRIEVANCE_SUCCESS,
    GET_GRIEVANCE_FAIL,
    CLEAR_ERRORS,
} from '../Constants/grievanceConstants';

export const getGrievance = () => async (dispatch) => {
    try {
        dispatch({ type: GET_GRIEVANCE_REQUEST });

        const { data } = await axios.get(`/api/v1/grievance/get-grievance`);


        dispatch({ type: GET_GRIEVANCE_SUCCESS, payload: data.grievance });
    } catch (error) {
        dispatch({ type: GET_GRIEVANCE_FAIL, payload: error.response.data.message });
    }
};

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};
