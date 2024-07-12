import { ADD_ADMIN_FAIL, ADD_ADMIN_REQUEST, ADD_ADMIN_RESET, ADD_ADMIN_SUCCESS, CLEAR_ERRORS, GET_ADMINS_FAIL, GET_ADMINS_REQUEST, GET_ADMINS_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "../Constants/AdminConstants";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case ADD_ADMIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
    case ADD_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: null,
      };
    case LOGIN_FAIL:
    case ADD_ADMIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case ADD_ADMIN_RESET:
      return {
        ...state,
        user: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  } 
};

export const adminReducer = (state = { admins: [] }, action) => {
  switch (action.type) {
    case GET_ADMINS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_ADMINS_SUCCESS:
      return {
        ...state,
        loading: false,
        admins: action.payload,
        error: null,
      };
    case GET_ADMINS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};