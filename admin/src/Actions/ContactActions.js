import { 
    GET_ADMIN_CONTACT_REQUEST,
    GET_ADMIN_CONTACT_SUCCESS,
    GET_ADMIN_CONTACT_FAIL,
    CLEAR_ERRORS,
    ADD_CONTACTHEADER_CONTACT_REQUEST,
    ADD_CONTACTHEADER_CONTACT_SUCCESS,
    ADD_CONTACTHEADER_CONTACT_FAIL,
    ADD_CONTACTINFO_CONTACT_REQUEST,
    ADD_CONTACTINFO_CONTACT_SUCCESS,
    ADD_CONTACTINFO_CONTACT_FAIL
} from '../Constants/ContactConstants';
import axios from 'axios';
import baseUrl from '../helper';

export const getContact = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ADMIN_CONTACT_REQUEST });

        const { data } = await axios.get(`${baseUrl}/api/v1/contact/get-contact`);

        dispatch({ type: GET_ADMIN_CONTACT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_ADMIN_CONTACT_FAIL, payload: error.response.data.message });
    }
}

export const createContactHeader = (HeaderData) => async(dispatch) =>{
    try {
        dispatch({ type: ADD_CONTACTHEADER_CONTACT_REQUEST });

        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        }

        const { data } = await axios.post(`${baseUrl}/api/v1/contact/create-contactHeader`, HeaderData, config);

        dispatch({
            type: ADD_CONTACTHEADER_CONTACT_SUCCESS,
            payload: data.success
        });

    } catch (error) {
        dispatch({
            type: ADD_CONTACTHEADER_CONTACT_FAIL,
            payload: error.response.data.message,
        });
    }
}

export const createContactInfo = (infoData) => async(dispatch) =>{
    try {
        dispatch({ type: ADD_CONTACTINFO_CONTACT_REQUEST });

        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        }

        const { data } = await axios.post(`${baseUrl}/api/v1/contact/create-contact`, infoData, config);

        dispatch({
            type: ADD_CONTACTINFO_CONTACT_SUCCESS,
            payload: data.success
        });

    } catch (error) {
        dispatch({
            type: ADD_CONTACTINFO_CONTACT_FAIL,
            payload: error.response.data.message,
        });
    }
}


// Clearing Errors

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};