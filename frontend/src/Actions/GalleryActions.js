import axios from 'axios';
import {
    GET_GALLERY_REQUEST,
    GET_GALLERY_SUCCESS,
    GET_GALLERY_FAIL,
    CLEAR_ERRORS,
} from '../Constants/GalleryConstants';

export const getGallery = () => async (dispatch) => {
    try {
        dispatch({ type: GET_GALLERY_REQUEST });

        const { data } = await axios.get(`/api/v1/gallery/get-gallery`);

        dispatch({ type: GET_GALLERY_SUCCESS, payload: data });
    } catch (error) {
        // dispatch({ type: GET_GALLERY_FAIL, payload: error.response.data.message });
    }
};

export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};

