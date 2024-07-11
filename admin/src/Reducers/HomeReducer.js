import {
    GET_ADMIN_HOME_REQUEST,
    GET_ADMIN_HOME_SUCCESS,
    GET_ADMIN_HOME_FAIL,
    ADD_HOMEHEADER_HOME_REQUEST,
    ADD_HOMEHEADER_HOME_SUCCESS,
    ADD_HOMEHEADER_HOME_FAIL,
    ADD_HOMEHEADER_HOME_RESET,
    ADD_HIGHTLIGHT_HOME_REQUEST,
    ADD_HIGHTLIGHT_HOME_SUCCESS,
    ADD_HIGHTLIGHT_HOME_FAIL,
    ADD_HIGHTLIGHT_HOME_RESET,
    CLEAR_ERRORS,
    ADD_ABOUT_HOME_REQUEST,
    ADD_ABOUT_HOME_SUCCESS,
    ADD_ABOUT_HOME_FAIL,
    ADD_ABOUT_HOME_RESET,
    ADD_VISION_HOME_REQUEST,
    ADD_VISION_HOME_SUCCESS,
    ADD_VISION_HOME_FAIL,
    ADD_VISION_HOME_RESET,
    ADD_JOINUS_HOME_REQUEST,
    ADD_JOINUS_HOME_SUCCESS,
    ADD_JOINUS_HOME_FAIL,
    ADD_JOINUS_HOME_RESET,
    ADD_SERVICE_HOME_REQUEST,
    ADD_SERVICE_HOME_SUCCESS,
    ADD_SERVICE_HOME_FAIL,
    ADD_SERVICE_HOME_RESET,
    UPDATE_SERVICE_HOME_REQUEST,
    UPDATE_SERVICE_HOME_SUCCESS,
    UPDATE_SERVICE_HOME_FAIL,
    UPDATE_SERVICE_HOME_RESET,
    ADD_SERVICEHEAD_HOME_REQUEST,
    ADD_SERVICEHEAD_HOME_SUCCESS,
    ADD_SERVICEHEAD_HOME_FAIL,
    ADD_SERVICEHEAD_HOME_RESET,
    UPDATE_BRAND_HOME_REQUEST,
    UPDATE_BRAND_HOME_SUCCESS,
    UPDATE_BRAND_HOME_FAIL,
    UPDATE_BRAND_HOME_RESET,
    DELETE_BRAND_HOME_REQUEST,
    DELETE_BRAND_HOME_SUCCESS,
    DELETE_BRAND_HOME_FAIL,
    DELETE_BRAND_HOME_RESET,
    ADD_BRAND_HOME_REQUEST,
    ADD_BRAND_HOME_SUCCESS,
    ADD_BRAND_HOME_FAIL,
    ADD_BRAND_HOME_RESET,
} from '../Constants/HomeConstants';


export const homeReducer = (state = { home: {}, homeCarousel: [], brand: [] }, action) => {
    switch (action.type) {
        case GET_ADMIN_HOME_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_ADMIN_HOME_SUCCESS:
            return {
                ...state,
                loading: false,
                home: action.payload.home[0],
                homeCarousel: action.payload.homeCarousel,
                brand: action.payload.brand,
            };
        case GET_ADMIN_HOME_FAIL:
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

export const newHomeData = (state = { highlight: {}, carouselSection: {}, about: {}, serviceHead:{}, service: {}, vision: {}, joinUs: {} }, action) => {
    switch (action.type) {
        case ADD_HOMEHEADER_HOME_REQUEST:
        case ADD_HIGHTLIGHT_HOME_REQUEST:
        case ADD_ABOUT_HOME_REQUEST:
        case ADD_SERVICEHEAD_HOME_REQUEST:
        case ADD_SERVICE_HOME_REQUEST:
        case ADD_VISION_HOME_REQUEST:
        case ADD_JOINUS_HOME_REQUEST:
        case ADD_BRAND_HOME_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ADD_HOMEHEADER_HOME_SUCCESS:
        case ADD_HIGHTLIGHT_HOME_SUCCESS:
        case ADD_ABOUT_HOME_SUCCESS:
        case ADD_SERVICEHEAD_HOME_SUCCESS:
        case ADD_SERVICE_HOME_SUCCESS:
        case ADD_VISION_HOME_SUCCESS:
        case ADD_JOINUS_HOME_SUCCESS:
        case ADD_BRAND_HOME_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            };
        case ADD_HOMEHEADER_HOME_FAIL:
        case ADD_HIGHTLIGHT_HOME_FAIL:
        case ADD_ABOUT_HOME_FAIL:
        case ADD_SERVICEHEAD_HOME_FAIL:
        case ADD_SERVICE_HOME_FAIL:
        case ADD_VISION_HOME_FAIL:
        case ADD_JOINUS_HOME_FAIL:
        case ADD_BRAND_HOME_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case ADD_HOMEHEADER_HOME_RESET:
        case ADD_HIGHTLIGHT_HOME_RESET:
        case ADD_ABOUT_HOME_RESET:
        case ADD_SERVICEHEAD_HOME_RESET: 
        case ADD_SERVICE_HOME_RESET:
        case ADD_VISION_HOME_RESET:
        case ADD_JOINUS_HOME_RESET:
        case ADD_BRAND_HOME_RESET:
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

export const homeServiceReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_SERVICE_HOME_REQUEST:
        case UPDATE_BRAND_HOME_REQUEST:
        case DELETE_BRAND_HOME_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case UPDATE_SERVICE_HOME_SUCCESS:
        case UPDATE_BRAND_HOME_SUCCESS:
        case DELETE_BRAND_HOME_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            }
        case UPDATE_SERVICE_HOME_FAIL:
        case UPDATE_BRAND_HOME_FAIL:
        case DELETE_BRAND_HOME_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case UPDATE_SERVICE_HOME_RESET:
        case UPDATE_BRAND_HOME_RESET:
        case DELETE_BRAND_HOME_RESET:
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