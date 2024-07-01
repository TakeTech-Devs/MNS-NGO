import {
    GET_ABOUT_REQUEST,
    GET_ABOUT_SUCCESS,
    GET_ABOUT_FAIL,
    CLEAR_ERRORS,
 } from '../Constants/AboutUsConstants';


 export const aboutReducer = (state = { about: [], valueImage: [] }, action) => {
    switch (action.type) {
        case GET_ABOUT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_ABOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                about: action.payload.about,
                valueImage: action.payload.valueImage,
            };
        case GET_ABOUT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};