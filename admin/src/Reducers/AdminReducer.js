import { ADD_ADMIN_FAIL, ADD_ADMIN_REQUEST, ADD_ADMIN_RESET, ADD_ADMIN_SUCCESS, CLEAR_ERRORS, GET_ADMINS_FAIL, GET_ADMINS_REQUEST, GET_ADMINS_SUCCESS, LOAD_ADMIN_FAIL, LOAD_ADMIN_REQUEST, LOAD_ADMIN_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_SUCCESS } from "../Constants/AdminConstants";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_ADMIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: null,
      };
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

const initialState = {
  user: null,
  loading: false,
  isAuthenticated: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case LOAD_ADMIN_REQUEST:
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
      };
    case LOGIN_SUCCESS:
    case LOAD_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGOUT_SUCCESS:
      return {
        loading: false,
        user: null,
        isAuthenticated: false,
      };
    case LOGIN_FAIL:
    case LOAD_ADMIN_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
