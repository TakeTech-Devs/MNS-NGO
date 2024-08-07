import {
    GET_ADMIN_OTHER_REQUEST,
    GET_ADMIN_OTHER_SUCCESS,
    GET_ADMIN_OTHER_FAIL,
    CLEAR_ERRORS,
    ADD_POLICY_REQUEST,
    ADD_POLICY_SUCCESS,
    ADD_POLICY_FAIL,
    ADD_POLICY_RESET,
    ADD_TERMS_REQUEST,
    ADD_TERMS_SUCCESS,
    ADD_TERMS_FAIL,
    ADD_TERMS_RESET,
    ADD_METADATA_REQUEST,
    ADD_METADATA_SUCCESS,
    ADD_METADATA_FAIL,
    ADD_METADATA_RESET,
    ADD_SOCIAL_REQUEST,
    ADD_SOCIAL_SUCCESS,
    ADD_SOCIAL_FAIL,
    ADD_SOCIAL_RESET,
    GET_ADMIN_ANNOUNCEMENT_REQUEST,
    GET_ADMIN_ANNOUNCEMENT_SUCCESS,
    GET_ADMIN_ANNOUNCEMENT_FAIL,
    ADD_ADMIN_ANNOUNCEMENT_REQUEST,
    ADD_ADMIN_ANNOUNCEMENT_SUCCESS,
    ADD_ADMIN_ANNOUNCEMENT_FAIL,
    ADD_ADMIN_ANNOUNCEMENT_RESET,
    SHOW_ANNOUNCEMENT_REQUEST,
    SHOW_ANNOUNCEMENT_SUCCESS,
    SHOW_ANNOUNCEMENT_FAIL,
    SHOW_ANNOUNCEMENT_RESET,
} from '../Constants/OtherConstants';
export const otherReducer = (state = { other: [] }, action) => {
    switch (action.type) {
        case GET_ADMIN_OTHER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_ADMIN_OTHER_SUCCESS:
            return {
                ...state,
                loading: false,
                other: action.payload.other[0],
            };
        case GET_ADMIN_OTHER_FAIL:
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

export const newData = (state = { policy: {}, terms: {}, meta: {}, social: {}, announcement: {} }, action) => {
    switch (action.type) {
        case ADD_POLICY_REQUEST:
        case ADD_TERMS_REQUEST:
        case ADD_METADATA_REQUEST:
        case ADD_SOCIAL_REQUEST:
        case ADD_ADMIN_ANNOUNCEMENT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ADD_POLICY_SUCCESS:    
        case ADD_TERMS_SUCCESS:
        case ADD_METADATA_SUCCESS:
        case ADD_SOCIAL_SUCCESS:
        case ADD_ADMIN_ANNOUNCEMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            };
        case ADD_POLICY_FAIL:
        case ADD_TERMS_FAIL:
        case ADD_METADATA_FAIL:
        case ADD_SOCIAL_FAIL:
        case ADD_ADMIN_ANNOUNCEMENT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case ADD_POLICY_RESET:
        case ADD_TERMS_RESET:
        case ADD_METADATA_RESET:
        case ADD_SOCIAL_RESET:
        case ADD_ADMIN_ANNOUNCEMENT_RESET:
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

export const announcementReducer = (state = { announcement: [] }, action) => {
    switch (action.type) {
        case GET_ADMIN_ANNOUNCEMENT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_ADMIN_ANNOUNCEMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                announcement: action.payload.announcement[0],
            };
        case GET_ADMIN_ANNOUNCEMENT_FAIL:
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

export const newAnnouncement = (state = {}, action) => {
    switch (action.type) {
        case SHOW_ANNOUNCEMENT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case SHOW_ANNOUNCEMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            };
        case SHOW_ANNOUNCEMENT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case SHOW_ANNOUNCEMENT_RESET:
            return {
                ...state,
                isAnnouncement: false,
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