import { 
    GET_ADMIN_SERVICES_REQUEST,
    GET_ADMIN_SERVICES_SUCCESS,
    GET_ADMIN_SERVICES_FAIL,
    CLEAR_ERRORS,
    ADD_ADMIN_SERVICESHEADER_REQUEST,
    ADD_ADMIN_SERVICESHEADER_SUCCESS,
    ADD_ADMIN_SERVICESHEADER_FAIL,
    ADD_ADMIN_SERVICES_REQUEST,
    ADD_ADMIN_SERVICES_SUCCESS,
    ADD_ADMIN_SERVICES_FAIL,
    UPDATE_ADMIN_SERVICESIMAGE_REQUEST,
    UPDATE_ADMIN_SERVICESIMAGE_SUCCESS,
    UPDATE_ADMIN_SERVICESIMAGE_FAIL,
} from '../Constants/ServicesConstants';
import axios from 'axios';
import baseUrl from '../helper'

export const getServices = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ADMIN_SERVICES_REQUEST });

        const { data } = await axios.get(`${baseUrl}/api/v1/services/get-services`);

        dispatch({ type: GET_ADMIN_SERVICES_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_ADMIN_SERVICES_FAIL, payload: error.response.data.message });
    }
};

export const createServicesHeader = (HeaderData) => async(dispatch) =>{
    try {
        dispatch({ type: ADD_ADMIN_SERVICESHEADER_REQUEST });

        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        }

        const { data } = await axios.post(`${baseUrl}/api/v1/services/create-servicesHeader`, HeaderData, config);

        dispatch({
            type: ADD_ADMIN_SERVICESHEADER_SUCCESS,
            payload: data.success
        });

    } catch (error) {
        dispatch({
            type: ADD_ADMIN_SERVICESHEADER_FAIL,
            payload: error.response.data.message,
        });
    }
}

export const createServices = (servicesData) => async(dispatch) =>{
    try {
        dispatch({ type: ADD_ADMIN_SERVICES_REQUEST });

        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        }

        const { data } = await axios.post(`${baseUrl}/api/v1/services/create-servicesBody`, servicesData, config);

        dispatch({
            type: ADD_ADMIN_SERVICES_SUCCESS,
            payload: data.success
        });

    } catch (error) {
        dispatch({
            type: ADD_ADMIN_SERVICES_FAIL,
            payload: error.response.data.message,
        });
    }
}

export const createServicesImage = (imageData) => async(dispatch) =>{
    try {
        dispatch({ type: ADD_ADMIN_SERVICES_REQUEST });

        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        }

        const { data } = await axios.post(`${baseUrl}/api/v1/services/create-ourservices`, imageData, config);

        dispatch({
            type: ADD_ADMIN_SERVICES_SUCCESS,
            payload: data.success
        });

    } catch (error) {
        dispatch({
            type: ADD_ADMIN_SERVICES_FAIL,
            payload: error.response.data.message,
        });
    }
}

export const updateServiceImage = (id, imageData) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_ADMIN_SERVICESIMAGE_REQUEST });
  
      const config = {
        headers: {"Content-Type": "multipart/form-data" },
      };
  
      const { data } = await axios.put(
        `${baseUrl}/api/v1/services/update-ourservices/${id}`,
        imageData,
        config
      );
  
      dispatch({
        type: UPDATE_ADMIN_SERVICESIMAGE_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_ADMIN_SERVICESIMAGE_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};