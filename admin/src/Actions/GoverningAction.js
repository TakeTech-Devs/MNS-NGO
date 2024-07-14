import {
    GET_ADMIN_GOVERNING_REQUEST,
    GET_ADMIN_GOVERNING_SUCCESS,
    GET_ADMIN_GOVERNING_FAIL,
    ADD_GOVERNINGHEADER_GOVERNING_REQUEST,
    ADD_GOVERNINGHEADER_GOVERNING_SUCCESS,
    ADD_GOVERNINGHEADER_GOVERNING_FAIL,
    ADD_GOVERNINGBODY_GOVERNING_REQUEST,
    ADD_GOVERNINGBODY_GOVERNING_SUCCESS,
    ADD_GOVERNINGBODY_GOVERNING_FAIL,
    CLEAR_ERRORS,
} from '../Constants/GoverningConstants';
import axios from 'axios';
import baseUrl from '../helper';
 
export const getGoverning = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ADMIN_GOVERNING_REQUEST });

        const { data } = await axios.get(`${baseUrl}/api/v1/goveringBody/get-goveringBody`);


        dispatch({ type: GET_ADMIN_GOVERNING_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_ADMIN_GOVERNING_FAIL, payload: error.response.data.message });
    }
}

export const createGoverningHeader = (HeaderData) => async(dispatch) =>{
    try {
        dispatch({ type: ADD_GOVERNINGHEADER_GOVERNING_REQUEST });

        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        }

        const { data } = await axios.post(`${baseUrl}/api/v1/goveringBody/create-goveringHeader`, HeaderData, config);

        dispatch({
            type: ADD_GOVERNINGHEADER_GOVERNING_SUCCESS,
            payload: data.success
        });

    } catch (error) {
        dispatch({
            type: ADD_GOVERNINGHEADER_GOVERNING_FAIL,
            payload: error.response.data.message,
        });
    }
}

export const createGoverningBody = (bodyData) => async(dispatch) =>{
    try {
        dispatch({ type: ADD_GOVERNINGBODY_GOVERNING_REQUEST });

        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        }

        const { data } = await axios.post(`${baseUrl}/api/v1/goveringBody/create-goveringBody`, bodyData, config);

        dispatch({
            type: ADD_GOVERNINGBODY_GOVERNING_SUCCESS,
            payload: data.success
        });

    } catch (error) {
        dispatch({
            type: ADD_GOVERNINGBODY_GOVERNING_FAIL,
            payload: error.response.data.message,
        });
    }
}


// Clearing Errors

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};