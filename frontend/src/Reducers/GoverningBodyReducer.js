import {
    GET_GOVERNING_REQUEST,
    GET_GOVERNING_SUCCESS,
    GET_GOVERNING_FAIL,
    CLEAR_ERRORS,
} from '../Constants/GoverningBodyConstants';


// Get Governing 

export const governingReducer = (state = { goveringBody: [] }, action) => {
    switch (action.type) {
        case GET_GOVERNING_REQUEST:
            return {
                loading: true,
                goveringBody: [],
            };
        case GET_GOVERNING_SUCCESS:
            return {
                ...state,
                loading: false,
                goveringBody: action.payload,
            };
        case GET_GOVERNING_FAIL:
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