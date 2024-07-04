import { 
    GET_ADMIN_GALLERY_REQUEST,
    GET_ADMIN_GALLERY_SUCCESS,
    GET_ADMIN_GALLERY_FAIL,
    CLEAR_ERRORS
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

export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};
