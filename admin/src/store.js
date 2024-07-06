import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { homeReducer, homeServiceReducer, newHomeData } from './Reducers/HomeReducer';
import { aboutReducer, aboutValuesReducer, newAboutData } from './Reducers/AboutReducer';
import { grievanceReducer, newGrievanceData } from './Reducers/GrievanceReducer';
import { newServicesData, ServiceReducer, servicesReducer } from './Reducers/ServicesReducer';
import { governingReducer, newGoverningData } from './Reducers/GoverningReducer';
import { GalleryReducer, galleryReducer, newGalleryData } from './Reducers/GalleryReducer';
import { contactReducer, newContactData } from './Reducers/ContactReducer';


const reducer = combineReducers({
    adminHome: homeReducer,
    newHomeData: newHomeData,
    homeService: homeServiceReducer,
    adminAbout: aboutReducer,
    adminGrievance: grievanceReducer,
    adminServices: servicesReducer,
    adminGoverning: governingReducer,
    adminGallery: galleryReducer,
    adminContact: contactReducer,
    newContactData: newContactData,
    newGoverningData: newGoverningData,
    newGrievanceData: newGrievanceData,
    newAboutData: newAboutData,
    aboutValues: aboutValuesReducer,
    newServicesData: newServicesData,
    Service: ServiceReducer,
    newGalleryData: newGalleryData,
    GalleryReducer: GalleryReducer
})


let initialState = {};

const middlewarwe = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewarwe)));

export default store;