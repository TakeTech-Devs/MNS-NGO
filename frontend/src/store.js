import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { newCarouselReducer } from './Reducers/CarouselReducer';
import { contactReducer } from './Reducers/ContactReducer';
import { governingReducer } from './Reducers/GoverningBodyReducer';
import { formReducer, grievanceReducer } from './Reducers/GrievanceReducer';
import { servicesReducer } from './Reducers/ServicesReducer';
import { galleryReducer } from './Reducers/GalleryReducer';
import { homeReducer } from './Reducers/HomeReducer';
import { aboutReducer } from './Reducers/AboutUsReducer';
import { touchFormReducer } from './Reducers/FormReducer';
import { otherReducer } from './Reducers/OtherReducer';


const reducer = combineReducers({
   carousel: newCarouselReducer,
   contact: contactReducer,
   governing: governingReducer,
   grievance: grievanceReducer,
   services: servicesReducer,
   gallery: galleryReducer,
   home: homeReducer,
   about: aboutReducer,
   form: formReducer,
   touchForm: touchFormReducer,
   other: otherReducer,
});


let initialState = {};

const middlewarwe = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewarwe)));

export default store;