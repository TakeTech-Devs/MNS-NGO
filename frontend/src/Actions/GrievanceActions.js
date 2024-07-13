// src/actions/grievanceActions.js
import axios from 'axios';
import {
    GET_GRIEVANCE_REQUEST,
    GET_GRIEVANCE_SUCCESS,
    GET_GRIEVANCE_FAIL,
    CLEAR_ERRORS,
    SUBMIT_FORM_REQUEST,
    SUBMIT_FORM_SUCCESS,
    SUBMIT_FORM_FAIL,
} from '../Constants/grievanceConstants';
import baseUrl from '../helper';

export const getGrievance = () => async (dispatch) => {
    try {
        dispatch({ type: GET_GRIEVANCE_REQUEST });

        const { data } = await axios.get(`${baseUrl}/api/v1/grievance/get-grievance`);


        dispatch({ type: GET_GRIEVANCE_SUCCESS, payload: data.grievance });
    } catch (error) {
        dispatch({ type: GET_GRIEVANCE_FAIL, payload: error.response.data.message });
    }
};

export const submitForm = (formData) => {
    return async (dispatch) => {
      dispatch({ type: SUBMIT_FORM_REQUEST });
  
      try {
        const response = await axios.post(`${baseUrl}/api/v1/grievance/create-grievance`, formData, {
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

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};
