import {
    GET_ADMIN_HOME_REQUEST,
    GET_ADMIN_HOME_SUCCESS,
    GET_ADMIN_HOME_FAIL,
    ADD_HOMEHEADER_HOME_REQUEST,
    ADD_HOMEHEADER_HOME_SUCCESS,
    ADD_HOMEHEADER_HOME_FAIL,
    ADD_HIGHTLIGHT_HOME_REQUEST,
    ADD_HIGHTLIGHT_HOME_SUCCESS,
    ADD_HIGHTLIGHT_HOME_FAIL,
    CLEAR_ERRORS,
} from '../Constants/HomeConstants';

import axios from 'axios';

export const getHome = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ADMIN_HOME_REQUEST });

        const { data } = await axios.get(`/api/v1/home/get-home`);

        dispatch({ type: GET_ADMIN_HOME_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_ADMIN_HOME_FAIL, payload: error.response.data.message });
    }
};

export const createHomeHeader = (carouselData) => async(dispatch) =>{
    try {
        dispatch({ type: ADD_HOMEHEADER_HOME_REQUEST });

        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        }

        const { data } = await axios.post(`/api/v1/home/create-carousel`, carouselData, config);

        dispatch({
            type: ADD_HOMEHEADER_HOME_SUCCESS,
            payload: data.success
        });

    } catch (error) {
        dispatch({
            type: ADD_HOMEHEADER_HOME_FAIL,
            payload: error.response.data.message,
        });
    }
}

export const createHighlight = (highlightData) => async(dispatch) =>{
    try {
        dispatch({ type: ADD_HIGHTLIGHT_HOME_REQUEST });

        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        }

        const { data } = await axios.post(`/api/v1/home/create-highlight`, highlightData, config);

        dispatch({
            type: ADD_HIGHTLIGHT_HOME_SUCCESS,
            payload: data.success
        });

    } catch (error) {
        dispatch({
            type: ADD_HIGHTLIGHT_HOME_FAIL,
            payload: error.response.data.message,
        });
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};