import {
    GET_OTHER_REQUEST,
    GET_OTHER_SUCCESS,
    GET_OTHER_FAIL,
    CLEAR_ERRORS,
    GET_ANNOUNCEMENT_REQUEST,
    GET_ANNOUNCEMENT_SUCCESS,
    GET_ANNOUNCEMENT_FAIL,
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

export const announcementReducer = (state = { announcement: [] }, action) => {
    switch (action.type) {
        case GET_ANNOUNCEMENT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_ANNOUNCEMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                announcement: action.payload.announcement[0],
            };
        case GET_ANNOUNCEMENT_FAIL:
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