import {
    GET_ADMIN_GRIEVANCE_REQUEST,
    GET_ADMIN_GRIEVANCE_SUCCESS,
    GET_ADMIN_GRIEVANCE_FAIL,
    ADD_GRIEVANCEHEADER_GRIEVANCE_REQUEST,
    ADD_GRIEVANCEHEADER_GRIEVANCE_SUCCESS,
    ADD_GRIEVANCEHEADER_GRIEVANCE_FAIL,
    ADD_GRIEVANCEHEADER_GRIEVANCE_RESET,
    CLEAR_ERRORS,
    GET_ADMIN_GRIEVANCE_MESSAGES_REQUEST,
    GET_ADMIN_GRIEVANCE_MESSAGES_SUCCESS,
    GET_ADMIN_GRIEVANCE_MESSAGES_FAIL,
    UPDATE_ADMIN_GRIEVANCE_MESSAGES_REQUEST,
    UPDATE_ADMIN_GRIEVANCE_MESSAGES_SUCCESS,
    UPDATE_ADMIN_GRIEVANCE_MESSAGES_FAIL,
    UPDATE_ADMIN_GRIEVANCE_MESSAGES_RESET
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
                grievance: action.payload.grievance[0],
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

export const grievanceFormReducer = (state = { form: [] }, action) => {
    switch (action.type) {
        case GET_ADMIN_GRIEVANCE_MESSAGES_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_ADMIN_GRIEVANCE_MESSAGES_SUCCESS:
            return {
                ...state,
                loading: false,
                form: action.payload,
            };
        case GET_ADMIN_GRIEVANCE_MESSAGES_FAIL:
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

export const  grievanceRequestReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_ADMIN_GRIEVANCE_MESSAGES_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case UPDATE_ADMIN_GRIEVANCE_MESSAGES_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            }
        case UPDATE_ADMIN_GRIEVANCE_MESSAGES_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case UPDATE_ADMIN_GRIEVANCE_MESSAGES_RESET:
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