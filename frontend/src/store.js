import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { newCarouselReducer } from './Reducers/CarouselReducer';
import { contactReducer } from './Reducers/ContactReducer';
import { governingReducer } from './Reducers/GoverningBodyReducer';
import { grievanceReducer } from './Reducers/GrievanceReducer';
import { servicesReducer } from './Reducers/ServicesReducer';
import { galleryReducer } from './Reducers/GalleryReducer';


const reducer = combineReducers({
   carousel: newCarouselReducer,
   contact: contactReducer,
   governing: governingReducer,
   grievance: grievanceReducer,
   services: servicesReducer,
   gallery: galleryReducer,
});


let initialState = {};

const middlewarwe = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewarwe)));

export default store;