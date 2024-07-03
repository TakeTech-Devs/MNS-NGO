import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { homeReducer, homeServiceReducer, newHomeData } from './Reducers/HomeReducer';


const reducer = combineReducers({
    adminHome: homeReducer,
    newHomeData: newHomeData,
    homeService: homeServiceReducer,
})


let initialState = {};

const middlewarwe = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewarwe)));

export default store;