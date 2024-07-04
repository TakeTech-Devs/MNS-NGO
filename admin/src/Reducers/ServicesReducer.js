import { 
    GET_ADMIN_SERVICES_REQUEST,
    GET_ADMIN_SERVICES_SUCCESS,
    GET_ADMIN_SERVICES_FAIL,
    CLEAR_ERRORS,
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
                services: action.payload.services,
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