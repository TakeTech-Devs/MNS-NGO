import {
    GET_ADMIN_GALLERY_REQUEST,
    GET_ADMIN_GALLERY_SUCCESS,
    GET_ADMIN_GALLERY_FAIL,
    CLEAR_ERRORS,
    ADD_ADMIN_GALLERYHEADER_REQUEST,
    ADD_ADMIN_GALLERYHEADER_SUCCESS,
    ADD_ADMIN_GALLERYHEADER_FAIL,
    ADD_ADMIN_GALLERY_BODY_REQUEST,
    ADD_ADMIN_GALLERY_BODY_SUCCESS,
    ADD_ADMIN_GALLERY_BODY_FAIL,
    ADD_ADMIN_GALLERY_IMAGE_REQUEST,
    ADD_ADMIN_GALLERY_IMAGE_SUCCESS,
    ADD_ADMIN_GALLERY_IMAGE_FAIL,
    UPDATE_ADMIN_GALLERY_IMAGE_REQUEST,
    UPDATE_ADMIN_GALLERY_IMAGE_SUCCESS,
    UPDATE_ADMIN_GALLERY_IMAGE_FAIL
} from '../Constants/GalleryConstants';
import axios from 'axios';

export const getGallery = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ADMIN_GALLERY_REQUEST });

        const { data } = await axios.get(`/api/v1/gallery/get-gallery`);

        dispatch({ type: GET_ADMIN_GALLERY_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_ADMIN_GALLERY_FAIL, payload: error.response.data.message });
    }
};

export const createGalleryHeader = (HeaderData) => async (dispatch) => {
    try {
        dispatch({ type: ADD_ADMIN_GALLERYHEADER_REQUEST });

        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        }

        const { data } = await axios.post(`/api/v1/gallery/create-galleryHeader`, HeaderData, config);

        dispatch({
            type: ADD_ADMIN_GALLERYHEADER_SUCCESS,
            payload: data.success
        });

    } catch (error) {
        dispatch({
            type: ADD_ADMIN_GALLERYHEADER_FAIL,
            payload: error.response.data.message,
        });
    }
}

export const createGalleryBody = (bodyData) => async (dispatch) => {
    try {
        dispatch({ type: ADD_ADMIN_GALLERY_BODY_REQUEST });

        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        }

        const { data } = await axios.post(`/api/v1/gallery/create-galleryBody`, bodyData, config);

        dispatch({
            type: ADD_ADMIN_GALLERY_BODY_SUCCESS,
            payload: data.success
        });

    } catch (error) {
        dispatch({
            type: ADD_ADMIN_GALLERY_BODY_FAIL,
            payload: error.response.data.message,
        });
    }
}


export const createGalleryImage = (imageData) => async (dispatch) => {
    try {
        dispatch({ type: ADD_ADMIN_GALLERY_IMAGE_REQUEST });

        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        }

        const { data } = await axios.post(`/api/v1/gallery/create-galleryImage`, imageData, config);

        dispatch({
            type: ADD_ADMIN_GALLERY_IMAGE_SUCCESS,
            payload: data.success
        });

    } catch (error) {
        dispatch({
            type: ADD_ADMIN_GALLERY_IMAGE_FAIL,
            payload: error.response.data.message,
        });
    }
}

export const updateGalleryImage = (id, imageData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_ADMIN_GALLERY_IMAGE_REQUEST });

        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        };

        const { data } = await axios.put(
            `/api/v1/gallery/update-galleryImage/${id}`,
            imageData,
            config
        );

        dispatch({
            type: UPDATE_ADMIN_GALLERY_IMAGE_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_ADMIN_GALLERY_IMAGE_FAIL,
            payload: error.response.data.message,
        });
    }
};

export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};
