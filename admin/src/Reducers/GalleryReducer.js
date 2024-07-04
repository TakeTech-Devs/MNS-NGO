import { 
    GET_ADMIN_GALLERY_REQUEST,
    GET_ADMIN_GALLERY_SUCCESS,
    GET_ADMIN_GALLERY_FAIL,
    CLEAR_ERRORS
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
                gallery: action.payload.gallery,
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
