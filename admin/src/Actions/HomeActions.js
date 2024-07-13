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
    ADD_ABOUT_HOME_REQUEST,
    ADD_ABOUT_HOME_SUCCESS,
    ADD_ABOUT_HOME_FAIL,
    ADD_VISION_HOME_REQUEST,
    ADD_VISION_HOME_SUCCESS,
    ADD_VISION_HOME_FAIL,
    ADD_JOINUS_HOME_REQUEST,
    ADD_JOINUS_HOME_SUCCESS,
    ADD_JOINUS_HOME_FAIL,
    UPDATE_SERVICE_HOME_REQUEST,
    UPDATE_SERVICE_HOME_SUCCESS,
    UPDATE_SERVICE_HOME_FAIL,
    ADD_SERVICEHEAD_HOME_REQUEST,
    ADD_SERVICEHEAD_HOME_SUCCESS,
    ADD_SERVICEHEAD_HOME_FAIL,
    UPDATE_BRAND_HOME_REQUEST,
    UPDATE_BRAND_HOME_SUCCESS,
    UPDATE_BRAND_HOME_FAIL,
    DELETE_BRAND_HOME_REQUEST,
    DELETE_BRAND_HOME_SUCCESS,
    DELETE_BRAND_HOME_FAIL,
    ADD_BRAND_HOME_REQUEST,
    ADD_BRAND_HOME_SUCCESS,
    ADD_BRAND_HOME_FAIL,
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

export const createHomeHeader = (carouselData) => async (dispatch) => {
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

export const createHighlight = (highlightData) => async (dispatch) => {
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


export const createAbout = (aboutData) => async (dispatch) => {
    try {
        dispatch({ type: ADD_ABOUT_HOME_REQUEST });

        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        }

        const { data } = await axios.post(`/api/v1/home/create-about`, aboutData, config);

        dispatch({
            type: ADD_ABOUT_HOME_SUCCESS,
            payload: data.success
        });

    } catch (error) {
        dispatch({
            type: ADD_ABOUT_HOME_FAIL,
            payload: error.response.data.message,
        });
    }
}


export const createVision = (visionData) => async (dispatch) => {
    try {
        dispatch({ type: ADD_VISION_HOME_REQUEST });

        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        }

        const { data } = await axios.post(`/api/v1/home/create-vision`, visionData, config);

        dispatch({
            type: ADD_VISION_HOME_SUCCESS,
            payload: data.success
        });

    } catch (error) {
        dispatch({
            type: ADD_VISION_HOME_FAIL,
            payload: error.response.data.message,
        });
    }
}

export const createJoinUs = (joinUsData) => async (dispatch) => {
    try {
        dispatch({ type: ADD_JOINUS_HOME_REQUEST });

        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        }

        const { data } = await axios.post(`/api/v1/home/create-joinus`, joinUsData, config);

        dispatch({
            type: ADD_JOINUS_HOME_SUCCESS,
            payload: data.success
        });

    } catch (error) {
        dispatch({
            type: ADD_JOINUS_HOME_FAIL,
            payload: error.response.data.message,
        });
    }
}


export const createServiceHead = (serviceHeadData) => async (dispatch) => {
    try {
        dispatch({ type: ADD_SERVICEHEAD_HOME_REQUEST });

        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        }

        const { data } = await axios.post(`/api/v1/home/create-services`, serviceHeadData, config);

        dispatch({
            type: ADD_SERVICEHEAD_HOME_SUCCESS,
            payload: data.success
        });

    } catch (error) {
        dispatch({
            type: ADD_SERVICEHEAD_HOME_FAIL,
            payload: error.response.data.message,
        });
    }
}


export const createServiceCarousel = (serviceData) => async (dispatch) => {
    try {
        dispatch({ type: ADD_ABOUT_HOME_REQUEST });

        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        }

        const { data } = await axios.post(`/api/v1/home/create-servicesCarousel`, serviceData, config);

        dispatch({
            type: ADD_ABOUT_HOME_SUCCESS,
            payload: data.success
        });

    } catch (error) {
        dispatch({
            type: ADD_ABOUT_HOME_FAIL,
            payload: error.response.data.message,
        });
    }
}

export const updateServiceCarousel = (id, serviceData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_SERVICE_HOME_REQUEST });

        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        };

        const { data } = await axios.put(
            `/api/v1/home/update-servicesCarousel/${id}`,
            serviceData,
            config
        );

        dispatch({
            type: UPDATE_SERVICE_HOME_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_SERVICE_HOME_FAIL,
            payload: error.response.data.message,
        });
    }
};


export const createBrand = (brandData) => async (dispatch) => {
    try {
        dispatch({ type: ADD_BRAND_HOME_REQUEST });

        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        }

        const { data } = await axios.post(`/api/v1/home/create-brand`, brandData, config);

        dispatch({
            type: ADD_BRAND_HOME_SUCCESS,
            payload: data.success
        });

    } catch (error) {
        dispatch({
            type: ADD_BRAND_HOME_FAIL,
            payload: error.response.data.message,
        });
    }
}

export const updateBrand = (id, brandData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_BRAND_HOME_REQUEST });

        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        };

        const { data } = await axios.put(
            `/api/v1/home/update-brand/${id}`,
            brandData,
            config
        );

        dispatch({
            type: UPDATE_BRAND_HOME_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_BRAND_HOME_FAIL,
            payload: error.response.data.message,
        });
    }
};


export const deleteBrand = (id) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_BRAND_HOME_REQUEST });
  
      const { data } = await axios.delete(`/api/v1/home/delete-brand/${id}`);
  
      dispatch({
        type: DELETE_BRAND_HOME_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: DELETE_BRAND_HOME_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};