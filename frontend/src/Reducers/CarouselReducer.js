import {
    NEW_CAROUSEL_REQUEST,
    NEW_CAROUSEL_SUCCESS,
    NEW_CAROUSEL_FAIL,
    CLEAR_ERROR,
} from '../Constants/CarouselConstants';


export const newCarouselReducer = (state = { carousel: {} }, action) => {
    switch (action.type) {
        case NEW_CAROUSEL_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case NEW_CAROUSEL_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                carousel: action.payload.carousel,
            };
        case NEW_CAROUSEL_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case CLEAR_ERROR:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    };
};