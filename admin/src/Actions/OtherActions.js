import {
    GET_ADMIN_OTHER_REQUEST,
    GET_ADMIN_OTHER_SUCCESS,
    GET_ADMIN_OTHER_FAIL,
    CLEAR_ERRORS,
    ADD_POLICY_REQUEST,
    ADD_POLICY_SUCCESS,
    ADD_POLICY_FAIL,
    ADD_TERMS_REQUEST,
    ADD_TERMS_SUCCESS,
    ADD_TERMS_FAIL,
    ADD_METADATA_REQUEST,
    ADD_METADATA_SUCCESS,
    ADD_METADATA_FAIL,
    ADD_SOCIAL_REQUEST,
    ADD_SOCIAL_SUCCESS,
    ADD_SOCIAL_FAIL,
} from '../Constants/OtherConstants';
import axios from 'axios';
import baseUrl from '../helper'

export const getOther = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ADMIN_OTHER_REQUEST });

        const { data } = await axios.get(`${baseUrl}/api/v1/other/get-other`);


        dispatch({ type: GET_ADMIN_OTHER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_ADMIN_OTHER_FAIL, payload: error.response.data.message });
    }
};

export const createPolicy = (policyData) => async (dispatch) => {
    try {
        dispatch({ type: ADD_POLICY_REQUEST });

        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        }

        const { data } = await axios.post(`${baseUrl}/api/v1/other/create-policy`, policyData, config);

        dispatch({
            type: ADD_POLICY_SUCCESS,
            payload: data.success
        });

    } catch (error) {
        dispatch({
            type: ADD_POLICY_FAIL,
            payload: error.response.data.message,
        });
    }
}


export const createTerms = (termsData) => async (dispatch) => {
    try {
        dispatch({ type: ADD_TERMS_REQUEST });

        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        }

        const { data } = await axios.post(`${baseUrl}/api/v1/other/create-terms`, termsData, config);

        dispatch({
            type: ADD_TERMS_SUCCESS,
            payload: data.success
        });

    } catch (error) {
        dispatch({
            type: ADD_TERMS_FAIL,
            payload: error.response.data.message,
        });
    }
}

export const createMetaData = (metaData) => async (dispatch) => {
    try {
        dispatch({ type: ADD_METADATA_REQUEST });

        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        }

        const { data } = await axios.post(`${baseUrl}/api/v1/other/create-metadata`, metaData, config);

        dispatch({
            type: ADD_METADATA_SUCCESS,
            payload: data.success
        });

    } catch (error) {
        dispatch({
            type: ADD_METADATA_FAIL,
            payload: error.response.data.message,
        });
    }
}


export const createSocial = (socialData) => async (dispatch) => {
    try {
        dispatch({ type: ADD_SOCIAL_REQUEST });

        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        }

        const { data } = await axios.post(`${baseUrl}/api/v1/other/create-social`, socialData, config);

        dispatch({
            type: ADD_SOCIAL_SUCCESS,
            payload: data.success
        });

    } catch (error) {
        dispatch({
            type: ADD_SOCIAL_FAIL,
            payload: error.response.data.message,
        });
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};