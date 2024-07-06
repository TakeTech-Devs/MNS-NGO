import {
    GET_ADMIN_ABOUT_REQUEST,
    GET_ADMIN_ABOUT_SUCCESS,
    GET_ADMIN_ABOUT_FAIL,
    CLEAR_ERRORS,
    ADD_ABOUTHEADER_ABOUT_REQUEST,
    ADD_ABOUTHEADER_ABOUT_SUCCESS,
    ADD_ABOUTHEADER_ABOUT_FAIL,
    ADD_ABOUTHEADER_ABOUT_RESET,
    ADD_IMAGE_ABOUT_REQUEST,
    ADD_IMAGE_ABOUT_SUCCESS,
    ADD_IMAGE_ABOUT_FAIL,
    ADD_IMAGE_ABOUT_RESET,
    UPDATE_VALUES_ABOUT_REQUEST,
    UPDATE_VALUES_ABOUT_SUCCESS,
    UPDATE_VALUES_ABOUT_FAIL,
    UPDATE_VALUES_ABOUT_RESET,
    ADD_VALUES_ABOUT_REQUEST,
    ADD_VALUES_ABOUT_SUCCESS,
    ADD_VALUES_ABOUT_FAIL,
    ADD_VALUES_ABOUT_RESET,
    ADD_INVOLVED_ABOUT_REQUEST,
    ADD_INVOLVED_ABOUT_SUCCESS,
    ADD_INVOLVED_ABOUT_RESET,
 } from '../Constants/AboutConstants';

 export const aboutReducer = (state = { about: [], valueImage: [] }, action) => {
    switch (action.type) {
        case GET_ADMIN_ABOUT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_ADMIN_ABOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                about: action.payload.about,
                valueImage: action.payload.valueImage,
            };
        case GET_ADMIN_ABOUT_FAIL:
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

export const newAboutData = (state = { about: {} }, action) => {
    switch (action.type) {
        case ADD_ABOUTHEADER_ABOUT_REQUEST:
        case ADD_IMAGE_ABOUT_REQUEST:
        case ADD_VALUES_ABOUT_REQUEST:
        case ADD_INVOLVED_ABOUT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ADD_ABOUTHEADER_ABOUT_SUCCESS:
        case ADD_IMAGE_ABOUT_SUCCESS:
        case ADD_VALUES_ABOUT_SUCCESS:
        case ADD_INVOLVED_ABOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            };
        case ADD_ABOUTHEADER_ABOUT_FAIL:
        case ADD_IMAGE_ABOUT_FAIL:
        case ADD_VALUES_ABOUT_FAIL:
        case ADD_VALUES_ABOUT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case ADD_ABOUTHEADER_ABOUT_RESET:
        case ADD_IMAGE_ABOUT_RESET:
        case ADD_VALUES_ABOUT_RESET:  
        case ADD_INVOLVED_ABOUT_RESET:
            return {
                ...state,
                isUpdated: false,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
}

export const aboutValuesReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_VALUES_ABOUT_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case UPDATE_VALUES_ABOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            }
        case UPDATE_VALUES_ABOUT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case UPDATE_VALUES_ABOUT_RESET:
            return {
                ...state,
                isUpdated: false,
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}