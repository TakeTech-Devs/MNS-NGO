import {
    GET_ADMIN_GRIEVANCE_REQUEST,
    GET_ADMIN_GRIEVANCE_SUCCESS,
    GET_ADMIN_GRIEVANCE_FAIL,
    ADD_GRIEVANCEHEADER_GRIEVANCE_REQUEST,
    ADD_GRIEVANCEHEADER_GRIEVANCE_SUCCESS,
    ADD_GRIEVANCEHEADER_GRIEVANCE_FAIL,
    ADD_GRIEVANCEHEADER_GRIEVANCE_RESET,
    CLEAR_ERRORS
} from '../Constants/GrievanceConstants';


export const grievanceReducer = (state = { grievance: [] }, action) => {
    switch (action.type) {
        case GET_ADMIN_GRIEVANCE_REQUEST:
            return {
                loading: true,
                grievance: [],
            };
        case GET_ADMIN_GRIEVANCE_SUCCESS:
            return {
                ...state,
                loading: false,
                grievance: action.payload,
            };
        case GET_ADMIN_GRIEVANCE_FAIL:
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


export const newGrievanceData = (state = { grievance: {} }, action) => {
    switch (action.type) {
        case ADD_GRIEVANCEHEADER_GRIEVANCE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ADD_GRIEVANCEHEADER_GRIEVANCE_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            };
        case ADD_GRIEVANCEHEADER_GRIEVANCE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case ADD_GRIEVANCEHEADER_GRIEVANCE_RESET:
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