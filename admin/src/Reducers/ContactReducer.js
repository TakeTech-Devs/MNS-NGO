import { 
    GET_ADMIN_CONTACT_REQUEST,
    GET_ADMIN_CONTACT_SUCCESS,
    GET_ADMIN_CONTACT_FAIL,
    ADD_CONTACTHEADER_CONTACT_REQUEST,
    ADD_CONTACTHEADER_CONTACT_SUCCESS,
    ADD_CONTACTHEADER_CONTACT_FAIL,
    ADD_CONTACTHEADER_CONTACT_RESET,
    CLEAR_ERRORS,
    ADD_CONTACTINFO_CONTACT_REQUEST,
    ADD_CONTACTINFO_CONTACT_SUCCESS,
    ADD_CONTACTINFO_CONTACT_FAIL,
    ADD_CONTACTINFO_CONTACT_RESET
} from '../Constants/ContactConstants';

export const contactReducer = (state = { contact: [] }, action) => {
    switch (action.type) {
        case GET_ADMIN_CONTACT_REQUEST:
            return {
                loading: true,
            };
        case GET_ADMIN_CONTACT_SUCCESS:
            return {
                ...state,
                loading: false,
                contact: action.payload,
            }
        case GET_ADMIN_CONTACT_FAIL:
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

export const newContactData = (state = { contact: {} }, action) => {
    switch (action.type) {
        case ADD_CONTACTHEADER_CONTACT_REQUEST:
        case ADD_CONTACTINFO_CONTACT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ADD_CONTACTHEADER_CONTACT_SUCCESS:
        case ADD_CONTACTINFO_CONTACT_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            };
        case ADD_CONTACTHEADER_CONTACT_FAIL:
        case ADD_CONTACTINFO_CONTACT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case ADD_CONTACTHEADER_CONTACT_RESET:
        case ADD_CONTACTINFO_CONTACT_RESET:
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