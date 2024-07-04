import {
    GET_ADMIN_GRIEVANCE_REQUEST,
    GET_ADMIN_GRIEVANCE_SUCCESS,
    GET_ADMIN_GRIEVANCE_FAIL,
    CLEAR_ERRORS,
    ADD_GRIEVANCEHEADER_GRIEVANCE_REQUEST,
    ADD_GRIEVANCEHEADER_GRIEVANCE_SUCCESS,
    ADD_GRIEVANCEHEADER_GRIEVANCE_FAIL
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

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};