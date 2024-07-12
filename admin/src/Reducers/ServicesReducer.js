import { 
    GET_ADMIN_SERVICES_REQUEST,
    GET_ADMIN_SERVICES_SUCCESS,
    GET_ADMIN_SERVICES_FAIL,
    CLEAR_ERRORS,
    ADD_ADMIN_SERVICESHEADER_REQUEST,
    ADD_ADMIN_SERVICESHEADER_SUCCESS,
    ADD_ADMIN_SERVICESHEADER_FAIL,
    ADD_ADMIN_SERVICESHEADER_RESET,
    ADD_ADMIN_SERVICES_REQUEST,
    ADD_ADMIN_SERVICES_SUCCESS,
    ADD_ADMIN_SERVICES_FAIL,
    ADD_ADMIN_SERVICES_RESET,
    ADD_ADMIN_SERVICESIMAGE_REQUEST,
    ADD_ADMIN_SERVICESIMAGE_SUCCESS,
    ADD_ADMIN_SERVICESIMAGE_FAIL,
    ADD_ADMIN_SERVICESIMAGE_RESET,
    UPDATE_ADMIN_SERVICESIMAGE_REQUEST,
    UPDATE_ADMIN_SERVICESIMAGE_SUCCESS,
    UPDATE_ADMIN_SERVICESIMAGE_FAIL,
    UPDATE_ADMIN_SERVICESIMAGE_RESET,
} from '../Constants/ServicesConstants';

export const servicesReducer = (state = { services: [], ourServices: [] }, action) => {
    switch (action.type) {
        case GET_ADMIN_SERVICES_REQUEST:
            return {
                loading: true,
                services: [],
                ourServices: [],
            };
        case GET_ADMIN_SERVICES_SUCCESS:
            return {
                ...state,
                loading: false,
                services: action.payload.services[0],
                ourServices: action.payload.ourServices,
            };
        case GET_ADMIN_SERVICES_FAIL:
            return {
                loading: false,
                error: action.payload,
                services: [],
                ourServices: [],
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

export const newServicesData = (state = { services: {} }, action) => {
    switch (action.type) {
        case ADD_ADMIN_SERVICESHEADER_REQUEST:
        case ADD_ADMIN_SERVICES_REQUEST:
        case ADD_ADMIN_SERVICESIMAGE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ADD_ADMIN_SERVICESHEADER_SUCCESS:
        case ADD_ADMIN_SERVICES_SUCCESS:
        case ADD_ADMIN_SERVICESIMAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            };
        case ADD_ADMIN_SERVICESHEADER_FAIL:
        case ADD_ADMIN_SERVICES_FAIL:
        case ADD_ADMIN_SERVICESIMAGE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case ADD_ADMIN_SERVICESHEADER_RESET:
        case ADD_ADMIN_SERVICES_RESET:
        case ADD_ADMIN_SERVICESIMAGE_RESET:
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

export const ServiceReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_ADMIN_SERVICESIMAGE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case UPDATE_ADMIN_SERVICESIMAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            }
        case UPDATE_ADMIN_SERVICESIMAGE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case UPDATE_ADMIN_SERVICESIMAGE_RESET:
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