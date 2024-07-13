import { 
    GET_ADMIN_GALLERY_REQUEST,
    GET_ADMIN_GALLERY_SUCCESS,
    GET_ADMIN_GALLERY_FAIL,
    CLEAR_ERRORS,
    ADD_ADMIN_GALLERYHEADER_REQUEST,
    ADD_ADMIN_GALLERYHEADER_SUCCESS,
    ADD_ADMIN_GALLERYHEADER_FAIL,
    ADD_ADMIN_GALLERYHEADER_RESET,
    ADD_ADMIN_GALLERY_BODY_REQUEST,
    ADD_ADMIN_GALLERY_BODY_SUCCESS,
    ADD_ADMIN_GALLERY_BODY_FAIL,
    ADD_ADMIN_GALLERY_BODY_RESET,
    ADD_ADMIN_GALLERY_IMAGE_REQUEST,
    ADD_ADMIN_GALLERY_IMAGE_SUCCESS,
    ADD_ADMIN_GALLERY_IMAGE_FAIL,
    ADD_ADMIN_GALLERY_IMAGE_RESET,
    UPDATE_ADMIN_GALLERY_IMAGE_REQUEST,
    UPDATE_ADMIN_GALLERY_IMAGE_SUCCESS,
    UPDATE_ADMIN_GALLERY_IMAGE_FAIL,
    UPDATE_ADMIN_GALLERY_IMAGE_RESET
} from '../Constants/GalleryConstants';


export const galleryReducer = (state = { gallery: [], galleryImages: [] }, action) => {
    switch (action.type) {
        case GET_ADMIN_GALLERY_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_ADMIN_GALLERY_SUCCESS:
            return {
                ...state,
                loading: false,
                gallery: action.payload.gallery[0],
                galleryImages: action.payload.galleryImages,
            };
        case GET_ADMIN_GALLERY_FAIL:
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


export const newGalleryData = (state = { gallery: {} }, action) => {
    switch (action.type) {
        case ADD_ADMIN_GALLERYHEADER_REQUEST:
        case ADD_ADMIN_GALLERY_BODY_REQUEST:
        case ADD_ADMIN_GALLERY_IMAGE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ADD_ADMIN_GALLERYHEADER_SUCCESS:
        case ADD_ADMIN_GALLERY_BODY_SUCCESS:
        case ADD_ADMIN_GALLERY_IMAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            };
        case ADD_ADMIN_GALLERYHEADER_FAIL:
        case ADD_ADMIN_GALLERY_BODY_FAIL:    
        case ADD_ADMIN_GALLERY_IMAGE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case ADD_ADMIN_GALLERYHEADER_RESET:
        case ADD_ADMIN_GALLERY_BODY_RESET:
        case ADD_ADMIN_GALLERY_IMAGE_RESET:
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

export const GalleryReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_ADMIN_GALLERY_IMAGE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case UPDATE_ADMIN_GALLERY_IMAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            }
        case UPDATE_ADMIN_GALLERY_IMAGE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case UPDATE_ADMIN_GALLERY_IMAGE_RESET:
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