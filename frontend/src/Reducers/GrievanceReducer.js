// src/reducers/grievanceReducer.js
import {
    GET_GRIEVANCE_REQUEST,
    GET_GRIEVANCE_SUCCESS,
    GET_GRIEVANCE_FAIL,
    CLEAR_ERRORS,
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
