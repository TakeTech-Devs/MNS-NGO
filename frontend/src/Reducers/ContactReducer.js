import {
    GET_CONTACT_REQUEST,
    GET_CONTACT_SUCCESS,
    GET_CONTACT_FAIL,
    CLEAR_ERRORS,
} from '../Constants/ContactConstants';

// Get Contact 

export const contactReducer = (state = { contact: [] }, action) => {
    switch (action.type) {
        case GET_CONTACT_REQUEST:
            return {
                loading: true,
            };
        case GET_CONTACT_SUCCESS:
            return {
                ...state,
                loading: false,
                contact: action.payload,
            }
        case GET_CONTACT_FAIL:
            return {
                loading: false,
                contact:[],
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
}