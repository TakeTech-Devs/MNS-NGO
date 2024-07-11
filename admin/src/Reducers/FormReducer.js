import {
    GET_ADMIN_FORM_REQUEST,
    GET_ADMIN_FORM_SUCCESS,
    GET_ADMIN_FORM_FAIL,
    CLEAR_ERRORS,
} from '../Constants/FormConstants';


export const formReducer = (state = { form: [] }, action) => {
    switch (action.type) {
        case GET_ADMIN_FORM_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_ADMIN_FORM_SUCCESS:
            return {
                ...state,
                loading: false,
                form: action.payload,
            };
        case GET_ADMIN_FORM_FAIL:
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