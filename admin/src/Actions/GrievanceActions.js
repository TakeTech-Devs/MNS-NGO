import {
    GET_ADMIN_GRIEVANCE_REQUEST,
    GET_ADMIN_GRIEVANCE_SUCCESS,
    GET_ADMIN_GRIEVANCE_FAIL,
    CLEAR_ERRORS,
    ADD_GRIEVANCEHEADER_GRIEVANCE_REQUEST,
    ADD_GRIEVANCEHEADER_GRIEVANCE_SUCCESS,
    ADD_GRIEVANCEHEADER_GRIEVANCE_FAIL,
    GET_ADMIN_GRIEVANCE_MESSAGES_REQUEST,
    GET_ADMIN_GRIEVANCE_MESSAGES_SUCCESS,
    GET_ADMIN_GRIEVANCE_MESSAGES_FAIL,
    UPDATE_ADMIN_GRIEVANCE_MESSAGES_REQUEST,
    UPDATE_ADMIN_GRIEVANCE_MESSAGES_SUCCESS,
    UPDATE_ADMIN_GRIEVANCE_MESSAGES_FAIL
} from '../Constants/GrievanceConstants';
import axios from 'axios';

export const getGrievance = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ADMIN_GRIEVANCE_REQUEST });

        const { data } = await axios.get(`/api/v1/grievance/get-grievance`);


        dispatch({ type: GET_ADMIN_GRIEVANCE_SUCCESS, payload: data.grievance });
    } catch (error) {
        dispatch({ type: GET_ADMIN_GRIEVANCE_FAIL, payload: error.response.data.message });
    }
};

export const createGrievanceHeader = (HeaderData) => async(dispatch) =>{
    try {
        dispatch({ type: ADD_GRIEVANCEHEADER_GRIEVANCE_REQUEST });

        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        }

        const { data } = await axios.post(`/api/v1/grievance/create-grievanceHeader`, HeaderData, config);

        dispatch({
            type: ADD_GRIEVANCEHEADER_GRIEVANCE_SUCCESS,
            payload: data.success
        });

    } catch (error) {
        dispatch({
            type: ADD_GRIEVANCEHEADER_GRIEVANCE_FAIL,
            payload: error.response.data.message,
        });
    }
}

export const getGrievanceFormData = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ADMIN_GRIEVANCE_MESSAGES_REQUEST });

        const { data } = await axios.get(`/api/v1/grievance/get-grievanceMessages`);

        dispatch({ type: GET_ADMIN_GRIEVANCE_MESSAGES_SUCCESS, payload: data.messages });
    } catch (error) {
        dispatch({ type: GET_ADMIN_GRIEVANCE_MESSAGES_FAIL, payload: error.response.data.message });
    }
}

export const updateGrievanceFormData = (id, requestData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_ADMIN_GRIEVANCE_MESSAGES_REQUEST });

        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        };

        const { data } = await axios.put(
            `/api/v1/grievance/update-grievance/${id}`,
            requestData,
            config
        );

        dispatch({
            type: UPDATE_ADMIN_GRIEVANCE_MESSAGES_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_ADMIN_GRIEVANCE_MESSAGES_FAIL,
            payload: error.response.data.message,
        });
    }
};

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};