// src/reducers/grievanceReducer.js
import {
    GET_GRIEVANCE_REQUEST,
    GET_GRIEVANCE_SUCCESS,
    GET_GRIEVANCE_FAIL,
    CLEAR_ERRORS,
    SUBMIT_FORM_REQUEST,
    SUBMIT_FORM_SUCCESS,
    SUBMIT_FORM_FAIL,
} from '../Constants/grievanceConstants';

export const grievanceReducer = (state = { grievance: [] }, action) => {
    switch (action.type) {
        case GET_GRIEVANCE_REQUEST:
            return {
                loading: true,
                grievance: [],
            };
        case GET_GRIEVANCE_SUCCESS:
            return {
                ...state,
                loading: false,
                grievance: action.payload,
            };
        case GET_GRIEVANCE_FAIL:
            return {
                loading: false,
                error: action.payload,
                grievance: [],
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

export const formReducer = (state = {}, action) => {
    switch (action.type) {
        case SUBMIT_FORM_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case SUBMIT_FORM_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null
            };
        case SUBMIT_FORM_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
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
