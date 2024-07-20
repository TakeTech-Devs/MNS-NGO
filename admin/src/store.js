import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { homeReducer, homeServiceReducer, newHomeData } from './Reducers/HomeReducer';
import { aboutReducer, aboutValuesReducer, newAboutData } from './Reducers/AboutReducer';
import { grievanceFormReducer, grievanceReducer, grievanceRequestReducer, newGrievanceData } from './Reducers/GrievanceReducer';
import { newServicesData, ServiceReducer, servicesReducer } from './Reducers/ServicesReducer';
import { governingReducer, newGoverningData } from './Reducers/GoverningReducer';
import { GalleryReducer, galleryReducer, newGalleryData } from './Reducers/GalleryReducer';
import { contactReducer, newContactData } from './Reducers/ContactReducer';
import { formReducer } from './Reducers/FormReducer';
import { adminReducer, authReducer, userReducer } from './Reducers/AdminReducer';
import { newData, otherReducer } from './Reducers/OtherReducer';


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
    GalleryReducer: GalleryReducer,
    formReducer: formReducer,
    grievanceForm: grievanceFormReducer,
    grievanceRequest: grievanceRequestReducer,
    admin: authReducer,
    admins: adminReducer,
    user: userReducer,
    other: otherReducer,
    newOther: newData,
})


let initialState = {};

const middlewarwe = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewarwe)));

export default store;