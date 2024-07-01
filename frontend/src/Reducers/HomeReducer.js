import {
    GET_HOME_REQUEST,
    GET_HOME_SUCCESS,
    GET_HOME_FAIL,
    CLEAR_ERRORS,
} from '../Constants/HomeConstants';


export const homeReducer = (state = { home: {}, homeCarousel: [] }, action) => {
    switch (action.type) {
        case GET_HOME_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_HOME_SUCCESS:
            return {
                ...state,
                loading: false,
                home: action.payload.home[0],
                homeCarousel: action.payload.homeCarousel,
            };
        case GET_HOME_FAIL:
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