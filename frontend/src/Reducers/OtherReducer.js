import {
    GET_OTHER_REQUEST,
    GET_OTHER_SUCCESS,
    GET_OTHER_FAIL,
    CLEAR_ERRORS,
} from '../Constants/OtherConstants';
export const otherReducer = (state = { other: [] }, action) => {
    switch (action.type) {
        case GET_OTHER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_OTHER_SUCCESS:
            return {
                ...state,
                loading: false,
                other: action.payload.other[0],
            };
        case GET_OTHER_FAIL:
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