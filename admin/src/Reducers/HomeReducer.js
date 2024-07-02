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
} from '../Constants/HomeConstants';


export const homeReducer = (state = { home: {}, homeCarousel: [] }, action) => {
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

export const newHomeData = (state = { highlight: {}, carouselSection: {} }, action) => {
    switch (action.type) {
        case ADD_HOMEHEADER_HOME_REQUEST:
        case ADD_HIGHTLIGHT_HOME_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ADD_HOMEHEADER_HOME_SUCCESS:
        case ADD_HIGHTLIGHT_HOME_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            };
        case ADD_HOMEHEADER_HOME_FAIL: 
        case ADD_HIGHTLIGHT_HOME_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case ADD_HOMEHEADER_HOME_RESET:
        case ADD_HIGHTLIGHT_HOME_RESET:
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