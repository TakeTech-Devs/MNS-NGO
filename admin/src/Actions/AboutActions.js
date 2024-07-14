import {
    GET_ADMIN_ABOUT_REQUEST,
    GET_ADMIN_ABOUT_SUCCESS,
    GET_ADMIN_ABOUT_FAIL,
    ADD_ABOUTHEADER_ABOUT_REQUEST,
    ADD_ABOUTHEADER_ABOUT_SUCCESS,
    ADD_ABOUTHEADER_ABOUT_FAIL,
    CLEAR_ERRORS,
    ADD_IMAGE_ABOUT_REQUEST,
    ADD_IMAGE_ABOUT_SUCCESS,
    ADD_IMAGE_ABOUT_FAIL,
    UPDATE_VALUES_ABOUT_REQUEST,
    UPDATE_VALUES_ABOUT_SUCCESS,
    UPDATE_VALUES_ABOUT_FAIL,
    ADD_VALUES_ABOUT_REQUEST,
    ADD_VALUES_ABOUT_SUCCESS,
    ADD_VALUES_ABOUT_FAIL,
    ADD_INVOLVED_ABOUT_REQUEST,
    ADD_INVOLVED_ABOUT_SUCCESS,
    ADD_INVOLVED_ABOUT_FAIL,
} from '../Constants/AboutConstants';
import axios from 'axios';
import baseUrl from '../helper'


export const getAbout = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ADMIN_ABOUT_REQUEST });

        const { data } = await axios.get(`${baseUrl}/api/v1/about/get-about`);

        dispatch({ type: GET_ADMIN_ABOUT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_ADMIN_ABOUT_FAIL, payload: error.response.data.message });
    }
}

export const createAboutHeader = (HeaderData) => async (dispatch) => {
    try {
        dispatch({ type: ADD_ABOUTHEADER_ABOUT_REQUEST });

        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        }

        const { data } = await axios.post(`${baseUrl}/api/v1/about/create-aboutHeader`, HeaderData, config);

        dispatch({
            type: ADD_ABOUTHEADER_ABOUT_SUCCESS,
            payload: data.success
        });

    } catch (error) {
        dispatch({
            type: ADD_ABOUTHEADER_ABOUT_FAIL,
            payload: error.response.data.message,
        });
    }
}

export const createAboutImage = (ImageData) => async (dispatch) => {
    try {
        dispatch({ type: ADD_IMAGE_ABOUT_REQUEST });

        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        }

        const { data } = await axios.post(`${baseUrl}/api/v1/about/create-aboutImage`, ImageData, config);

        dispatch({
            type: ADD_IMAGE_ABOUT_SUCCESS,
            payload: data.success
        });

    } catch (error) {
        dispatch({
            type: ADD_IMAGE_ABOUT_FAIL,
            payload: error.response.data.message,
        });
    }
}

export const createAboutValues = (valuesData) => async (dispatch) => {
    try {
        dispatch({ type: ADD_VALUES_ABOUT_REQUEST });

        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        }

        const { data } = await axios.post(`${baseUrl}/api/v1/about/create-ourValuesImage`, valuesData, config);

        dispatch({
            type: ADD_VALUES_ABOUT_SUCCESS,
            payload: data.success
        });

    } catch (error) {
        dispatch({
            type: ADD_VALUES_ABOUT_FAIL,
            payload: error.response.data.message,
        });
    }
}

export const updateAboutValues = (id, valuesData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_VALUES_ABOUT_REQUEST });

        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        };

        const { data } = await axios.put(
            `${baseUrl}/api/v1/about/update-ourValuesImage/${id}`,
            valuesData,
            config
        );

        dispatch({
            type: UPDATE_VALUES_ABOUT_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_VALUES_ABOUT_FAIL,
            payload: error.response.data.message,
        });
    }
};


export const createAboutInvolbed = (InvolbedData) => async (dispatch) => {
    try {
        dispatch({ type: ADD_INVOLVED_ABOUT_REQUEST });

        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        }

        const { data } = await axios.post(`${baseUrl}/api/v1/about/create-involved`, InvolbedData, config);

        dispatch({
            type: ADD_INVOLVED_ABOUT_SUCCESS,
            payload: data.success
        });

    } catch (error) {
        dispatch({
            type: ADD_INVOLVED_ABOUT_FAIL,
            payload: error.response.data.message,
        });
    }
}


export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};