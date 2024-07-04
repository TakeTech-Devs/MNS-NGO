import {
    GET_ADMIN_GOVERNING_REQUEST,
    GET_ADMIN_GOVERNING_SUCCESS,
    GET_ADMIN_GOVERNING_FAIL,
    ADD_GOVERNINGHEADER_GOVERNING_REQUEST,
    ADD_GOVERNINGHEADER_GOVERNING_SUCCESS,
    ADD_GOVERNINGHEADER_GOVERNING_FAIL,
    ADD_GOVERNINGHEADER_GOVERNING_RESET,
    ADD_GOVERNINGBODY_GOVERNING_REQUEST,
    ADD_GOVERNINGBODY_GOVERNING_SUCCESS,
    ADD_GOVERNINGBODY_GOVERNING_FAIL,
    ADD_GOVERNINGBODY_GOVERNING_RESET,
    CLEAR_ERRORS,
} from '../Constants/GoverningConstants';

export const governingReducer = (state = { goveringBody: [] }, action) => {
    switch (action.type) {
        case GET_ADMIN_GOVERNING_REQUEST:
            return {
                loading: true,
                goveringBody: [],
            };
        case GET_ADMIN_GOVERNING_SUCCESS:
            return {
                ...state,
                loading: false,
                goveringBody: action.payload,
            };
        case GET_ADMIN_GOVERNING_FAIL:
            return {
                loading: false,
                error: action.payload,
                goveringBody: [],
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

export const newGoverningData = (state = { governing: {} }, action) => {
    switch (action.type) {
        case ADD_GOVERNINGHEADER_GOVERNING_REQUEST:
        case ADD_GOVERNINGBODY_GOVERNING_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ADD_GOVERNINGHEADER_GOVERNING_SUCCESS:
        case ADD_GOVERNINGBODY_GOVERNING_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            };
        case ADD_GOVERNINGHEADER_GOVERNING_FAIL:
        case ADD_GOVERNINGBODY_GOVERNING_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case ADD_GOVERNINGHEADER_GOVERNING_RESET:
        case ADD_GOVERNINGBODY_GOVERNING_RESET:
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