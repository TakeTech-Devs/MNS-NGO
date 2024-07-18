import {
    NEW_CAROUSEL_REQUEST,
    NEW_CAROUSEL_SUCCESS,
    NEW_CAROUSEL_FAIL,
    CLEAR_ERROR,
} from "../Constants/CarouselConstants";
import baseUrl from '../helper';
import axios from 'axios';

// Add new carousel item

export const createCarousel = (carouselData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_CAROUSEL_REQUEST });

        const config = {
            headers: { 
                'Content-Type': 'multipart/form-data'
            },
        };

        const { data } = await axios.post(`${baseUrl}/api/v1/carousel/create-carousel`, carouselData, config);

        dispatch({
            type: NEW_CAROUSEL_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: NEW_CAROUSEL_FAIL,
            payload: error.response.data.message,
        })
    }
}


// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERROR,
    })
}